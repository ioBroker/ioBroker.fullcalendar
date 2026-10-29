/**
 * The agenda: when calendar events happen, for the `events.*` states and the `listEvents` message. Pure functions —
 * the adapter hands in the events and resolves astro times — so the occurrences match what the scheduler in
 * `main.ts` executes: a cron is evaluated like there (the seconds field is dropped, an astro event takes the astro
 * time of each matching day), a one-shot event happens once at `native.start`.
 */
import * as later from 'later';

import { parseISOLocal, toLocalTime, type AstroName } from './utils';
import { hasCondition, type EventCondition } from './condition';

/** The part of a calendar event the agenda reads */
export interface AgendaEvent {
    _id: string;
    common: { name?: ioBroker.StringOrTranslated; enabled?: boolean };
    native: {
        cron?: string;
        astro?: AstroName;
        offset?: number;
        start?: string;
        type?: 'single' | 'double' | 'toggle';
        oid: string;
        startValue: ioBroker.StateValue;
        intervals?: { value?: ioBroker.StateValue; timeOffset?: number | string }[];
        states?: Record<string, string>;
        condition?: EventCondition;
    };
}

/** Astro time of a day: name, offset in minutes, a time on that day → the time, or null (no location set) */
export type AstroResolver = (astro: AstroName, offset: number | undefined, date: Date) => Date | null;

/** One execution of an event */
export interface Occurrence {
    /** object ID of the event */
    id: string;
    name: string;
    /** name of the calendar, '' = the default calendar */
    calendar: string;
    /** local time of the house, `2026-10-28T21:30:00` */
    time: string;
    /** the same as a timestamp (ms) */
    ts: number;
    /** state the event writes */
    oid: string;
    value: ioBroker.StateValue;
    /** text of the value, if the state names its values (`states`) */
    valueText?: string;
    /** a "double" event writes `endValue` at `endTime` */
    endTime?: string;
    endValue?: ioBroker.StateValue;
    /** a "toggle" event switches back after `endTime` */
    toggleBack?: boolean;
    recurring: boolean;
}

/** The definition of an event, for `events.list` and `getEvents` */
export interface EventInfo {
    id: string;
    name: string;
    calendar: string;
    enabled: boolean;
    oid: string;
    value: ioBroker.StateValue;
    type: 'single' | 'double' | 'toggle';
    /** one-shot: local time */
    start?: string;
    /** recurring: cron expression */
    cron?: string;
    astro?: AstroName;
    offset?: number;
    /** "double" and "toggle": time until the second write, in seconds */
    durationSec?: number;
    endValue?: ioBroker.StateValue;
    /** the event writes only, if this condition is met at that time */
    condition?: EventCondition;
    /** next execution (local time), null = none ahead */
    next: string | null;
}

/**
 * The schedule of a recurring event, as `main.ts` builds it: a leading seconds field is dropped, and an astro event
 * runs on the last second of each matching day (the astro time of that day is taken from there).
 *
 * @param native the event
 * @param native.cron cron expression
 * @param native.astro astro time the event is bound to
 */
export function parseCron(native: { cron?: string; astro?: AstroName }): later.ScheduleData {
    let cron = native.cron || '';
    if (cron.split(' ').length === 6) {
        const parts = cron.split(' ');
        parts.shift();
        cron = parts.join(' ');
    }
    if (native.astro) {
        return later.parse.cron(cron.replace(/^\d\d? \d\d? /, '59 59 23 '), true);
    }
    return later.parse.cron(cron);
}

/** `later` answers one date, an array, or 0 */
function asDates(result: Date | Date[] | 0 | undefined): Date[] {
    if (!result) {
        return [];
    }
    return Array.isArray(result) ? result : [result];
}

/**
 * When an event happens between `from` and `to` (both inclusive), at most `max` times.
 *
 * @param event the event
 * @param from start of the range
 * @param to end of the range
 * @param astro resolves astro times
 * @param max maximum number of occurrences
 */
export function occurrencesOf(event: AgendaEvent, from: Date, to: Date, astro: AstroResolver, max = 100): Date[] {
    const native = event.native;
    if (native.cron) {
        const schedule = later.schedule(parseCron(native));
        // an astro event runs at 23:59:59 in `later`: start a day early, the astro time may be before `from`'s day end
        const start = native.astro ? new Date(from.getTime() - 24 * 3600_000) : from;
        const dates = asDates(
            schedule.next(max + 1, start, native.astro ? new Date(to.getTime() + 24 * 3600_000) : to),
        );
        const times = native.astro
            ? dates.map(d => astro(native.astro!, native.offset, d)).filter((d): d is Date => !!d)
            : dates;
        return times.filter(d => d.getTime() >= from.getTime() && d.getTime() <= to.getTime()).slice(0, max);
    }
    if (!native.start) {
        return [];
    }
    const start = parseISOLocal(native.start);
    const time = native.astro ? astro(native.astro, native.offset, start) : start;
    if (!time || Number.isNaN(time.getTime()) || time.getTime() < from.getTime() || time.getTime() > to.getTime()) {
        return [];
    }
    return [time];
}

/** A message parameter for an error text (an object as JSON, not "[object Object]") */
export function show(value: unknown): string {
    return typeof value === 'object' && value !== null ? JSON.stringify(value) : String(value);
}

/** Name of an event or calendar in the language */
export function textOf(name: ioBroker.StringOrTranslated | undefined, lang: ioBroker.Languages): string {
    if (!name) {
        return '';
    }
    if (typeof name === 'object') {
        return name[lang] || name.en || Object.values(name)[0] || '';
    }
    return name;
}

/** Second write of a "double"/"toggle" event: after how many ms */
function durationMs(event: AgendaEvent): number | undefined {
    if (event.native.type !== 'double' && event.native.type !== 'toggle') {
        return undefined;
    }
    const offset = parseInt(String(event.native.intervals?.[0]?.timeOffset ?? 1000), 10);
    return Number.isFinite(offset) ? offset : undefined;
}

/**
 * One occurrence of an event, ready for JSON
 *
 * @param event the event
 * @param time when it happens
 * @param calendar name of its calendar
 * @param lang language for the event name
 */
export function toOccurrence(event: AgendaEvent, time: Date, calendar: string, lang: ioBroker.Languages): Occurrence {
    const native = event.native;
    const occurrence: Occurrence = {
        id: event._id,
        name: textOf(event.common.name, lang),
        calendar,
        time: toLocalTime(time),
        ts: time.getTime(),
        oid: native.oid,
        value: native.startValue,
        recurring: !!native.cron,
    };
    const valueText = native.states?.[String(native.startValue)];
    if (valueText !== undefined) {
        occurrence.valueText = valueText;
    }
    const duration = durationMs(event);
    if (duration !== undefined) {
        occurrence.endTime = toLocalTime(new Date(time.getTime() + duration));
        if (native.type === 'double') {
            occurrence.endValue = native.intervals?.[0]?.value ?? null;
        } else {
            occurrence.toggleBack = true;
        }
    }
    return occurrence;
}

/**
 * The definition of an event, with its next execution
 *
 * @param event the event
 * @param calendar name of its calendar
 * @param next next execution, null = none
 * @param lang language for the event name
 */
export function toEventInfo(
    event: AgendaEvent,
    calendar: string,
    next: Date | null,
    lang: ioBroker.Languages,
): EventInfo {
    const native = event.native;
    const info: EventInfo = {
        id: event._id,
        name: textOf(event.common.name, lang),
        calendar,
        enabled: event.common.enabled !== false,
        oid: native.oid,
        value: native.startValue,
        type: native.type || 'single',
        next: next ? toLocalTime(next) : null,
    };
    if (native.cron) {
        info.cron = native.cron;
    } else if (native.start) {
        info.start = native.start;
    }
    if (native.astro) {
        info.astro = native.astro;
        if (native.offset) {
            info.offset = native.offset;
        }
    }
    const duration = durationMs(event);
    if (duration !== undefined) {
        info.durationSec = Math.round(duration / 1000);
        if (native.type === 'double') {
            info.endValue = native.intervals?.[0]?.value ?? null;
        }
    }
    if (hasCondition(native.condition)) {
        info.condition = {
            oid: native.condition.oid,
            operator: native.condition.operator || '==',
            value: native.condition.value,
        };
    }
    return info;
}

/** Start of the day of `date` (local time), `days` later */
export function startOfDay(date: Date, days = 0): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days, 0, 0, 0, 0);
}

/**
 * A time for a new event: a timestamp (ms), a local time (`2026-10-28T21:30`, `2026-10-28 21:30:15`) or a time with
 * a zone (`…Z`, `…+01:00`). Null = not understood.
 *
 * @param value the time
 */
export function parseTime(value: unknown): Date | null {
    if (typeof value === 'number') {
        return Number.isFinite(value) ? new Date(value) : null;
    }
    if (typeof value !== 'string' || !value.trim()) {
        return null;
    }
    const text = value.trim();
    const local = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(text);
    if (local) {
        const [, y, M, d, h, m, s] = local;
        return new Date(+y, +M - 1, +d, +h, +m, s ? +s : 0, 0);
    }
    const date = new Date(text);
    return Number.isNaN(date.getTime()) ? null : date;
}

/**
 * A delay for a new event: seconds, or a text like `90s`, `30m`, `2h`, `1h30m`, `1d`. Null = not understood.
 *
 * @param value the delay
 */
export function parseDelaySeconds(value: unknown): number | null {
    if (typeof value === 'number') {
        return Number.isFinite(value) && value >= 0 ? value : null;
    }
    if (typeof value !== 'string') {
        return null;
    }
    const text = value.trim().toLowerCase();
    if (/^\d+(?:\.\d+)?$/.test(text)) {
        return parseFloat(text);
    }
    const re = /(\d+(?:\.\d+)?)\s*(d|h|m|s)/g;
    const factor: Record<string, number> = { d: 86400, h: 3600, m: 60, s: 1 };
    let total = 0;
    let rest = text;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text))) {
        total += parseFloat(m[1]) * factor[m[2]];
        rest = rest.replace(m[0], '');
    }
    return total && !rest.trim() ? total : null;
}
