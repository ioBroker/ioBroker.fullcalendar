function sortNumbers(a, b) {
    return a - b;
}

function oneCron2Array(str) {
    if (str === '*' || str === '?' || str === '') {
        return str;
    }

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
    const parts = [];
    if (cron.seconds) {
        parts.push(array2oneCron(cron.seconds));
    }
    parts.push(array2oneCron(cron.minutes));
    parts.push(array2oneCron(cron.hours));
    parts.push(array2oneCron(cron.dates));
    parts.push(array2oneCron(cron.months));
    parts.push(array2oneCron(cron.dows));
    // if (parts[0] === '0') parts.shift();
    return parts.join(' ');
}

function serverDateToClient(dateString, format /* , serverTimeZone */) {
    if (format === 'cron') {
        const cronObject = cron2obj(dateString);
        const date = new Date();
        date.setHours(cronObject.hours[0], cronObject.minutes[0]);
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

function clientDateToServer(date, format /* , serverTimeZone */) {
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

const objCache = {};

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

function buildOverlap(enumIds, enumObjs, exceptions) {
    // const states = selectedEnums.map(id => objects[id]?.common?.members);
    const groups = {};
    enumIds.forEach(enumId => {
        const parts = enumId.split('.');
        const categoryType = parts[1];
        groups[categoryType] = groups[categoryType] || [];
        if (enumObjs[enumId]) {
            enumObjs[enumId].common?.members?.forEach(id => !exceptions.includes(id) && !groups[categoryType].includes(id) && groups[categoryType].push(id));
        }
    });

    let intersection = [];
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

function getIcon(id) {
    if (objCache[id]) {
        if (objCache[id].common?.icon) {
            return objCache[id].common?.icon;
        }
        if (objCache[id].type === 'state' || objCache[id].type === 'channel') {
            // get parent
            let parts = id.split('.');
            parts.pop();
            let parentId = parts.join('.');

            if (objCache[parentId] && objCache[parentId].common?.icon) {
                return objCache[parentId].common?.icon;
            }
            if (objCache[parentId] && objCache[parentId].type === 'channel') {
                // get parent
                parts = id.split('.');
                parts.pop();
                parentId = parts.join('.');
                if (objCache[parentId] && objCache[parentId].common?.icon) {
                    return objCache[parentId].common?.icon;
                }
            }
        }
    }

    return undefined;
}

async function getCachedObject(id, socket) {
    if (objCache[id] === undefined) {
        try {
            objCache[id] = await socket.getObject(id);
        } catch (e) {
            // ignore
        }
        objCache[id] = objCache[id] || null;
    }
    return objCache[id];
}

export {
    cron2obj,
    obj2cron,
    serverDateToClient,
    clientDateToServer,
    getIcon,
    IGNORE_STATES,
    buildOverlap,
    getCachedObject,
};
