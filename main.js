/* jshint -W097 */
/* jshint strict:false */
/* jslint node:true */
'use strict';

// you have to require the utils module and call adapter function
var utils     = require(__dirname + '/lib/utils'); // Get common adapter utils
var timeUtils = require(__dirname + '/admin/utils.js');
var adapter   = new utils.Adapter('fullcalendar');
var later     = require('later');
var SunCalc   = require(__dirname + '/admin/suncalc.js');
var events;
var nextTimer;
var systemConfig;

adapter.on('objectChange', function (id, obj) {
    if (!id) return;

    if (id === 'system.config') {
        if (obj) systemConfig = obj;

        if (systemConfig.common.latitude  === undefined || systemConfig.common.latitude  === null ||
            systemConfig.common.longitude === undefined || systemConfig.common.longitude === null) {
            adapter.log.warn('Please specify longitude and latitude in system settings, elsewise astro events will not work');
        }

        calculateNext();
        return;
    }

    if (events[id]) {
        stopEvent(events[id]);
        delete events[id];
    }
    if (obj) {
        events[id] = checkEvent(obj);
    }
    calculateNext();
});

adapter.on('ready', main);

function stopEvent(event) {
    if (event.timer) {
        clearTimeout(event.timer);
        event.timer = null;
    }
}

function executeEvent(event, now) {
    adapter.log.debug('executeEvent[' + event.common.name + ']: ' + JSON.stringify(event.native));
    event.lastExec = now || new Date().getTime();
    adapter.getForeignObject(event.native.oid, function (err, obj) {
        if (!obj) {
            adapter.log.warn('Object "' + event.native.oid + '" does not exist!');
            return;
        }
        if (event.native.type !== 'single' && event.native.intervals && event.native.intervals.length) {
            event.timer = setTimeout(function (_event, _obj) {
                if (_event.native.type === 'toggle') {
                    var value = _event.native.startValue;
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

var YYYY_MM_            = 'YYYY_MM_'.length;
var YYYY_MM_DDTHH_mm    = 'YYYY_MM_DDTHH_mm'.length;
var YYYY_MM_DDTHH_mm_ss = 'YYYY_MM_DDTHH_mm_ss'.length;
var DDTHH_mm_ss         = 'DDTHH_mm_ss'.length;

function calculateNext() {
    if (nextTimer) clearTimeout(nextTimer);

    var timeout = null;
    var nowObj  = new Date();
    var nowStr  = timeUtils.toLocalTime(nowObj);
    var nowTick = nowObj.getTime();
    var diff;

    for (var id in events) {
        if (!events.hasOwnProperty(id) || !events[id].common.enabled) continue;
        var event = events[id];

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
            var date = later.schedule(event.parsed).next();

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
                var nextTick = date.getTime();

                diff = nextTick - nowTick;
                if (diff > 0 && (timeout === null || diff < timeout)) {
                    timeout = diff;
                }
            }
        } else { // once
            // expected 2017-09-12T12:12:00
            var time;
            if (event.native.astro) {
                time = timeUtils.getAstroTime(event.native.astro, event.native.offset, timeUtils.parseISOLocal(event.native.start), SunCalc, systemConfig);
            } else {
                time = timeUtils.parseISOLocal(event.native.start);
            }

            if (!time) continue;

            if (nowObj.getFullYear() === time.getFullYear() &&
                nowObj.getMonth()    === time.getMonth()    &&
                nowObj.getDate()     === time.getDate()     &&
                nowObj.getHours()    === time.getHours()    &&
                nowObj.getMinutes()  === time.getMinutes()  &&
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
        } else
        if (event.native.start.length > YYYY_MM_DDTHH_mm_ss) {
            event.native.start = event.native.start.substring(0, YYYY_MM_DDTHH_mm_ss);
        }
    }
    return event;
}

function main() {
    later.date.localTime();
    adapter.objects.getObjectView('schedule', 'schedule', {startkey: adapter.namespace + '.', endkey: adapter.namespace + '.\u9999'}, function (err, res) {
        events = {};
        if (!err && res) {
            for (var i = 0; i < res.rows.length; i++) {
                if (res.rows[i].id === 'schedules') continue;
                events[res.rows[i].value._id] = checkEvent(res.rows[i].value);
            }
        }
        adapter.getForeignObject('system.config', function (err, obj) {
            systemConfig = obj;
            if (systemConfig.common.latitude  === undefined || systemConfig.common.latitude  === null ||
                systemConfig.common.longitude === undefined || systemConfig.common.longitude === null) {
                adapter.log.warn('Please specify longitude and latitude in system settings, elsewise astro events will not work');
            }

            adapter.subscribeObjects('*');
            adapter.subscribeForeignObjects('system.config');
            calculateNext();
        });
    });
}