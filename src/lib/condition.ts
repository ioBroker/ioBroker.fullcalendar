/**
 * Conditions of events: an event writes its value only, if another state has a matching value at that time
 * (e.g. the shutter does not go down while the terrace door is open). Pure functions, the adapter reads the state.
 */

export type ConditionOperator = '==' | '!=' | '>' | '>=' | '<' | '<=';

export const CONDITION_OPERATORS: ConditionOperator[] = ['==', '!=', '>', '>=', '<', '<='];

/** `native.condition` of an event */
export interface EventCondition {
    /** state to check */
    oid: string;
    /** default `==` */
    operator?: ConditionOperator;
    value: ioBroker.StateValue;
}

function toBoolean(value: ioBroker.StateValue): boolean {
    if (typeof value === 'string') {
        const text = value.trim().toLowerCase();
        return text === 'true' || text === '1' || text === 'on' || text === 'yes';
    }
    return !!value;
}

function toNumber(value: ioBroker.StateValue): number {
    if (typeof value === 'boolean') {
        return value ? 1 : 0;
    }
    if (typeof value === 'number') {
        return value;
    }
    return typeof value === 'string' && value.trim() !== '' ? Number(value.trim().replace(',', '.')) : NaN;
}

function compare<T extends number | string | boolean>(actual: T, operator: ConditionOperator, expected: T): boolean {
    switch (operator) {
        case '!=':
            return actual !== expected;
        case '>':
            return actual > expected;
        case '>=':
            return actual >= expected;
        case '<':
            return actual < expected;
        case '<=':
            return actual <= expected;
        default:
            return actual === expected;
    }
}

/**
 * Whether the condition is fulfilled by the current value of its state. The expected value is taken as the type
 * of the actual value: `"true"`/`"on"` match `true`, `"5"` matches `5`. A missing value (state does not exist or
 * is null) never fulfills a condition.
 *
 * @param condition the condition of the event
 * @param actual current value of `condition.oid`
 */
export function isConditionMet(condition: EventCondition, actual: ioBroker.StateValue | undefined): boolean {
    if (actual === undefined || actual === null) {
        return false;
    }
    const operator = condition.operator || '==';
    if (typeof actual === 'boolean') {
        return compare(actual, operator, toBoolean(condition.value));
    }
    const expectedNumber = toNumber(condition.value);
    const actualNumber = toNumber(actual);
    if (!Number.isNaN(expectedNumber) && !Number.isNaN(actualNumber)) {
        return compare(actualNumber, operator, expectedNumber);
    }
    return compare(String(actual), operator, condition.value === null ? '' : String(condition.value));
}

/** Whether an event has a condition to check */
export function hasCondition(condition: EventCondition | undefined | null): condition is EventCondition {
    return !!condition && typeof condition.oid === 'string' && !!condition.oid.trim();
}

/**
 * The condition as text, for the log: `door.STATE == false`
 *
 * @param condition the condition
 */
export function conditionText(condition: EventCondition): string {
    return `${condition.oid} ${condition.operator || '=='} ${JSON.stringify(condition.value)}`;
}
