/* jshint -W097 */
/* jshint strict:false */
/* jslint node:true */
'use strict';

// you have to require the utils module and call adapter function
const utils       = require('@iobroker/adapter-core'); // Get common adapter utils
const adapterName = require('./package.json').name.split('.').pop();
const timeUtils   = require('./admin/utils.js');
const later       = require('later');
const SunCalc     = require('./admin/suncalc.js');
let adapter;

let events;
let nextTimer;
let systemConfig;

const configuredEvents  = [];
const cfgEventsSettings = {};
const allEvents         = [];
const names             = {};
let rooms               = {};
let funcs               = {};

function startAdapter(options) {
    options = options || {};
    options = Object.assign({}, options, {name: adapterName});

    adapter = new utils.Adapter(options);
    adapter.on('stateChange', (id, state) => {
        if (id && state) {
            if (id.match('^system\.')) return;
            if (adapter.config.allEventsEnabled || adapter.config.cfgEventsEnabled) {
                getStateName(id, state, (name, id, state) => {
                    if (adapter.config.allEventsEnabled) {
                        if (adapter.config.ackType === 'true' && !state.ack) {
                            return;
                        }
                        if (adapter.config.ackType === 'false' && state.ack) {
                            return;
                        }
                        const cfgA = {id: id, val: state.val, ack: state.ack, ts: state.ts, name: name};
                        allEvents.push(cfgA);
                        if (allEvents.length > adapter.config.allEventsMax) {
                            allEvents.slice(allEvents.length - adapter.config.allEventsMax);
                        }
                        adapter.setState('info.lastEvent', JSON.stringify(cfgA), true);
                    }

                    if (adapter.config.cfgEventsEnabled) {
                        if (cfgEventsSettings[id]) {
                            if (cfgEventsSettings[id].ackType === 'true' && !state.ack) {
                                return;
                            }
                            if (cfgEventsSettings[id].ackType === 'false' && state.ack) {
                                return;
                            }
                            const cfgE = {id: id, val: state.val, ack: state.ack, ts: state.ts, name: name};
                            configuredEvents.push(cfgE);
                            if (configuredEvents.length > adapter.config.cfgEventsMax) {
                                configuredEvents.slice(configuredEvents.length - adapter.config.cfgEventsMax);
                            }
                            adapter.setState('info.lastConfiguredEvent', JSON.stringify(cfgE), true);
                        }
                    }
                });
            }
        }
    });

    adapter.on('ready', () => main(adapter));

    adapter.on('message', obj => {
        if (obj && obj.callback) {
            switch (obj.command) {
                case 'getAll':
                    adapter.sendTo(obj.from, obj.command, allEvents, obj.callback);
                    break;

                case 'getConfigured':
                    adapter.sendTo(obj.from, obj.command, configuredEvents, obj.callback);
                    break;
            }
        }
    });

    adapter.on('objectChange', (id, obj) => {
        if (!id) return;

        if (id === 'system.config') {
            if (obj) systemConfig = obj;

            if (systemConfig.common.latitude === undefined || systemConfig.common.latitude === null ||
                systemConfig.common.longitude === undefined || systemConfig.common.longitude === null) {
                adapter.log.warn('Please specify longitude and latitude in system settings, elsewise astro events will not work');
            }

            calculateNext();
            return;
        }


        if (id.substring(0, adapter.namespace.length + 1) !== adapter.namespace + '.') return;

        if (events[id]) {
            stopEvent(events[id]);
            delete events[id];
        }

        if (names[id]) {
            delete names[id];
            if (obj) {
                getStateName(id);
            }
        }

        if (obj) {
            events[id] = checkEvent(obj);
        }
        calculateNext();
    });

    return adapter;
}

function getStateName(id, state, callback) {
    if (names[id]) {
        let name = names[id];
        if (state) {
            name += ' = ' + state.val;
        }

        callback && callback(names[id], id, state);
    } else {
        adapter.getForeignState(id, (err, obj) => {
            const enums = getRoomFunc(id);
            if (enums.func && enums.room) {
                names[id] = enums.func + ' / ' + enums.room;
            } else if (obj && obj.common && obj.common.name) {
                names[id] = obj.common.name;
            }

            let name = names[id] || id;
            if (state) {
                name += ' = ' + state.val;
                // generate for window/door/light/dimmer automatically opened/closed/set to
            }
            callback && callback(name, id, state);
        });
    }
}

function stopEvent(event) {
    if (event.timer) {
        clearTimeout(event.timer);
        event.timer = null;
    }
}

function executeEvent(event, now) {
    adapter.log.debug('executeEvent[' + event.common.name + ']: ' + JSON.stringify(event.native));
    event.lastExec = now || new Date().getTime();
    adapter.getForeignObject(event.native.oid, (err, obj) => {
        if (!obj) {
            adapter.log.warn('Object "' + event.native.oid + '" does not exist!');
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
                            adapter.log.warn('Cannot detect toggle value for string: ' + value + ' in ' + _obj._id);
                            return;
                        }
                    }
                    adapter.setForeignState(_obj._id, value);
                } else {
                    if (_obj.common.type === 'number') {
                        if (typeof event.native.intervals[0].value !== 'number') {
                            event.native.intervals[0].value = parseFloat(_event.native.endValue);
                        }
                    } else if (obj.common.type === 'boolean') {
                        if (typeof _event.native.intervals[0].value !== 'boolean') {
                            event.native.intervals[0].value = event.native.intervals[0].value === 'true' || event.native.intervals[0].value === '1' || event.native.intervals[0].value === 1 || event.native.intervals[0].value === 'on' || event.native.intervals[0].value === 'ON';
                        }
                    } else if (obj.common.type === 'string') {
                        if (typeof event.native.intervals[0].value !== 'string') {
                            event.native.intervals[0].value = event.native.intervals[0].value.toString();
                        }
                    }
                    adapter.setForeignState(_obj._id, event.native.intervals[0].value);
                }
            }, parseInt(event.native.intervals[0].timeOffset, 10), event, obj)
        }

        if (obj.common.type === 'number') {
            if (typeof event.native.startValue !== 'number') {
                event.native.startValue = parseFloat(event.native.startValue);
            }
        } else if (obj.common.type === 'boolean') {
            if (typeof event.native.startValue !== 'boolean') {
                event.native.startValue = event.native.startValue === 'true' || event.native.startValue === '1' || event.native.startValue === 1 || event.native.startValue === 'on' || event.native.startValue === 'ON';
            }
        } else if (obj.common.type === 'string') {
            if (typeof event.native.startValue !== 'string') {
                event.native.startValue = event.native.startValue.toString();
            }
        }
        adapter.setForeignState(obj._id, event.native.startValue);
    });
}

const YYYY_MM_            = 'YYYY_MM_'.length;
const YYYY_MM_DDTHH_mm    = 'YYYY_MM_DDTHH_mm'.length;
const YYYY_MM_DDTHH_mm_ss = 'YYYY_MM_DDTHH_mm_ss'.length;
const DDTHH_mm_ss         = 'DDTHH_mm_ss'.length;

function calculateNext() {
    nextTimer && clearTimeout(nextTimer);

    let timeout = null;
    const nowObj  = new Date();
    const nowTick = nowObj.getTime();
    let diff;

    for (const id in events) {
        if (!events.hasOwnProperty(id) || !events[id].common.enabled) continue;
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
                date = timeUtils.getAstroTime(event.native.astro, event.native.offset, date, SunCalc, systemConfig);
            }

            if (date) {
                diff = date.getTime() - nowTick;
                if (diff >= -2000 && diff < 2000) {
                    executeEvent(event, nowTick);
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
                time = timeUtils.getAstroTime(event.native.astro, event.native.offset, timeUtils.parseISOLocal(event.native.start), SunCalc, systemConfig);
            } else {
                time = timeUtils.parseISOLocal(event.native.start);
            }

            if (!time) continue;

            if (nowObj.getFullYear() === time.getFullYear() &&
                nowObj.getMonth() === time.getMonth() &&
                nowObj.getDate() === time.getDate() &&
                nowObj.getHours() === time.getHours() &&
                nowObj.getMinutes() === time.getMinutes() &&
                (Math.abs(nowObj.getSeconds() - time.getSeconds()) < 2) &&
                (!event.lastExec || nowTick - event.lastExec > 1999)) {
                executeEvent(event, nowTick);
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
    adapter.log.debug('Next check in ' + Math.round(timeout / 1000) + ' seconds');
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
        if (funcs[r].common.members.includes(id)) {
            func = funcs[r].common.name || r.substring('enum.functions.'.length);
            break;
        }
    }
    return {func, room};
}

function readEnums(cb) {
    adapter.getObjectView('system', 'enum', {
        startkey: 'enum.rooms.',
        endkey: 'enum.rooms.\u9999'
    }, (err, res) => {
        rooms = {};
        for (let r = 0; r < res.rows.length; r++) {
            if (res.rows[r].value && res.rows[r].value.common && res.rows[r].value.members) {
                rooms[res.rows[r].id] = res.rows[r].value;
            }
        }
        adapter.getObjectView('system', 'enum', {
            startkey: 'enum.functions.',
            endkey: 'enum.functions.\u9999'
        }, (err, res) => {
            funcs = {};
            for (let r = 0; r < res.rows.length; r++) {
                if (res.rows[r].value && res.rows[r].value.common && res.rows[r].value.members) {
                    funcs[res.rows[r].id] = res.rows[r].value;
                }
            }

            cb && cb();
        });
    });
}

function afterMain(count) {
    readEnums(() => {
        adapter.subscribeObjects('*');
        calculateNext();

        if (count > 100 || adapter.config.allEventsEnabled) {
            adapter.subscribeForeignStates('*');
        } else {
            for (const id in cfgEventsSettings) {
                cfgEventsSettings.hasOwnProperty(id) && adapter.subscribeForeignStates(id);
            }
        }
    });
}

function main() {
    later.date.localTime();

    adapter.getObjectView('schedule', 'schedule', {
        startkey: adapter.namespace + '.',
        endkey: adapter.namespace + '.\u9999'
    }, (err, res) => {
        events = {};
        if (!err && res) {
            for (let i = 0; i < res.rows.length; i++) {
                if (res.rows[i].id === 'schedules') {
                    continue;
                }
                events[res.rows[i].value._id] = checkEvent(res.rows[i].value);
            }
        }
        adapter.getForeignObject('system.config', (err, obj) => {
            systemConfig = obj;
            if (systemConfig.common.latitude === undefined || systemConfig.common.latitude === null ||
                systemConfig.common.longitude === undefined || systemConfig.common.longitude === null) {
                adapter.log.warn('Please specify longitude and latitude in system settings, elsewise astro events will not work');
            }

            if (adapter.config.cfgEventsEnabled) {
                adapter.getObjectView('system', 'custom', {startkey: '', endkey: '\u9999'}, (err, res) => {
                    let count = 0;
                    if (!err && res) {
                        for (let i = 0; i < res.rows.length; i++) {
                            if (res.rows[i].value[adapter.namespace] && res.rows[i].value[adapter.namespace].enabled) {
                                cfgEventsSettings[res.rows[i].id] = res.rows[i].value;
                                count++;
                            }
                        }
                    }
                    afterMain(count);
                });
            } else {
                afterMain(0);
            }
        });
    });
}

// If started as allInOne mode => return function to create instance
if (module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}
