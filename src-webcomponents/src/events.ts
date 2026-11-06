/**
 * The events of fullcalendar as the calendar shows them: a repeated event once on every day it is on, an
 * astronomical one at the time of that day, with the colors and the title of the vis-2 widget.
 */
import type { EventInput } from '@fullcalendar/core';

// the same functions the adapter runs the events with: the calendar shows the times the adapter switches at
import { getAstroTime, parseISOLocal, type AstroName } from '../../src/lib/utils';

import { cron2obj, firstOf, isCronDay } from './cron';
import type { Word } from './i18n';

export type { AstroName };

export type EventType = 'single' | 'double' | 'toggle';

/** A calendar event as stored in the objects DB (`type: 'schedule'`), see `src-widgets/src/Component/Utils.ts` */
export interface CalendarEvent {
    _id: string;
    type: 'schedule';
    common: {
        name: ioBroker.StringOrTranslated;
        enabled?: boolean;
        color?: string;
        icon?: string;
    };
    native: {
        id?: number;
        /** cron expression of a repeated event; a single one has `start` */
        cron?: string;
        /** ISO local time (`2017-09-12T12:12:00`) of a single event */
        start?: string;
        astro?: AstroName;
        /** offset to the astro time, in minutes */
        offset?: number;
        type?: EventType;
        oid: string;
        startValue: ioBroker.StateValue;
        intervals?: { value?: ioBroker.StateValue; timeOffset?: number }[];
        states?: Record<string, string>;
        /** @deprecated events of older versions have the color here instead of in `common` */
        color?: string;
        [key: string]: unknown;
    };
    [key: string]: unknown;
}

/** The color of an event without one */
export const DEFAULT_COLOR = '#3a87b2';

/** What the calendar needs to show the events */
export interface ExpandContext {
    /** A word in the language of the system */
    word: (key: Word) => string;
    /** A text of an object in the language of the system */
    text: (text: ioBroker.StringOrTranslated | undefined) => string;
    /** Of `system.config`, for the astronomical events */
    latitude?: number | null;
    longitude?: number | null;
}

/**
 * Whether an object is an event that can be shown
 *
 * @param obj the object
 */
export function isCalendarEvent(obj: unknown): obj is CalendarEvent {
    const event = obj as CalendarEvent | null;
    return (
        !!event &&
        typeof event._id === 'string' &&
        event.type === 'schedule' &&
        !!event.common &&
        typeof event.common === 'object' &&
        !!event.native &&
        typeof event.native === 'object'
    );
}

/**
 * The time of an astronomical event on a day, as the adapter calculates it
 *
 * @param astro the astronomical event
 * @param offset in minutes
 * @param day the day
 * @param ctx where the system is
 */
export function getAstroDate(
    astro: AstroName,
    offset: number | undefined,
    day: Date,
    ctx: Pick<ExpandContext, 'latitude' | 'longitude'>,
): Date | null {
    if (typeof ctx.latitude !== 'number' || typeof ctx.longitude !== 'number') {
        return null;
    }
    const date = getAstroTime(
        astro,
        offset,
        day,
        undefined,
        { common: { latitude: ctx.latitude, longitude: ctx.longitude } } as unknown as ioBroker.SystemConfigObject,
        { native: {} } as unknown as ioBroker.InstanceObject,
    );
    return date && !isNaN(date.getTime()) ? date : null;
}

/**
 * A color of the event, 30% opaque - as the vis-2 widget shows an inactive event
 *
 * @param color a CSS color
 */
function dimColor(color: string): string {
    if (color.startsWith('#')) {
        if (color.length === 4) {
            return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}50`;
        }
        return `${color.substring(0, 7)}50`;
    }
    if (color.startsWith('rgb(')) {
        return color.replace('rgb(', 'rgba(').replace(')', ', 0.3)');
    }
    if (color.startsWith('rgba(')) {
        return color.replace(/,\s?[.\d]+\)$/, ', 0.3)');
    }
    return color;
}

/**
 * Black or white, whichever is readable on the color
 *
 * @param color a CSS color: `#rgb`, `#rrggbb`, `rgb()` or `rgba()`
 */
export function getContrastColor(color: string): string {
    let rgb: number[] | null = null;
    const hex = color.trim().match(/^#([\da-f]{3}|[\da-f]{6}|[\da-f]{8})$/i);
    if (hex) {
        const h = hex[1].length === 3 ? hex[1].replace(/./g, c => c + c) : hex[1];
        rgb = [0, 2, 4].map(i => parseInt(h.substring(i, i + 2), 16));
    } else {
        const m = color.match(/rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i);
        rgb = m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
    }
    if (!rgb) {
        return '#ffffff';
    }
    // the same threshold as Utils.invertColor() of the widgets
    return rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114 > 186 ? '#000000' : '#ffffff';
}

/**
 * A value of the event as text: ON/OFF for a boolean, the text of the state if it has one
 *
 * @param value the value
 * @param states the texts of the values of the state
 * @param word a word in the language of the system
 */
function valueText(
    value: ioBroker.StateValue | undefined,
    states: Record<string, string> | undefined,
    word: ExpandContext['word'],
): string {
    if (typeof value === 'boolean') {
        return value ? word('ON') : word('OFF');
    }
    if (value === null || value === undefined) {
        return '';
    }
    return states?.[String(value)] ?? String(value);
}

/**
 * The title of an event, as the vis-2 widget writes it: `name → value`, and for a double or toggle event the
 * duration and the second value
 *
 * @param event the event
 * @param ctx the words
 */
export function getEventTitle(event: CalendarEvent, ctx: ExpandContext): string {
    const name = ctx.text(event.common.name);
    if (!event.native.oid) {
        return name;
    }
    const states = event.native.states;
    let title = `${name} → ${valueText(event.native.startValue, states, ctx.word)}`;
    const minutes = (Number(event.native.intervals?.[0]?.timeOffset) || 0) / 60000;
    if (event.native.type === 'double') {
        title += ` → ${minutes} ${ctx.word('min')} → ${valueText(event.native.intervals?.[0]?.value, states, ctx.word)}`;
    } else if (event.native.type === 'toggle') {
        title += ` → ${minutes} ${ctx.word('min')} → ${ctx.word('initial')}`;
    }
    return title;
}

/**
 * The days from `start` to before `end`, at midnight
 *
 * @param start the first day
 * @param end after the last day
 */
function getDays(start: Date, end: Date): Date[] {
    const days: Date[] = [];
    const day = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    // a day more than a year is no view of the calendar
    for (let i = 0; day < end && i < 400; i++) {
        days.push(new Date(day));
        day.setDate(day.getDate() + 1);
    }
    return days;
}

/**
 * The events between `start` and `end` as the calendar shows them
 *
 * @param events the events of the calendar
 * @param start the first day the calendar shows
 * @param end after the last day the calendar shows
 * @param ctx the words and the place of the system
 */
export function expandEvents(events: CalendarEvent[], start: Date, end: Date, ctx: ExpandContext): EventInput[] {
    const result: EventInput[] = [];
    const days = getDays(start, end);

    for (const event of events) {
        const color = event.common.color || event.native.color || DEFAULT_COLOR;
        const enabled = !!event.common.enabled;
        const textColor = getContrastColor(color);
        const type = event.native.type || 'single';
        // the second value of a double or toggle event comes after this time
        const duration = type !== 'single' ? Number(event.native.intervals?.[0]?.timeOffset) || 0 : 0;
        const base: EventInput = {
            title: getEventTitle(event, ctx),
            backgroundColor: enabled ? color : dimColor(color),
            borderColor: enabled ? color : dimColor(color),
            textColor: enabled ? textColor : dimColor(textColor),
            classNames: enabled ? [] : ['disabled'],
            allDay: false,
            display: 'block',
            durationEditable: duration > 0,
        };
        const add = (time: Date | null): void => {
            if (!time || isNaN(time.getTime())) {
                return;
            }
            result.push({
                ...base,
                start: time,
                end: duration > 0 ? new Date(time.getTime() + duration) : undefined,
                extendedProps: { eventId: event._id, icon: event.common.icon, type },
            });
        };

        if (event.native.cron) {
            const cron = cron2obj(event.native.cron);
            if (!event.native.astro && (!Array.isArray(cron.hours) || !Array.isArray(cron.minutes))) {
                // every hour or minute: no event of a calendar
                continue;
            }
            for (const day of days) {
                if (!isCronDay(cron, day)) {
                    continue;
                }
                if (event.native.astro) {
                    add(getAstroDate(event.native.astro, event.native.offset, day, ctx));
                } else {
                    const time = new Date(day);
                    time.setHours(firstOf(cron.hours, 0), firstOf(cron.minutes, 0), firstOf(cron.seconds, 0), 0);
                    add(time);
                }
            }
        } else if (event.native.start) {
            const date = parseISOLocal(event.native.start);
            const time = event.native.astro ? getAstroDate(event.native.astro, event.native.offset, date, ctx) : date;
            if (time && time < end && time.getTime() + duration >= start.getTime()) {
                add(time);
            }
        }
    }

    return result;
}
