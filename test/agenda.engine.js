// The agenda (lib/agenda.ts): occurrences of one-shot, cron and astro events, and the times a new event accepts.
// Pure functions, no js-controller needed: `npx mocha test/agenda.engine.js --exit` after `npm run build-backend`.
const assert = require('node:assert/strict');
const later = require('later');
const {
    occurrencesOf,
    toOccurrence,
    toEventInfo,
    parseTime,
    parseDelaySeconds,
    startOfDay,
    textOf,
} = require('../build/lib/agenda');

later.date.localTime();

const local = (y, M, d, h = 0, m = 0, s = 0) => new Date(y, M - 1, d, h, m, s);
const noAstro = () => null;
const event = native => ({
    _id: 'fullcalendar.0.event-1',
    common: { name: 'Licht', enabled: true },
    native: { oid: 'hm.0.light.STATE', startValue: true, ...native },
});

describe('agenda', () => {
    it('a one-shot event happens once, inside the range only', () => {
        const e = event({ start: '2026-10-28T21:30:00' });
        const day = [local(2026, 10, 28), local(2026, 10, 28, 23, 59, 59)];
        assert.deepEqual(
            occurrencesOf(e, ...day, noAstro).map(d => d.getTime()),
            [local(2026, 10, 28, 21, 30).getTime()],
        );
        assert.deepEqual(occurrencesOf(e, local(2026, 10, 29), local(2026, 10, 30), noAstro), []);
    });

    it('a cron event: every day at 07:30, the seconds field is dropped like the scheduler does', () => {
        const e = event({ cron: '0 30 7 * * *' });
        const times = occurrencesOf(e, local(2026, 10, 28), local(2026, 10, 30, 23, 59), noAstro);
        assert.deepEqual(
            times.map(d => d.getTime()),
            [local(2026, 10, 28, 7, 30), local(2026, 10, 29, 7, 30), local(2026, 10, 30, 7, 30)].map(d => d.getTime()),
        );
        // weekdays only: 2026-10-31 is a Saturday
        const weekdays = event({ cron: '30 7 * * 1-5' });
        assert.equal(occurrencesOf(weekdays, local(2026, 10, 31), local(2026, 11, 1, 23, 59), noAstro).length, 0);
        assert.equal(occurrencesOf(e, local(2026, 10, 28), local(2026, 12, 31), noAstro, 5).length, 5, 'max');
    });

    it('an astro event takes the astro time of each matching day, also when it is before the range start time', () => {
        // fake "sunset": 17:00 + offset on the day of the given time
        const astro = (name, offset, date) =>
            new Date(date.getFullYear(), date.getMonth(), date.getDate(), 17, offset || 0, 0);
        const e = event({ cron: '0 0 * * *', astro: 'sunset', offset: 15 });
        const times = occurrencesOf(e, local(2026, 10, 28, 12), local(2026, 10, 29, 23, 59), astro);
        assert.deepEqual(
            times.map(d => d.getTime()),
            [local(2026, 10, 28, 17, 15).getTime(), local(2026, 10, 29, 17, 15).getTime()],
        );
        // after today's sunset only tomorrow's is left
        assert.equal(occurrencesOf(e, local(2026, 10, 28, 18), local(2026, 10, 28, 23, 59), astro).length, 0);
        // no location → no astro time
        assert.deepEqual(occurrencesOf(e, local(2026, 10, 28), local(2026, 10, 29), noAstro), []);
    });

    it('occurrence and definition of a "double" event carry the second write', () => {
        const e = event({
            start: '2026-10-28T21:30:00',
            type: 'double',
            intervals: [{ value: false, timeOffset: 600000 }],
            states: { true: 'an', false: 'aus' },
        });
        const o = toOccurrence(e, local(2026, 10, 28, 21, 30), 'Wohnung', 'de');
        assert.equal(o.time, '2026-10-28T21:30:00');
        assert.equal(o.endTime, '2026-10-28T21:40:00');
        assert.equal(o.endValue, false);
        assert.equal(o.valueText, 'an');
        assert.equal(o.calendar, 'Wohnung');
        assert.equal(o.recurring, false);
        const info = toEventInfo(e, '', local(2026, 10, 28, 21, 30), 'de');
        assert.equal(info.durationSec, 600);
        assert.equal(info.start, '2026-10-28T21:30:00');
        assert.equal(info.next, '2026-10-28T21:30:00');
        assert.equal(info.type, 'double');
    });

    it('times and delays for new events', () => {
        assert.equal(parseTime('2026-10-28T21:30').getTime(), local(2026, 10, 28, 21, 30).getTime());
        assert.equal(parseTime('2026-10-28 21:30:15').getTime(), local(2026, 10, 28, 21, 30, 15).getTime());
        assert.equal(parseTime('2026-10-28T20:30:00Z').getTime(), Date.UTC(2026, 9, 28, 20, 30));
        assert.equal(parseTime(1793209171835).getTime(), 1793209171835);
        assert.equal(parseTime('morgen'), null);
        // a time of day is today
        const now = new Date();
        assert.equal(
            parseTime('7:05').getTime(),
            local(now.getFullYear(), now.getMonth() + 1, now.getDate(), 7, 5).getTime(),
        );
        assert.equal(parseTime('25:00'), null);
        assert.equal(parseDelaySeconds(90), 90);
        assert.equal(parseDelaySeconds('30m'), 1800);
        assert.equal(parseDelaySeconds('1h30m'), 5400);
        assert.equal(parseDelaySeconds('2h'), 7200);
        assert.equal(parseDelaySeconds('1d'), 86400);
        assert.equal(parseDelaySeconds('120'), 120);
        assert.equal(parseDelaySeconds('soon'), null);
        assert.equal(parseDelaySeconds('2h later'), null);
    });

    it('helpers', () => {
        assert.equal(startOfDay(local(2026, 10, 28, 15), 1).getTime(), local(2026, 10, 29).getTime());
        assert.equal(textOf({ en: 'Light', de: 'Licht' }, 'de'), 'Licht');
        assert.equal(textOf({ en: 'Light' }, 'ru'), 'Light');
        assert.equal(textOf(undefined, 'en'), '');
    });
});
