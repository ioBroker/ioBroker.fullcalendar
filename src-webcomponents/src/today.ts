/**
 * The button "today" of the toolbar, as the vis-2 widget has it (`showToday()` in `src-widgets/src/Component/Utils.ts`):
 * FullCalendar disables its own one as long as today is in the view, this one always brings today into sight - the
 * list scrolls to it - and lets the day light up briefly.
 */
import type { LocaleInput } from '@fullcalendar/core';

/** The name of the button in the toolbar */
export const TODAY_BUTTON = 'iobToday';

/** The class that lets an element light up briefly, see `styles.ts` */
export const FLASH_CLASS = 'iob-fc-flash';
const FLASH_DURATION = 1600;

/**
 * The text of the button in a language, as FullCalendar has it
 *
 * @param locales the locales of FullCalendar
 * @param language the language
 */
export function getTodayText(locales: LocaleInput[], language: string): string {
    return locales.find(locale => locale.code === language)?.buttonText?.today || 'today';
}

function localDay(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function flash(elements: Element[]): void {
    for (const el of elements) {
        el.classList.remove(FLASH_CLASS);
        // a new animation also if it is still running
        void (el as HTMLElement).offsetWidth;
        el.classList.add(FLASH_CLASS);
        setTimeout(() => el.classList.remove(FLASH_CLASS), FLASH_DURATION);
    }
}

/**
 * Brings today into sight after the calendar went to today: the list scrolls to today (or to the next day with events)
 * and that day lights up briefly - the day of the month, the column of the week and day view as well. If the view has
 * no such day (an empty list), the title lights up. The events may come after the dates, so it looks a few times.
 *
 * @param root the element that holds FullCalendar
 * @param viewType the type of the view, e.g. `listMonth`
 */
export function showToday(root: ParentNode, viewType: string): void {
    const today = localDay(new Date());
    let tries = 0;
    const find = (): void => {
        tries++;
        let elements: Element[] = [];
        let scrollTo: HTMLElement | null = null;
        if (viewType.startsWith('list')) {
            const day = Array.from(root.querySelectorAll<HTMLElement>('tr.fc-list-day[data-date]')).find(
                row => (row.dataset.date || '') >= today,
            );
            if (day) {
                scrollTo = day;
                elements = Array.from(day.querySelectorAll('.fc-list-day-cushion'));
            }
        } else {
            elements = Array.from(
                root.querySelectorAll(
                    'td.fc-daygrid-day.fc-day-today, th.fc-col-header-cell.fc-day-today, td.fc-timegrid-col.fc-day-today',
                ),
            );
        }
        if (!elements.length && tries < 16) {
            setTimeout(find, 60);
            return;
        }
        if (scrollTo) {
            const scroller = scrollTo.closest<HTMLElement>('.fc-scroller');
            if (scroller) {
                scroller.scrollTop += scrollTo.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
            }
        }
        if (!elements.length) {
            elements = Array.from(root.querySelectorAll('.fc-toolbar-title'));
        }
        flash(elements);
    };
    setTimeout(find, 30);
}
