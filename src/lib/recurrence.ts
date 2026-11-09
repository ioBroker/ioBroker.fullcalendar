/**
 * Recurring events for the `addEvent` message: `recurring: 'daily' | 'weekly' | 'monthly' | 'yearly'` or an iCal
 * `rrule` (`FREQ=YEARLY`) become a cron in the format the GUI writes, so the event can be edited there:
 * `0 30 7 ? * 0-6` (daily), `0 30 7 ? * 1,3` (weekly), `0 30 7 15 1-12 *` (monthly), `0 30 7 15 6 *` (yearly).
 * The scheduler drops the seconds field, recurring events run at whole minutes.
 */

export type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

export const FREQUENCIES: Frequency[] = ['daily', 'weekly', 'monthly', 'yearly'];

export interface Recurrence {
    freq: Frequency;
    /** 0 = Sunday … 6 = Saturday */
    weekdays?: number[];
    /** 1 … 31 */
    monthDays?: number[];
    /** 1 … 12 */
    months?: number[];
}

const WEEKDAYS: Record<string, number> = {
    su: 0,
    so: 0,
    sun: 0,
    sunday: 0,
    sonntag: 0,
    mo: 1,
    mon: 1,
    monday: 1,
    montag: 1,
    tu: 2,
    di: 2,
    tue: 2,
    tuesday: 2,
    dienstag: 2,
    we: 3,
    mi: 3,
    wed: 3,
    wednesday: 3,
    mittwoch: 3,
    th: 4,
    do: 4,
    thu: 4,
    thursday: 4,
    donnerstag: 4,
    fr: 5,
    fri: 5,
    friday: 5,
    freitag: 5,
    sa: 6,
    sat: 6,
    saturday: 6,
    samstag: 6,
};

/** Weekday as number (0 = Sunday, 7 is Sunday too) or name (`MO`, `Mon`, `monday`, `Montag`) */
function parseWeekday(value: unknown): number {
    if (typeof value === 'number' || (typeof value === 'string' && /^\d$/.test(value.trim()))) {
        const day = Number(value);
        if (Number.isInteger(day) && day >= 0 && day <= 7) {
            return day % 7;
        }
    } else if (typeof value === 'string' && WEEKDAYS[value.trim().toLowerCase()] !== undefined) {
        return WEEKDAYS[value.trim().toLowerCase()];
    }
    throw new Error(
        `Unknown weekday "${String(value)}" (use 0 = Sunday … 6 = Saturday, or MO, TU, WE, TH, FR, SA, SU)`,
    );
}

function parseNumbers(value: unknown, min: number, max: number, what: string): number[] {
    const list = Array.isArray(value) ? value : String(value).split(',');
    return list.map(item => {
        const num = Number(typeof item === 'string' ? item.trim() : item);
        if (!Number.isInteger(num) || num < min || num > max) {
            throw new Error(`Invalid ${what} "${String(item)}" (${min} … ${max})`);
        }
        return num;
    });
}

function parseWeekdays(value: unknown): number[] {
    const list = Array.isArray(value) ? value : String(value).split(',');
    const days = list.map(parseWeekday);
    return days.filter((day, i) => days.indexOf(day) === i).sort((a, b) => a - b);
}

/**
 * An iCal recurrence rule (`FREQ=WEEKLY;BYDAY=MO,WE`, also with a leading `RRULE:`). Supported: FREQ, BYDAY (plain
 * weekdays), BYMONTHDAY, BYMONTH, INTERVAL=1. A cron cannot express INTERVAL > 1, COUNT, UNTIL or "the 2nd Monday".
 *
 * @param rrule the rule
 */
export function parseRRule(rrule: string): Recurrence {
    const line = rrule
        .split(/\r?\n/)
        .map(l => l.trim())
        .find(l => /FREQ=/i.test(l));
    if (!line) {
        throw new Error(`"rrule" needs FREQ, e.g. "FREQ=YEARLY"`);
    }
    const parts: Record<string, string> = {};
    for (const part of line.replace(/^RRULE:/i, '').split(';')) {
        const [key, value] = part.split('=');
        if (key && value !== undefined) {
            parts[key.trim().toUpperCase()] = value.trim();
        }
    }
    const freq = parts.FREQ?.toLowerCase() as Frequency;
    if (!FREQUENCIES.includes(freq)) {
        throw new Error(`Unsupported FREQ "${parts.FREQ}" (supported: DAILY, WEEKLY, MONTHLY, YEARLY)`);
    }
    for (const key of Object.keys(parts)) {
        if (key === 'INTERVAL' && parts.INTERVAL === '1') {
            continue;
        }
        if (key === 'WKST') {
            continue;
        }
        if (!['FREQ', 'BYDAY', 'BYMONTHDAY', 'BYMONTH'].includes(key)) {
            throw new Error(
                `"${key}=${parts[key]}" is not supported in "rrule" (supported: FREQ, BYDAY, BYMONTHDAY, BYMONTH)`,
            );
        }
    }
    const rec: Recurrence = { freq };
    if (parts.BYDAY) {
        if (/[+-]?\d/.test(parts.BYDAY)) {
            throw new Error(`"BYDAY=${parts.BYDAY}" is not supported: only plain weekdays like MO,WE`);
        }
        rec.weekdays = parseWeekdays(parts.BYDAY);
    }
    if (parts.BYMONTHDAY) {
        rec.monthDays = parseNumbers(parts.BYMONTHDAY, 1, 31, 'day of month');
    }
    if (parts.BYMONTH) {
        rec.months = parseNumbers(parts.BYMONTH, 1, 12, 'month');
    }
    return rec;
}

/**
 * The recurrence of an `addEvent` message: `rrule`, or `recurring` (a frequency) with optional `weekdays`,
 * `monthDays` and `months`. `null` = a one-shot event.
 *
 * @param params the message
 */
export function parseRecurrence(params: Record<string, unknown>): Recurrence | null {
    const { recurring, rrule } = params;
    if (typeof rrule === 'string' && rrule.trim()) {
        return parseRRule(rrule);
    }
    if (recurring === undefined || recurring === null || recurring === false || recurring === '') {
        return null;
    }
    const freq = typeof recurring === 'string' ? (recurring.trim().toLowerCase() as Frequency) : null;
    if (!freq || !FREQUENCIES.includes(freq)) {
        throw new Error(
            `"recurring" must be one of ${FREQUENCIES.join(', ')} (or give an iCal "rrule" like "FREQ=YEARLY")`,
        );
    }
    const rec: Recurrence = { freq };
    if (params.weekdays !== undefined && params.weekdays !== null && params.weekdays !== '') {
        rec.weekdays = parseWeekdays(params.weekdays);
    }
    if (params.monthDays !== undefined && params.monthDays !== null && params.monthDays !== '') {
        rec.monthDays = parseNumbers(params.monthDays, 1, 31, 'day of month');
    }
    if (params.months !== undefined && params.months !== null && params.months !== '') {
        rec.months = parseNumbers(params.months, 1, 12, 'month');
    }
    return rec;
}

/**
 * The cron of a recurring event, in the format of the GUI. The time of day (and the day, if the recurrence does not
 * give one) is taken from `time`.
 *
 * @param rec the recurrence
 * @param time first execution, or any execution of the series
 */
export function recurrenceToCron(rec: Recurrence, time: Date): string {
    const at = `0 ${time.getMinutes()} ${time.getHours()}`;
    switch (rec.freq) {
        case 'daily':
            // FREQ=DAILY;BYDAY=MO,TU… is a weekly rule
            return `${at} ? * ${rec.weekdays?.length ? rec.weekdays.join(',') : '0-6'}`;
        case 'weekly':
            return `${at} ? * ${(rec.weekdays?.length ? rec.weekdays : [time.getDay()]).join(',')}`;
        case 'monthly':
            if (rec.weekdays?.length) {
                throw new Error('A monthly event on weekdays is not supported, give days of the month');
            }
            return `${at} ${(rec.monthDays?.length ? rec.monthDays : [time.getDate()]).join(',')} ${
                rec.months?.length ? rec.months.join(',') : '1-12'
            } *`;
        default:
            if (rec.weekdays?.length) {
                throw new Error('A yearly event on weekdays is not supported, give the day and the month');
            }
            return `${at} ${(rec.monthDays?.length ? rec.monthDays : [time.getDate()]).join(',')} ${(rec.months?.length
                ? rec.months
                : [time.getMonth() + 1]
            ).join(',')} *`;
    }
}
