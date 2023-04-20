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

const configuredEvents  = [];
const cfgEventsSettings = {};
const allEvents         = [];
const names             = {};
let rooms               = {};
let funcs               = {};
const recordingSimulations = {};
const enums = {};
const subscribed = [];

function subscribeUnsubscribe() {
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

    // subscribe new
    toSubscribe.forEach(state => {
        if (!subscribed.includes(state)) {
            subscribed.push(state);
            adapter.subscribeForeignStates(state);
            adapter.log.debug(`+ Subscribed to ${state}`);
        }
    });

    // unsubscribe old
    subscribed.forEach(state => {
        const pos = subscribed.indexOf(state);
        if (pos === -1) {
            subscribed.splice(pos, 1);
            adapter.unsubscribeForeignStates(state);
            adapter.log.debug(`- Unsubscribed to ${state}`);
        }
    });
}

const stopRecordSimulation = async id => {
    recordingSimulations[id].value = 'stop';
    subscribeUnsubscribe();
}

function collectAllStates(id) {
    recordingSimulations[id].allStates = [...recordingSimulations[id].native.record.states];

    const enumList = recordingSimulations[id].native.record.enums;
    // combine all states
    if (enumList) {
        for (const k in enumList) {
            const enumStates = enumList[k].map(id => (enums[id] && enums[id].common && enums[id].common.members) || []);
            let intersection = [];
            enumStates.forEach((s, i) => {
                if (intersection.length || i) {
                    intersection = intersection.filter(i => s.includes(i));
                } else {
                    intersection = s;
                }
            });
            recordingSimulations[id].allStates.push(...intersection);
        }
    }
    recordingSimulations[id].allStates.sort();
    // remove duplicates
    recordingSimulations[id].allStates = recordingSimulations[id].allStates.filter((item, pos) => recordingSimulations[id].allStates.indexOf(item) === pos);
}

async function startRecordSimulation(id) {
    if (!recordingSimulations[id]) {
        recordingSimulations[id] = await adapter.getForeignObjectAsync(id);
        recordingSimulations[id].value = await adapter.getForeignStateAsync(id);
    }

    collectAllStates(id);

    if (recordingSimulations[id].native.record.start >= Date.now() || recordingSimulations[id].native.record.end < Date.now()) {
        adapter.setForeignState(id, 'stop');
        recordingSimulations[id].value = 'stop';
        return;
    }

    subscribeUnsubscribe();
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
        subscribeUnsubscribe();
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

            if (stateId.startsWith('system.')) {
                return;
            }

            const ids = Object.keys(recordingSimulations);
            for (let i = 0; i < ids.length; i++) {
                const simulation = recordingSimulations[ids[i]];
                if (simulation.allStates.includes(stateId) && simulation.value === 'record') {
                    // read current simulation
                    const profile = await adapter.getForeignObjectAsync(simulation._id);

                    // add new event
                    const date = new Date();
                    let dow = date.getDay() === 0 ? 7 : date.getDay();
                    if (profile.native.interval === 'day') {
                        dow = '0-6';
                    }
                    const cron = `* ${date.getMinutes()} ${date.getHours()} ? * ${dow}`;
                    profile.native.events.push({
                        _id: `${simulation._id}.event-${uuidv4()}`,
                        common: {
                            name: stateId,
                            enabled: true,
                        },
                        native: {
                            id: Date.now(),
                            cron,
                            type: 'single',
                            oid: stateId,
                            startValue: state.val,
                            color: '#3A87AD',
                        },
                        type: 'schedule',
                    });

                    adapter.log.debug(`Add event to simulation "${simulation.common.name}": ${stateId} => ${state.val}`);

                    // save simulation
                    await adapter.setForeignObjectAsync(simulation._id, profile);
                }
            }

            // if (adapter.config.allEventsEnabled || adapter.config.cfgEventsEnabled) {
            //     const {name, id} = await getStateName(stateId, state);
            //     if (adapter.config.allEventsEnabled) {
            //         if (adapter.config.ackType === 'true' && !state.ack) {
            //             return;
            //         }
            //         if (adapter.config.ackType === 'false' && state.ack) {
            //             return;
            //         }
            //         const cfgA = {id, val: state.val, ack: state.ack, ts: state.ts, name};
            //         allEvents.push(cfgA);
            //         if (allEvents.length > adapter.config.allEventsMax) {
            //             allEvents.slice(allEvents.length - adapter.config.allEventsMax);
            //         }
            //         await adapter.setStateAsync('info.lastEvent', JSON.stringify(cfgA), true);
            //     }
            //
            //     if (adapter.config.cfgEventsEnabled && cfgEventsSettings[id]) {
            //         if (cfgEventsSettings[id].ackType === 'true' && !state.ack) {
            //             return;
            //         }
            //         if (cfgEventsSettings[id].ackType === 'false' && state.ack) {
            //             return;
            //         }
            //         const cfgE = {id, val: state.val, ack: state.ack, ts: state.ts, name};
            //         configuredEvents.push(cfgE);
            //         if (configuredEvents.length > adapter.config.cfgEventsMax) {
            //             configuredEvents.slice(configuredEvents.length - adapter.config.cfgEventsMax);
            //         }
            //         await adapter.setStateAsync('info.lastConfiguredEvent', JSON.stringify(cfgE), true);
            //     }
            // }
        }
    });

    adapter.on('ready', () => main(adapter));

    // adapter.on('message', async obj => {
    //     if (obj && obj.callback) {
    //         switch (obj.command) {
    //             case 'getAll':
    //                 adapter.sendTo(obj.from, obj.command, allEvents, obj.callback);
    //                 break;
    //
    //             case 'getConfigured':
    //                 adapter.sendTo(obj.from, obj.command, configuredEvents, obj.callback);
    //                 break;
    //
    //             case 'recordSimulation':
    //                 startRecordSimulation(obj.message);
    //                 break;
    //
    //             case 'stopRecordSimulation':
    //                 stopRecordSimulation(obj.message.id);
    //                 break;
    //
    //             case 'pauseRecordSimulation':
    //                 adapter.setForeignState(obj.message.id, 'pause');
    //                 break;
    //
    //             case 'resumeRecordSimulation':
    //                 adapter.setForeignState(obj.message.id, 'record');
    //                 break;
    //
    //             case 'playSimulation': {
    //                     adapter.setForeignState(obj.message.id, 'play');
    //                     const profile = await adapter.getForeignObjectAsync(obj.message.id);
    //                     profile.native.events.forEach(event => {
    //                         event.simulationStart = obj.message.options.start && new Date(obj.message.options.start);
    //                         event.simulationEnd = obj.message.options.end && new Date(obj.message.options.end);
    //                         event.simulationDow = obj.message.options.dow;
    //                         events[event._id] = event;
    //                         names[event._id] = event.common.name;
    //                     });
    //                     calculateNext();
    //                 }
    //                 break;
    //
    //             case 'stopPlaySimulation': {
    //                     const profile = await adapter.getForeignObjectAsync(obj.message.id);
    //                     profile.native.events.forEach(event => {
    //                         if (events[event._id]) {
    //                             stopEvent(events[event._id]);
    //                             delete events[event._id];
    //                         }
    //                     });
    //                     adapter.setForeignState(obj.message.id, 'stop');
    //                 }
    //                 break;
    //         }
    //     }
    // });

    adapter.on('unload', callback => {
        updateInterval && clearTimeout(updateInterval);
        updateInterval= null;
        callback();
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
            if (obj) {
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
                subscribeUnsubscribe();
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

    adapter.on('unload', callback => {
        timeZoneInterval && clearInterval(timeZoneInterval);
        timeZoneInterval = null;
        callback && callback();
    });

    return adapter;
}

async function getStateName(id, state) {
    if (names[id]) {
        return {name: names[id], id};
    } else {
        const obj = await adapter.getForeignObjectAsync(id)
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
    let obj;
    try {
        obj = await  adapter.getForeignObjectAsync(event.native.oid);
    } catch (e) {
        // ignore
    }
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

async function afterMain() {
    await readEnums();
    await adapter.subscribeObjectsAsync('*'); // subscribe on own events and simulations
    calculateNext();

    const ids = Object.keys(cfgEventsSettings);
    for (let i = 0; i < ids.length; i++) {
        await adapter.subscribeForeignStatesAsync(ids[i]);
    }
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
    } catch (e) {
        adapter.log.error(`Cannot read system.config: ${e}`);
    }

    // if (adapter.config.cfgEventsEnabled) {
    //     try {
    //         const result = await adapter.getObjectViewAsync('system', 'custom', {startkey: '', endkey: '\u9999'});
    //         if (result) {
    //             for (let i = 0; i < result.rows.length; i++) {
    //                 const customObj = result.rows[i].value;
    //                 if (customObj[adapter.namespace] && customObj[adapter.namespace].enabled) {
    //                     cfgEventsSettings[result.rows[i].id] = customObj[adapter.namespace];
    //                 }
    //             }
    //         }
    //     } catch (e) {
    //         adapter.log.error(`Cannot read custom config: ${e}`);
    //     }
    // }

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

    await afterMain();
}

// If started as allInOne mode => return function to create instance
if (module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}
