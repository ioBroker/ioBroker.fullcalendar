import SunCalc from 'suncalc2';

/** Names of the astro times supported by suncalc2 */
export type AstroName = keyof ReturnType<typeof SunCalc.getTimes>;

/** Date object => 2017-01-09T12:23:33 local time */
export function toLocalTime(date: Date): string {
    const y = date.getFullYear();
    const M = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    const h = pad(date.getHours());
    const m = pad(date.getMinutes());
    const s = pad(date.getSeconds());
    return `${y}-${M}-${d}T${h}:${m}:${s}`;
}

/** Date object => 12:23:33 local time */
export function toLocalTimeString(date: Date): string {
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

/** 08:00:00 => 8 * 60 */
export function toDaySeconds(time: string): number {
    const parts = time.split(':');
    const pos = parts[0].indexOf('T');
    if (pos !== -1) {
        parts[0] = parts[0].substring(pos);
    }
    const h = parseInt(parts[0], 10);
    const m = parts[1] !== undefined ? parseInt(parts[1], 10) : 0;
    const s = parts[2] !== undefined ? parseInt(parts[2], 10) : 0;
    return (h * 3600 + m * 60 + s) % (3600 * 24);
}

/** 2017-01-09T12:23:33 local time => Date object */
export function parseISOLocal(s: string): Date {
    const b = s.split(/\D/);
    return new Date(
        parseInt(b[0], 10),
        parseInt(b[1], 10) - 1,
        parseInt(b[2], 10),
        parseInt(b[3], 10),
        parseInt(b[4], 10),
        parseInt(b[5], 10),
    );
}

/** 8 * 60 => 08:00:00 */
export function secondsToTime(daySeconds: number): string {
    const h = Math.floor(daySeconds / 3600);
    const m = (daySeconds % 3600) / 60;
    const s = daySeconds % 60;
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

/** if 08:00 or 08:00:00 */
export function isTimeString(str: string): boolean {
    return /^\d+:\d+(?::\d+\.?(?:\d{3})?)?$/.test(str);
}

/** Date Object, '08:00:00' => 2015-09-10T08:00:00 local time */
export function getTime(date: Date, time: string): string | null {
    const m = pad(date.getMonth() + 1);
    const d = pad(date.getDate());

    const parts = time.split(':');
    if (parts[0].includes('T')) {
        const pparts = parts[0].split('T');
        parts[0] = pparts[1];
        if (parseInt(pparts[0], 10) !== parseInt(d, 10)) {
            return null;
        }
    }
    if (parts[0].length < 2) {
        parts[0] = `0${parts[0]}`;
    }
    if (parts[1] !== undefined && parts[1].length < 2) {
        parts[1] = `0${parts[1]}`;
    }
    if (parts[2] !== undefined && parts[2].length < 2) {
        parts[2] = `0${parts[2]}`;
    }
    if (parts[1] === undefined) {
        parts[1] = '00';
    }
    if (parts[2] === undefined) {
        parts[2] = '00';
    }

    return `${date.getFullYear()}-${m}-${d}T${parts[0]}:${parts[1]}:${parts[2]}`;
}

export function getAstroTime(
    astro: AstroName,
    offset: number | undefined,
    date: Date | string | number,
    _SunCalc: typeof SunCalc | undefined,
    _systemConfig: ioBroker.SystemConfigObject,
    _adapterConfig: ioBroker.InstanceObject,
): Date | null {
    let _date = new Date(date);
    _date.setHours(0);
    _date.setMilliseconds(0);
    _date.setSeconds(0);
    _date.setMinutes(-_date.getTimezoneOffset());

    if (
        _systemConfig.common.latitude === undefined ||
        _systemConfig.common.latitude === null ||
        _systemConfig.common.longitude === undefined ||
        _systemConfig.common.longitude === null
    ) {
        return null;
    }

    const times = (_SunCalc || SunCalc).getTimes(
        _date,
        (_adapterConfig.native.latitude as number) || _systemConfig.common.latitude,
        (_adapterConfig.native.longitude as number) || _systemConfig.common.longitude,
    );
    _date = times[astro];
    if (offset) {
        _date.setMinutes(_date.getMinutes() + offset);
    }
    return _date;
}

function pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
}
