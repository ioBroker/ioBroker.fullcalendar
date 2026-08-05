// you have to require the utils module and call adapter function
import { Adapter, type AdapterOptions } from '@iobroker/adapter-core'; // Get common adapter utils
import * as later from 'later';
import SunCalc from 'suncalc2';
import { v4 as uuidv4 } from 'uuid';

import * as timeUtils from './lib/utils';
import type { AstroName } from './lib/utils';

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
}

/** A calendar event object, plus the bookkeeping the runtime attaches to it */
export interface FullCalendarEvent extends ioBroker.ScheduleObject {
    native: EventNative;
    /** cached result of `later.parse.cron()` */
    parsed?: later.ScheduleData;
    timer?: NodeJS.Timeout | null;
    lastExec?: number;
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

function stopEvent(event: FullCalendarEvent): void {
    if (event.timer) {
        clearTimeout(event.timer);
        event.timer = null;
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

    private nextTimer: NodeJS.Timeout | null = null;

    /** cached `system.config` object (`systemConfig` is taken by the base class) */
    private sysConfig!: ioBroker.SystemConfigObject;

    /** cached own `system.adapter.*` object (`adapterConfig` is taken by the base class) */
    private instanceConfig!: ioBroker.InstanceObject;

    private timeZoneInterval: NodeJS.Timeout | null = null;

    private updateInterval: NodeJS.Timeout | null = null;

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

    public constructor(options: Partial<AdapterOptions> = {}) {
        super({
            ...options,
            name: adapterName,
        });

        this.on('ready', this.onReady.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
        this.on('objectChange', this.onObjectChange.bind(this));
        this.on('unload', this.onUnload.bind(this));
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
        this.subscribed.forEach(state => {
            const pos = this.subscribed.indexOf(state);
            if (pos === -1) {
                this.subscribed.splice(pos, 1);
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
                stopEvent(this.events[event._id]);
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
        if (!this.recordingSimulations[id]) {
            this.recordingSimulations[id] = (await this.getForeignObjectAsync(id)) as unknown as SimulationObject;
            const state = await this.getForeignStateAsync(id);
            this.recordingSimulations[id].value = (state?.val as SimulationStatus) || 'stop';
        }

        this.collectAllStates(id);

        if (
            new Date(this.recordingSimulations[id].native.record.start).getTime() >= Date.now() ||
            new Date(this.recordingSimulations[id].native.record.end).getTime() < Date.now()
        ) {
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
        if (event.native.type !== 'single' && event.native.intervals && event.native.intervals.length) {
            event.timer = setTimeout(
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
            clearTimeout(this.nextTimer);
        }

        let timeout: number | null = null;
        const nowObj = new Date();
        const nowTick = nowObj.getTime();
        let diff: number;

        for (const id in this.events) {
            if (!Object.prototype.hasOwnProperty.call(this.events, id) || !this.events[id].common.enabled) {
                continue;
            }
            const event = this.events[id];

            // if daily
            if (event.native.cron) {
                let cron = event.native.cron;
                if (cron.split(' ').length === 6) {
                    const parts = cron.split(' ');
                    parts.shift();
                    cron = parts.join(' ');
                }
                if (!event.parsed) {
                    if (event.native.astro) {
                        // take the last second of this day
                        event.parsed = later.parse.cron(cron.replace(/^\d\d? \d\d? /, '59 59 23 '), true);
                    } else {
                        event.parsed = later.parse.cron(cron);
                    }
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
                        event.common.enabled = false;
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
        this.nextTimer = setTimeout(() => this.calculateNext(), timeout);
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
        this.timeZoneInterval = this.timeZoneInterval || setInterval(() => this.setTimeZone(), 30000);
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
                        return;
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
                        _id: `${simulation._id}.event-${uuidv4()}`,
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

        // ignore info states
        if (id.startsWith(`${this.namespace}.info.`)) {
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

        if (this.events[id]) {
            stopEvent(this.events[id]);
            delete this.events[id];
        }

        if (this.names[id]) {
            delete this.names[id];
            if (obj) {
                // calculate new name and save it to cache
                await this.getStateName(id);
            }
        }

        if (obj) {
            this.events[id] = checkEvent(obj as unknown as FullCalendarEvent);
        }
        this.calculateNext();
    }

    private onUnload(callback: () => void): void {
        if (this.timeZoneInterval) {
            clearInterval(this.timeZoneInterval);
            this.timeZoneInterval = null;
        }

        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
        if (this.nextTimer) {
            clearTimeout(this.nextTimer);
            this.nextTimer = null;
        }

        Object.keys(this.events).forEach(id => stopEvent(this.events[id]));

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

        this.updateInterval = setInterval(() => {
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
