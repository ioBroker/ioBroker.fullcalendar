// you have to require the utils module and call adapter function
const utils       = require('@iobroker/adapter-core'); // Get common adapter utils

const adapterName = require('./package.json').name.split('.').pop();
const timeUtils   = require('./lib/utils');
const later       = require('later');
const SunCalc     = require('suncalc2');
const uuidv4      = require('uuid').v4;
let adapter;

let events;
let nextTimer;
let systemConfig;
let adapterConfig;
let timeZoneInterval;
let updateInterval;
let language;

const names             = {};
let rooms               = {};
let funcs               = {};
const recordingSimulations = {};
const enums = {};
const subscribed = [];
const stateObjs = {};

const imageCache = {};

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
    'RESET_MOTION'
];

function t(word) {
    if (language === 'de') {
        return word === 'OFF' ? 'AUS' : 'EIN';
    } else if (language === 'ru') {
        return word === 'OFF' ? 'ВЫКЛ' : 'ВКЛ';
    } else if (language === 'pt') {
        return word === 'OFF' ? 'DESLIGADO' : 'LIGADO';
    } else if (language === 'nl') {
        return word === 'OFF' ? 'UIT' : 'AAN';
    } else if (language === 'fr') {
        return word === 'OFF' ? 'ÉTEINT' : 'ALLUMÉ';
    } else if (language === 'it') {
        return word === 'OFF' ? 'SPENTO' : 'ACCESO';
    } else if (language === 'es') {
        return word === 'OFF' ? 'APAGADO' : 'ENCENDIDO';
    } else if (language === 'pl') {
        return word === 'OFF' ? 'WYŁĄCZONY' : 'WŁĄCZONY';
    } else if (language === 'zh-cn') {
        return word === 'OFF' ? '关' : '开';
    } else if (language === 'uk') {
        return word === 'OFF' ? 'ВИМКНЕНО' : 'УВІМКНЕНО';
    } else {
        return word;
    }
}

async function subscribeUnsubscribe() {
    const toSubscribe = [];
    // collect all states
    Object.keys(recordingSimulations).forEach(id => {
        if (recordingSimulations[id].value === 'record') {
            recordingSimulations[id].allStates.forEach(state => {
                if (!toSubscribe.includes(state)) {
                    toSubscribe.push(state);
                }
            });
        }
    });

    for (let i = 0; i < toSubscribe.length; i++) {
        await getForeignObjectAsyncCached(toSubscribe[i]);
    }

    // subscribe new
    toSubscribe.forEach(state => {
        if (!subscribed.includes(state)) {
            subscribed.push(state);
            if (stateObjs[state]) {
                if (stateObjs[state].type === 'channel' || stateObjs[state].type === 'device') {
                    adapter.log.debug(`+ Subscribed to ${state}.*`);
                    adapter.subscribeForeignStates(`${state}.*`);
                } else if (stateObjs[state].type === 'state' && stateObjs[state].common && stateObjs[state].common.write !== false) {
                    adapter.log.debug(`+ Subscribed to ${state}`);
                    adapter.subscribeForeignStates(state);
                } else {
                    adapter.log.debug(`? Subscription to ${state} was ignored`);
                }
            }
        }
    });

    // unsubscribe old
    subscribed.forEach(state => {
        const pos = subscribed.indexOf(state);
        if (pos === -1) {
            subscribed.splice(pos, 1);
            if (stateObjs[state].type === 'channel' || stateObjs[state].type === 'device') {
                adapter.log.debug(`- Unsubscribed from ${state}.*`);
                adapter.unsubscribeForeignStates(`${state}.*`);
            } else if (stateObjs[state].type === 'state' && stateObjs[state].common && stateObjs[state].common.write !== false) {
                adapter.log.debug(`- Unsubscribed from ${state}`);
                adapter.unsubscribeForeignStates(state);
            } else {
                adapter.log.debug(`? Unsubscription from ${state} was ignored`);
            }
        }
    });
}

const stopRecordSimulation = async id => {
    recordingSimulations[id].value = 'stop';
    await subscribeUnsubscribe();
}

function getObjectIcon(id, obj) {
    // If id is Object
    if (typeof id === 'object') {
        obj = id;
        id = obj._id;
    }

    if (obj && obj.common && obj.common.icon) {
        let icon = obj.common.icon;
        // If UTF-8 icon
        if (typeof icon === 'string' && icon.length <= 2) {
            return icon;
        } else
        if (icon.startsWith('data:image')) {
            return icon;
        } else {
            const parts = id.split('.');
            if (parts[0] === 'system') {
                icon = `adapter/${parts[2]}${icon.startsWith('/') ? '' : '/'}${icon}`;
            } else {
                icon = `adapter/${parts[0]}${icon.startsWith('/') ? '' : '/'}${icon}`;
            }

            icon = `../../${icon}`;
            return icon;
        }
    } else {
        return null;
    }
}

async function getImage(id) {
    let obj;
    if (typeof id === 'string') {
        if (imageCache[id] !== undefined) {
            return imageCache[id];
        }
        obj = await getForeignObjectAsyncCached(id);
    } else {
        obj = id;
    }
    if (obj) {
        const stateId = obj._id;
        if (imageCache[stateId] !== undefined) {
            return imageCache[stateId];
        }
        if (obj && obj.common && obj.common.icon) {
            imageCache[stateId] = getObjectIcon(obj);
            return imageCache[stateId];
        } else if (obj.type === 'state') {
            // get parent name
            let parts = obj._id.split('.');
            parts.pop();
            let parentId = parts.join('.');
            obj = await getForeignObjectAsyncCached(parentId);

            if (obj && obj.common && obj.common.icon) {
                imageCache[stateId] = getObjectIcon(obj);
                return imageCache[stateId];
            } else if (!obj || (obj.type === 'channel' || obj.type === 'device')) {
                parts = obj._id.split('.');
                parts.pop();
                parentId = parts.join('.');

                obj = await getForeignObjectAsyncCached(parentId);

                if (obj && obj.common && obj.common.icon) {
                    imageCache[stateId] = getObjectIcon(obj);
                    return imageCache[stateId];
                }
            }
        }
    }

    imageCache[id] = null;
    return null;
}

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

function collectAllStates(id) {
    recordingSimulations[id].allStates = recordingSimulations[id].native.record ? [...recordingSimulations[id].native.record.states] : [];
    const states = recordingSimulations[id].allStates;

    const lists = recordingSimulations[id].native.record?.enums || [];
    for (const list of lists) {
        const res = buildOverlap(
            list || [],
            enums,
            recordingSimulations[id].native.record?.enumsExceptions || []);
        res.forEach(id => !states.includes(id) && states.push(id));
    }

    return states;
}

async function startRecordSimulation(id) {
    if (!recordingSimulations[id]) {
        recordingSimulations[id] = await adapter.getForeignObjectAsync(id);
        recordingSimulations[id].value = await adapter.getForeignStateAsync(id);
    }

    collectAllStates(id);

    if (recordingSimulations[id].native.record.start >= Date.now() || recordingSimulations[id].native.record.end < Date.now()) {
        await adapter.setForeignStateAsync(id, 'stop');
        recordingSimulations[id].value = 'stop';
        return;
    }

    await subscribeUnsubscribe();
}

async function setSimulationStatus(id, value) {
    const oldValue = recordingSimulations[id].value;
    recordingSimulations[id].value = value;
    if (value === 'record') {
        await startRecordSimulation(id);
    } else if (value === 'stop') {
        if (oldValue === 'record') {
            await stopRecordSimulation(id);
        } else if (oldValue === 'play') {
            // stop playing
            recordingSimulations[id].native.events.forEach(event => {
                if (events[event._id]) {
                    stopEvent(events[event._id]);
                    delete events[event._id];
                }
            });
        }
    } else if (value === 'pause') {
        await subscribeUnsubscribe();
    } else if (value === 'play') {
        recordingSimulations[id].native.events.forEach(event => {
            event.simulationStart = recordingSimulations[id].native.play && new Date(recordingSimulations[id].native.play.start);
            event.simulationEnd = recordingSimulations[id].native.play.end && new Date(recordingSimulations[id].native.play.end);
            event.simulationDow = recordingSimulations[id].native.play.dow;
            events[event._id] = event;
            names[event._id] = event.common.name;
        });

        calculateNext();
    }
}

function getText(obj) {
    if (obj && obj.common && obj.common.name) {
        if (typeof obj.common.name === 'object') {
            return obj.common.name[language] || obj.common.name.en;
        }
        return obj.common.name;
    }
    return obj ? obj._id : '';
}

async function getForeignObjectAsyncCached(id) {
    if (stateObjs[id] === undefined) {
        try {
            stateObjs[id] = await adapter.getForeignObjectAsync(id);
        } catch (e) {
            adapter.log.warn(`Cannot read object ${id}: ${e}`);
        }
        stateObjs[id] = stateObjs[id] || null;
    }

    return stateObjs[id];
}

let lastEvent = {};

function startAdapter(options) {
    options = options || {};
    options = Object.assign({}, options, {name: adapterName});

    adapter = new utils.Adapter(options);
    adapter.on('stateChange', async (stateId, state) => {
        if (stateId && state) {
            if (stateId.startsWith(`${adapter.namespace}.Simulations.`)) {
                if (recordingSimulations[stateId] && recordingSimulations[stateId].value !== state.val) {
                    await setSimulationStatus(stateId, state.val);
                }

                return;
            }

            if (stateId.startsWith('system.') || stateId.startsWith('alexa2.') || IGNORE_STATES.find(s => stateId.endsWith(s))) {
                return;
            }

            // we can record only commands, as we must play back them later
            const ids = Object.keys(recordingSimulations);
            let stateObj;
            for (let i = 0; i < ids.length; i++) {
                const simulation = recordingSimulations[ids[i]];

                if (simulation.value === 'record') {
                    // find out if this state is recorded
                    const found = simulation.allStates.find(id => {
                        if (id === stateId) {
                            return true;
                        } else if (
                            stateId.startsWith(`${id}.`) &&
                            stateObjs[id] &&
                            (stateObjs[id].type === 'channel' || stateObjs[id].type === 'device')
                        ) {
                            return true;
                        }
                    });

                    if (!found) {
                        continue;
                    }

                    // read current simulation
                    const profile = await adapter.getForeignObjectAsync(simulation._id);

                    // add new event
                    const date = new Date();
                    let dow = date.getDay() === 0 ? 7 : date.getDay();
                    if (profile.native.interval === 'day') {
                        dow = '0-6';
                    }
                    const cron = `${date.getSeconds()} ${date.getMinutes()} ${date.getHours()} ? * ${dow}`;

                    // Get information about the object
                    stateObj = await getForeignObjectAsyncCached(stateId);

                    const name = getText(stateObj) || stateId;

                    if (stateObj.common.write === false) {
                        // adapter.log.warn(`Cannot record state "${name}/${stateId}" because it is read-only`);
                        continue;
                    }

                    const prevEvent = lastEvent[ids[i]];
                    lastEvent[ids[i]] = {id: stateId, value: state.val, ts: Date.now()};

                    // filter out same states
                    if (prevEvent && prevEvent.id === stateId && prevEvent.value === state.val && Date.now() - prevEvent.ts < 500) {
                        adapter.log.warn(`Ignore state "${name} / ${stateId}" because it is the same as last one (${state.val}, ${cron})`);
                        continue;
                    }

                    profile.native.events.push({
                        _id: `${simulation._id}.event-${uuidv4()}`,
                        common: {
                            name,
                            enabled: true,
                            icon: (await getImage(stateObj)) || undefined,
                            color: simulation.common.color || '#3A87AD',
                        },
                        native: {
                            id: Date.now(),
                            cron,
                            type: 'single',
                            oid: stateId,
                            startValue: state.val,
                            states: stateObj.common.states,
                        },
                        type: 'schedule',
                    });

                    adapter.log.debug(`Add event to simulation "${getText(simulation)}": ${name}/${stateId} => ${state.val}`);

                    // save simulation
                    await adapter.setForeignObjectAsync(simulation._id, profile);
                }
            }
        }
    });

    adapter.on('ready', () => main(adapter));

    adapter.on('unload', callback => {
        timeZoneInterval && clearInterval(timeZoneInterval);
        timeZoneInterval = null;

        updateInterval && clearInterval(updateInterval);
        updateInterval = null;
        if (nextTimer) {
            clearTimeout(nextTimer);
            nextTimer = null;
        }

        Object.keys(events).forEach(id => stopEvent(events[id]));

        callback && callback();
    });

    adapter.on('objectChange', async (id, obj) => {
        if (!id) {
            return;
        }

        // sync enums
        if (id.startsWith('enum.')) {
            if (obj) {
                enums[id] = obj;
                if (id.startsWith('enum.functions.')) {
                    funcs[id] = obj;
                } else if (id.startsWith('enum.rooms.')) {
                    rooms[id] = obj;
                }
            } else {
                if (funcs[id]) {
                    delete funcs[id];
                }
                if (rooms[id]) {
                    delete rooms[id];
                }
                delete enums[id];
            }

            return;
        }

        // ignore info states
        if (id.startsWith(`${adapter.namespace}.info.`)) {
            return;
        }

        if (id.startsWith(`${adapter.namespace}.Simulations.`)) {
            if (obj && obj.type === 'state') {
                recordingSimulations[id] = obj;
                collectAllStates(id);
                const _state = await adapter.getForeignStateAsync(id);
                if (_state && _state.val) {
                    recordingSimulations[id].value = _state.val;
                } else {
                    recordingSimulations[id].value = 'stop';
                }

                if (recordingSimulations[id].value === 'record') {
                    await startRecordSimulation(id);
                }
                await subscribeUnsubscribe();
            } else if (recordingSimulations[id]) {
                 await stopRecordSimulation(id);
                 delete recordingSimulations[id];
            }
            return;
        }

        if (id === 'system.config') {
            if (obj) {
                systemConfig = obj;
            }

            if (systemConfig.common.latitude === undefined || systemConfig.common.latitude === null ||
                systemConfig.common.longitude === undefined || systemConfig.common.longitude === null) {
                adapter.log.warn('Please specify longitude and latitude in system settings, else astro events will not work');
            }
            language = systemConfig.common.language;

            calculateNext();
            return;
        }

        if (!id.startsWith(`${adapter.namespace}.`)) {
            return;
        }

        if (events[id]) {
            stopEvent(events[id]);
            delete events[id];
        }

        if (names[id]) {
            delete names[id];
            if (obj) {
                // calculate new name and save it to cache
                await getStateName(id);
            }
        }

        if (obj) {
            events[id] = checkEvent(obj);
        }
        calculateNext();
    });

    return adapter;
}

async function getStateName(id, state) {
    if (names[id]) {
        return {name: names[id], id};
    } else {
        const obj = await getForeignObjectAsyncCached(id);
        const enums = getRoomFunc(id);
        if (enums.func && enums.room) {
            names[id] = `${enums.func} / ${enums.room}`;
        } else if (obj && obj.common && obj.common.name) {
            names[id] = obj.common.name;
        }

        let name = names[id] || id;
        if (state) {
            name += ` = ${state.val}`;
            // todo: generate for window/door/light/dimmer automatically opened/closed/set to
        }
        return {name, id};
    }
}

function stopEvent(event) {
    if (event.timer) {
        clearTimeout(event.timer);
        event.timer = null;
    }
}

async function executeEvent(event, now) {
    adapter.log.debug(`executeEvent[${event.common.name}]: ${JSON.stringify(event.native)}`);
    event.lastExec = now || new Date().getTime();
    const obj = await getForeignObjectAsyncCached(event.native.oid);

    if (!obj) {
        adapter.log.warn(`Object "${event.native.oid}" does not exist!`);
        return;
    }
    if (event.native.type !== 'single' && event.native.intervals && event.native.intervals.length) {
        event.timer = setTimeout((_event, _obj) => {
            if (_event.native.type === 'toggle') {
                let value = _event.native.startValue;
                if (_obj.common.type === 'number' || obj.common.type === 'boolean') {
                    value = !value;
                } else if (_obj.common.type === 'boolean') {
                    value = !value;
                } else if (_obj.common.type === 'string') {
                    if (_event.native.startValue === 'on') {
                        value = 'off';
                    } else if (_event.native.startValue === 'ON') {
                        value = 'OFF';
                    } else if (_obj.common.min && _obj.common.max) {
                        value = value === _obj.common.max ? _obj.common.min : obj.common.max;
                    } else {
                        // do nothing
                        adapter.log.warn(`Cannot detect toggle value for string: ${value} in ${_obj._id}`);
                        return;
                    }
                }
                adapter.setForeignState(_obj._id, value);
            } else {
                const interval = _event.native.intervals[0] || {};
                if (_obj.common.type === 'number') {
                    if (typeof interval.value !== 'number') {
                        interval.value = parseFloat(interval.value);
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
                        interval.value = interval.value.toString();
                    }
                }
                adapter.setForeignState(_obj._id, interval.value);
            }
        }, parseInt((event.native.intervals && event.native.intervals[0] && event.native.intervals[0].timeOffset) || 1000, 10), event, obj);
    }

    if (obj.common.type === 'number') {
        if (typeof event.native.startValue !== 'number') {
            event.native.startValue = parseFloat(event.native.startValue);
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
            event.native.startValue = event.native.startValue.toString();
        }
    }

    await adapter.setForeignStateAsync(obj._id, event.native.startValue);
}

// const YYYY_MM_            = 'YYYY_MM_'.length;
const YYYY_MM_DDTHH_mm    = 'YYYY_MM_DDTHH_mm'.length;
const YYYY_MM_DDTHH_mm_ss = 'YYYY_MM_DDTHH_mm_ss'.length;
// const DDTHH_mm_ss         = 'DDTHH_mm_ss'.length;

function calculateNext() {
    nextTimer && clearTimeout(nextTimer);

    let timeout = null;
    const nowObj  = new Date();
    const nowTick = nowObj.getTime();
    let diff;

    for (const id in events) {
        if (!events.hasOwnProperty(id) || !events[id].common.enabled) {
            continue;
        }
        const event = events[id];

        // if daily
        if (event.native.cron) {
            if (!event.parsed) {
                if (event.native.astro) {
                    // take last second of this day
                    event.parsed = later.parse.cron(event.native.cron.replace(/^\d\d? \d\d? /, '59 59 23 '), true);
                } else {
                    event.parsed = later.parse.cron(event.native.cron);
                }
            }
            let date = later.schedule(event.parsed).next();

            if (event.native.astro) {
                date = timeUtils.getAstroTime(event.native.astro, event.native.offset, date, SunCalc, systemConfig, adapterConfig);
            }

            if (date.simulationStart && date.simulationStart.getTime() > date.getTime()) {
                continue;
            }
            if (date.simulationEnd && date.simulationEnd.getTime() < date.getTime()) {
                continue;
            }
            if (date.simulationDow && date.simulationDow.indexOf(date.getDay()) === -1) {
                continue;
            }
            // console.log(date);

            if (event.native.timeRandomOffset) {
                date = new Date(date.getTime() + Math.round(Math.random() * event.native.timeRandomOffset * (Math.random() > 0.5 ? 1 : -1)));
            }

            if (date) {
                diff = date.getTime() - nowTick;
                if (diff >= -2000 && diff < 2000) {
                    executeEvent(event, nowTick)
                        .then(() => {});
                    date = later.schedule(event.parsed).next(1, new Date(nowTick + 2000));
                }

                // build date
                const nextTick = date.getTime();

                diff = nextTick - nowTick;
                if (diff > 0 && (timeout === null || diff < timeout)) {
                    timeout = diff;
                }
            }
        } else { // once
            // expected 2017-09-12T12:12:00
            let time;
            if (event.native.astro) {
                time = timeUtils.getAstroTime(event.native.astro, event.native.offset, timeUtils.parseISOLocal(event.native.start), SunCalc, systemConfig, adapterConfig);
            } else {
                time = timeUtils.parseISOLocal(event.native.start);
            }

            if (!time) {
                continue;
            }

            // console.log(time);

            if (nowObj.getFullYear() === time.getFullYear() &&
                nowObj.getMonth() === time.getMonth() &&
                nowObj.getDate() === time.getDate() &&
                nowObj.getHours() === time.getHours() &&
                nowObj.getMinutes() === time.getMinutes() &&
                (Math.abs(nowObj.getSeconds() - time.getSeconds()) < 2) &&
                (!event.lastExec || nowTick - event.lastExec > 1999)
            ) {
                executeEvent(event, nowTick)
                    .then(() => {});
            } else {
                time = time.getTime();

                diff = time - nowTick;
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
    adapter.log.debug(`Next check in ${Math.round(timeout / 1000)} seconds`);
    nextTimer = setTimeout(calculateNext, timeout);
}

function checkEvent(event) {
    if (event.native.start) {
        if (event.native.start.length === YYYY_MM_DDTHH_mm) {
            event.native.start += ':00';
        } else if (event.native.start.length > YYYY_MM_DDTHH_mm_ss) {
            event.native.start = event.native.start.substring(0, YYYY_MM_DDTHH_mm_ss);
        }
    }

    return event;
}

function getRoomFunc(id) {
    let room = '';
    for (const r in rooms) {
        if (room.hasOwnProperty(r) && rooms[r].common.members.includes(id)) {
            room = rooms[r].common.name || r.substring('enum.rooms.'.length);
            break;
        }
    }
    let func = '';
    for (const f in funcs) {
        if (funcs[f].common.members.includes(id)) {
            func = funcs[f].common.name || f.substring('enum.functions.'.length);
            break;
        }
    }
    return {func, room};
}

async function readEnums() {
    rooms = {};
    Object.keys(enums).filter(id => id.startsWith('enum.rooms.')).forEach(id => rooms[id] = enums[id]);

    funcs = {};
    Object.keys(enums).filter(id => id.startsWith('enum.functions.')).forEach(id => funcs[id] = enums[id]);
}

function setTimeZone() {
    adapter.setState('info.timeZone', new Date().getTimezoneOffset(), true);
    // because of winter time, update timezone every 30 minutes
    timeZoneInterval = timeZoneInterval || setInterval(() => setTimeZone, 30000);
}

async function main() {
    later.date.localTime();

    setTimeZone();

    const result = await adapter.getObjectViewAsync('system', 'enum', {startkey: 'enum.', endkey: 'enum.\u9999'});
    if (result) {
        for (let i = 0; i < result.rows.length; i++) {
            if (result.rows[i].value && result.rows[i].value.common && result.rows[i].value.common.members) {
                enums[result.rows[i].id] = result.rows[i].value;
            }
        }
    }
    await adapter.subscribeForeignObjectsAsync('enum.*');

    // fix old design
    const design = await adapter.getForeignObjectAsync('_design/schedule');
    if (!design || !design.views || !design.views.schedule || design.views.schedule.map !== 'function(doc) { if (doc.type === \'schedule\') emit(doc._id, doc); }') {
        await adapter.setForeignObjectAsync('_design/schedule', {
            language: 'javascript',
            views: {
                schedule: {
                    map: 'function(doc) { if (doc.type === \'schedule\') emit(doc._id, doc); }',
                },
            },
        });

        // restart instance
        const aObj = await adapter.getForeignObjectAsync(`system.adapter.${adapter.namespace}`);
        await adapter.setForeignObjectAsync(aObj._id, aObj);
        return;
    }

    events = {};

    try {
        const res = await adapter.getObjectViewAsync('schedule', 'schedule', {
            startkey: `${adapter.namespace}.`,
            endkey: `${adapter.namespace}.\u9999`,
        });

        if (res) {
            for (let i = 0; i < res.rows.length; i++) {
                const schedule = res.rows[i].value;
                events[schedule._id] = checkEvent(schedule);
            }
        }
    } catch (e) {
        adapter.log.error(`Cannot read schedules: ${e}`);
    }

    try {
        systemConfig = await adapter.getForeignObjectAsync('system.config');
        adapterConfig = await adapter.getForeignObjectAsync(`system.adapter.fullcalendar.${adapter.instance}`);
        if (systemConfig.common.latitude === undefined || systemConfig.common.latitude === null ||
            systemConfig.common.longitude === undefined || systemConfig.common.longitude === null) {
            adapter.log.warn('Please specify longitude and latitude in system settings, else astro events will not work');
        }
        language = systemConfig.common.language;
    } catch (e) {
        adapter.log.error(`Cannot read system.config: ${e}`);
    }

    // read possible simulations
    const res = await adapter.getObjectViewAsync('system', 'state', {
        startkey: `${adapter.namespace}.Simulations.`,
        endkey: `${adapter.namespace}.Simulations.\u9999`,
    });

    for (let i = 0; i < res.rows.length; i++) {
        const id = res.rows[i].id;
        recordingSimulations[id] = res.rows[i].value;
        collectAllStates(id);
        const value = await adapter.getForeignStateAsync(id);
        if (value && value.val) {
            await setSimulationStatus(id, value.val);
        }
    }
    await adapter.subscribeForeignStatesAsync(`${adapter.namespace}.Simulations.*`); // subscribe on own events and simulations

    updateInterval = setInterval(() => {
        Object.keys(recordingSimulations).forEach(id => {
            if ((recordingSimulations[id].value === 'record' || recordingSimulations[id].value === 'pause') &&
                recordingSimulations[id].native.record.end < Date.now()
            ) {
                stopRecordSimulation(id);
            }
        });
    }, 60 * 1000); // every minute

    await readEnums();
    await adapter.subscribeObjectsAsync('*'); // subscribe on own events and simulations

    calculateNext();
}

// If started as allInOne mode => return function to create instance
if (module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}
