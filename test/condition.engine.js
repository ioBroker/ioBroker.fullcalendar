// Conditions of events (lib/condition.ts): pure functions, no js-controller needed:
// `npx mocha test/condition.engine.js --exit` after `npm run build-backend`.
const assert = require('node:assert/strict');
const { isConditionMet, hasCondition, conditionText } = require('../build/lib/condition');

const condition = (value, operator) => ({ oid: 'hm-rpc.0.DOOR.1.STATE', value, operator });

describe('condition', () => {
    it('compares booleans, also with text values from the GUI', () => {
        assert.equal(isConditionMet(condition(false), false), true);
        assert.equal(isConditionMet(condition(false), true), false);
        assert.equal(isConditionMet(condition('true'), true), true);
        assert.equal(isConditionMet(condition('on'), true), true);
        assert.equal(isConditionMet(condition('false'), false), true);
        assert.equal(isConditionMet(condition(true, '!='), false), true);
    });

    it('compares numbers, also given as text', () => {
        assert.equal(isConditionMet(condition('20', '>'), 21), true);
        assert.equal(isConditionMet(condition('20', '>'), 20), false);
        assert.equal(isConditionMet(condition('20', '>='), 20), true);
        assert.equal(isConditionMet(condition('20,5', '<'), 20.4), true);
        assert.equal(isConditionMet(condition(5, '<='), '5'), true);
        assert.equal(isConditionMet(condition(1), 1), true);
        assert.equal(isConditionMet(condition(1, '!='), 2), true);
    });

    it('compares texts', () => {
        assert.equal(isConditionMet(condition('home'), 'home'), true);
        assert.equal(isConditionMet(condition('home', '!='), 'away'), true);
        assert.equal(isConditionMet(condition('home'), 'away'), false);
    });

    it('a missing value never fulfills the condition', () => {
        assert.equal(isConditionMet(condition(false), undefined), false);
        assert.equal(isConditionMet(condition(false), null), false);
        assert.equal(isConditionMet(condition(false, '!='), null), false);
    });

    it('a condition needs a state', () => {
        assert.equal(hasCondition(undefined), false);
        assert.equal(hasCondition({ oid: ' ', value: true }), false);
        assert.equal(hasCondition(condition(true)), true);
    });

    it('describes itself for the log', () => {
        assert.equal(conditionText(condition(false)), 'hm-rpc.0.DOOR.1.STATE == false');
        assert.equal(conditionText(condition('20', '>')), 'hm-rpc.0.DOOR.1.STATE > "20"');
    });
});
