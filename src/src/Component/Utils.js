function sortNumbers(a, b) {
    return a - b;
}

function oneCron2Array(str) {
    if (str === '*' || str === '?' || str === '') return str;

    const parts = str.split(',');
    const result = [];
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

function cron2obj(str, date) {
    const cron = {};
    // date can be 2016-08-07T45:45:35
    if (date) {
        const b = date.split(/\D/);
        cron.seconds     = [parseInt(b[5], 10)]; // 0 - 59
        cron.minutes     = [parseInt(b[4], 10)]; // 0 - 59
        cron.hours       = [parseInt(b[3], 10)]; // 0 - 23
        cron.dates       = [parseInt(b[2], 10)]; // 1 - 31
        cron.months      = [parseInt(b[1], 10)]; // 1 - 12
        cron.dows        = '?'; // 0 - 6
    } else {
        const parts = str.replace(/\s\s/g, ' ').replace(/\s\s/g, ' ').split(' ');
        if (parts.length === 6) {
            cron.seconds = oneCron2Array(parts[0]); // 0 - 59
            cron.minutes = oneCron2Array(parts[1]); // 0 - 59
            cron.hours   = oneCron2Array(parts[2]); // 0 - 23
            cron.dates   = oneCron2Array(parts[3]); // 1 - 31
            cron.months  = oneCron2Array(parts[4]); // 1 - 12
            cron.dows    = oneCron2Array(parts[5]); // 0 - 6
        } else {
            cron.seconds = [0];                     // 0 - 59
            cron.minutes = oneCron2Array(parts[0]); // 0 - 59
            cron.hours   = oneCron2Array(parts[1]); // 0 - 23
            cron.dates   = oneCron2Array(parts[2]); // 1 - 31
            cron.months  = oneCron2Array(parts[3]); // 1 - 12
            cron.dows    = oneCron2Array(parts[4]); // 0 - 6
        }
    }

    return cron;
}

function array2oneCron(obj) {
    if (obj === '*' || obj === '?') return obj;
    if (typeof obj === 'string') obj = parseInt(obj, 10);
    if (typeof obj !== 'object') obj = [obj];
    obj.sort(sortNumbers);
    if (obj.length < 3) return obj.join(',');

    const newObj = [];
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

function obj2cron(cron) {
    const parts = ['*', '*', '*', '*', '*', '?'];
    if (cron.seconds) {
        parts[0] = array2oneCron(cron.seconds);
    }
    parts[1] = array2oneCron(cron.minutes);
    parts[2] = array2oneCron(cron.hours);
    parts[3] = array2oneCron(cron.dates);
    parts[4] = array2oneCron(cron.months);
    parts[5] = array2oneCron(cron.dows);
    if (parts[0] === '0') parts.shift();
    return parts.join(' ');
}

function serverDateToClient(dateString, format, serverTimeZone) {
    if (format === 'cron') {
        const cronObject = cron2obj(dateString);
        let date = new Date();
        console.log(date.getTimezoneOffset());
        console.log(serverTimeZone);
        date.setHours(cronObject.hours[0], cronObject.minutes[0]);
        date = new Date(date.getTime() - (date.getTimezoneOffset() + serverTimeZone) * 60000);
        return date;
    }
    if (format === 'date') {
        dateString += 'Z';
        return new Date(new Date(dateString).getTime() - serverTimeZone * 60000);
    }
}

function clientDateToServer(date, format, serverTimeZone) {
    if (format === 'cron') {
        date = new Date(date.getTime() + (date.getTimezoneOffset() + serverTimeZone) * 60000);
        const cronObject = {
            minutes: [date.getMinutes()],
            hours: [date.getHours()],
        };
        return cronObject;
    }
    if (format === 'date') {
        date = new Date(date.getTime() + serverTimeZone * 60000);
        console.log(date);
        const dateStr = date.toISOString();
        console.log(dateStr);
        return dateStr.substring(0, dateStr.length - 5);
    }
}

export {
    cron2obj, obj2cron, serverDateToClient, clientDateToServer,
};
