// Date object => 2017-01-09T12:23:33 local time
function toLocalTime(date) {
    var y = date.getFullYear();
    var M = date.getMonth() + 1;
    if (M < 10) M = '0' + M;
    var d = date.getDate();
    if (d < 10) d = '0' + d;
    var h = date.getHours();
    if (h < 10) h = '0' + h;
    var m = date.getMinutes();
    if (m < 10) m = '0' + m;
    var s = date.getSeconds();
    if (s < 10) s = '0' + s;
    return y + '-' + M + '-' + d + 'T' + h + ':' + m + ':' + s;
}

// Date object => 12:23:33 local time
function toLocalTimeString(date) {
    var h = date.getHours();
    if (h < 10) h = '0' + h;
    var m = date.getMinutes();
    if (m < 10) m = '0' + m;
    var s = date.getSeconds();
    if (s < 10) s = '0' + s;
    return h + ':' + m + ':' + s;
}

// 08:00:00 => 8 * 60
function toDaySeconds(time) {
    var parts = time.split(':');
    var pos;
    if ((pos = parts[0].indexOf('T')) !== -1) {
        parts[0] = parts[0].substring(pos);
    }
    var h = parseInt(parts[0], 10);
    var m = (parts[1] !== undefined) ? parseInt(parts[1], 10) : 0;
    var s = (parts[2] !== undefined) ? parseInt(parts[2], 10) : 0;
    return (h * 3600 + m * 60 + s) % (3600 * 24);
}

// 2017-01-09T12:23:33 local time => Date object
function parseISOLocal(s) {
    if (!s.split) debugger;
    var b = s.split(/\D/);
    return new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
}

// 8 * 60 => 08:00:00
function secondsToTime(daySeconds) {
    var h = Math.floor(daySeconds / 3600);
    var m = (daySeconds % 3600) / 60;
    var s = (daySeconds % 60);
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    return h + ':' + m + ':' + s;
}

// if 08:00 or 08:00:00
function isTimeString(str) {
    return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(str);
}

// Date Object , '08:00:00' => 2015-09-10T08:00:00 local time
function getTime(date, time) {
    var m = date.getMonth() + 1;
    if (m < 10) m = '0' + m;
    var d = date.getDate();
    if (d < 10) d = '0' + d;

    if (typeof time === 'string') {
        var parts = time.split(':');
        if (parts[0].indexOf('T') !== -1) {
            var pparts = parts[0].split('T');
            parts[0] = pparts[1];
            if (parseInt(pparts[0], 10) !== parseInt(d, 10)) {
                return null;
            }
        }
        if (parts[0].length < 2) parts[0] = '0' + parts[0];
        if (parts[1] !== undefined && parts[1].length < 2) parts[1] = '0' + parts[1];
        if (parts[2] !== undefined && parts[2].length < 2) parts[2] = '0' + parts[2];
        if (parts[1] === undefined) parts[1] = '00';
        if (parts[2] === undefined) parts[2] = '00';
        time = parts[0] + ':' + parts[1] + ':' + parts[2];
    }

    return date.getFullYear() + '-' + m + '-' + d + 'T' + time;
}

if (typeof module !== 'undefined' && module.parent) {
    module.exports = {
        toLocalTime:       toLocalTime,
        toDaySeconds:      toDaySeconds,
        parseISOLocal:     parseISOLocal,
        secondsToTime:     secondsToTime,
        getTime:           getTime,
        isTimeString:      isTimeString,
        toLocalTimeString: toLocalTimeString
    };
}