/**
 * `<iob-fullcalendar>`: the planned events of an instance of fullcalendar in a calendar - what the vis-2 widget
 * "Calendar" shows, for every host of web components (vis-2, devices, Aura, admin).
 *
 * - The events are objects of the instance (`type: 'schedule'`): `fullcalendar.N.event-<uuid>` for the default
 *   calendar, `fullcalendar.N.Calendars.<id>.event-<uuid>` for another one. A web component may not read a custom
 *   object view or write objects through the socket, so it asks the instance (`sendTo`: `getEventObjects`,
 *   `setEventObject`, `deleteEventObject`, see `src/main.ts`). It follows changes with a subscription of the objects
 *   below the calendar, and reads all of them again every few minutes for a host whose socket does not deliver them.
 * - Like the widget, it creates events by dragging a type from the left into the calendar or by a double click,
 *   moves them by dragging (with ALT: copies them), changes the duration by resizing and edits them in a dialog -
 *   the form dialog of the host (`openDialog`). Read only: the dialog shows the event without changing it.
 * - In edit mode it writes nothing and reacts to no clicks.
 *
 * FullCalendar is part of the module, with its CSS in the shadow root (see `src/styles.ts` and `vite.config.ts`).
 */
import {
    Calendar,
    type CalendarOptions,
    type DateSelectArg,
    type DatesSetArg,
    type EventClickArg,
    type EventDropArg,
    type EventMountArg,
} from '@fullcalendar/core';
import deLocale from '@fullcalendar/core/locales/de';
import esLocale from '@fullcalendar/core/locales/es';
import frLocale from '@fullcalendar/core/locales/fr';
import itLocale from '@fullcalendar/core/locales/it';
import nlLocale from '@fullcalendar/core/locales/nl';
import plLocale from '@fullcalendar/core/locales/pl';
import ptLocale from '@fullcalendar/core/locales/pt';
import ruLocale from '@fullcalendar/core/locales/ru';
import ukLocale from '@fullcalendar/core/locales/uk';
import zhCnLocale from '@fullcalendar/core/locales/zh-cn';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable, type EventReceiveArg, type EventResizeDoneArg } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import type { WebComponentSettings, WebComponentSocket } from '@iobroker/web-components';
import { defineWebComponent, IobWebComponent } from '@iobroker/web-components/element';

import { toLocalTime } from '../../src/lib/utils';

import {
    type CalendarSettings,
    type CalendarTarget,
    DAY_STEPS,
    getDayStep,
    getTarget,
    getViewMode,
    TAG,
    VIEW_MODES,
} from './constants';
import { cron2obj, obj2cron } from './cron';
import {
    adaptValues,
    buildEventForm,
    dataToEvent,
    eventToData,
    type EventFormContext,
    getValueKind,
} from './eventForm';
import { type CalendarEvent, DEFAULT_COLOR, type EventType, expandEvents, isCalendarEvent } from './events';
import { getWord, type Word } from './i18n';
import { getFullCalendarCss, STYLES } from './styles';

type Settings = CalendarSettings & WebComponentSettings;

/** How long to wait for an answer of the instance */
const TIMEOUT = 10_000;

/** How often to read all events again, for a host whose socket does not deliver changes of objects */
const RELOAD_INTERVAL = 5 * 60_000;

/** After the user looked at another time, the day and week views scroll back to now after this */
const SCROLL_BACK_DELAY = 60_000;

/** Two clicks on the same slot within this time are a double click */
const DOUBLE_CLICK = 500;

const LOCALES = [deLocale, ruLocale, ptLocale, nlLocale, frLocale, itLocale, esLocale, plLocale, ukLocale, zhCnLocale];

/** The color of a new event, as the widget gives it */
const NEW_EVENT_COLOR = '#3A87AD';

const EVENT_TYPES: { type: EventType; word: Word }[] = [
    { type: 'single', word: 'Single event' },
    { type: 'double', word: 'Double event' },
    { type: 'toggle', word: 'Toggle event' },
];

class TimeoutError extends Error {}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const timer = setTimeout(() => reject(new TimeoutError()), ms);
        promise.then(
            value => {
                clearTimeout(timer);
                resolve(value);
            },
            (e: unknown) => {
                clearTimeout(timer);
                reject(e instanceof Error ? e : new Error(String(e)));
            },
        );
    });
}

function uuid(): string {
    if (typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = [...bytes].map(b => b.toString(16).padStart(2, '0')).join('');
    return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20)}`;
}

/**
 * The icon of an object as the widgets store it in an event: a path below the web root, `adapter/<name>/<file>`
 *
 * @param obj the object
 */
function objectIcon(obj: ioBroker.Object): string | undefined {
    const icon = (obj.common as { icon?: unknown } | undefined)?.icon;
    if (!icon || typeof icon !== 'string') {
        return undefined;
    }
    if (/^(data:|https?:|\/)/.test(icon) || (obj.common as { iconConverted?: boolean }).iconConverted) {
        return icon;
    }
    const parts = obj._id.split('.');
    const adapter = obj._id.startsWith('system.adapter.') ? parts[2] : parts[0];
    return `adapter/${adapter}/${icon}`;
}

/**
 * The URL of the icon of an event: the widgets store it relative to the web root, which is three folders above this
 * module (`adapter/fullcalendar/webcomponents/`) - so a path prefix of a reverse proxy stays
 *
 * @param icon the icon of the event
 */
function iconUrl(icon: string): string {
    if (/^(data:|https?:|\/)/.test(icon)) {
        return icon;
    }
    try {
        // through a variable: Vite would bundle every file the template could name
        const base = import.meta.url;
        return new URL(`../../../${icon}`, base).href;
    } catch {
        return icon;
    }
}

/**
 * An event in the calendar: its title as tooltip, and the icon of its object, as the widget shows it
 *
 * @param info the event and its element
 */
function onEventDidMount(info: EventMountArg): void {
    info.el.title = info.event.title;
    const icon = info.event.extendedProps.icon as string | undefined;
    if (!icon) {
        return;
    }
    const img = document.createElement('img');
    img.className = 'icon';
    img.alt = '';
    img.src = iconUrl(icon);
    const container = info.el.querySelector('.fc-event-title-container, .fc-list-event-title, .fc-event-title');
    container?.prepend(img);
}

/**
 * Whether an object ID is an event of the calendar; the default calendar has them directly below the instance
 *
 * @param target the calendar
 * @param id the object ID
 */
function isEventOf(target: CalendarTarget, id: string): boolean {
    return id.startsWith(`${target.prefix}.`) && (!!target.calendar || id.split('.').length <= 3);
}

/** The day and week views show the hour before now at the top */
function scrollTimeNow(): string {
    return `${String(Math.max(0, new Date().getHours() - 1)).padStart(2, '0')}:00:00`;
}

function errorText(e: unknown): string {
    return e instanceof Error ? e.message : String(e);
}

class FullCalendarElement extends IobWebComponent<Settings> {
    readonly #shadow: ShadowRoot;
    readonly #rootEl: HTMLDivElement;
    readonly #bodyEl: HTMLDivElement;
    readonly #leftEl: HTMLDivElement;
    readonly #leftTitleEl: HTMLDivElement;
    readonly #chipsEl: HTMLDivElement;
    readonly #tipsEl: HTMLDivElement;
    readonly #zoomEl: HTMLLabelElement;
    readonly #zoomLabelEl: HTMLSpanElement;
    readonly #zoomSelect: HTMLSelectElement;
    readonly #calEl: HTMLDivElement;
    readonly #messageEl: HTMLDivElement;
    readonly #hintEl: HTMLDivElement;

    #calendar: Calendar | null = null;
    /** The options of the calendar as last given to it, to change only what changed */
    #options: Record<string, string> = {};
    /** The view of the settings the calendar shows */
    #settingsView = '';
    /** The view the calendar shows now */
    #currentView = '';
    #draggable: Draggable | null = null;
    #resizeObserver: ResizeObserver | null = null;
    #resizeFrame = 0;
    #scrollTimer: ReturnType<typeof setTimeout> | null = null;

    /** The language of the texts of the left block */
    #textsLang = '';
    /** The scale the user chose in the left block; `null`: the one of the settings */
    #zoom: number | null = null;
    #settingsStep = 0;

    /** Where the events come from: the calendar of the settings, with the socket it was read with */
    #target: CalendarTarget | null = null;
    #targetKey = '';
    #socketOfTarget: WebComponentSocket | null = null;
    #events: CalendarEvent[] = [];
    #loadCounter = 0;
    #reloadTimer: ReturnType<typeof setInterval> | null = null;
    #objectSubscription: {
        socket: WebComponentSocket;
        pattern: string;
        handler: (id: string, obj: ioBroker.Object | null | undefined) => void;
    } | null = null;
    #alive: boolean | null = null;
    /** What went wrong last, shown below the calendar */
    #message = '';
    /** What the titles of the events depend on besides the events */
    #expandKey = '';
    #lastSelect: { time: number; start: number } | null = null;

    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = `${getFullCalendarCss()}\n${STYLES}`;

        const div = (className: string): HTMLDivElement => {
            const el = document.createElement('div');
            el.className = className;
            return el;
        };
        this.#rootEl = div('root');
        this.#bodyEl = div('body');
        this.#leftEl = div('left');
        this.#leftTitleEl = div('left-title');
        this.#chipsEl = div('chips');
        for (const { type } of EVENT_TYPES) {
            const chip = div('chip');
            chip.dataset.type = type;
            this.#chipsEl.append(chip);
        }
        this.#tipsEl = div('tips');
        this.#zoomEl = document.createElement('label');
        this.#zoomEl.className = 'zoom';
        this.#zoomLabelEl = document.createElement('span');
        this.#zoomSelect = document.createElement('select');
        this.#zoomSelect.addEventListener('change', () => {
            // edit mode: react to nothing
            this.#zoom = this.editMode ? this.#zoom : parseInt(this.#zoomSelect.value, 10) || null;
            this.render();
        });
        this.#zoomEl.append(this.#zoomLabelEl, this.#zoomSelect);
        this.#leftEl.append(this.#leftTitleEl, this.#chipsEl, this.#tipsEl, this.#zoomEl);
        this.#calEl = div('cal');
        this.#bodyEl.append(this.#leftEl, this.#calEl);
        this.#messageEl = div('message hidden');
        this.#hintEl = div('hint hidden');
        this.#rootEl.append(this.#bodyEl, this.#messageEl, this.#hintEl);
        this.#shadow.append(style, this.#rootEl);
    }

    override connectedCallback(): void {
        super.connectedCallback();
        // the types of events to drag into the calendar; the mirror goes into the shadow root, outside of `.root`,
        // whose containment would make it the box of the fixed mirror
        this.#draggable ||= new Draggable(this.#chipsEl, {
            itemSelector: '.chip',
            appendTo: this.#shadow as unknown as HTMLElement,
            eventData: (el: HTMLElement) => ({
                title: el.textContent || '',
                create: true,
                extendedProps: { type: el.dataset.type },
            }),
        });
        if (!this.#resizeObserver && typeof ResizeObserver !== 'undefined') {
            // FullCalendar follows the size of the window only, not the one of a tile
            this.#resizeObserver = new ResizeObserver(() => {
                cancelAnimationFrame(this.#resizeFrame);
                this.#resizeFrame = requestAnimationFrame(() => this.#calendar?.updateSize());
            });
            this.#resizeObserver.observe(this.#calEl);
        }
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();
        this.#draggable?.destroy();
        this.#draggable = null;
        this.#resizeObserver?.disconnect();
        this.#resizeObserver = null;
        cancelAnimationFrame(this.#resizeFrame);
        this.#stopScrollBack();
        this.#destroyCalendar();
        this.#setTarget(null, null);
    }

    protected override getStateIds(settings: Settings): string[] {
        const target = getTarget(settings);
        return typeof target === 'string' ? [] : [`system.adapter.${target.instance}.alive`];
    }

    protected override getObjectIds(): string[] {
        // the place of the system for the astronomical events, and the first day of the week
        return ['system.config'];
    }

    #word = (key: Word, ...args: (string | number)[]): string => getWord(this.systemLang, key, ...args);

    protected render(): void {
        const settings = this.settings;
        const lang = this.systemLang;
        const target = getTarget(settings);
        this.#rootEl.classList.toggle('edit', this.editMode);
        this.#renderTexts(lang);

        if (typeof target === 'string') {
            this.#setTarget(null, null);
            this.#destroyCalendar();
            this.#showHint(this.#word(target === 'notCalendar' ? 'notCalendar' : 'Please select instance'));
            this.#showMessage('');
            return;
        }
        this.#showHint('');
        this.#setTarget(target, this.socket);

        // the instance started again: what it has now
        const alive = this.states[`system.adapter.${target.instance}.alive`];
        const isAlive = alive ? !!alive.val : null;
        if (isAlive && this.#alive === false) {
            void this.#load();
        }
        this.#alive = isAlive;
        this.#showMessage(isAlive === false ? this.#word('notRunning', target.instance) : this.#message);

        const canEdit = !this.editMode && !settings.readOnly;
        this.#leftEl.classList.toggle('hidden', !!settings.readOnly || !!settings.hideLeftBlock);
        this.#tipsEl.classList.toggle('hidden', !!settings.hideLeftBlockHint);
        this.#zoomSelect.value = String(this.#step(settings));

        // the titles are in the language of the system, the astronomical events at the place of the system
        const config = this.objects['system.config'] as ioBroker.SystemConfigObject | null | undefined;
        const expandKey = `${lang}|${config?.common.latitude}|${config?.common.longitude}`;
        if (expandKey !== this.#expandKey) {
            this.#expandKey = expandKey;
            this.#calendar?.refetchEvents();
        }
        this.#renderCalendar(settings, lang, canEdit);
    }

    /** The texts of the left block in the language of the system */
    #renderTexts(lang: string): void {
        if (lang === this.#textsLang) {
            return;
        }
        this.#textsLang = lang;
        this.#leftTitleEl.textContent = this.#word('Events');
        const chips = this.#chipsEl.querySelectorAll<HTMLElement>('.chip');
        EVENT_TYPES.forEach(({ word }, i) => (chips[i].textContent = this.#word(word)));
        const tips: Word[] = [
            'Drag and drop the events above to create a new one.',
            'Use ALT by dragging it to copy the events.',
            'Use double click on calendar to add new events.',
        ];
        this.#tipsEl.replaceChildren(
            ...tips.flatMap((tip, i) => {
                const text = document.createElement('div');
                text.textContent = this.#word(tip);
                return i ? [document.createElement('hr'), text] : [text];
            }),
        );
        this.#zoomLabelEl.textContent = this.#word('Zoom');
        this.#zoomSelect.replaceChildren(
            ...DAY_STEPS.map(step => {
                const option = document.createElement('option');
                option.value = String(step);
                option.textContent = `${step} ${this.#word('min')}`;
                return option;
            }),
        );
        this.#zoomSelect.value = String(this.#step());
    }

    #step(settings: Settings = this.settings): number {
        const step = getDayStep(settings);
        if (step !== this.#settingsStep) {
            // the settings changed: they decide again
            this.#settingsStep = step;
            this.#zoom = null;
        }
        return this.#zoom || step;
    }

    #showHint(text: string): void {
        this.#hintEl.textContent = text;
        this.#hintEl.classList.toggle('hidden', !text);
        this.#bodyEl.classList.toggle('hidden', !!text);
    }

    #showMessage(text: string): void {
        this.#messageEl.textContent = text;
        this.#messageEl.title = text;
        this.#messageEl.classList.toggle('hidden', !text);
    }

    // --- the calendar ---------------------------------------------------------------------------------------------

    /** The options of the calendar that follow the settings, the language and the edit mode */
    #dynamicOptions(settings: Settings, lang: string, canEdit: boolean): CalendarOptions {
        const step = this.#step(settings);
        const config = this.objects['system.config'] as ioBroker.SystemConfigObject | null | undefined;
        const firstDayOfWeek = (config?.common as { firstDayOfWeek?: string } | undefined)?.firstDayOfWeek;
        const options: CalendarOptions = {
            locale: lang,
            headerToolbar: settings.hideTopBlock
                ? false
                : {
                      left: settings.hideTopBlockButtons ? '' : 'prev,next today',
                      center: 'title',
                      right: settings.hideTopBlockButtons ? '' : VIEW_MODES.join(','),
                  },
            weekends: !settings.hideWeekends,
            slotDuration: { minutes: step },
            defaultTimedEventDuration: { minutes: step },
            editable: canEdit,
            selectable: canEdit,
        };
        if (firstDayOfWeek === 'monday' || firstDayOfWeek === 'sunday') {
            options.firstDay = firstDayOfWeek === 'monday' ? 1 : 0;
        }
        return options;
    }

    #renderCalendar(settings: Settings, lang: string, canEdit: boolean): void {
        const options = this.#dynamicOptions(settings, lang, canEdit);
        const view = getViewMode(settings);
        if (!this.#calendar) {
            const el = document.createElement('div');
            this.#calEl.replaceChildren(el);
            this.#settingsView = view;
            this.#currentView = view;
            this.#calendar = new Calendar(el, {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
                locales: LOCALES,
                initialView: view,
                height: '100%',
                nowIndicator: true,
                dayMaxEvents: true,
                selectMirror: true,
                eventMinHeight: 20,
                eventResizableFromStart: false,
                // the types of the left block: not in edit mode and not read only
                dropAccept: () => this.#canChange(),
                scrollTime: scrollTimeNow(),
                events: (info, success) => success(this.#expand(info.start, info.end)),
                eventClick: info => this.#onEventClick(info),
                eventDrop: info => void this.#onEventDrop(info),
                eventResize: info => void this.#onEventResize(info),
                eventReceive: info => this.#onEventReceive(info),
                select: info => this.#onSelect(info),
                eventDidMount: onEventDidMount,
                datesSet: info => this.#onDatesSet(info),
                ...options,
            });
            this.#options = Object.fromEntries(
                Object.entries(options).map(([key, value]) => [key, JSON.stringify(value)]),
            );
            this.#calendar.render();
            return;
        }

        const calendar = this.#calendar;
        const changed = Object.entries(options).filter(([key, value]) => this.#options[key] !== JSON.stringify(value));
        if (view !== this.#settingsView) {
            this.#settingsView = view;
            calendar.changeView(view);
        }
        if (changed.length) {
            calendar.batchRendering(() => {
                for (const [key, value] of changed) {
                    this.#options[key] = JSON.stringify(value);
                    calendar.setOption(key as keyof CalendarOptions, value as never);
                }
            });
        }
    }

    #destroyCalendar(): void {
        this.#calendar?.destroy();
        this.#calendar = null;
        this.#options = {};
        this.#expandKey = '';
        this.#calEl.replaceChildren();
    }

    #expand(start: Date, end: Date): ReturnType<typeof expandEvents> {
        const config = this.objects['system.config'] as ioBroker.SystemConfigObject | null | undefined;
        return expandEvents(this.#events, start, end, {
            word: key => this.#word(key),
            text: text => this.text(text),
            latitude: config?.common.latitude,
            longitude: config?.common.longitude,
        });
    }

    #onDatesSet(info: DatesSetArg): void {
        this.#currentView = info.view.type;
        this.#zoomEl.classList.toggle('hidden', !this.#currentView.startsWith('timeGrid'));
        // after the user looked at another time, back to now - as the widget does
        this.#stopScrollBack();
        const scrollBack = (): void => {
            this.#calendar?.scrollToTime(scrollTimeNow());
            this.#scrollTimer = setTimeout(scrollBack, RELOAD_INTERVAL);
        };
        this.#scrollTimer = setTimeout(scrollBack, SCROLL_BACK_DELAY);
    }

    #stopScrollBack(): void {
        if (this.#scrollTimer) {
            clearTimeout(this.#scrollTimer);
            this.#scrollTimer = null;
        }
    }

    #findEvent(id: unknown): CalendarEvent | undefined {
        return this.#events.find(event => event._id === id);
    }

    #canChange(): boolean {
        return !this.editMode && !this.settings.readOnly && !!this.socket && !!this.#target;
    }

    #onEventClick(info: EventClickArg): void {
        info.jsEvent.preventDefault();
        if (this.editMode) {
            return;
        }
        const event = this.#findEvent(info.event.extendedProps.eventId);
        if (event) {
            void this.#editEvent(event, false);
        }
    }

    /** Moved by dragging, as the widget does: a repeated event gets the new time (and day), a single one the date */
    async #onEventDrop(info: EventDropArg): Promise<void> {
        const original = this.#findEvent(info.event.extendedProps.eventId);
        const start = info.event.start;
        if (!this.#canChange() || !original || !start) {
            info.revert();
            return;
        }
        const event: CalendarEvent = JSON.parse(JSON.stringify(original));
        if (info.jsEvent.altKey) {
            event._id = this.#newId();
        }
        if (event.native.cron) {
            const cron = cron2obj(event.native.cron);
            if (Array.isArray(cron.months)) {
                if (info.delta.days || info.delta.months) {
                    cron.dates = [start.getDate()];
                }
                if (!cron.months.includes(start.getMonth() + 1)) {
                    cron.months = [start.getMonth() + 1];
                }
                cron.dows = '*';
            } else if (Array.isArray(cron.dows)) {
                cron.months = '*';
                cron.dates = '?';
                if (info.delta.days) {
                    cron.dows = [start.getDay()];
                }
            }
            cron.hours = [start.getHours()];
            cron.minutes = [start.getMinutes()];
            event.native.cron = obj2cron(cron);
        } else {
            event.native.start = toLocalTime(start);
        }
        if (!(await this.#save(event))) {
            info.revert();
        }
    }

    /** The end of a double or toggle event moved: its duration */
    async #onEventResize(info: EventResizeDoneArg): Promise<void> {
        const original = this.#findEvent(info.event.extendedProps.eventId);
        const { start, end } = info.event;
        const duration = start && end ? end.getTime() - start.getTime() : 0;
        if (!this.#canChange() || !original?.native.intervals?.length || duration <= 0) {
            info.revert();
            return;
        }
        const event: CalendarEvent = JSON.parse(JSON.stringify(original));
        event.native.intervals![0].timeOffset = duration;
        if (!(await this.#save(event))) {
            info.revert();
        }
    }

    /** A type of event from the left block dropped into the calendar: a new event, saved when the dialog is */
    #onEventReceive(info: EventReceiveArg): void {
        const start = info.event.start;
        const type = info.event.extendedProps.type as EventType;
        // the calendar shows the events of the instance only
        info.revert();
        if (!this.#canChange() || !start) {
            return;
        }
        const time = new Date(start);
        if (!time.getHours() && !time.getMinutes()) {
            // dropped on a day: at noon
            time.setHours(12);
        }
        const event = this.#newEvent(type, time, info.event.title);
        if (type !== 'single') {
            event.native.intervals = [{ timeOffset: 30 * 60_000 }];
        }
        void this.#editEvent(event, true);
    }

    /**
     * A selection in the calendar: a slot or a day needs a double click and makes a single event, a longer time
     * a double event of that duration
     */
    #onSelect(info: DateSelectArg): void {
        info.view.calendar.unselect();
        if (!this.#canChange()) {
            return;
        }
        const start = info.start.getTime();
        const duration = info.end.getTime() - start;
        const single = info.allDay ? duration <= 24 * 3600_000 : duration <= this.#step() * 60_000;
        if (single) {
            const last = this.#lastSelect;
            const now = Date.now();
            if (!last || last.start !== start || now - last.time > DOUBLE_CLICK) {
                this.#lastSelect = { time: now, start };
                return;
            }
        } else if (info.allDay) {
            // several days: no event of the widget
            return;
        }
        this.#lastSelect = null;
        const time = new Date(start);
        if (info.allDay) {
            time.setHours(12);
        }
        const event = single
            ? this.#newEvent('single', time, this.#word('Single event'))
            : this.#newEvent('double', time, this.#word('Double event'));
        if (!single) {
            event.native.intervals = [{ value: '', timeOffset: duration }];
        }
        void this.#editEvent(event, true);
    }

    #newId(): string {
        return `${this.#target!.prefix}.event-${uuid()}`;
    }

    #newEvent(type: EventType, start: Date, name: string): CalendarEvent {
        return {
            _id: this.#newId(),
            type: 'schedule',
            common: { name, enabled: true, color: NEW_EVENT_COLOR },
            native: { id: Date.now(), start: toLocalTime(start), type, oid: '', startValue: '' },
        };
    }

    // --- the dialog -----------------------------------------------------------------------------------------------

    async #getObject(id: string | undefined): Promise<ioBroker.Object | null> {
        if (!id || !this.socket) {
            return null;
        }
        try {
            return (await this.socket.getObject(id)) || null;
        } catch {
            return null;
        }
    }

    /** The icon of the object of an event, else of its channel or device - as the widget finds it */
    async #findIcon(oid: string): Promise<string | undefined> {
        let id = oid;
        for (let level = 0; level < 3 && id; level++) {
            const obj = await this.#getObject(id);
            if (!obj) {
                return undefined;
            }
            const icon = objectIcon(obj);
            if (icon) {
                return icon;
            }
            if (obj.type !== 'state' && obj.type !== 'channel') {
                return undefined;
            }
            id = id.split('.').slice(0, -1).join('.');
        }
        return undefined;
    }

    /**
     * The dialog of an event: changes it, creates it if it is new, or deletes it
     *
     * @param original the event as it is
     * @param isNew the event is not saved yet
     */
    async #editEvent(original: CalendarEvent, isNew: boolean): Promise<void> {
        if (this.editMode || !this.socket) {
            return;
        }
        const readOnly = !!this.settings.readOnly;
        const config = this.objects['system.config'] as ioBroker.SystemConfigObject | null | undefined;
        const firstDayOfWeek = (config?.common as { firstDayOfWeek?: string } | undefined)?.firstDayOfWeek;
        const ctx: EventFormContext = {
            lang: this.systemLang,
            word: this.#word,
            text: text => this.text(text),
            readOnly,
            isNew,
            object: await this.#getObject(original.native.oid),
            firstDay: firstDayOfWeek === 'sunday' || (!firstDayOfWeek && this.systemLang === 'en') ? 0 : 1,
            latitude: config?.common.latitude,
            longitude: config?.common.longitude,
        };
        let data = eventToData(original, ctx);
        let error: string | undefined;
        for (;;) {
            const result = await this.openDialog(buildEventForm(ctx, data, error));
            if (!result || readOnly || !this.#canChange()) {
                return;
            }
            data = result;
            error = undefined;
            if (result.delete) {
                const confirmed = await this.openDialog({
                    title: this.#word('Delete event'),
                    form: {
                        type: 'panel',
                        items: { text: { type: 'staticText', text: this.#word('Event will be deleted. Confirm?') } },
                    },
                    ok: this.#word('Delete'),
                });
                if (confirmed) {
                    await this.#delete(original._id);
                    return;
                }
                data = { ...result, delete: false };
                continue;
            }

            const oid = String(result.oid ?? '').trim();
            const obj = oid === original.native.oid ? ctx.object : await this.#getObject(oid);
            if (getValueKind(obj) !== getValueKind(ctx.object)) {
                // another kind of object: the values again, in fields that fit it
                data = adaptValues(result, ctx.object, obj);
                ctx.object = obj;
                continue;
            }
            const event = dataToEvent(original, result, obj, ctx);
            if (typeof event === 'string') {
                error = this.#word('invalid', event);
                continue;
            }
            if (oid !== original.native.oid || isNew) {
                const icon = oid ? await this.#findIcon(oid) : undefined;
                if (icon) {
                    event.common.icon = icon;
                } else {
                    delete event.common.icon;
                }
            }
            if (!event.common.color) {
                event.common.color = DEFAULT_COLOR;
            }
            await this.#save(event);
            return;
        }
    }

    // --- the events of the instance -------------------------------------------------------------------------------

    /**
     * Follow the events of a calendar: read them, subscribe their objects, read them again now and then
     *
     * @param target the calendar, or null for none
     * @param socket the connection
     */
    #setTarget(target: CalendarTarget | null, socket: WebComponentSocket | null): void {
        const key = target && socket ? `${target.instance}|${target.calendar}` : '';
        if (key === this.#targetKey && socket === this.#socketOfTarget) {
            return;
        }
        this.#unsubscribeEvents();
        if (this.#reloadTimer) {
            clearInterval(this.#reloadTimer);
            this.#reloadTimer = null;
        }
        this.#loadCounter++;
        this.#targetKey = key;
        this.#socketOfTarget = socket;
        this.#target = target;
        this.#events = [];
        this.#message = '';
        this.#alive = null;
        this.#calendar?.refetchEvents();
        if (!target || !socket) {
            return;
        }
        const pattern = `${target.prefix}.*`;
        const handler = (id: string, obj: ioBroker.Object | null | undefined): void =>
            this.#onEventObject(target, id, obj);
        this.#objectSubscription = { socket, pattern, handler };
        try {
            socket.subscribeObject(pattern, handler).catch(() => {});
        } catch {
            // the host cannot subscribe objects: the events are read again now and then
        }
        this.#reloadTimer = setInterval(() => void this.#load(), RELOAD_INTERVAL);
        void this.#load();
    }

    #unsubscribeEvents(): void {
        const subscription = this.#objectSubscription;
        this.#objectSubscription = null;
        if (subscription) {
            try {
                Promise.resolve(
                    subscription.socket.unsubscribeObject(subscription.pattern, subscription.handler),
                ).catch(() => {});
            } catch {
                // ignore
            }
        }
    }

    #onEventObject(target: CalendarTarget, id: string, obj: ioBroker.Object | null | undefined): void {
        // a host without subscriptions of objects may answer with the pattern itself
        if (target !== this.#target || !id || id.includes('*') || !isEventOf(target, id)) {
            return;
        }
        this.#putEvent(id, isCalendarEvent(obj) ? obj : null);
    }

    /** Puts an event into the list the calendar shows, or removes it */
    #putEvent(id: string, event: CalendarEvent | null): void {
        const index = this.#events.findIndex(e => e._id === id);
        if (event) {
            if (index === -1) {
                this.#events.push(event);
            } else {
                this.#events[index] = event;
            }
        } else if (index !== -1) {
            this.#events.splice(index, 1);
        } else {
            return;
        }
        this.#calendar?.refetchEvents();
    }

    async #load(): Promise<void> {
        const target = this.#target;
        const socket = this.#socketOfTarget;
        if (!target || !socket) {
            return;
        }
        const counter = ++this.#loadCounter;
        let message = '';
        let events: CalendarEvent[] | null = null;
        try {
            const answer = await withTimeout(
                socket.sendTo<{ events?: unknown[]; error?: string }>(target.instance, 'getEventObjects', {
                    calendar: target.calendar || undefined,
                }),
                TIMEOUT,
            );
            if (answer?.error) {
                message = this.#word('loadError', answer.error);
            } else if (Array.isArray(answer?.events)) {
                events = answer.events.filter(isCalendarEvent);
            } else {
                message = this.#word('noAnswer', target.instance);
            }
        } catch (e) {
            message =
                e instanceof TimeoutError
                    ? this.#word('noAnswer', target.instance)
                    : this.#word('loadError', errorText(e));
        }
        if (counter !== this.#loadCounter) {
            // the settings changed meanwhile
            return;
        }
        if (events) {
            this.#events = events;
            this.#calendar?.refetchEvents();
        }
        this.#message = message;
        this.render();
    }

    /**
     * Saves an event through the instance
     *
     * @param event the event
     * @returns whether it was saved
     */
    async #save(event: CalendarEvent): Promise<boolean> {
        return this.#send('setEventObject', { event }, () => this.#putEvent(event._id, event));
    }

    async #delete(id: string): Promise<boolean> {
        return this.#send('deleteEventObject', { id }, () => this.#putEvent(id, null));
    }

    async #send(command: 'setEventObject' | 'deleteEventObject', data: unknown, done: () => void): Promise<boolean> {
        const target = this.#target;
        const socket = this.socket;
        // never in edit mode
        if (!target || !socket || this.editMode) {
            return false;
        }
        let message = '';
        try {
            const answer = await withTimeout(
                socket.sendTo<{ result?: string; error?: string }>(target.instance, command, data),
                TIMEOUT,
            );
            if (answer?.error || answer?.result !== 'ok') {
                message = this.#word('saveError', answer?.error || this.#word('noAnswer', target.instance));
            }
        } catch (e) {
            message = this.#word(
                'saveError',
                e instanceof TimeoutError ? this.#word('noAnswer', target.instance) : errorText(e),
            );
        }
        if (target !== this.#target) {
            return false;
        }
        if (!message) {
            done();
        }
        this.#message = message;
        this.render();
        return !message;
    }
}

defineWebComponent(TAG, FullCalendarElement);
