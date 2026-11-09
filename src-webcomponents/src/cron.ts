/**
 * The cron expressions of repeated events, as the widgets write them: `<s> <m> <h> <dates> <months> <dows>`, or
 * without the seconds. Taken over from `src-widgets/src/Component/Utils.ts`, which cannot be imported here: it
 * imports `@iobroker/gui-components`.
 */

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

function oneCron2Array(str: string | undefined): CronField {
    if (str === undefined || str === '*' || str === '?' || str === '') {
        return str ?? '';
    }

    const result: number[] = [];
    for (const part of str.split(',')) {
        const m = part.match(/(\d+)-(\d+)/);
        if (m) {
            for (let mm = parseInt(m[1], 10); mm <= parseInt(m[2], 10); mm++) {
                result.push(mm);
            }
        } else {
            result.push(parseInt(part, 10));
        }
    }

    return result;
}

/**
 * The fields of a cron expression
 *
 * @param str the expression, with or without the seconds
 */
export function cron2obj(str: string): CronObject {
    const parts = str.trim().split(/\s+/);
    if (parts.length === 6) {
        return {
            seconds: oneCron2Array(parts[0]),
            minutes: oneCron2Array(parts[1]),
            hours: oneCron2Array(parts[2]),
            dates: oneCron2Array(parts[3]),
            months: oneCron2Array(parts[4]),
            dows: oneCron2Array(parts[5]),
        };
    }
    return {
        seconds: [0],
        minutes: oneCron2Array(parts[0]),
        hours: oneCron2Array(parts[1]),
        dates: oneCron2Array(parts[2]),
        months: oneCron2Array(parts[3]),
        dows: oneCron2Array(parts[4]),
    };
}

/**
 * A field of a cron expression: `*` for a wildcard, else the numbers with ranges, e.g. `1-5,7`
 *
 * @param field the field
 */
export function array2oneCron(field: CronField): string {
    if (field === '*' || field === '?' || field === '') {
        return field || '*';
    }
    const values = [...new Set(field)].sort((a, b) => a - b);
    if (values.length < 3) {
        return values.join(',');
    }

    const result: string[] = [];
    let start = values[0];
    let end = values[0];
    const flush = (): void => {
        if (start === end) {
            result.push(start.toString());
        } else if (start + 1 === end) {
            result.push(`${start},${end}`);
        } else {
            result.push(`${start}-${end}`);
        }
    };
    for (let i = 1; i < values.length; i++) {
        if (values[i] === end + 1) {
            end++;
        } else {
            flush();
            start = values[i];
            end = values[i];
        }
    }
    flush();

    return result.join(',');
}

/**
 * The cron expression of the fields, with the seconds
 *
 * @param cron the fields
 */
export function obj2cron(cron: CronObject): string {
    return [cron.seconds, cron.minutes, cron.hours, cron.dates, cron.months, cron.dows].map(array2oneCron).join(' ');
}

function matches(field: CronField, value: number): boolean {
    return Array.isArray(field) ? field.includes(value) : true;
}

/**
 * Whether the event of a cron expression is on this day: its month, its day of the month and its day of the week
 * match (`*` and `?` match everything)
 *
 * @param cron the fields
 * @param day the day
 */
export function isCronDay(cron: CronObject, day: Date): boolean {
    const dow = day.getDay();
    return (
        matches(cron.months, day.getMonth() + 1) &&
        matches(cron.dates, day.getDate()) &&
        // cron takes 7 for Sunday as well
        (matches(cron.dows, dow) || (dow === 0 && matches(cron.dows, 7)))
    );
}

/**
 * The first number of a field, or `fallback` for a wildcard
 *
 * @param field the field
 * @param fallback for `*`, `?` and empty
 */
export function firstOf(field: CronField, fallback: number): number {
    return Array.isArray(field) && field.length && !isNaN(field[0]) ? field[0] : fallback;
}

/**
 * Parses a list of numbers like `1, 15, 20-31`
 *
 * @param text the list
 * @param min the smallest number allowed
 * @param max the biggest number allowed
 * @returns the numbers, or null if the text is no such list
 */
export function parseNumberList(text: string, min: number, max: number): number[] | null {
    const result: number[] = [];
    for (const part of text.split(/[,;\s]+/).filter(Boolean)) {
        const m = part.match(/^(\d+)(?:-(\d+))?$/);
        if (!m) {
            return null;
        }
        const from = parseInt(m[1], 10);
        const to = m[2] ? parseInt(m[2], 10) : from;
        if (from < min || to > max || from > to) {
            return null;
        }
        for (let i = from; i <= to; i++) {
            result.push(i);
        }
    }
    return result.length ? [...new Set(result)].sort((a, b) => a - b) : null;
}
