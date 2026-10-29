import { randomUUID } from 'node:crypto';

// you have to require the utils module and call adapter function
import { Adapter, type AdapterOptions } from '@iobroker/adapter-core'; // Get common adapter utils
import * as later from 'later';
import SunCalc from 'suncalc2';

import * as timeUtils from './lib/utils';
import type { AstroName } from './lib/utils';
import { conditionText, hasCondition, isConditionMet, type EventCondition } from './lib/condition';
import { parseRecurrence, recurrenceToCron } from './lib/recurrence';
import {
    occurrencesOf,
    parseCron,
    parseDelaySeconds,
    parseTime,
    show,
    startOfDay,
    textOf,
    toEventInfo,
    toOccurrence,
    type EventInfo,
    type Occurrence,
} from './lib/agenda';

const adapterName = require('../package.json').name.split('.').pop();

/** `native` part of a calendar event, as stored in the objects DB */
export interface EventNative {
    id?: number;
    /** cron expression with optional leading seconds field; absent for one-shot events */
    cron?: string;
    /** name of the astro time the event is bound to */
    astro?: AstroName;
    /** offset in minutes, applied to the astro time */
    offset?: number;
    /** ISO local time (`2017-09-12T12:12:00`) for one-shot events */
    start?: string;
    type?: 'single' | 'double' | 'toggle';
    /** object ID the event writes to */
    oid: string;
    startValue: ioBroker.StateValue;
    intervals?: { value?: ioBroker.StateValue; timeOffset?: number | string }[];
    /** random jitter in ms, applied symmetrically around the calculated time */
    timeRandomOffset?: number;
    states?: Record<string, string>;
    /** the event writes only, if this condition is met at that time */
    condition?: EventCondition;
}

/** A calendar event object, plus the bookkeeping the runtime attaches to it */
export interface FullCalendarEvent extends ioBroker.ScheduleObject {
    native: EventNative;
    /** cached result of `later.parse.cron()` */
    parsed?: later.ScheduleData;
    timer?: ioBroker.Timeout;
    lastExec?: number;
    /** a one-shot event whose time has passed: skipped by the scheduler, still part of today's agenda */
    expired?: boolean;
    /** set while a simulation is played back */
    simulationStart?: Date | null;
    simulationEnd?: Date | null;
    simulationDow?: number[];
}

export type SimulationStatus = 'record' | 'stop' | 'pause' | 'play';

export interface SimulationNative {
    interval: 'day' | 'week';
    record: {
        start: string;
        end: string;
        states: string[];
        enums?: string[][];
        enumsExceptions: string[];
    };
    play?: {
        start?: string;
        end?: string;
        dow?: number[];
    };
    events: FullCalendarEvent[];
}

/** A simulation object, plus the bookkeeping the runtime attaches to it */
export interface SimulationObject extends ioBroker.StateObject {
    native: SimulationNative;
    /** current status, mirrored from the simulation's own state */
    value?: SimulationStatus;
    /** flattened list of all states the simulation records */
    allStates: string[];
}

const IGNORE_STATES = [
    'COMBINED_PARAMETER',
    'ON_TIME',
    'DURATION',
    'DURATION_VALUE',
    'RAMP_TIME_UNIT',
    'PRESENCE_DETECTION_ACTIVE',
    'PRESENCE_DETECTION',
    'RESET_PRESENCE',
    'RAMP_TIME_VALUE',
    'DURATION_UNIT',
    'MOTION_DETECTION_ACTIVE',
    'RESET_MOTION',
];

// const YYYY_MM_            = 'YYYY_MM_'.length;
const YYYY_MM_DDTHH_mm = 'YYYY_MM_DDTHH_mm'.length;
const YYYY_MM_DDTHH_mm_ss = 'YYYY_MM_DDTHH_mm_ss'.length;
// const DDTHH_mm_ss         = 'DDTHH_mm_ss'.length;

/** Upper bound for `getObjectView` range queries */
const MAX_KEY = '\u9999';

/** The messages of the adapter, the answer of `getCommands` and the reference in the README */
const COMMANDS: { command: string; params: string; answer: string }[] = [
    {
        command: 'addEvent',
        params:
            'oid, value, start (local time "2026-10-29T07:30" or ms) or in (delay: seconds, "90s", "30m", "2h"); ' +
            'optional: duration or durationSec (then type "double", endValue default: opposite of a boolean value), ' +
            'type ("single", "double", "toggle"), endValue, recurring ("daily", "weekly", "monthly", "yearly") ' +
            'with weekdays (0 = Sunday or "MO"\u2026), monthDays, months, or rrule ("FREQ=YEARLY", "FREQ=WEEKLY;BYDAY=MO,FR"), ' +
            'name, calendar (name or ID), color',
        answer: '{id, name, type, start, ts, cron?}: start/ts = first execution',
    },
    {
        command: 'updateEvent',
        params:
            'id, and every parameter of addEvent to change (the others stay): start or in moves a one-shot event, ' +
            'of a series it changes the time of day; recurring/rrule make it a series, recurring: false (with start ' +
            'or in) a one-shot event; enabled; calendar moves it (new id)',
        answer: '{id, name, type, enabled, start, ts, cron?}: start/ts = next execution, null if none',
    },
    {
        command: 'deleteEvent',
        params: 'id, ids (a list) and/or name (all events with this name), optional calendar for name',
        answer: '{result: "ok", deleted: [id\u2026], notFound?: [id\u2026]}',
    },
    { command: 'getEvent', params: 'id', answer: '{event: definition}' },
    { command: 'getEvents', params: 'optional calendar', answer: '{events: [definition\u2026]}' },
    {
        command: 'listEvents',
        params: 'optional from, to (default now \u2026 7 days, or days), calendar, max',
        answer: '{events: [execution\u2026]}',
    },
    { command: 'getCalendars', params: '-', answer: '{calendars: [{id, name, enabled}\u2026]}' },
    { command: 'enableCalendar', params: 'calendar (name or ID), enabled', answer: '{id, enabled}' },
    { command: 'getCommands', params: '-', answer: '{commands: [{command, params, answer}\u2026]}' },
];

/** A message parameter is given (not undefined, null or '') */
function isGiven(value: unknown): boolean {
    return value !== undefined && value !== null && value !== '';
}

function stopEvent(adapter: Fullcalendar, event: FullCalendarEvent): void {
    if (event.timer) {
        adapter.clearTimeout(event.timer);
        event.timer = undefined;
    }
}

function checkEvent(event: FullCalendarEvent): FullCalendarEvent {
    if (event.native.start) {
        if (event.native.start.length === YYYY_MM_DDTHH_mm) {
            event.native.start += ':00';
        } else if (event.native.start.length > YYYY_MM_DDTHH_mm_ss) {
            event.native.start = event.native.start.substring(0, YYYY_MM_DDTHH_mm_ss);
        }
    }

    return event;
}

function getObjectIcon(idOrObj: string | ioBroker.Object, obj?: ioBroker.Object | null): string | null {
    let id: string;
    // If id is Object
    if (typeof idOrObj === 'object') {
        obj = idOrObj;
        id = obj._id;
    } else {
        id = idOrObj;
    }

    if (obj?.common?.icon) {
        let icon = obj.common.icon;
        // If UTF-8 icon
        if (typeof icon === 'string' && icon.length <= 2) {
            return icon;
        } else if (icon.startsWith('data:image')) {
            return icon;
        }
        const parts = id.split('.');
        if (parts[0] === 'system') {
            icon = `adapter/${parts[2]}${icon.startsWith('/') ? '' : '/'}${icon}`;
        } else {
            icon = `adapter/${parts[0]}${icon.startsWith('/') ? '' : '/'}${icon}`;
        }

        return `../../${icon}`;
    }

    return null;
}

function buildOverlap(
    enumIds: string[],
    enumObjs: Record<string, ioBroker.EnumObject>,
    enumsExceptions: string[],
): string[] {
    // const states = selectedEnums.map(id => objects[id]?.common?.members);
    const groups: Record<string, string[]> = {};
    enumIds.forEach(enumId => {
        const parts = enumId.split('.');
        const categoryType = parts[1];
        groups[categoryType] = groups[categoryType] || [];
        if (enumObjs[enumId]) {
            enumObjs[enumId].common?.members?.forEach(
                id =>
                    !enumsExceptions.includes(id) &&
                    !groups[categoryType].includes(id) &&
                    groups[categoryType].push(id),
            );
        }
    });

    let intersection: string[] = [];
    Object.keys(groups).forEach((groupId, i) => {
        const group = groups[groupId];
        if (i) {
            intersection = intersection.filter(j => group.includes(j));
        } else {
            intersection = group;
        }
    });

    // filter out duplicates
    return intersection.filter((v, i) => intersection.indexOf(v) === i);
}

export class Fullcalendar extends Adapter {
    private events: Record<string, FullCalendarEvent> = {};

    private nextTimer: ioBroker.Timeout | undefined;

    /** cached `system.config` object (`systemConfig` is taken by the base class) */
    private sysConfig!: ioBroker.SystemConfigObject;

    /** cached own `system.adapter.*` object (`adapterConfig` is taken by the base class) */
    private instanceConfig!: ioBroker.InstanceObject;

    private timeZoneInterval: ioBroker.Interval | undefined;

    private updateInterval: ioBroker.Interval | undefined;

    /** system language (`language` is taken by the base class) */
    private lang: ioBroker.Languages = 'en';

    private readonly names: Record<string, string> = {};

    private rooms: Record<string, ioBroker.EnumObject> = {};

    private funcs: Record<string, ioBroker.EnumObject> = {};

    private readonly recordingSimulations: Record<string, SimulationObject> = {};

    /** cached enum objects (`enums` is taken by the base class) */
    private readonly enumObjs: Record<string, ioBroker.EnumObject> = {};

    private readonly subscribed: string[] = [];

    private readonly stateObjs: Record<string, ioBroker.Object | null> = {};

    private readonly imageCache: Record<string, string | null> = {};

    private readonly lastEvent: Record<string, { id: string; value: ioBroker.StateValue; ts: number }> = {};

    /** object IDs of the calendars switched off (`common.enabled === false` of the calendar folder) */
    private readonly disabledCalendars = new Set<string>();

    /** debounce of the agenda states */
    private agendaTimer: ioBroker.Timeout | undefined;

    /** re-renders the agenda at midnight: "today" and "tomorrow" move on */
    private midnightTimer: ioBroker.Timeout | undefined;

    /** set at the end of `onReady`: before, the events are not read yet and the agenda would come out empty */
    private agendaReady = false;

    public constructor(options: Partial<AdapterOptions> = {}) {
        super({
            ...options,
            name: adapterName,
        });

        this.on('ready', this.onReady.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
        this.on('objectChange', this.onObjectChange.bind(this));
        this.on('message', this.onMessage.bind(this));
        this.on('unload', this.onUnload.bind(this));
    }

    private resolveAstro = (astro: AstroName, offset: number | undefined, date: Date): Date | null =>
        timeUtils.getAstroTime(astro, offset, date, SunCalc, this.sysConfig, this.instanceConfig);

    /** The events of the calendars, without the events of simulations */
    private calendarEvents(): FullCalendarEvent[] {
        const simulations = `${this.namespace}.Simulations.`;
        return Object.values(this.events).filter(
            event => event.type === 'schedule' && !event._id.startsWith(simulations) && !!event.native,
        );
    }

    /** Names of the calendars by object ID (the default calendar is not a folder and not listed) */
    private async readCalendars(): Promise<Record<string, string>> {
        const res = await this.getObjectViewAsync('system', 'folder', {
            startkey: `${this.namespace}.Calendars.`,
            endkey: `${this.namespace}.Calendars.${MAX_KEY}`,
        });
        const names: Record<string, string> = {};
        for (const row of res?.rows || []) {
            names[row.id] = textOf(row.value?.common?.name, this.lang) || row.id.split('.').pop()!;
        }
        return names;
    }

    /** Object ID of the calendar an event belongs to */
    private calendarIdOf(eventId: string): string {
        return eventId.substring(0, eventId.lastIndexOf('.'));
    }

    /** An event is executed, if it and its calendar are enabled */
    private isActive(event: FullCalendarEvent): boolean {
        return !!event.common.enabled && !this.disabledCalendars.has(this.calendarIdOf(event._id));
    }

    /** Remember whether a calendar folder is switched off */
    private updateCalendarState(id: string, obj: ioBroker.Object | null | undefined): void {
        if (obj?.type === 'folder' && (obj.common as { enabled?: boolean }).enabled === false) {
            this.disabledCalendars.add(id);
        } else {
            this.disabledCalendars.delete(id);
        }
    }

    /**
     * Switch a calendar on or off: its events stay, but are not executed
     *
     * @param params the message
     */
    private async enableCalendar(params: Record<string, unknown>): Promise<{ id: string; enabled: boolean }> {
        const id = this.findCalendar(params.calendar, await this.readCalendars());
        if (id === this.namespace) {
            throw new Error('The default calendar cannot be switched off');
        }
        const enabled = params.enabled !== false && params.enabled !== 'false' && params.enabled !== 0;
        await this.extendForeignObjectAsync(id, { common: { enabled } });
        this.log.info(`Calendar "${id}" ${enabled ? 'enabled' : 'disabled'}`);
        return { id, enabled };
    }

    /** Name of the calendar of an event, '' = the default calendar */
    private calendarNameOf(eventId: string, names: Record<string, string>): string {
        const calendarId = this.calendarIdOf(eventId);
        return calendarId === this.namespace ? '' : names[calendarId] || calendarId.split('.').pop()!;
    }

    /**
     * A calendar given by ID or name. Empty, "default" or the instance = the default calendar.
     *
     * @param calendar ID or name
     * @param names names of the calendars by ID
     */
    private findCalendar(calendar: unknown, names: Record<string, string>): string {
        if (calendar === undefined || calendar === null || calendar === '') {
            return this.namespace;
        }
        const text = show(calendar).trim();
        if (text === this.namespace || text.toLowerCase() === 'default') {
            return this.namespace;
        }
        if (names[text]) {
            return text;
        }
        const byName = Object.keys(names).find(id => names[id].toLowerCase() === text.toLowerCase());
        if (byName) {
            return byName;
        }
        const known = Object.values(names);
        throw new Error(`Unknown calendar "${text}"${known.length ? `, known: ${known.join(', ')}` : ''}`);
    }

    /**
     * Definitions and occurrences of all calendar events around `now`.
     *
     * @param now the current time
     * @param names names of the calendars by ID
     */
    private collectAgenda(
        now: Date,
        names: Record<string, string>,
    ): { list: EventInfo[]; today: Occurrence[]; tomorrow: Occurrence[]; next: Occurrence | null } {
        const today = startOfDay(now);
        const tomorrow = startOfDay(now, 1);
        const dayAfter = startOfDay(now, 2);
        const yearAhead = new Date(now.getTime() + 366 * 24 * 3600_000);
        const list: EventInfo[] = [];
        const todayList: Occurrence[] = [];
        const tomorrowList: Occurrence[] = [];
        let next: Occurrence | null = null;
        for (const event of this.calendarEvents()) {
            const calendar = this.calendarNameOf(event._id, names);
            let nextTime: Date | null = null;
            const active = event.common.enabled !== false && !this.disabledCalendars.has(this.calendarIdOf(event._id));
            if (active) {
                nextTime = occurrencesOf(event, now, yearAhead, this.resolveAstro, 1)[0] || null;
                const end = (day: Date): Date => new Date(day.getTime() - 1);
                for (const time of occurrencesOf(event, today, end(tomorrow), this.resolveAstro)) {
                    todayList.push(toOccurrence(event, time, calendar, this.lang));
                }
                for (const time of occurrencesOf(event, tomorrow, end(dayAfter), this.resolveAstro)) {
                    tomorrowList.push(toOccurrence(event, time, calendar, this.lang));
                }
                if (nextTime && (!next || nextTime.getTime() < next.ts)) {
                    next = toOccurrence(event, nextTime, calendar, this.lang);
                }
            }
            const info = toEventInfo(event, calendar, nextTime, this.lang);
            // an event of a calendar switched off is listed as disabled
            info.enabled = active;
            list.push(info);
        }
        // upcoming first, then the ones without a next execution
        list.sort((a, b) => (a.next || '￿').localeCompare(b.next || '￿') || a.name.localeCompare(b.name));
        todayList.sort((a, b) => a.ts - b.ts);
        tomorrowList.sort((a, b) => a.ts - b.ts);
        return { list, today: todayList, tomorrow: tomorrowList, next };
    }

    /** Render the agenda states soon: many changes in a row (a calendar being edited) make one write */
    private scheduleAgenda(): void {
        if (!this.agendaReady) {
            return;
        }
        if (this.agendaTimer) {
            this.clearTimeout(this.agendaTimer);
        }
        this.agendaTimer = this.setTimeout(() => {
            this.agendaTimer = undefined;
            this.renderAgenda().catch(e => this.log.warn(`Cannot update the agenda: ${e}`));
        }, 300);
    }

    /** Write `events.list/today/tomorrow/next/count`, and plan the update at midnight */
    private async renderAgenda(): Promise<void> {
        const now = new Date();
        const agenda = this.collectAgenda(now, await this.readCalendars());
        await this.setStateChangedAsync('events.list', JSON.stringify(agenda.list), true);
        await this.setStateChangedAsync('events.today', JSON.stringify(agenda.today), true);
        await this.setStateChangedAsync('events.tomorrow', JSON.stringify(agenda.tomorrow), true);
        await this.setStateChangedAsync('events.next', JSON.stringify(agenda.next), true);
        await this.setStateChangedAsync('events.count', agenda.list.length, true);

        if (this.midnightTimer) {
            this.clearTimeout(this.midnightTimer);
        }
        this.midnightTimer = this.setTimeout(
            () => {
                this.midnightTimer = undefined;
                this.scheduleAgenda();
            },
            startOfDay(now, 1).getTime() - now.getTime() + 1000,
        );
    }

    /**
     * Create an event: write `value` to `oid` at `start` (a time) or after `in` (a delay); with `duration`
     * (or `durationSec`) the event writes `endValue` that much later (default for a boolean: the opposite of `value`),
     * with `type: 'toggle'` it switches back. With `recurring` or `rrule` it repeats at the time of day of `start`.
     *
     * @param params the message
     */
    private async addEvent(params: Record<string, unknown>): Promise<{
        id: string;
        name: string;
        type: 'single' | 'double' | 'toggle';
        start: string;
        ts: number;
        cron?: string;
    }> {
        const oid = typeof params.oid === 'string' ? params.oid.trim() : '';
        if (!oid) {
            throw new Error('"oid" is missing');
        }
        if (params.value === undefined) {
            throw new Error('"value" is missing');
        }
        const obj = await this.writableState(oid);

        const recurrence = parseRecurrence(params);
        const time = this.resolveTime(params, !!recurrence);
        if (!time) {
            throw new Error('Give "start" (a time) or "in" (a delay)');
        }
        const action = this.resolveAction(params, params.value as ioBroker.StateValue);
        const type = action.type;

        const calendarId = this.findCalendar(params.calendar, await this.readCalendars());
        const id = `${calendarId}.event-${randomUUID()}`;
        const states = obj.common.states;
        const native: EventNative = {
            id: Date.now(),
            type,
            oid,
            startValue: params.value as ioBroker.StateValue,
        };
        if (recurrence) {
            native.cron = recurrenceToCron(recurrence, time);
        } else {
            native.start = timeUtils.toLocalTime(time);
        }
        if (states && typeof states === 'object' && !Array.isArray(states)) {
            native.states = states;
        }
        if (action.intervals) {
            native.intervals = action.intervals;
        }

        const first = this.firstExecution(id, native);
        const name =
            typeof params.name === 'string' && params.name.trim()
                ? params.name.trim()
                : (await this.getStateName(oid)).name;
        await this.setForeignObjectAsync(id, {
            type: 'schedule',
            common: {
                name,
                enabled: true,
                color: typeof params.color === 'string' && params.color ? params.color : '#3A87AD',
                icon: (await this.getImage(obj)) || undefined,
            },
            native,
        } as unknown as ioBroker.SettableObject);
        const start = timeUtils.toLocalTime(first);
        this.log.info(
            `Event "${name}" created: ${oid} = ${show(params.value)} ${native.cron ? `with cron "${native.cron}", next at` : 'at'} ${start}`,
        );
        const result: { id: string; name: string; type: typeof type; start: string; ts: number; cron?: string } = {
            id,
            name,
            type,
            start,
            ts: first.getTime(),
        };
        if (native.cron) {
            result.cron = native.cron;
        }
        return result;
    }

    /** The state an event writes: it must exist and be writable */
    private async writableState(oid: string): Promise<ioBroker.StateObject> {
        const obj = await this.getForeignObjectAsync(oid);
        if (obj?.type !== 'state') {
            throw new Error(`State "${oid}" does not exist`);
        }
        if (obj.common.write === false) {
            throw new Error(`State "${oid}" is read-only`);
        }
        return obj;
    }

    /**
     * The time of `start` or `in`, null if neither is given. A one-shot time must not be in the past, "07:30" means
     * the next 07:30 then. A series may start in the past (a birthday): it runs at its next date.
     *
     * @param params the message
     * @param recurring the event is a series
     */
    private resolveTime(params: Record<string, unknown>, recurring: boolean): Date | null {
        let time: Date | null;
        if (isGiven(params.start)) {
            time = parseTime(params.start);
            if (!time) {
                throw new Error(`Cannot understand the time "${show(params.start)}"`);
            }
            if (
                !recurring &&
                typeof params.start === 'string' &&
                /^\d{1,2}:\d{2}(:\d{2})?$/.test(params.start.trim()) &&
                time.getTime() < Date.now() - 1000
            ) {
                time = new Date(
                    time.getFullYear(),
                    time.getMonth(),
                    time.getDate() + 1,
                    time.getHours(),
                    time.getMinutes(),
                    time.getSeconds(),
                );
            }
        } else if (isGiven(params.in)) {
            const seconds = parseDelaySeconds(params.in);
            if (seconds === null) {
                throw new Error(`Cannot understand the delay "${show(params.in)}"`);
            }
            time = new Date(Date.now() + seconds * 1000);
        } else {
            return null;
        }
        // the scheduler compares whole seconds
        time = new Date(Math.round(time.getTime() / 1000) * 1000);
        if (!recurring && time.getTime() < Date.now() - 1000) {
            throw new Error(`The time ${timeUtils.toLocalTime(time)} is in the past`);
        }
        return time;
    }

    /**
     * What an event does: `type` and the second write (`intervals`) from `type`, `duration` (or `durationSec`, the name
     * in `events.list`) and `endValue`. Missing parameters are taken from `current` (an existing event).
     *
     * @param params the message
     * @param value the value the event writes first
     * @param current the event before the change
     * @param current.native the settings of the event before the change
     */
    private resolveAction(
        params: Record<string, unknown>,
        value: ioBroker.StateValue,
        current?: { native: EventNative },
    ): { type: 'single' | 'double' | 'toggle'; intervals?: EventNative['intervals'] } {
        const old = current?.native;
        const oldType = old?.type || 'single';
        const oldOffset = parseInt(String(old?.intervals?.[0]?.timeOffset || 0), 10);
        const durationParam = isGiven(params.duration) ? params.duration : params.durationSec;
        const durationGiven = isGiven(durationParam);
        // the scheduler takes 1 second, if an old event has no duration stored
        let duration: number | null = old && oldType !== 'single' ? (oldOffset || 1000) / 1000 : null;
        if (durationGiven) {
            duration = parseDelaySeconds(durationParam);
            if (!duration) {
                throw new Error(`Cannot understand the duration "${show(durationParam)}"`);
            }
        }
        let type: unknown;
        if (isGiven(params.type)) {
            type = params.type;
        } else if (durationGiven) {
            type = oldType === 'toggle' ? 'toggle' : 'double';
        } else {
            type = old ? oldType : duration ? 'double' : 'single';
        }
        if (type !== 'single' && type !== 'double' && type !== 'toggle') {
            throw new Error(`Unknown type "${show(type)}" (single, double or toggle)`);
        }
        if (type === 'single' && !durationGiven) {
            // switched to "single": the old duration is dropped
            duration = null;
        }
        if (type !== 'single' && !duration) {
            throw new Error(`Type "${type}" needs "duration" (seconds, or "90s", "5m", "1h")`);
        }
        if (type === 'single' && duration) {
            throw new Error('"duration" needs the type "double" or "toggle"');
        }
        if (type === 'single') {
            return { type };
        }
        const timeOffset = Math.round(duration! * 1000);
        if (type === 'toggle') {
            return { type, intervals: [{ timeOffset }] };
        }
        let endValue = params.endValue as ioBroker.StateValue | undefined;
        if (endValue === undefined && oldType === 'double' && old?.intervals?.[0]?.value !== undefined) {
            endValue = old.intervals[0].value;
            // a boolean event that now switches the other way: its end value follows
            if (
                typeof value === 'boolean' &&
                typeof old.startValue === 'boolean' &&
                value !== old.startValue &&
                endValue === !old.startValue
            ) {
                endValue = !value;
            }
        }
        if (endValue === undefined) {
            if (typeof value !== 'boolean') {
                throw new Error('"endValue" is missing (needed for "duration" unless the value is a boolean)');
            }
            endValue = !value;
        }
        return { type, intervals: [{ value: endValue, timeOffset }] };
    }

    /**
     * The next execution of a series, or the time of a one-shot event
     *
     * @param id ID of the event
     * @param native the event
     */
    private firstExecution(id: string, native: EventNative): Date {
        if (native.cron) {
            // a yearly event on February 29 can be 4 years ahead
            const fiveYears = new Date(Date.now() + 5 * 366 * 24 * 3600_000);
            const next = occurrencesOf(
                { _id: id, common: { enabled: true }, native },
                new Date(),
                fiveYears,
                this.resolveAstro,
                1,
            )[0];
            if (!next) {
                throw new Error(`The recurrence never happens (cron "${native.cron}")`);
            }
            return next;
        }
        const time = native.astro
            ? this.resolveAstro(native.astro, native.offset, timeUtils.parseISOLocal(native.start!))
            : timeUtils.parseISOLocal(native.start!);
        if (!time) {
            throw new Error(`Cannot calculate the time of the event`);
        }
        return time;
    }

    /**
     * Change an event in place: every parameter of `addEvent` can be given, the missing ones stay as they are.
     *
     * - `start` or `in` alone moves a one-shot event; of a series it changes the time of day, the days stay.
     * - `recurring`/`rrule` make it a series (at the time of `start`, or at its current time of day),
     *   `recurring: false` with `start` or `in` makes it a one-shot event again.
     * - `calendar` moves it to another calendar: then it gets a new ID (the answer has it).
     * - `enabled` switches it on or off.
     *
     * @param params the message
     */
    private async updateEvent(params: Record<string, unknown>): Promise<{
        id: string;
        name: string;
        type: 'single' | 'double' | 'toggle';
        enabled: boolean;
        start: string | null;
        ts: number | null;
        cron?: string;
    }> {
        const id = typeof params.id === 'string' ? params.id.trim() : '';
        if (!id) {
            throw new Error('"id" is missing');
        }
        if (!id.startsWith(`${this.namespace}.`) || id.startsWith(`${this.namespace}.Simulations.`)) {
            throw new Error(`"${id}" is no event of ${this.namespace}`);
        }
        const obj = (await this.getForeignObjectAsync(id)) as unknown as FullCalendarEvent | null;
        if (obj?.type !== 'schedule' || !obj.native) {
            throw new Error(`Event "${id}" does not exist`);
        }
        const old = { native: JSON.parse(JSON.stringify(obj.native)) as EventNative };
        const native: EventNative = JSON.parse(JSON.stringify(obj.native));
        const common = { ...obj.common };

        // what it writes
        let stateObj: ioBroker.StateObject | null = null;
        if (isGiven(params.oid)) {
            native.oid = show(params.oid).trim();
            stateObj = await this.writableState(native.oid);
            const states = stateObj.common.states;
            if (states && typeof states === 'object' && !Array.isArray(states)) {
                native.states = states;
            } else {
                delete native.states;
            }
        }
        if (params.value !== undefined) {
            native.startValue = params.value as ioBroker.StateValue;
        }
        if (
            [params.type, params.duration, params.durationSec].some(isGiven) ||
            params.endValue !== undefined ||
            params.value !== undefined
        ) {
            const action = this.resolveAction(params, native.startValue, old);
            native.type = action.type;
            if (action.intervals) {
                native.intervals = action.intervals;
            } else {
                delete native.intervals;
            }
        }

        // when
        const recurrenceGiven = params.recurring !== undefined || isGiven(params.rrule);
        if (recurrenceGiven || isGiven(params.start) || isGiven(params.in)) {
            const recurrence = recurrenceGiven ? parseRecurrence(params) : null;
            const keepSeries = !recurrenceGiven && !!native.cron;
            const time = this.resolveTime(params, !!recurrence || keepSeries);
            if (keepSeries) {
                // a series moved to another time of day: the days stay
                const parts = native.cron!.trim().split(/\s+/);
                const offset = parts.length === 6 ? 1 : 0;
                if (parts.length === 6) {
                    parts[0] = '0';
                }
                parts[offset] = String(time!.getMinutes());
                parts[offset + 1] = String(time!.getHours());
                native.cron = parts.join(' ');
            } else if (recurrence) {
                native.cron = recurrenceToCron(recurrence, time || this.timeOfDay(native));
                delete native.start;
            } else {
                if (!time) {
                    throw new Error('Give "start" (a time) or "in" (a delay) for the one-shot event');
                }
                native.start = timeUtils.toLocalTime(time);
                delete native.cron;
            }
            // a new time replaces an astro time
            delete native.astro;
            delete native.offset;
        }

        if (typeof params.name === 'string' && params.name.trim()) {
            common.name = params.name.trim();
        }
        if (typeof params.color === 'string' && params.color) {
            common.color = params.color;
        }
        if (params.enabled !== undefined) {
            common.enabled = params.enabled !== false && params.enabled !== 'false' && params.enabled !== 0;
        }
        if (stateObj) {
            common.icon = (await this.getImage(stateObj)) || undefined;
        }

        let newId = id;
        if (isGiven(params.calendar)) {
            const calendarId = this.findCalendar(params.calendar, await this.readCalendars());
            if (calendarId !== this.calendarIdOf(id)) {
                newId = `${calendarId}.event-${randomUUID()}`;
            }
        }

        const next = common.enabled ? this.firstExecution(newId, native) : null;
        const event = {
            type: 'schedule',
            common,
            native,
        } as unknown as ioBroker.SettableObject;
        await this.setForeignObjectAsync(newId, event);
        if (newId !== id) {
            await this.delForeignObjectAsync(id);
        }
        const name = textOf(common.name, this.lang);
        this.log.info(`Event "${name}" changed${newId !== id ? ` and moved to ${this.calendarIdOf(newId)}` : ''}`);

        const result: {
            id: string;
            name: string;
            type: 'single' | 'double' | 'toggle';
            enabled: boolean;
            start: string | null;
            ts: number | null;
            cron?: string;
        } = {
            id: newId,
            name,
            type: native.type || 'single',
            enabled: !!common.enabled,
            // a one-shot event in the past has no next execution
            start: next && next.getTime() >= Date.now() - 1000 ? timeUtils.toLocalTime(next) : null,
            ts: next && next.getTime() >= Date.now() - 1000 ? next.getTime() : null,
        };
        if (native.cron) {
            result.cron = native.cron;
        }
        return result;
    }

    /**
     * Time of day of an event today, from its cron or its start
     *
     * @param native the event
     */
    private timeOfDay(native: EventNative): Date {
        const now = new Date();
        if (native.cron) {
            const parts = native.cron.trim().split(/\s+/);
            const offset = parts.length === 6 ? 1 : 0;
            const minutes = parseInt(parts[offset], 10) || 0;
            const hours = parseInt(parts[offset + 1], 10) || 0;
            return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);
        }
        return native.start ? timeUtils.parseISOLocal(native.start) : now;
    }

    /**
     * Delete calendar events by `id`, a list `ids` (or `id` as a list) and/or by `name` (all events with exactly this
     * name, optionally only in `calendar`). Events of simulations live inside the simulation object and are not deleted.
     *
     * @param params the message
     */
    private async deleteEvent(
        params: Record<string, unknown>,
    ): Promise<{ result: 'ok'; deleted: string[]; notFound?: string[] }> {
        const ids: string[] = [];
        const add = (id: unknown): void => {
            const text = typeof id === 'string' ? id.trim() : '';
            if (text && !ids.includes(text)) {
                ids.push(text);
            }
        };
        for (const param of [params.id, params.ids]) {
            if (Array.isArray(param)) {
                param.forEach(add);
            } else {
                add(param);
            }
        }
        if (isGiven(params.name)) {
            const names = await this.readCalendars();
            const calendarId = isGiven(params.calendar) ? this.findCalendar(params.calendar, names) : null;
            const wanted = show(params.name).trim().toLowerCase();
            const matches = this.calendarEvents().filter(
                event =>
                    textOf(event.common.name, this.lang).trim().toLowerCase() === wanted &&
                    (!calendarId || this.calendarIdOf(event._id) === calendarId),
            );
            if (!matches.length) {
                throw new Error(`No event with the name "${show(params.name)}"`);
            }
            matches.forEach(event => add(event._id));
        }
        if (!ids.length) {
            throw new Error('Give "id", "ids" (a list) or "name"');
        }

        const deleted: string[] = [];
        const notFound: string[] = [];
        for (const id of ids) {
            if (!id.startsWith(`${this.namespace}.`) || id.startsWith(`${this.namespace}.Simulations.`)) {
                notFound.push(id);
                continue;
            }
            const obj = await this.getForeignObjectAsync(id);
            if (obj?.type !== 'schedule') {
                notFound.push(id);
                continue;
            }
            await this.delForeignObjectAsync(id);
            this.log.info(`Event "${this.getText(obj)}" deleted`);
            deleted.push(id);
        }
        if (!deleted.length) {
            throw new Error(`No event of ${this.namespace}: ${notFound.join(', ')}`);
        }
        return notFound.length ? { result: 'ok', deleted, notFound } : { result: 'ok', deleted };
    }

    /**
     * The definition of one event, with its next execution
     *
     * @param params the message
     */
    private async getEvent(params: Record<string, unknown>): Promise<{ event: EventInfo }> {
        const id = typeof params.id === 'string' ? params.id.trim() : '';
        if (!id) {
            throw new Error('"id" is missing');
        }
        const event = this.collectAgenda(new Date(), await this.readCalendars()).list.find(info => info.id === id);
        if (!event) {
            throw new Error(`Event "${id}" does not exist`);
        }
        return { event };
    }

    /**
     * Occurrences between `from` (default now) and `to` (default `days` later, default 7), optionally of one calendar
     *
     * @param params the message
     */
    private async listEvents(params: Record<string, unknown>): Promise<{ events: Occurrence[] }> {
        const names = await this.readCalendars();
        const from = (params.from !== undefined && parseTime(params.from)) || new Date();
        const days = typeof params.days === 'number' && params.days > 0 ? params.days : 7;
        const to = (params.to !== undefined && parseTime(params.to)) || new Date(from.getTime() + days * 24 * 3600_000);
        const calendarId =
            params.calendar !== undefined && params.calendar !== '' ? this.findCalendar(params.calendar, names) : null;
        const max = typeof params.max === 'number' && params.max > 0 ? params.max : 100;
        const events: Occurrence[] = [];
        for (const event of this.calendarEvents()) {
            if (
                event.common.enabled === false ||
                this.disabledCalendars.has(this.calendarIdOf(event._id)) ||
                (calendarId && this.calendarIdOf(event._id) !== calendarId)
            ) {
                continue;
            }
            const calendar = this.calendarNameOf(event._id, names);
            for (const time of occurrencesOf(event, from, to, this.resolveAstro, max)) {
                events.push(toOccurrence(event, time, calendar, this.lang));
            }
        }
        events.sort((a, b) => a.ts - b.ts);
        return { events: events.slice(0, max) };
    }

    /** Messages: see `COMMANDS` (also the answer of `getCommands`). Errors come back as {error}. */
    private async onMessage(msg: ioBroker.Message): Promise<void> {
        if (!msg?.command) {
            return;
        }
        const params = (msg.message && typeof msg.message === 'object' ? msg.message : {}) as Record<string, unknown>;
        let result: unknown;
        try {
            switch (msg.command) {
                case 'addEvent':
                    result = await this.addEvent(params);
                    break;
                case 'deleteEvent':
                    result = await this.deleteEvent(params);
                    break;
                case 'getEvent':
                    result = await this.getEvent(params);
                    break;
                case 'updateEvent':
                    result = await this.updateEvent(params);
                    break;
                case 'listEvents':
                    result = await this.listEvents(params);
                    break;
                case 'getEvents': {
                    const names = await this.readCalendars();
                    const calendarId =
                        params.calendar !== undefined && params.calendar !== ''
                            ? this.findCalendar(params.calendar, names)
                            : null;
                    const { list } = this.collectAgenda(new Date(), names);
                    result = {
                        events: calendarId ? list.filter(event => this.calendarIdOf(event.id) === calendarId) : list,
                    };
                    break;
                }
                case 'getCalendars': {
                    const names = await this.readCalendars();
                    result = {
                        calendars: [
                            { id: this.namespace, name: 'Default', enabled: true },
                            ...Object.keys(names).map(id => ({
                                id,
                                name: names[id],
                                enabled: !this.disabledCalendars.has(id),
                            })),
                        ],
                    };
                    break;
                }
                case 'enableCalendar':
                    result = await this.enableCalendar(params);
                    break;
                case 'getCommands':
                    result = { commands: COMMANDS };
                    break;
                default:
                    result = {
                        error: `Unknown command "${msg.command}". Commands: ${COMMANDS.map(c => c.command).join(', ')}`,
                    };
            }
        } catch (e) {
            result = { error: (e as Error).message };
        }
        if (msg.callback) {
            this.sendTo(msg.from, msg.command, result as ioBroker.MessagePayload, msg.callback);
        }
    }

    private t(word: 'ON' | 'OFF'): string {
        if (this.lang === 'de') {
            return word === 'OFF' ? 'AUS' : 'EIN';
        }
        if (this.lang === 'ru') {
            return word === 'OFF' ? 'ВЫКЛ' : 'ВКЛ';
        }
        if (this.lang === 'pt') {
            return word === 'OFF' ? 'DESLIGADO' : 'LIGADO';
        }
        if (this.lang === 'nl') {
            return word === 'OFF' ? 'UIT' : 'AAN';
        }
        if (this.lang === 'fr') {
            return word === 'OFF' ? 'ÉTEINT' : 'ALLUMÉ';
        }
        if (this.lang === 'it') {
            return word === 'OFF' ? 'SPENTO' : 'ACCESO';
        }
        if (this.lang === 'es') {
            return word === 'OFF' ? 'APAGADO' : 'ENCENDIDO';
        }
        if (this.lang === 'pl') {
            return word === 'OFF' ? 'WYŁĄCZONY' : 'WŁĄCZONY';
        }
        if (this.lang === 'zh-cn') {
            return word === 'OFF' ? '关' : '开';
        }
        if (this.lang === 'uk') {
            return word === 'OFF' ? 'ВИМКНЕНО' : 'УВІМКНЕНО';
        }
        return word;
    }

    private async subscribeUnsubscribe(): Promise<void> {
        const toSubscribe: string[] = [];
        // collect all states
        Object.keys(this.recordingSimulations).forEach(id => {
            if (this.recordingSimulations[id].value === 'record') {
                this.recordingSimulations[id].allStates.forEach(state => {
                    if (!toSubscribe.includes(state)) {
                        toSubscribe.push(state);
                    }
                });
            }
        });

        for (let i = 0; i < toSubscribe.length; i++) {
            await this.getForeignObjectAsyncCached(toSubscribe[i]);
        }

        // subscribe new
        toSubscribe.forEach(state => {
            if (!this.subscribed.includes(state)) {
                this.subscribed.push(state);
                const obj = this.stateObjs[state];
                if (obj) {
                    if (obj.type === 'channel' || obj.type === 'device') {
                        this.log.debug(`+ Subscribed to ${state}.*`);
                        this.subscribeForeignStates(`${state}.*`);
                    } else if (obj.type === 'state' && obj.common && obj.common.write !== false) {
                        this.log.debug(`+ Subscribed to ${state}`);
                        this.subscribeForeignStates(state);
                    } else {
                        this.log.debug(`? Subscription to ${state} was ignored`);
                    }
                }
            }
        });

        // unsubscribe old
        [...this.subscribed].forEach(state => {
            if (!toSubscribe.includes(state)) {
                this.subscribed.splice(this.subscribed.indexOf(state), 1);
                const obj = this.stateObjs[state];
                if (obj && (obj.type === 'channel' || obj.type === 'device')) {
                    this.log.debug(`- Unsubscribed from ${state}.*`);
                    this.unsubscribeForeignStates(`${state}.*`);
                } else if (obj && obj.type === 'state' && obj.common && obj.common.write !== false) {
                    this.log.debug(`- Unsubscribed from ${state}`);
                    this.unsubscribeForeignStates(state);
                } else {
                    this.log.debug(`? Unsubscription from ${state} was ignored`);
                }
            }
        });
    }

    private async stopRecordSimulation(id: string): Promise<void> {
        this.recordingSimulations[id].value = 'stop';
        await this.subscribeUnsubscribe();
    }

    private stopPlaySimulation(id: string): void {
        this.recordingSimulations[id].value = 'stop';

        // stop playing
        this.recordingSimulations[id].native.events.forEach(event => {
            if (this.events[event._id]) {
                stopEvent(this, this.events[event._id]);
                delete this.events[event._id];
            }
        });
    }

    private async getImage(idOrObj: string | ioBroker.Object): Promise<string | null> {
        let obj: ioBroker.Object | null | undefined;
        let id: string | undefined;
        if (typeof idOrObj === 'string') {
            id = idOrObj;
            if (this.imageCache[id] !== undefined) {
                return this.imageCache[id];
            }
            obj = await this.getForeignObjectAsyncCached(id);
        } else {
            obj = idOrObj;
        }
        if (obj) {
            const stateId = obj._id;
            if (this.imageCache[stateId] !== undefined) {
                return this.imageCache[stateId];
            }

            if (obj.common?.icon) {
                this.imageCache[stateId] = getObjectIcon(obj);
                return this.imageCache[stateId];
            } else if (obj.type === 'state') {
                // get parent name
                let parts = obj._id.split('.');
                parts.pop();

                let parentId = parts.join('.');
                obj = await this.getForeignObjectAsyncCached(parentId);

                if (obj?.common?.icon) {
                    this.imageCache[stateId] = getObjectIcon(obj);
                    return this.imageCache[stateId];
                } else if (!obj || obj.type === 'channel' || obj.type === 'device') {
                    parts = parentId.split('.');
                    parts.pop();
                    parentId = parts.join('.');

                    obj = await this.getForeignObjectAsyncCached(parentId);

                    if (obj?.common?.icon) {
                        this.imageCache[stateId] = getObjectIcon(obj);
                        return this.imageCache[stateId];
                    }
                }
            }
        }

        if (id !== undefined) {
            this.imageCache[id] = null;
        }
        return null;
    }

    private collectAllStates(id: string): string[] {
        this.recordingSimulations[id].allStates = this.recordingSimulations[id].native.record
            ? [...this.recordingSimulations[id].native.record.states]
            : [];
        const states = this.recordingSimulations[id].allStates;

        const lists = this.recordingSimulations[id].native.record?.enums || [];
        for (const list of lists) {
            const res = buildOverlap(
                list || [],
                this.enumObjs,
                this.recordingSimulations[id].native.record?.enumsExceptions || [],
            );
            res.forEach(_id => !states.includes(_id) && states.push(_id));
        }

        return states;
    }

    private async startRecordSimulation(id: string): Promise<void> {
        // Read the object again: the GUI writes the new recording period just before it sets the state to "record",
        // and the object change can arrive after the state change. With the cached object, the period of the last
        // recording would be checked and the recording stopped at once (#234).
        const obj = (await this.getForeignObjectAsync(id)) as unknown as SimulationObject | null;
        if (!obj) {
            return;
        }
        const value: SimulationStatus =
            this.recordingSimulations[id]?.value ||
            ((await this.getForeignStateAsync(id))?.val as SimulationStatus) ||
            'stop';
        this.recordingSimulations[id] = obj;
        this.recordingSimulations[id].value = value;

        this.collectAllStates(id);

        // `record.start` is not checked: it comes from the clock of the browser, which can be ahead of this host
        if (!obj.native.record?.end || new Date(obj.native.record.end).getTime() < Date.now()) {
            this.log.warn(`Recording of "${this.getText(obj)}" stopped: the recording period is over`);
            await this.setForeignStateAsync(id, 'stop');
            this.recordingSimulations[id].value = 'stop';
            return;
        }

        await this.subscribeUnsubscribe();
    }

    private async setSimulationStatus(id: string, value: SimulationStatus): Promise<void> {
        const oldValue = this.recordingSimulations[id].value;
        this.recordingSimulations[id].value = value;
        if (value === 'record') {
            await this.startRecordSimulation(id);
        } else if (value === 'stop') {
            if (oldValue === 'record') {
                await this.stopRecordSimulation(id);
            } else if (oldValue === 'play') {
                this.stopPlaySimulation(id);
            }
        } else if (value === 'pause') {
            await this.subscribeUnsubscribe();
        } else if (value === 'play') {
            this.recordingSimulations[id].native.events.forEach(event => {
                const play = this.recordingSimulations[id].native.play;
                event.simulationStart = play?.start ? new Date(play.start) : null;
                event.simulationEnd = play?.end ? new Date(play.end) : null;
                event.simulationDow = play?.dow;
                this.events[event._id] = event;
                this.names[event._id] = event.common.name as string;
            });

            this.calculateNext();
        }
    }

    private getText(obj: ioBroker.Object | null | undefined): string {
        if (obj?.common?.name) {
            if (typeof obj.common.name === 'object') {
                return obj.common.name[this.lang] || obj.common.name.en;
            }
            return obj.common.name;
        }
        return obj ? obj._id : '';
    }

    private async getForeignObjectAsyncCached(id: string): Promise<ioBroker.Object | null> {
        if (this.stateObjs[id] === undefined) {
            try {
                this.stateObjs[id] = (await this.getForeignObjectAsync(id)) || null;
            } catch (e) {
                this.log.warn(`Cannot read object ${id}: ${e}`);
            }
            this.stateObjs[id] = this.stateObjs[id] || null;
        }

        return this.stateObjs[id];
    }

    private async getStateName(id: string, state?: ioBroker.State | null): Promise<{ name: string; id: string }> {
        if (this.names[id]) {
            return { name: this.names[id], id };
        }
        const obj = await this.getForeignObjectAsyncCached(id);
        const roomFunc = this.getRoomFunc(id);
        if (roomFunc.func && roomFunc.room) {
            this.names[id] = `${roomFunc.func} / ${roomFunc.room}`;
        } else if (obj?.common?.name) {
            this.names[id] = this.getText(obj);
        }

        let name = this.names[id] || id;
        if (state) {
            name += ` = ${state.val}`;
            // todo: generate for window/door/light/dimmer automatically opened/closed/set to
        }
        return { name, id };
    }

    private async executeEvent(event: FullCalendarEvent, now?: number): Promise<void> {
        this.log.debug(`executeEvent[${event.common.name as string}]: ${JSON.stringify(event.native)}`);
        event.lastExec = now || new Date().getTime();
        const obj = (await this.getForeignObjectAsyncCached(event.native.oid)) as ioBroker.StateObject | null;

        if (!obj) {
            this.log.warn(`Object "${event.native.oid}" does not exist!`);
            return;
        }
        if (hasCondition(event.native.condition)) {
            const condition = event.native.condition;
            let actual: ioBroker.StateValue | undefined;
            try {
                actual = (await this.getForeignStateAsync(condition.oid))?.val;
            } catch (e) {
                this.log.warn(`Cannot read the condition state "${condition.oid}": ${e}`);
            }
            if (!isConditionMet(condition, actual)) {
                // a "double" or "toggle" event is skipped completely, it does not write the second value either
                this.log.info(
                    `Event "${this.getText(event)}" skipped: condition ${conditionText(condition)} is not met (value: ${JSON.stringify(actual ?? null)})`,
                );
                return;
            }
        }
        if (event.native.type !== 'single' && event.native.intervals && event.native.intervals.length) {
            event.timer = this.setTimeout(
                (_event: FullCalendarEvent, _obj: ioBroker.StateObject) => {
                    if (_event.native.type === 'toggle') {
                        let value = _event.native.startValue;
                        if (_obj.common.type === 'number') {
                            if (_obj.common.min && _obj.common.max) {
                                value = value === _obj.common.max ? _obj.common.min : obj.common.max!;
                            } else {
                                value = !value;
                            }
                        } else if (_obj.common.type === 'boolean') {
                            value = !value;
                        } else if (_obj.common.type === 'string') {
                            if (_event.native.startValue === 'on') {
                                value = 'off';
                            } else if (_event.native.startValue === 'ON') {
                                value = 'OFF';
                            } else if (_obj.common.min && _obj.common.max) {
                                value = value === _obj.common.max ? _obj.common.min : obj.common.max!;
                            } else {
                                // do nothing
                                this.log.warn(`Cannot detect toggle value for string: ${value} in ${_obj._id}`);
                                return;
                            }
                        }
                        this.setForeignState(_obj._id, value);
                    } else {
                        const interval = _event.native.intervals![0] || {};
                        if (_obj.common.type === 'number') {
                            if (typeof interval.value !== 'number') {
                                interval.value = parseFloat(interval.value as string);
                            }
                        } else if (obj.common.type === 'boolean') {
                            if (typeof interval.value !== 'boolean') {
                                interval.value =
                                    interval.value === 'true' ||
                                    interval.value === '1' ||
                                    interval.value === 1 ||
                                    interval.value === 'on' ||
                                    interval.value === 'ON';
                            }
                        } else if (obj.common.type === 'string') {
                            if (typeof interval.value !== 'string') {
                                interval.value = (interval.value as number | boolean).toString();
                            }
                        }
                        this.setForeignState(_obj._id, interval.value ?? null);
                    }
                },
                parseInt(String(event.native.intervals[0]?.timeOffset || 1000), 10),
                event,
                obj,
            );
        }

        if (obj.common.type === 'number') {
            if (typeof event.native.startValue !== 'number') {
                event.native.startValue = parseFloat(event.native.startValue as string);
            }
        } else if (obj.common.type === 'boolean') {
            if (typeof event.native.startValue !== 'boolean') {
                event.native.startValue =
                    event.native.startValue === 'true' ||
                    event.native.startValue === '1' ||
                    event.native.startValue === 1 ||
                    event.native.startValue === 'on' ||
                    event.native.startValue === 'ON';
            }
        } else if (obj.common.type === 'string') {
            if (typeof event.native.startValue !== 'string') {
                event.native.startValue = (event.native.startValue as number | boolean).toString();
            }
        }

        await this.setForeignStateAsync(obj._id, event.native.startValue);
    }

    private calculateNext(): void {
        if (this.nextTimer) {
            this.clearTimeout(this.nextTimer);
        }

        let timeout: number | null = null;
        const nowObj = new Date();
        const nowTick = nowObj.getTime();
        let diff: number;

        for (const id in this.events) {
            if (
                !Object.prototype.hasOwnProperty.call(this.events, id) ||
                !this.isActive(this.events[id]) ||
                this.events[id].expired
            ) {
                continue;
            }
            const event = this.events[id];

            // if daily
            if (event.native.cron) {
                if (!event.parsed) {
                    // an astro event takes the last second of each day, the astro time is calculated from there
                    event.parsed = parseCron(event.native);
                }
                let date: Date | null = later.schedule(event.parsed).next();

                if (event.native.astro) {
                    date = timeUtils.getAstroTime(
                        event.native.astro,
                        event.native.offset,
                        date,
                        SunCalc,
                        this.sysConfig,
                        this.instanceConfig,
                    );
                }

                if (!date) {
                    continue;
                }

                if (event.simulationStart && event.simulationStart.getTime() > date.getTime()) {
                    continue;
                }
                if (event.simulationEnd && event.simulationEnd.getTime() < date.getTime()) {
                    continue;
                }
                if (event.simulationDow && !event.simulationDow.includes(date.getDay())) {
                    continue;
                }
                // console.log(date);

                if (event.native.timeRandomOffset) {
                    date = new Date(
                        date.getTime() +
                            Math.round(Math.random() * event.native.timeRandomOffset * (Math.random() > 0.5 ? 1 : -1)),
                    );
                }

                diff = date.getTime() - nowTick;
                if (diff >= -2000 && diff < 2000) {
                    void this.executeEvent(event, nowTick);
                    date = later.schedule(event.parsed).next(1, new Date(nowTick + 2000));
                }

                // build date
                const nextTick = date.getTime();

                diff = nextTick - nowTick;
                if (diff > 0 && (timeout === null || diff < timeout)) {
                    timeout = diff;
                }
            } else {
                // once
                // expected 2017-09-12T12:12:00
                let time: Date | null;
                if (event.native.astro) {
                    time = timeUtils.getAstroTime(
                        event.native.astro,
                        event.native.offset,
                        timeUtils.parseISOLocal(event.native.start!),
                        SunCalc,
                        this.sysConfig,
                        this.instanceConfig,
                    );
                } else {
                    time = timeUtils.parseISOLocal(event.native.start!);
                }

                if (!time) {
                    continue;
                }

                // console.log(time);

                if (
                    nowObj.getFullYear() === time.getFullYear() &&
                    nowObj.getMonth() === time.getMonth() &&
                    nowObj.getDate() === time.getDate() &&
                    nowObj.getHours() === time.getHours() &&
                    nowObj.getMinutes() === time.getMinutes() &&
                    Math.abs(nowObj.getSeconds() - time.getSeconds()) < 2 &&
                    (!event.lastExec || nowTick - event.lastExec > 1999)
                ) {
                    void this.executeEvent(event, nowTick);
                } else {
                    const tick = time.getTime();

                    diff = tick - nowTick;
                    if (diff > 0 && (timeout === null || diff < timeout)) {
                        timeout = diff;
                    } else if (diff < 0) {
                        event.expired = true;
                    }
                }
            }
        }

        if (timeout === null) {
            timeout = 3600000; // one hour
        }
        if (timeout > 3600000) {
            timeout = 3600000;
        }
        this.log.debug(`Next check in ${Math.round(timeout / 1000)} seconds`);
        this.nextTimer = this.setTimeout(() => this.calculateNext(), timeout);
        this.scheduleAgenda();
    }

    private getRoomFunc(id: string): { func: string; room: string } {
        let room = '';
        for (const r in this.rooms) {
            if (Object.prototype.hasOwnProperty.call(this.rooms, r) && this.rooms[r].common.members?.includes(id)) {
                room = (this.rooms[r].common.name as string) || r.substring('enum.rooms.'.length);
                break;
            }
        }
        let func = '';
        for (const f in this.funcs) {
            if (this.funcs[f].common.members?.includes(id)) {
                func = (this.funcs[f].common.name as string) || f.substring('enum.functions.'.length);
                break;
            }
        }
        return { func, room };
    }

    private readEnums(): void {
        this.rooms = {};
        Object.keys(this.enumObjs)
            .filter(id => id.startsWith('enum.rooms.'))
            .forEach(id => (this.rooms[id] = this.enumObjs[id]));

        this.funcs = {};
        Object.keys(this.enumObjs)
            .filter(id => id.startsWith('enum.functions.'))
            .forEach(id => (this.funcs[id] = this.enumObjs[id]));
    }

    private setTimeZone(): void {
        void this.setState('info.timeZone', new Date().getTimezoneOffset(), true);
        // because of winter time, update timezone every 30 minutes
        this.timeZoneInterval = this.timeZoneInterval || this.setInterval(() => this.setTimeZone(), 30000);
    }

    private async onStateChange(stateId: string, state: ioBroker.State | null | undefined): Promise<void> {
        if (stateId && state) {
            if (stateId.startsWith(`${this.namespace}.Simulations.`)) {
                if (this.recordingSimulations[stateId] && this.recordingSimulations[stateId].value !== state.val) {
                    await this.setSimulationStatus(stateId, state.val as SimulationStatus);
                }

                return;
            }

            if (
                stateId.startsWith('system.') ||
                stateId.startsWith('alexa2.') ||
                IGNORE_STATES.find(s => stateId.endsWith(s))
            ) {
                return;
            }

            // A device that reports its status periodically (Tasmota, Sonoff, Homematic) sends the same value again
            // and again: only a change of the value is a switching action worth recording (#285).
            // `lc` (last change) keeps the time of the last different value.
            if (state.lc && state.ts !== state.lc) {
                return;
            }

            // we can record only commands, as we must play back them later
            const ids = Object.keys(this.recordingSimulations);
            for (let i = 0; i < ids.length; i++) {
                const simulation = this.recordingSimulations[ids[i]];

                if (simulation.value === 'record') {
                    // find out if this state is recorded
                    const found = simulation.allStates.find(id => {
                        if (id === stateId) {
                            return true;
                        }
                        return (
                            stateId.startsWith(`${id}.`) &&
                            !simulation.native.record.enumsExceptions.includes(id) &&
                            !!this.stateObjs[id] &&
                            (this.stateObjs[id].type === 'channel' || this.stateObjs[id].type === 'device')
                        );
                    });

                    if (!found) {
                        continue;
                    }

                    // read current simulation
                    const profile = (await this.getForeignObjectAsync(simulation._id)) as unknown as SimulationObject;

                    // add new event
                    const date = new Date();
                    let dow: number | string = date.getDay() === 0 ? 7 : date.getDay();
                    if (profile.native.interval === 'day') {
                        dow = '0-6';
                    }
                    const cron = `${date.getSeconds()} ${date.getMinutes()} ${date.getHours()} ? * ${dow}`;

                    // Get information about the object
                    const stateObj = (await this.getForeignObjectAsyncCached(stateId)) as ioBroker.StateObject | null;
                    if (!stateObj) {
                        continue;
                    }

                    const name = this.getText(stateObj) || stateId;

                    if (
                        stateObj.common.role &&
                        (stateObj.common.role.endsWith('.lock') || stateObj.common.role === 'lock')
                    ) {
                        this.log.warn(`Cannot record state "${name}/${stateId}" because it has role "lock"`);
                        continue;
                    }

                    if (stateObj.common.write === false) {
                        // this.log.warn(`Cannot record state "${name}/${stateId}" because it is read-only`);
                        continue;
                    }

                    const prevEvent = this.lastEvent[ids[i]];
                    this.lastEvent[ids[i]] = { id: stateId, value: state.val, ts: Date.now() };

                    // filter out same states
                    if (
                        prevEvent &&
                        prevEvent.id === stateId &&
                        prevEvent.value === state.val &&
                        Date.now() - prevEvent.ts < 500
                    ) {
                        this.log.warn(
                            `Ignore state "${name} / ${stateId}" because it is the same as last one (${state.val}, ${cron})`,
                        );
                        continue;
                    }

                    profile.native.events.push({
                        _id: `${simulation._id}.event-${randomUUID()}`,
                        common: {
                            name,
                            enabled: true,
                            icon: (await this.getImage(stateObj)) || undefined,
                            color: simulation.common.color || '#3A87AD',
                        },
                        native: {
                            id: Date.now(),
                            cron,
                            type: 'single',
                            oid: stateId,
                            startValue: state.val,
                            states: stateObj.common.states as Record<string, string> | undefined,
                        },
                        type: 'schedule',
                    });

                    this.log.debug(
                        `Add event to simulation "${this.getText(simulation)}": ${name}/${stateId} => ${state.val}`,
                    );

                    // save simulation
                    await this.setForeignObjectAsync(simulation._id, profile);
                }
            }
        }
    }

    private async onObjectChange(id: string, obj: ioBroker.Object | null | undefined): Promise<void> {
        if (!id) {
            return;
        }

        // sync enums
        if (id.startsWith('enum.')) {
            if (obj) {
                this.enumObjs[id] = obj as ioBroker.EnumObject;
                if (id.startsWith('enum.functions.')) {
                    this.funcs[id] = obj as ioBroker.EnumObject;
                } else if (id.startsWith('enum.rooms.')) {
                    this.rooms[id] = obj as ioBroker.EnumObject;
                }
            } else {
                if (this.funcs[id]) {
                    delete this.funcs[id];
                }
                if (this.rooms[id]) {
                    delete this.rooms[id];
                }
                delete this.enumObjs[id];
            }

            return;
        }

        // ignore info and agenda states
        if (id.startsWith(`${this.namespace}.info.`) || id.startsWith(`${this.namespace}.events.`)) {
            return;
        }

        if (id.startsWith(`${this.namespace}.Simulations.`)) {
            if (obj && obj.type === 'state') {
                this.recordingSimulations[id] = obj as unknown as SimulationObject;
                this.collectAllStates(id);
                const _state = await this.getForeignStateAsync(id);
                if (_state && _state.val) {
                    this.recordingSimulations[id].value = _state.val as SimulationStatus;
                } else {
                    this.recordingSimulations[id].value = 'stop';
                }

                if (this.recordingSimulations[id].value === 'record') {
                    await this.startRecordSimulation(id);
                }
                await this.subscribeUnsubscribe();
            } else if (this.recordingSimulations[id]) {
                await this.stopRecordSimulation(id);
                delete this.recordingSimulations[id];
            }
            return;
        }

        if (id === 'system.config') {
            if (obj) {
                this.sysConfig = obj as ioBroker.SystemConfigObject;
            }

            if (
                this.sysConfig.common.latitude === undefined ||
                this.sysConfig.common.latitude === null ||
                this.sysConfig.common.longitude === undefined ||
                this.sysConfig.common.longitude === null
            ) {
                this.log.warn(
                    'Please specify longitude and latitude in system settings, else astro events will not work',
                );
            }
            this.lang = this.sysConfig.common.language;

            this.calculateNext();
            return;
        }

        if (!id.startsWith(`${this.namespace}.`)) {
            return;
        }

        if (id.startsWith(`${this.namespace}.Calendars.`) && (!obj || obj.type === 'folder')) {
            this.updateCalendarState(id, obj);
        }

        const wasEvent = !!this.events[id];
        if (this.events[id]) {
            stopEvent(this, this.events[id]);
            delete this.events[id];
        }

        if (this.names[id]) {
            delete this.names[id];
            if (obj) {
                // calculate new name and save it to cache
                await this.getStateName(id);
            }
        }

        // only schedule objects are events — not the calendar folders
        if (obj?.type === 'schedule') {
            this.events[id] = checkEvent(obj as unknown as FullCalendarEvent);
        }
        if (wasEvent || this.events[id]) {
            await this.setStateAsync('events.lastChanged', Date.now(), true);
        }
        // a renamed calendar changes the agenda, too (calculateNext renders it)
        this.calculateNext();
    }

    private onUnload(callback: () => void): void {
        if (this.timeZoneInterval) {
            this.clearInterval(this.timeZoneInterval);
            this.timeZoneInterval = undefined;
        }

        if (this.updateInterval) {
            this.clearInterval(this.updateInterval);
            this.updateInterval = undefined;
        }
        if (this.nextTimer) {
            this.clearTimeout(this.nextTimer);
            this.nextTimer = undefined;
        }
        if (this.agendaTimer) {
            this.clearTimeout(this.agendaTimer);
            this.agendaTimer = undefined;
        }
        if (this.midnightTimer) {
            this.clearTimeout(this.midnightTimer);
            this.midnightTimer = undefined;
        }
        this.agendaReady = false;

        Object.keys(this.events).forEach(id => stopEvent(this, this.events[id]));

        callback && callback();
    }

    private async onReady(): Promise<void> {
        later.date.localTime();

        this.setTimeZone();

        const result = await this.getObjectViewAsync('system', 'enum', {
            startkey: 'enum.',
            endkey: `enum.${MAX_KEY}`,
        });
        if (result) {
            for (let i = 0; i < result.rows.length; i++) {
                if (result.rows[i].value?.common?.members) {
                    this.enumObjs[result.rows[i].id] = result.rows[i].value;
                }
            }
        }
        await this.subscribeForeignObjectsAsync('enum.*');

        // fix old design
        const design = await this.getForeignObjectAsync('_design/schedule');
        const designDoc = design as unknown as { views?: { schedule?: { map?: string } } } | null;
        if (
            !design ||
            !designDoc?.views?.schedule ||
            designDoc.views.schedule.map !== "function(doc) { if (doc.type === 'schedule') emit(doc._id, doc); }"
        ) {
            await this.setForeignObjectAsync('_design/schedule', {
                language: 'javascript',
                views: {
                    schedule: {
                        map: "function(doc) { if (doc.type === 'schedule') emit(doc._id, doc); }",
                    },
                },
            } as unknown as ioBroker.SettableDesignObject);

            // restart instance
            const aObj = await this.getForeignObjectAsync(`system.adapter.${this.namespace}`);
            if (aObj) {
                await this.setForeignObjectAsync(aObj._id, aObj);
            }
            return;
        }

        this.events = {};

        try {
            const res = await this.getObjectViewAsync('schedule', 'schedule', {
                startkey: `${this.namespace}.`,
                endkey: `${this.namespace}.${MAX_KEY}`,
            });

            if (res) {
                for (let i = 0; i < res.rows.length; i++) {
                    const schedule = res.rows[i].value as unknown as FullCalendarEvent;
                    this.events[schedule._id] = checkEvent(schedule);
                }
            }
        } catch (e) {
            this.log.error(`Cannot read schedules: ${e}`);
        }

        try {
            this.sysConfig = (await this.getForeignObjectAsync('system.config'))!;
            this.instanceConfig = (await this.getForeignObjectAsync(
                `system.adapter.fullcalendar.${this.instance}`,
            )) as ioBroker.InstanceObject;
            if (
                this.sysConfig.common.latitude === undefined ||
                this.sysConfig.common.latitude === null ||
                this.sysConfig.common.longitude === undefined ||
                this.sysConfig.common.longitude === null
            ) {
                this.log.warn(
                    'Please specify longitude and latitude in system settings, else astro events will not work',
                );
            }
            this.lang = this.sysConfig.common.language;
        } catch (e) {
            this.log.error(`Cannot read system.config: ${e}`);
        }

        // read the calendars switched off
        try {
            const calendars = await this.getObjectViewAsync('system', 'folder', {
                startkey: `${this.namespace}.Calendars.`,
                endkey: `${this.namespace}.Calendars.${MAX_KEY}`,
            });
            for (const row of calendars?.rows || []) {
                this.updateCalendarState(row.id, row.value);
            }
        } catch (e) {
            this.log.error(`Cannot read calendars: ${e}`);
        }

        // read possible simulations
        const res = await this.getObjectViewAsync('system', 'state', {
            startkey: `${this.namespace}.Simulations.`,
            endkey: `${this.namespace}.Simulations.${MAX_KEY}`,
        });

        for (let i = 0; i < res.rows.length; i++) {
            const id = res.rows[i].id;
            this.recordingSimulations[id] = res.rows[i].value as unknown as SimulationObject;
            this.collectAllStates(id);
            const value = await this.getForeignStateAsync(id);
            if (value && value.val) {
                await this.setSimulationStatus(id, value.val as SimulationStatus);
            }
        }
        await this.subscribeForeignStatesAsync(`${this.namespace}.Simulations.*`); // subscribe on own events and simulations

        this.updateInterval = this.setInterval(() => {
            Object.keys(this.recordingSimulations).forEach(id => {
                if (
                    (this.recordingSimulations[id].value === 'record' ||
                        this.recordingSimulations[id].value === 'pause') &&
                    new Date(this.recordingSimulations[id].native.record.end).getTime() < Date.now()
                ) {
                    this.setForeignState(id, 'stop');
                    void this.stopRecordSimulation(id);
                } else if (
                    this.recordingSimulations[id].value === 'play' &&
                    this.recordingSimulations[id].native.play?.end &&
                    new Date(this.recordingSimulations[id].native.play.end).getTime() < Date.now()
                ) {
                    this.setForeignState(id, 'stop');
                    this.stopPlaySimulation(id);
                }
            });
        }, 60 * 1000); // every minute

        this.readEnums();
        await this.subscribeObjectsAsync('*'); // subscribe on own events and simulations

        this.agendaReady = true;
        this.calculateNext();
    }
}

// If started as allInOne mode => return function to create instance
if (require.main !== module) {
    module.exports = (options: Partial<AdapterOptions> | undefined) => new Fullcalendar(options);
} else {
    // or start the instance directly
    (() => new Fullcalendar())();
}
