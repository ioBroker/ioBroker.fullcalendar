// The messages (addEvent, updateEvent, getEvent, deleteEvent, …) of the adapter, with an in-memory objects DB instead
// of js-controller: `@iobroker/adapter-core` is replaced before `build/main.js` is loaded.
// `npx mocha test/messages.engine.js --exit` after `npm run build-backend`.
const assert = require('node:assert/strict');
const { EventEmitter } = require('node:events');

const clone = obj => (obj === undefined || obj === null ? null : JSON.parse(JSON.stringify(obj)));

let db = {};
let states = {};

class Adapter extends EventEmitter {
    constructor(options) {
        super();
        this.name = options.name;
        this.namespace = `${options.name}.0`;
        this.log = { info: () => {}, warn: () => {}, error: () => {}, debug: () => {}, silly: () => {} };
    }
    async getForeignObjectAsync(id) {
        return clone(db[id]);
    }
    async setForeignObjectAsync(id, obj) {
        db[id] = { ...clone(obj), _id: id };
        return { id };
    }
    async extendForeignObjectAsync(id, part) {
        const obj = db[id] || { _id: id, common: {}, native: {} };
        obj.common = { ...obj.common, ...(part.common || {}) };
        obj.native = { ...obj.native, ...(part.native || {}) };
        db[id] = obj;
        return { id };
    }
    async delForeignObjectAsync(id) {
        delete db[id];
    }
    async getObjectViewAsync(_design, search, { startkey, endkey }) {
        return {
            rows: Object.values(db)
                .filter(obj => obj.type === search && obj._id >= startkey && obj._id <= endkey)
                .map(obj => ({ id: obj._id, value: clone(obj) })),
        };
    }
    async getForeignStateAsync(id) {
        return clone(states[id]);
    }
    async setStateAsync() {}
    async setStateChangedAsync() {}
    setState() {}
    sendTo(_from, _command, result, callback) {
        callback(result);
    }
    setTimeout(cb, ms, ...args) {
        return setTimeout(cb, ms, ...args);
    }
    clearTimeout(timer) {
        clearTimeout(timer);
    }
    setInterval(cb, ms, ...args) {
        return setInterval(cb, ms, ...args);
    }
    clearInterval(timer) {
        clearInterval(timer);
    }
}

require.cache[require.resolve('@iobroker/adapter-core')] = {
    id: require.resolve('@iobroker/adapter-core'),
    filename: require.resolve('@iobroker/adapter-core'),
    loaded: true,
    exports: { Adapter },
};
const createAdapter = require('../build/main');

// like onReady of the adapter
require('later').date.localTime();

const pad = n => String(n).padStart(2, '0');
const localTime = d =>
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
const inHours = h => {
    const d = new Date(Date.now() + h * 3600_000);
    d.setSeconds(0, 0);
    return d;
};

describe('messages', () => {
    let adapter;

    beforeEach(() => {
        db = {
            'test.0.lamp': { _id: 'test.0.lamp', type: 'state', common: { name: 'Lamp', type: 'boolean', write: true } },
            'test.0.level': { _id: 'test.0.level', type: 'state', common: { name: 'Level', type: 'number', write: true } },
            'test.0.sensor': { _id: 'test.0.sensor', type: 'state', common: { name: 'Sensor', type: 'number', write: false } },
            'fullcalendar.0.Calendars.Calendar-1': {
                _id: 'fullcalendar.0.Calendars.Calendar-1',
                type: 'folder',
                common: { name: 'Garden' },
                native: {},
            },
        };
        states = {};
        adapter = createAdapter({});
    });

    afterEach(() => adapter.onUnload(() => {}));

    // like the subscription of the adapter: the event object comes back to the scheduler
    const load = async id => adapter.onObjectChange(id, clone(db[id]));
    const send = (command, message) => new Promise(resolve => adapter.onMessage({ command, message, from: 'x', callback: resolve }));

    it('addEvent keeps type "double" with durationSec and endValue', async () => {
        const start = inHours(1);
        const res = await send('addEvent', {
            oid: 'test.0.lamp',
            value: true,
            start: localTime(start),
            type: 'double',
            durationSec: 60,
            endValue: false,
            name: 'Testlampe',
        });
        assert.equal(res.error, undefined, res.error);
        assert.equal(res.type, 'double');
        const native = db[res.id].native;
        assert.equal(native.type, 'double');
        assert.deepEqual(native.intervals, [{ value: false, timeOffset: 60000 }]);
        assert.equal(native.start, localTime(start));
    });

    it('updateEvent moves a one-shot event and keeps what it does', async () => {
        const { id } = await send('addEvent', { oid: 'test.0.lamp', value: true, in: '1h', duration: '5m' });
        const later = inHours(3);
        const res = await send('updateEvent', { id, start: localTime(later), name: 'Moved' });
        assert.equal(res.error, undefined, res.error);
        assert.equal(res.id, id);
        assert.equal(res.start, localTime(later));
        assert.equal(res.ts, later.getTime());
        const obj = db[id];
        assert.equal(obj.common.name, 'Moved');
        assert.equal(obj.native.start, localTime(later));
        assert.equal(obj.native.type, 'double');
        assert.deepEqual(obj.native.intervals, [{ value: false, timeOffset: 300000 }]);

        // "in" moves it too
        const moved = await send('updateEvent', { id, in: '30m' });
        assert.ok(Math.abs(moved.ts - (Date.now() + 1800_000)) < 2000);
    });

    it('updateEvent changes value, duration and type', async () => {
        const { id } = await send('addEvent', { oid: 'test.0.lamp', value: true, in: '1h', duration: 60 });
        // the other way round: the default end value follows
        await send('updateEvent', { id, value: false });
        assert.deepEqual(db[id].native.intervals, [{ value: true, timeOffset: 60000 }]);
        assert.equal(db[id].native.startValue, false);

        await send('updateEvent', { id, durationSec: 5 });
        assert.deepEqual(db[id].native.intervals, [{ value: true, timeOffset: 5000 }]);

        await send('updateEvent', { id, type: 'toggle' });
        assert.equal(db[id].native.type, 'toggle');
        assert.deepEqual(db[id].native.intervals, [{ timeOffset: 5000 }]);

        await send('updateEvent', { id, type: 'single' });
        assert.equal(db[id].native.type, 'single');
        assert.equal(db[id].native.intervals, undefined);

        const res = await send('updateEvent', { id, type: 'double' });
        assert.match(res.error, /needs "duration"/);

        // a number state with explicit end value
        const level = await send('addEvent', { oid: 'test.0.level', value: 80, in: '1h', duration: '10m', endValue: 0 });
        await send('updateEvent', { id: level.id, value: 50 });
        assert.deepEqual(db[level.id].native.intervals, [{ value: 0, timeOffset: 600000 }]);
    });

    it('updateEvent makes a series, changes its time of day and makes it a one-shot event again', async () => {
        const { id } = await send('addEvent', { oid: 'test.0.lamp', value: true, start: '2020-06-15T08:00', recurring: 'yearly' });
        assert.equal(db[id].native.cron, '0 0 8 15 6 *');

        // the time of day changes, the day stays
        let res = await send('updateEvent', { id, start: '09:15' });
        assert.equal(res.error, undefined, res.error);
        assert.equal(db[id].native.cron, '0 15 9 15 6 *');
        assert.equal(res.cron, '0 15 9 15 6 *');
        assert.ok(res.start.endsWith('-06-15T09:15:00'), res.start);

        // another recurrence at the current time of day
        res = await send('updateEvent', { id, recurring: 'weekly', weekdays: ['MO', 'FR'] });
        assert.equal(db[id].native.cron, '0 15 9 ? * 1,5');

        // a one-shot event again
        res = await send('updateEvent', { id, recurring: false, in: '2h' });
        assert.equal(res.error, undefined, res.error);
        assert.equal(db[id].native.cron, undefined);
        assert.ok(db[id].native.start);
        assert.equal(res.cron, undefined);

        res = await send('updateEvent', { id, recurring: false });
        assert.match(res.error, /Give "start"/);
    });

    it('updateEvent switches off, moves to another calendar and changes the state', async () => {
        const { id } = await send('addEvent', { oid: 'test.0.lamp', value: true, in: '1h' });
        let res = await send('updateEvent', { id, enabled: false });
        assert.equal(res.enabled, false);
        assert.equal(res.start, null);
        assert.equal(db[id].common.enabled, false);

        res = await send('updateEvent', { id, calendar: 'Garden', enabled: true });
        assert.ok(res.id.startsWith('fullcalendar.0.Calendars.Calendar-1.event-'));
        assert.equal(db[id], undefined);
        assert.equal(db[res.id].common.enabled, true);

        res = await send('updateEvent', { id: res.id, oid: 'test.0.level', value: 30 });
        assert.equal(db[res.id].native.oid, 'test.0.level');
        assert.equal(db[res.id].native.startValue, 30);

        assert.match((await send('updateEvent', { id: res.id, oid: 'test.0.sensor' })).error, /read-only/);
        assert.match((await send('updateEvent', { id: res.id, start: '2020-01-01T10:00' })).error, /in the past/);
        assert.match((await send('updateEvent', { id: 'fullcalendar.0.event-x' })).error, /does not exist/);
        assert.match((await send('updateEvent', { id: 'other.0.event-x' })).error, /no event of/);
    });

    it('getEvent, deleteEvent by name and list, getCommands, unknown command', async () => {
        const a = await send('addEvent', { oid: 'test.0.lamp', value: true, in: '1h', name: 'Birthday' });
        const b = await send('addEvent', { oid: 'test.0.lamp', value: true, in: '2h', name: 'birthday' });
        const c = await send('addEvent', { oid: 'test.0.lamp', value: true, in: '3h', name: 'Other' });
        for (const { id } of [a, b, c]) {
            await load(id);
        }

        const got = await send('getEvent', { id: a.id });
        assert.equal(got.event.name, 'Birthday');
        assert.equal(got.event.next, a.start);

        let res = await send('deleteEvent', { name: 'BIRTHDAY' });
        assert.deepEqual(res.deleted.sort(), [a.id, b.id].sort());
        res = await send('deleteEvent', { ids: [c.id, 'fullcalendar.0.event-gone'] });
        assert.deepEqual(res.deleted, [c.id]);
        assert.deepEqual(res.notFound, ['fullcalendar.0.event-gone']);

        const commands = await send('getCommands', {});
        assert.ok(commands.commands.find(cmd => cmd.command === 'updateEvent'));
        assert.match((await send('changeEvent', {})).error, /Commands: addEvent, updateEvent/);
    });
});
