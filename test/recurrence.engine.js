// Recurring events of the `addEvent` message (lib/recurrence.ts): the cron must be in the format of the GUI and must
// run on the right days in the scheduler (`occurrencesOf` evaluates a cron like `main.ts`).
// `npx mocha test/recurrence.engine.js --exit` after `npm run build-backend`.
const assert = require('node:assert/strict');
const later = require('later');
const { parseRecurrence, parseRRule, recurrenceToCron } = require('../build/lib/recurrence');
const { occurrencesOf } = require('../build/lib/agenda');

later.date.localTime();

const local = (y, M, d, h = 0, m = 0, s = 0) => new Date(y, M - 1, d, h, m, s);
const noAstro = () => null;
const times = (cron, from, to, max = 20) =>
    occurrencesOf({ _id: 'fullcalendar.0.event-1', common: {}, native: { cron, oid: 'x', startValue: true } }, from, to, noAstro, max).map(
        d => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()} ${d.getDay()}`,
    );

describe('recurrence', () => {
    // Thursday, 2026-10-29 07:30
    const start = local(2026, 10, 29, 7, 30);

    it('yearly: a birthday on the day and month of start', () => {
        const cron = recurrenceToCron(parseRecurrence({ recurring: 'yearly' }), local(2020, 6, 15, 8, 0));
        assert.equal(cron, '0 0 8 15 6 *');
        assert.deepEqual(times(cron, local(2026, 1, 1), local(2028, 12, 31)), [
            '2026-6-15 8:0 1',
            '2027-6-15 8:0 2',
            '2028-6-15 8:0 4',
        ]);
        assert.equal(recurrenceToCron(parseRRule('FREQ=YEARLY'), local(2020, 6, 15, 8, 0)), cron);
    });

    it('daily, weekly (also on Sunday), monthly', () => {
        assert.equal(recurrenceToCron(parseRecurrence({ recurring: 'daily' }), start), '0 30 7 ? * 0-6');
        assert.equal(times('0 30 7 ? * 0-6', local(2026, 10, 29), local(2026, 10, 31, 23)).length, 3);

        const weekly = recurrenceToCron(parseRecurrence({ recurring: 'weekly', weekdays: ['SU', 'we'] }), start);
        assert.equal(weekly, '0 30 7 ? * 0,3');
        assert.deepEqual(times(weekly, local(2026, 11, 1), local(2026, 11, 8, 23)), [
            '2026-11-1 7:30 0',
            '2026-11-4 7:30 3',
            '2026-11-8 7:30 0',
        ]);
        // without weekdays: the weekday of start (Thursday)
        assert.equal(recurrenceToCron(parseRecurrence({ recurring: 'weekly' }), start), '0 30 7 ? * 4');

        const monthly = recurrenceToCron(parseRecurrence({ recurring: 'monthly' }), start);
        assert.equal(monthly, '0 30 7 29 1-12 *');
        assert.deepEqual(times(monthly, local(2027, 1, 1), local(2027, 3, 31)), ['2027-1-29 7:30 5', '2027-3-29 7:30 1']);
    });

    it('rrule with BYDAY, BYMONTHDAY, BYMONTH', () => {
        assert.equal(recurrenceToCron(parseRRule('RRULE:FREQ=WEEKLY;BYDAY=MO,FR;WKST=MO'), start), '0 30 7 ? * 1,5');
        assert.equal(recurrenceToCron(parseRRule('FREQ=DAILY;BYDAY=SA,SU'), start), '0 30 7 ? * 0,6');
        assert.equal(recurrenceToCron(parseRRule('FREQ=MONTHLY;BYMONTHDAY=1,15'), start), '0 30 7 1,15 1-12 *');
        assert.equal(recurrenceToCron(parseRRule('FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=24'), start), '0 30 7 24 12 *');
        assert.equal(
            recurrenceToCron(parseRRule('DTSTART:20260101T000000\nRRULE:FREQ=YEARLY;INTERVAL=1'), start),
            '0 30 7 29 10 *',
        );
    });

    it('rejects what a cron cannot express', () => {
        assert.throws(() => parseRRule('FREQ=WEEKLY;INTERVAL=2'), /INTERVAL=2/);
        assert.throws(() => parseRRule('FREQ=DAILY;COUNT=5'), /COUNT=5/);
        assert.throws(() => parseRRule('FREQ=MONTHLY;BYDAY=2MO'), /plain weekdays/);
        assert.throws(() => parseRRule('FREQ=HOURLY'), /Unsupported FREQ/);
        assert.throws(() => parseRecurrence({ recurring: true }), /must be one of/);
        assert.throws(() => parseRecurrence({ recurring: 'weekly', weekdays: ['XX'] }), /Unknown weekday/);
        assert.throws(() => parseRecurrence({ recurring: 'monthly', monthDays: [32] }), /day of month/);
        assert.equal(parseRecurrence({}), null);
        assert.equal(parseRecurrence({ recurring: false }), null);
    });
});
