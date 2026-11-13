/**
 * The styles of the shadow root: the CSS of FullCalendar (see `getFullCalendarCss()`) and these on top of it.
 *
 * The element fills the box of the host, has a transparent background and inherits `color` and `font`. The colors
 * of FullCalendar are its CSS variables (`--fc-*`), set here from the theme of the host (`--iob-*`), so the
 * calendar looks right in a light and a dark host. The sizes scale with the box (container queries on `.root`).
 */
import { injectStyles } from '@fullcalendar/core/internal';

/** An SVG as a CSS `url()`, for a mask in the color of the text */
function svg(path: string): string {
    return `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='${path}'/></svg>`,
    )}")`;
}

const ICON_LEFT = svg('M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z');
const ICON_RIGHT = svg('M8.6 16.6 10 18l6-6-6-6-1.4 1.4 4.6 4.6z');
const ICON_CLOSE = svg('M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z');

export const STYLES = `
:host {
    display: block;
    width: 100%;
    height: 100%;
    /* the colors of FullCalendar from the theme of the host */
    --fc-page-bg-color: var(--iob-paper);
    --fc-neutral-bg-color: color-mix(in srgb, currentColor 7%, transparent);
    --fc-neutral-text-color: var(--iob-text-secondary);
    --fc-border-color: var(--iob-divider);
    --fc-button-text-color: var(--iob-primary-contrast);
    --fc-button-bg-color: var(--iob-primary);
    --fc-button-border-color: var(--iob-primary);
    --fc-button-hover-bg-color: color-mix(in srgb, var(--iob-primary) 85%, #000);
    --fc-button-hover-border-color: color-mix(in srgb, var(--iob-primary) 85%, #000);
    --fc-button-active-bg-color: color-mix(in srgb, var(--iob-primary) 70%, #000);
    --fc-button-active-border-color: color-mix(in srgb, var(--iob-primary) 70%, #000);
    --fc-event-bg-color: #3a87ad;
    --fc-event-border-color: #3a87ad;
    --fc-event-text-color: #fff;
    --fc-more-link-bg-color: color-mix(in srgb, currentColor 15%, transparent);
    --fc-more-link-text-color: inherit;
    --fc-non-business-color: color-mix(in srgb, currentColor 5%, transparent);
    --fc-highlight-color: color-mix(in srgb, var(--iob-primary) 20%, transparent);
    --fc-today-bg-color: color-mix(in srgb, var(--iob-warning) 14%, transparent);
    --fc-now-indicator-color: var(--iob-error);
    --fc-list-event-hover-bg-color: color-mix(in srgb, currentColor 8%, transparent);
}
.root {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* the size of the box does not depend on what is in it - no loop between measuring and laying out */
    container-type: size;
}
.root.edit {
    pointer-events: none;
}
/* the container units (cq*) refer to .root in its children only, not in .root itself */
.body {
    flex: 1;
    min-height: 0;
    display: flex;
    gap: 0.8em;
    font-size: clamp(11px, 3cqmin, 15px);
}
.cal {
    flex: 1;
    min-width: 0;
    min-height: 0;
    position: relative;
}
.cal > .fc {
    position: absolute;
    inset: 0;
}
.hidden {
    display: none !important;
}

/* the event types to drag into the calendar, and the hints */
.left {
    flex: none;
    width: clamp(130px, 22cqi, 190px);
    box-sizing: border-box;
    padding: 0.8em;
    display: flex;
    flex-direction: column;
    gap: 0.8em;
    overflow: auto;
    background: var(--iob-paper);
    border: 1px solid var(--iob-divider);
    border-radius: calc(var(--iob-border-radius) * 2);
}
@container (max-width: 479px) {
    .left {
        display: none;
    }
}
.left-title {
    font-weight: 600;
}
.chip {
    padding: 0.3em 0.5em 0.4em 0.6em;
    border-radius: var(--iob-border-radius);
    background: #3a87b2;
    color: #fff;
    cursor: grab;
    user-select: none;
    touch-action: none;
}
.tips {
    display: flex;
    flex-direction: column;
    gap: 0.6em;
    font-size: 0.9em;
    color: var(--iob-text-secondary);
}
.tips hr {
    width: 100%;
    margin: 0;
    border: 0;
    border-top: 1px solid var(--iob-divider);
}
.zoom {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    font-size: 0.9em;
    color: var(--iob-text-secondary);
}
.zoom select {
    font: inherit;
    color: var(--iob-text);
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--iob-divider);
    padding: 0.2em 0;
}
.zoom option {
    background: var(--iob-paper);
    color: var(--iob-text);
}

/* a hint instead of the calendar, and a message below it */
.hint {
    position: absolute;
    inset: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    text-align: center;
    font-size: clamp(12px, 4.5cqmin, 16px);
    color: var(--iob-text-secondary);
}
.message {
    flex: none;
    padding: 0.3em 0.2em 0;
    font-size: clamp(10px, 2.7cqmin, 13.5px);
    color: var(--iob-error);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* FullCalendar, made to fit a tile */
.fc .fc-toolbar.fc-header-toolbar {
    flex-wrap: wrap;
    gap: 0.4em;
    margin-bottom: 0.6em;
}
.fc .fc-toolbar-title {
    font-size: clamp(1.05em, 4.5cqmin, 1.6em);
}
.fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
    margin-left: 0.4em;
}
.fc .fc-button {
    padding: 0.3em 0.55em;
    border-radius: var(--iob-border-radius);
}
.fc .fc-button:focus,
.fc .fc-button-primary:focus,
.fc .fc-button-primary:not(:disabled).fc-button-active:focus,
.fc .fc-button-primary:not(:disabled):active:focus {
    box-shadow: none;
}
.fc .fc-button:focus-visible {
    outline: 2px solid var(--iob-secondary);
    outline-offset: 1px;
}
.fc .fc-col-header-cell {
    background: var(--fc-neutral-bg-color);
}
.fc .fc-popover {
    color: var(--iob-text);
}
.fc-event {
    min-height: 21px;
    overflow: hidden;
}
.fc-daygrid-event .fc-event-title-container {
    min-width: 0;
}
.fc-daygrid-event .fc-event-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.fc-v-event .fc-event-title-container {
    display: flex;
    align-items: flex-start;
    gap: 3px;
}
.fc-event img.icon {
    width: 20px;
    height: 20px;
    flex: none;
    object-fit: contain;
}
.fc-event.disabled {
    opacity: 0.85;
}

/* the icon font of FullCalendar cannot load in a shadow root: the icons as masks in the color of the text */
.fc .fc-icon {
    font-family: inherit !important;
    width: 1em;
    height: 1em;
}
.fc .fc-icon::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: currentColor;
    -webkit-mask: var(--icon) center / contain no-repeat;
    mask: var(--icon) center / contain no-repeat;
}
.fc .fc-icon-chevron-left {
    --icon: ${ICON_LEFT};
}
.fc .fc-icon-chevron-right {
    --icon: ${ICON_RIGHT};
}
.fc .fc-icon-x {
    --icon: ${ICON_CLOSE};
}

/* "today" lets the day light up briefly (see today.ts): the day of the list, of the month, the column of the week */
@keyframes iob-fc-flash {
    0%,
    45% {
        background-color: color-mix(in srgb, var(--iob-warning, #ff9800) 55%, transparent);
        box-shadow: inset 0 0 0 2px var(--iob-warning, #ff9800);
    }
    100% {
        background-color: transparent;
        box-shadow: inset 0 0 0 2px transparent;
    }
}
.fc .iob-fc-flash {
    animation: iob-fc-flash 1.6s ease-out 1;
}
`;

let fullCalendarCss: string | null = null;

/**
 * The CSS of FullCalendar. Its packages hand it to `injectStyles()` when they are loaded; the build
 * (`vite.config.ts`) keeps it there instead of letting FullCalendar put it into the `<head>` of the host page or into
 * a `<style>` of its own: this element puts it into its shadow root.
 *
 * In a shadow root `:root` matches nothing, so the variables of FullCalendar go to the host element.
 */
export function getFullCalendarCss(): string {
    if (fullCalendarCss === null) {
        const texts = (injectStyles as unknown as { styleTexts?: string[] }).styleTexts || [];
        fullCalendarCss = texts.join('\n').replace(/:root\s*\{/g, ':host{');
    }
    return fullCalendarCss;
}
