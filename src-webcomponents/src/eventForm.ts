/**
 * The dialog of an event, as a form the host renders (`openDialog`): what the event dialog of the vis-2 widget
 * edits - active, time or astronomical event, type, duration, object ID and values, period, name and color - and the
 * date of a single event, which the widget changes by dragging only. The days of a month are a list (`1, 15, 20-31`)
 * instead of 31 check boxes.
 */
import type { WebComponentFormDialog, WebComponentSetting, WebComponentSettings } from '@iobroker/web-components';

import { toLocalTime } from '../../src/lib/utils';

import { array2oneCron, cron2obj, obj2cron, parseNumberList, type CronObject } from './cron';
import { getAstroDate, type AstroName, type CalendarEvent, type EventType } from './events';
import type { Word } from './i18n';

/** The astronomical events in the order of a day, as the widget lists them */
export const ASTRO_NAMES: AstroName[] = [
    'sunrise',
    'sunriseEnd',
    'goldenHourEnd',
    'solarNoon',
    'goldenHour',
    'sunsetStart',
    'sunset',
    'dusk',
    'nauticalDusk',
    'night',
    'nadir',
    'nightEnd',
    'nauticalDawn',
    'dawn',
];

/** The offsets of an astronomical event in minutes, with their words */
const OFFSETS: [number, Word][] = [
    [0, 'none'],
    [5, '5 min'],
    [10, '10 min'],
    [15, '15 min'],
    [20, '20 min'],
    [30, '30 min'],
    [45, '45 min'],
    [60, '1 hour'],
    [90, '1.5 hours'],
    [120, '2 hours'],
    [150, '2.5 hours'],
    [180, '3 hours'],
    [240, '4 hours'],
];

const EVENT_TYPES: EventType[] = ['single', 'double', 'toggle'];

const DESCRIPTIONS: Record<EventType, Word> = {
    single: 'single_description',
    double: 'double_description',
    toggle: 'toggle_description',
};

type Period = 'once' | 'daily' | 'monthly';

/** What the form needs besides the event */
export interface EventFormContext {
    /** The language of the system */
    lang: string;
    word: (key: Word, ...args: (string | number)[]) => string;
    /** A text of an object in the language of the system */
    text: (text: ioBroker.StringOrTranslated | undefined) => string;
    /** Nothing can be changed: the fields are shown only */
    readOnly: boolean;
    /** The event is not saved yet: it cannot be deleted */
    isNew: boolean;
    /** The object of the event (`native.oid`) as the dialog opens: its type decides the fields of the values */
    object: ioBroker.Object | null;
    /** 1 if the week starts on Monday, from `system.config` */
    firstDay: number;
    latitude?: number | null;
    longitude?: number | null;
}

const pad = (value: number): string => String(value).padStart(2, '0');

/** `common.states` of a state as `value -> text`; also the old form `0:off;1:on` */
export function getStates(obj: ioBroker.Object | null | undefined): Record<string, string> | undefined {
    const states = (obj?.common as ioBroker.StateCommon | undefined)?.states as unknown;
    if (typeof states === 'string') {
        const result: Record<string, string> = {};
        for (const pair of states.split(';')) {
            const [value, ...text] = pair.split(':');
            if (value) {
                result[value.trim()] = text.join(':').trim();
            }
        }
        return Object.keys(result).length ? result : undefined;
    }
    if (Array.isArray(states)) {
        return Object.fromEntries(states.map((text, i) => [String(i), String(text)]));
    }
    if (states && typeof states === 'object') {
        return Object.fromEntries(Object.entries(states).map(([value, text]) => [value, String(text)]));
    }
    return undefined;
}

function getObjectType(obj: ioBroker.Object | null): string | undefined {
    return obj?.type === 'state' ? obj.common.type : undefined;
}

/**
 * How the form shows the values for an object: a check box, the texts of its states, or a text field
 *
 * @param obj the object of the event
 */
export function getValueKind(obj: ioBroker.Object | null): 'boolean' | 'states' | 'text' {
    if (getObjectType(obj) === 'boolean') {
        return 'boolean';
    }
    return getStates(obj) ? 'states' : 'text';
}

/**
 * A value of the event in the form: a boolean for a boolean state, the text otherwise
 *
 * @param value the value of the event
 * @param obj the object of the event
 */
function toFormValue(value: ioBroker.StateValue | undefined, obj: ioBroker.Object | null): string | boolean {
    if (getObjectType(obj) === 'boolean') {
        return value === true || value === 'true' || value === 1 || value === '1' || value === 'on' || value === 'ON';
    }
    return value === null || value === undefined ? '' : String(value);
}

/**
 * A value of the form for the event, in the type of the state - the adapter converts it again when it writes it
 *
 * @param value the value of the form
 * @param obj the object of the event
 */
function fromFormValue(value: string | number | boolean | undefined, obj: ioBroker.Object | null): ioBroker.StateValue {
    const type = getObjectType(obj);
    if (type === 'boolean') {
        return value === true || value === 'true' || value === '1' || value === 'on' || value === 'ON';
    }
    if (type === 'number' && typeof value === 'string' && value.trim() !== '' && !isNaN(Number(value))) {
        return Number(value);
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
        return value;
    }
    return value ?? '';
}

/**
 * The values of the form for another object, e.g. a check box instead of a text field
 *
 * @param data the values of the form
 * @param from the object the form was made for
 * @param to the new object
 */
export function adaptValues(
    data: WebComponentSettings,
    from: ioBroker.Object | null,
    to: ioBroker.Object | null,
): WebComponentSettings {
    return {
        ...data,
        startValue: toFormValue(fromFormValue(data.startValue, from), to),
        endValue: toFormValue(fromFormValue(data.endValue, from), to),
    };
}

function getPeriod(cron: CronObject | null): Period {
    if (!cron) {
        return 'once';
    }
    return Array.isArray(cron.months) ? 'monthly' : 'daily';
}

/**
 * The values of the form for an event
 *
 * @param event the event
 * @param ctx the context
 */
export function eventToData(event: CalendarEvent, ctx: EventFormContext): WebComponentSettings {
    const cron = event.native.cron ? cron2obj(event.native.cron) : null;
    const period = getPeriod(cron);
    const start = event.native.start || toLocalTime(new Date());
    const startDate = new Date(`${start.substring(0, 10)}T12:00:00`);
    const hours = cron && Array.isArray(cron.hours) ? cron.hours[0] : parseInt(start.substring(11, 13), 10) || 0;
    const minutes = cron && Array.isArray(cron.minutes) ? cron.minutes[0] : parseInt(start.substring(14, 16), 10) || 0;
    const type = event.native.type || 'single';
    const interval = event.native.intervals?.[0];

    const data: WebComponentSettings = {
        enabled: !!event.common.enabled,
        name: ctx.text(event.common.name),
        type,
        period,
        date: start.substring(0, 10),
        timeType: event.native.astro ? 'astro' : 'time',
        time: `${pad(hours)}:${pad(minutes)}`,
        astro: event.native.astro || 'sunrise',
        offset: String(event.native.offset || 0),
        duration: Math.round((Number(interval?.timeOffset) || 30 * 60000) / 60000) || 1,
        oid: event.native.oid || '',
        startValue: toFormValue(event.native.startValue, ctx.object),
        endValue: toFormValue(interval?.value, ctx.object),
        color: event.common.color || event.native.color || '',
        delete: false,
    };

    // the days of a daily event; all of them for another one, as the widget starts a daily event
    const dows = period === 'daily' && cron && Array.isArray(cron.dows) ? cron.dows : [0, 1, 2, 3, 4, 5, 6];
    for (let dow = 0; dow < 7; dow++) {
        data[`dow${dow}`] = dows.includes(dow) || (dow === 0 && dows.includes(7));
    }
    // the months and days of a monthly event; those of the date for another one, as the widget does
    const months =
        period === 'monthly' && cron && Array.isArray(cron.months) ? cron.months : [startDate.getMonth() + 1];
    for (let month = 1; month <= 12; month++) {
        data[`month${month}`] = months.includes(month);
    }
    const dates =
        period === 'monthly' && cron && Array.isArray(cron.dates) && cron.dates.length
            ? cron.dates
            : [startDate.getDate()];
    data.days = array2oneCron(dates);
    return data;
}

function localeOf(lang: string): string {
    return lang === 'zh-cn' ? 'zh-CN' : lang;
}

function getNames(lang: string, options: Intl.DateTimeFormatOptions, dates: Date[]): string[] {
    try {
        const format = new Intl.DateTimeFormat(localeOf(lang), options);
        return dates.map(date => format.format(date));
    } catch {
        const format = new Intl.DateTimeFormat('en', options);
        return dates.map(date => format.format(date));
    }
}

/**
 * The form of the dialog of an event
 *
 * @param ctx the context
 * @param data the values of the form
 * @param error shown above the fields, after the user entered something wrong
 */
export function buildEventForm(
    ctx: EventFormContext,
    data: WebComponentSettings,
    error?: string,
): WebComponentFormDialog {
    const { word } = ctx;
    const disabled = ctx.readOnly ? 'true' : '!data.enabled';
    const items: Record<string, WebComponentSetting> = {};
    if (error) {
        items.error = { type: 'staticText', text: error };
    }
    items.enabled = { type: 'checkbox', label: word('Active'), disabled: ctx.readOnly ? 'true' : undefined };
    items.name = { type: 'text', label: word('Description'), disabled };

    items.timeType = {
        type: 'select',
        label: word('Time type'),
        options: [
            { value: 'time', label: word('time') },
            { value: 'astro', label: word('astro') },
        ],
        disabled,
    };
    items.time = {
        type: 'text',
        label: word('Time'),
        help: word('timeHelp'),
        hidden: "data.timeType === 'astro'",
        disabled,
    };
    const today = new Date();
    items.astro = {
        type: 'select',
        label: word('Astronomic event'),
        options: ASTRO_NAMES.map(name => {
            const time = getAstroDate(name, 0, today, ctx);
            const at = time ? `${pad(time.getHours())}:${pad(time.getMinutes())}` : '??:??';
            return { value: name, label: `${word(name)} - [${at}]` };
        }),
        hidden: "data.timeType !== 'astro'",
        disabled,
    };
    items.offset = {
        type: 'select',
        label: word('Offset'),
        options: [
            ...OFFSETS.map(([value, label]) => ({ value: String(value), label: word(label) })),
            ...OFFSETS.filter(([value]) => value).map(([value, label]) => ({
                value: String(-value),
                label: `- ${word(label)}`,
            })),
        ],
        hidden: "data.timeType !== 'astro'",
        disabled,
    };

    items.type = {
        type: 'select',
        label: word('Event type'),
        options: EVENT_TYPES.map(type => ({ value: type, label: word(type) })),
        disabled,
    };
    for (const type of EVENT_TYPES) {
        items[`${type}Help`] = {
            type: 'staticText',
            text: word(DESCRIPTIONS[type]),
            hidden: `data.type !== '${type}'`,
        };
    }
    items.duration = {
        type: 'number',
        label: `${word('Duration')} (${word('minutes')})`,
        min: 1,
        hidden: "data.type === 'single'",
        disabled,
    };

    items.oid = { type: 'objectId', label: word('Object ID'), disabled };
    const states = getStates(ctx.object);
    const type = EVENT_TYPES.find(t => t === data.type) || 'single';
    const valueItem = (label: string): WebComponentSetting => {
        if (getObjectType(ctx.object) === 'boolean') {
            return { type: 'checkbox', label, help: word('Checked means ON, unchecked means OFF'), disabled };
        }
        if (states) {
            return {
                type: 'select',
                label,
                options: Object.entries(states).map(([value, text]) => ({ value, label: text })),
                disabled,
            };
        }
        return { type: 'text', label, disabled };
    };
    items.startValue = valueItem(
        word(type === 'toggle' ? 'First value' : type === 'single' ? 'Desired value' : 'Start value'),
    );
    items.endValue = { ...valueItem(word('End value')), hidden: "data.type !== 'double'" };

    items.period = {
        type: 'select',
        label: word('Period'),
        options: (['once', 'daily', 'monthly'] as const).map(period => ({ value: period, label: word(period) })),
        disabled,
    };
    items.date = {
        type: 'text',
        label: word('date'),
        help: word('dateHelp'),
        hidden: "data.period !== 'once'",
        disabled,
    };
    items.weekdays = { type: 'header', text: word('weekdays'), hidden: "data.period !== 'daily'" };
    // 2024-01-07 is a Sunday
    const dayNames = getNames(
        ctx.lang,
        { weekday: 'long' },
        [0, 1, 2, 3, 4, 5, 6].map(dow => new Date(2024, 0, 7 + dow)),
    );
    for (let i = 0; i < 7; i++) {
        const dow = (i + ctx.firstDay) % 7;
        items[`dow${dow}`] = { type: 'checkbox', label: dayNames[dow], hidden: "data.period !== 'daily'", disabled };
    }
    items.months = { type: 'header', text: word('months'), hidden: "data.period !== 'monthly'" };
    const monthNames = getNames(
        ctx.lang,
        { month: 'long' },
        Array.from({ length: 12 }, (_, month) => new Date(2024, month, 1)),
    );
    for (let month = 1; month <= 12; month++) {
        items[`month${month}`] = {
            type: 'checkbox',
            label: monthNames[month - 1],
            hidden: "data.period !== 'monthly'",
            disabled,
        };
    }
    items.days = {
        type: 'text',
        label: word('days'),
        help: word('daysHelp'),
        hidden: "data.period !== 'monthly'",
        disabled,
    };

    items.color = { type: 'color', label: word('Color'), disabled };
    if (!ctx.isNew && !ctx.readOnly) {
        items.divider = { type: 'divider' };
        items.delete = { type: 'checkbox', label: word('Delete event') };
    }

    return {
        title: word('Configure event'),
        width: 560,
        form: { type: 'panel', items },
        data,
        ok: ctx.readOnly ? word('ra_Close') : word('Save'),
    };
}

/**
 * The event with the values of the form
 *
 * @param event the event as it was
 * @param data the values of the form
 * @param obj the object of `data.oid`
 * @param ctx the context
 * @returns the changed event, or the label of the field whose value is wrong
 */
export function dataToEvent(
    event: CalendarEvent,
    data: WebComponentSettings,
    obj: ioBroker.Object | null,
    ctx: Pick<EventFormContext, 'word'>,
): CalendarEvent | string {
    const { word } = ctx;
    const result: CalendarEvent = JSON.parse(JSON.stringify(event));
    const native = result.native;

    const time = String(data.time ?? '')
        .trim()
        .match(/^(\d{1,2})[:.](\d{2})(?::\d{2})?$/);
    if (!time || Number(time[1]) > 23 || Number(time[2]) > 59) {
        return word('Time');
    }
    const hours = Number(time[1]);
    const minutes = Number(time[2]);

    if (data.timeType === 'astro') {
        native.astro = ASTRO_NAMES.find(name => name === data.astro) || 'sunrise';
        const offset = parseInt(String(data.offset), 10) || 0;
        if (offset) {
            native.offset = offset;
        } else {
            delete native.offset;
        }
    } else {
        delete native.astro;
        delete native.offset;
    }

    const period = data.period as Period;
    if (period === 'daily') {
        const dows = [0, 1, 2, 3, 4, 5, 6].filter(dow => data[`dow${dow}`]);
        if (!dows.length) {
            return word('weekdays');
        }
        delete native.start;
        native.cron = obj2cron({ seconds: [0], minutes: [minutes], hours: [hours], dates: '?', months: '*', dows });
    } else if (period === 'monthly') {
        const months = Array.from({ length: 12 }, (_, i) => i + 1).filter(month => data[`month${month}`]);
        if (!months.length) {
            return word('months');
        }
        const dates = parseNumberList(String(data.days ?? ''), 1, 31);
        if (!dates) {
            return word('days');
        }
        delete native.start;
        native.cron = obj2cron({ seconds: [0], minutes: [minutes], hours: [hours], dates, months, dows: '*' });
    } else {
        const date = String(data.date ?? '').trim();
        const parsed = new Date(`${date}T12:00:00`);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || isNaN(parsed.getTime())) {
            return word('date');
        }
        delete native.cron;
        native.start = `${date}T${pad(hours)}:${pad(minutes)}:00`;
    }

    const type = EVENT_TYPES.find(t => t === data.type) || 'single';
    native.type = type;
    if (type === 'single') {
        delete native.intervals;
    } else {
        const duration = Number(data.duration);
        if (!duration || duration < 0) {
            return word('Duration');
        }
        const interval = native.intervals?.[0] || {};
        interval.timeOffset = Math.round(duration * 60000);
        if (type === 'double') {
            interval.value = fromFormValue(data.endValue, obj);
        }
        native.intervals = [interval];
    }

    native.oid = String(data.oid ?? '').trim();
    native.startValue = fromFormValue(data.startValue, obj);
    const states = getStates(obj);
    if (states) {
        native.states = states;
    } else {
        delete native.states;
    }

    result.common.enabled = !!data.enabled;
    result.common.name =
        String(data.name ?? '').trim() ||
        word(type === 'single' ? 'Single event' : type === 'double' ? 'Double event' : 'Toggle event');
    if (typeof data.color === 'string' && data.color) {
        result.common.color = data.color;
    }
    return result;
}
