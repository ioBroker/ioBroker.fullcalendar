import { Utils } from '@iobroker/gui-components';

/** A cron field: either the explicit list of values, or the `*` / `?` wildcards */
export type CronField = number[] | '*' | '?' | '';

export interface CronObject {
    seconds: CronField;
    minutes: CronField;
    hours: CronField;
    dates: CronField;
    months: CronField;
    dows: CronField;
}

/**
 * Same shape as {@link CronObject}, but with every field narrowed to a real array.
 * The event editor only ever builds cron objects from explicit day/month/weekday
 * selections, so the `*` / `?` wildcards cannot occur there.
 */
export interface CronObjectArrays {
    seconds: number[];
    minutes: number[];
    hours: number[];
    dates: number[];
    months: number[];
    dows: number[];
}

/** Anything that can read objects: the admin connection as well as the vis-2 socket */
export interface SocketLike {
    getObject: (id: string) => Promise<ioBroker.Object | null | undefined>;
}

/** Name of an astro time, as provided by suncalc2 */
export type AstroName =
    | 'solarNoon'
    | 'nadir'
    | 'sunrise'
    | 'sunset'
    | 'sunriseEnd'
    | 'sunsetStart'
    | 'dawn'
    | 'dusk'
    | 'nauticalDawn'
    | 'nauticalDusk'
    | 'nightEnd'
    | 'night'
    | 'goldenHourEnd'
    | 'goldenHour';

export type EventType = 'single' | 'double' | 'toggle';

export interface EventInterval {
    value?: ioBroker.StateValue;
    /** offset to the event start, in ms */
    timeOffset?: number;
}

export interface CalendarEventNative {
    id?: number;
    /** cron expression; mutually exclusive with `start` */
    cron?: string;
    /** ISO local time (`2017-09-12T12:12:00`); mutually exclusive with `cron` */
    start?: string;
    astro?: AstroName;
    /** offset to the astro time, in minutes */
    offset?: number;
    type?: EventType;
    oid: string;
    startValue: ioBroker.StateValue;
    intervals?: EventInterval[];
    states?: Record<string, string>;
    /** random jitter in ms */
    timeRandomOffset?: number;
    /** @deprecated events created by older versions stored the color here instead of in `common` */
    color?: string;
    durationEditable?: boolean;
    record?: {
        states: string[];
        enums: string[][];
        start: string | null;
        end: string | null;
    };
}

export interface CalendarEventCommon {
    name: string;
    enabled?: boolean;
    color?: string;
    icon?: string;
}

/** A calendar event as stored in the objects DB (`type: 'schedule'`) */
export interface CalendarEvent {
    _id: string;
    type: 'schedule';
    common: CalendarEventCommon;
    native: CalendarEventNative;
}

export type SimulationStatus = 'record' | 'stop' | 'pause' | 'play';

export interface SimulationNative {
    interval: 'day' | 'week';
    record: {
        /** written as `Date.now()` / `new Date(...)`, read back as whatever JSON made of it */
        start: string | number | Date | null;
        end: string | number | Date | null;
        states: string[];
        enums: string[][];
        enumsExceptions: string[];
    };
    play?: {
        start?: string;
        end?: string;
        dow?: number[];
    };
    events: CalendarEvent[];
}

/** A simulation as stored in the objects DB (a state object with the recorded events in `native`) */
export interface Simulation {
    _id: string;
    type: 'state';
    common: ioBroker.StateCommon;
    native: SimulationNative;
}

function oneCron2Array(str: string): CronField {
    if (str === '*' || str === '?' || str === '') {
        return str;
    }

    const parts = str.split(',');
    const result: number[] = [];
    for (let p = 0; p < parts.length; p++) {
        const m = parts[p].match(/(\d+)-(\d+)/);
        if (m) {
            for (let mm = parseInt(m[1], 10); mm <= parseInt(m[2], 10); mm++) {
                result.push(mm);
            }
        } else {
            result.push(parseInt(parts[p], 10));
        }
    }

    return result;
}

function cron2obj(str: string, date?: string): CronObject {
    const cron = {} as CronObject;
    // date can be 2016-08-07T45:45:35
    if (date) {
        const b = date.split(/\D/);
        cron.seconds = [parseInt(b[5], 10)]; // 0 - 59
        cron.minutes = [parseInt(b[4], 10)]; // 0 - 59
        cron.hours = [parseInt(b[3], 10)]; // 0 - 23
        cron.dates = [parseInt(b[2], 10)]; // 1 - 31
        cron.months = [parseInt(b[1], 10)]; // 1 - 12
        cron.dows = '?'; // 0 - 6
    } else {
        const parts = str.replace(/\s\s/g, ' ').replace(/\s\s/g, ' ').split(' ');
        if (parts.length === 6) {
            cron.seconds = oneCron2Array(parts[0]); // 0 - 59
            cron.minutes = oneCron2Array(parts[1]); // 0 - 59
            cron.hours = oneCron2Array(parts[2]); // 0 - 23
            cron.dates = oneCron2Array(parts[3]); // 1 - 31
            cron.months = oneCron2Array(parts[4]); // 1 - 12
            cron.dows = oneCron2Array(parts[5]); // 0 - 6
        } else {
            cron.seconds = [0]; // 0 - 59
            cron.minutes = oneCron2Array(parts[0]); // 0 - 59
            cron.hours = oneCron2Array(parts[1]); // 0 - 23
            cron.dates = oneCron2Array(parts[2]); // 1 - 31
            cron.months = oneCron2Array(parts[3]); // 1 - 12
            cron.dows = oneCron2Array(parts[4]); // 0 - 6
        }
    }

    return cron;
}

function array2oneCron(obj: CronField | number | string): string {
    if (obj === '*' || obj === '?') {
        return obj;
    }
    if (typeof obj === 'string') {
        obj = parseInt(obj, 10);
    }
    if (typeof obj !== 'object') {
        obj = [obj];
    }

    obj.sort((a, b) => a - b);

    if (obj.length < 3) {
        return obj.join(',');
    }

    const newObj: (number | string)[] = [];
    let start = obj[0];
    let end = obj[0];

    for (let i = 1; i < obj.length; i++) {
        if (obj[i] === end + 1) {
            end++;
        } else {
            if (start !== end) {
                if (start + 1 === end) {
                    newObj.push(`${start},${end}`);
                } else {
                    newObj.push(`${start}-${end}`);
                }
            } else {
                newObj.push(start);
            }
            start = obj[i];
            end = obj[i];
        }
    }

    if (start !== end) {
        if (start + 1 === end) {
            newObj.push(`${start},${end}`);
        } else {
            newObj.push(`${start}-${end}`);
        }
    } else {
        newObj.push(start);
    }

    return newObj.join(',');
}

function obj2cron(cron: Partial<CronObject>): string {
    const parts: string[] = [];
    if (cron.seconds) {
        parts.push(array2oneCron(cron.seconds));
    }
    parts.push(array2oneCron(cron.minutes!));
    parts.push(array2oneCron(cron.hours!));
    parts.push(array2oneCron(cron.dates!));
    parts.push(array2oneCron(cron.months!));
    parts.push(array2oneCron(cron.dows!));
    // if (parts[0] === '0') parts.shift();
    return parts.join(' ');
}

function serverDateToClient(
    dateString: string | Date,
    format: 'cron' | 'date',
    // kept for the (currently disabled) time zone correction below
    _serverTimeZone?: number,
): Date | null {
    if (dateString instanceof Date) {
        return format === 'date' ? new Date(dateString) : null;
    }
    if (format === 'cron') {
        const cronObject = cron2obj(dateString);
        const date = new Date();
        date.setHours((cronObject.hours as number[])[0]);
        date.setMinutes((cronObject.minutes as number[])[0]);
        date.setSeconds((cronObject.seconds as number[])[0]);
        if (Array.isArray(cronObject.dows)) {
            date.setDate(date.getDate() + cronObject.dows[0] - date.getDay());
        }
        // date = new Date(date.getTime() - (date.getTimezoneOffset() - serverTimeZone) * 60000);
        return date;
    }

    if (format === 'date') {
        return new Date(dateString);
        // dateString += 'Z';
        // return new Date(new Date(dateString).getTime() + serverTimeZone * 60000);
    }
    return null;
}

function clientDateToServer(date: Date, format: 'cron', serverTimeZone?: number): Partial<CronObject>;
function clientDateToServer(date: Date, format: 'date', serverTimeZone?: number): string;
function clientDateToServer(
    date: Date,
    format: 'cron' | 'date',
    // kept for the (currently disabled) time zone correction below
    _serverTimeZone?: number,
): Partial<CronObject> | string | null {
    if (format === 'cron') {
        date = new Date(date.getTime() /* + (date.getTimezoneOffset() - serverTimeZone) * 60000 */);
        return {
            minutes: [date.getMinutes()],
            hours: [date.getHours()],
        };
    }
    if (format === 'date') {
        date = new Date(date.getTime() - new Date().getTimezoneOffset() * 60000 /* - serverTimeZone * 60000 */);
        const dateStr = date.toISOString();
        return dateStr.substring(0, dateStr.length - 5);
    }
    return null;
}

const objCache: Record<string, ioBroker.Object | null> = {};

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

function buildOverlap(
    enumIds: string[],
    enumObjs: Record<string, ioBroker.EnumObject | null | undefined>,
    exceptions: string[],
): string[] {
    // const states = selectedEnums.map(id => objects[id]?.common?.members);
    const groups: Record<string, string[]> = {};
    enumIds.forEach(enumId => {
        const parts = enumId.split('.');
        const categoryType = parts[1];
        groups[categoryType] = groups[categoryType] || [];
        if (enumObjs[enumId]) {
            enumObjs[enumId].common?.members?.forEach(
                id => !exceptions.includes(id) && !groups[categoryType].includes(id) && groups[categoryType].push(id),
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

function getIcon(id: string): string | undefined {
    const obj = objCache[id];
    if (obj) {
        if (obj.common?.icon) {
            return obj.common.icon;
        }
        if (obj.type === 'state' || obj.type === 'channel') {
            // get parent
            let parts = id.split('.');
            parts.pop();
            let parentId = parts.join('.');

            let parent = objCache[parentId];
            if (parent?.common?.icon) {
                return parent.common.icon;
            }
            if (parent?.type === 'channel') {
                // get parent
                parts = id.split('.');
                parts.pop();
                parentId = parts.join('.');
                parent = objCache[parentId];
                if (parent?.common?.icon) {
                    return parent.common.icon;
                }
            }
        }
    }

    return undefined;
}

async function getCachedObject(id: string, socket: SocketLike): Promise<ioBroker.Object | null> {
    if (objCache[id] === undefined) {
        try {
            objCache[id] = (await socket.getObject(id)) || null;
        } catch {
            // ignore
        }
        objCache[id] = objCache[id] || null;
    }
    return objCache[id];
}

async function getIconAsync(id: string, socket: SocketLike): Promise<string | null | undefined> {
    let obj = await getCachedObject(id, socket);
    if (obj) {
        if (obj.common?.icon) {
            if (obj.common.iconConverted) {
                return obj.common.icon;
            }
            return Utils.getObjectIcon(obj);
        }
        if (obj.type === 'state' || obj.type === 'channel') {
            // get parent
            let parts = id.split('.');
            parts.pop();
            let parentId = parts.join('.');
            obj = await getCachedObject(parentId, socket);

            if (obj?.common?.icon) {
                if (obj.common.iconConverted) {
                    return obj.common.icon;
                }
                return Utils.getObjectIcon(obj);
            }
            if (obj?.type === 'channel') {
                // get parent
                parts = id.split('.');
                parts.pop();
                parentId = parts.join('.');
                obj = await getCachedObject(parentId, socket);
                if (obj?.common?.icon) {
                    if (obj.common.iconConverted) {
                        return obj.common.icon;
                    }
                    return Utils.getObjectIcon(obj);
                }
            }
        }
    }

    return undefined;
}

export {
    cron2obj,
    obj2cron,
    serverDateToClient,
    clientDateToServer,
    getIcon,
    getIconAsync,
    IGNORE_STATES,
    buildOverlap,
    getCachedObject,
};
