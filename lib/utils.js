// Date object => 2017-01-09T12:23:33 local time
function toLocalTime(date) {
    const y = date.getFullYear();
    let M = date.getMonth() + 1;
    if (M < 10) M = `0${M}`;
    let d = date.getDate();
    if (d < 10) d = `0${d}`;
    let h = date.getHours();
    if (h < 10) h = `0${h}`;
    let m = date.getMinutes();
    if (m < 10) m = `0${m}`;
    let s = date.getSeconds();
    if (s < 10) s = `0${s}`;
    return `${y}-${M}-${d}T${h}:${m}:${s}`;
}

// Date object => 12:23:33 local time
function toLocalTimeString(date) {
    let h = date.getHours();
    if (h < 10) h = `0${h}`;
    let m = date.getMinutes();
    if (m < 10) m = `0${m}`;
    let s = date.getSeconds();
    if (s < 10) s = `0${s}`;
    return `${h}:${m}:${s}`;
}

// 08:00:00 => 8 * 60
function toDaySeconds(time) {
    const parts = time.split(':');
    let pos;
    if ((pos = parts[0].indexOf('T')) !== -1) {
        parts[0] = parts[0].substring(pos);
    }
    const h = parseInt(parts[0], 10);
    const m = (parts[1] !== undefined) ? parseInt(parts[1], 10) : 0;
    const s = (parts[2] !== undefined) ? parseInt(parts[2], 10) : 0;
    return (h * 3600 + m * 60 + s) % (3600 * 24);
}

// 2017-01-09T12:23:33 local time => Date object
function parseISOLocal(s) {
    if (!s.split) debugger;
    const b = s.split(/\D/);
    return new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
}

// 8 * 60 => 08:00:00
function secondsToTime(daySeconds) {
    let h = Math.floor(daySeconds / 3600);
    let m = (daySeconds % 3600) / 60;
    let s = daySeconds % 60;
    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;
    return `${h}:${m}:${s}`;
}

// if 08:00 or 08:00:00
function isTimeString(str) {
    return /^\d+:\d+(?::\d+\.?(?:\d{3})?)?$/.test(str);
}

// Date Object , '08:00:00' => 2015-09-10T08:00:00 local time
function getTime(date, time) {
    let m = date.getMonth() + 1;
    if (m < 10) {
        m = `0${m}`;
    }
    let d = date.getDate();
    if (d < 10) {
        d = `0${d}`;
    }

    if (typeof time === 'string') {
        const parts = time.split(':');
        if (parts[0].includes('T')) {
            const pparts = parts[0].split('T');
            parts[0] = pparts[1];
            if (parseInt(pparts[0], 10) !== parseInt(d, 10)) {
                return null;
            }
        }
        if (parts[0].length < 2) parts[0] = `0${parts[0]}`;
        if (parts[1] !== undefined && parts[1].length < 2) parts[1] = `0${parts[1]}`;
        if (parts[2] !== undefined && parts[2].length < 2) parts[2] = `0${parts[2]}`;
        if (parts[1] === undefined) parts[1] = '00';
        if (parts[2] === undefined) parts[2] = '00';
        time = `${parts[0]}:${parts[1]}:${parts[2]}`;
    }

    return `${date.getFullYear()}-${m}-${d}T${time}`;
}

function getAstroTime(astro, offset, date, _SunCalc, _systemConfig) {
    let _date = new Date(date);
    _date.setHours(0);
    _date.setMilliseconds(0);
    _date.setSeconds(0);
    _date.setMinutes(-_date.getTimezoneOffset());
    _systemConfig = _systemConfig || systemConfig;

    if (_systemConfig.common.latitude  === undefined || _systemConfig.common.latitude === null ||
        _systemConfig.common.longitude === undefined || _systemConfig.common.longitude === null) {
        return null;
    }

    const times = (_SunCalc || SunCalc).getTimes(_date, _systemConfig.common.latitude, _systemConfig.common.longitude);
    _date = times[astro];
    if (offset) {
        _date.setMinutes(_date.getMinutes() + offset);
    }
    return _date;
}

if (typeof module !== 'undefined' && module.parent) {
    module.exports = {
        toLocalTime:       toLocalTime,
        toDaySeconds:      toDaySeconds,
        parseISOLocal:     parseISOLocal,
        secondsToTime:     secondsToTime,
        getTime:           getTime,
        isTimeString:      isTimeString,
        toLocalTimeString: toLocalTimeString,
        getAstroTime:      getAstroTime
    };
}