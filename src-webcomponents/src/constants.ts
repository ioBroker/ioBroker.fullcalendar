/** The adapter whose events the element shows */
export const ADAPTER = 'fullcalendar';

/** Tag of the custom element; a host checks that the module defines exactly this one */
export const TAG = 'iob-fullcalendar';

/** The built module, next to its manifest */
export const MODULE_FILE = 'fullcalendar.js';

/** The manifest the build writes next to the module; `common.webComponents` names this one */
export const MANIFEST_FILE = 'fullcalendar.json';

/** Where `tasks.js` puts the module in the admin folder */
export const MODULE_PATH = `webcomponents/${MODULE_FILE}`;

/** The views of FullCalendar the element offers, as the vis-2 widget does */
export const VIEW_MODES = ['dayGridMonth', 'timeGridWeek', 'timeGridDay', 'listMonth'] as const;

export type ViewMode = (typeof VIEW_MODES)[number];

/** The scales of the day and week views, in minutes */
export const DAY_STEPS = [1, 2, 3, 5, 10, 15, 20, 30, 60];

/** The scale of the day and week views if the settings have none, in minutes */
export const DEFAULT_DAY_STEP = 30;

/** The values of the settings of the manifest; a setting without a value is missing */
export type CalendarSettings = {
    /** `fullcalendar.0` */
    instance?: string;
    /** `fullcalendar.0.Calendars.<id>`; empty: the default calendar of the instance */
    calendar?: string;
    readOnly?: boolean;
    hideLeftBlock?: boolean;
    hideLeftBlockHint?: boolean;
    hideTopBlock?: boolean;
    hideTopBlockButtons?: boolean;
    hideWeekends?: boolean;
    /** The titles of the events are their names only, without the values and the duration */
    hideValues?: boolean;
    viewMode?: string;
    /** One of `DAY_STEPS`, as text: a `select` has text values */
    dayStep?: string;
};

/** Where the events of the settings are */
export interface CalendarTarget {
    /** The instance that keeps and runs the events: `fullcalendar.0` */
    instance: string;
    /** The calendar, empty for the default calendar of the instance */
    calendar: string;
    /** New events get IDs below this: `fullcalendar.0` or `fullcalendar.0.Calendars.<id>` */
    prefix: string;
}

/**
 * Where the events of these settings are: a calendar names its instance itself, else the instance of the settings
 *
 * @param settings the settings of the element
 * @returns the target, or why there is none: `chooseInstance` or `notCalendar`
 */
export function getTarget(settings: CalendarSettings): CalendarTarget | 'chooseInstance' | 'notCalendar' {
    const calendar = settings.calendar?.trim();
    if (calendar) {
        const match = calendar.match(/^(fullcalendar\.\d+)\.Calendars\.[^.]+$/);
        return match ? { instance: match[1], calendar, prefix: calendar } : 'notCalendar';
    }
    // JSON-Config gives `fullcalendar.0`; `0` and `system.adapter.fullcalendar.0` are taken as well
    const match = settings.instance?.trim().match(/^(?:system\.adapter\.)?(?:fullcalendar\.)?(\d+)$/);
    if (!match) {
        return 'chooseInstance';
    }
    const instance = `${ADAPTER}.${match[1]}`;
    return { instance, calendar: '', prefix: instance };
}

/**
 * The view of the settings
 *
 * @param settings the settings of the element
 */
export function getViewMode(settings: CalendarSettings): ViewMode {
    return VIEW_MODES.find(mode => mode === settings.viewMode) || 'dayGridMonth';
}

/**
 * The scale of the day and week views of the settings, in minutes
 *
 * @param settings the settings of the element
 */
export function getDayStep(settings: CalendarSettings): number {
    const step = parseInt(settings.dayStep || '', 10);
    return DAY_STEPS.includes(step) ? step : DEFAULT_DAY_STEP;
}
