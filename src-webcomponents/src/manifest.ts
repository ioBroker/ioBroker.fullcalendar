/**
 * The manifest of `<iob-fullcalendar>`. Read by the build only (`vite.config.ts`), which writes it as
 * `fullcalendar.json` next to the module - a host reads that file for its palette and its settings without loading
 * the module.
 *
 * The name and the labels are the words of the vis-2 widget (`src-widgets/src/i18n/`), which the build reads: the
 * same name, per language, makes vis-2 offer its native widget instead of this component. Only the description and
 * the help of the calendar are new and live here.
 */
import type { WebComponentManifest, WebComponentText } from '@iobroker/web-components';

// with the extension: `vite.config.ts` imports this file, and Vite may load its config natively
import { ADAPTER, DAY_STEPS, DEFAULT_DAY_STEP, MODULE_FILE, SETTING_VIEW_MODES, TAG } from './constants.ts';

export { MANIFEST_FILE, MODULE_FILE, MODULE_PATH, TAG } from './constants.ts';

/** The words of the vis-2 widget (`src-widgets/src/i18n/`, without the prefix `full_calendar_`) the manifest uses */
export const MANIFEST_WORDS = [
    'fullcalendar',
    'instance',
    'calendar',
    'read_only',
    'hide_left_block',
    'hide_left_block_hint',
    'hide_top_block',
    'hide_top_block_buttons',
    'hide_weekends',
    'view_mode',
    'day_step',
    'day_step_minutes',
    ...SETTING_VIEW_MODES,
] as const;

export type ManifestWord = (typeof MANIFEST_WORDS)[number];

const DESCRIPTION: WebComponentText = {
    en: 'The planned events of an instance of fullcalendar as a month, week, day or list; events can be created, moved and edited',
    de: 'Die geplanten Ereignisse einer Instanz von fullcalendar als Monat, Woche, Tag oder Liste; Ereignisse lassen sich anlegen, verschieben und bearbeiten',
    ru: 'Запланированные события экземпляра fullcalendar в виде месяца, недели, дня или списка; события можно создавать, перемещать и редактировать',
    pt: 'Os eventos planeados de uma instância do fullcalendar como mês, semana, dia ou lista; os eventos podem ser criados, movidos e editados',
    nl: 'De geplande gebeurtenissen van een instantie van fullcalendar als maand, week, dag of lijst; gebeurtenissen kunnen worden aangemaakt, verplaatst en bewerkt',
    fr: "Les événements planifiés d'une instance de fullcalendar sous forme de mois, semaine, jour ou liste ; les événements peuvent être créés, déplacés et modifiés",
    it: "Gli eventi pianificati di un'istanza di fullcalendar come mese, settimana, giorno o elenco; gli eventi possono essere creati, spostati e modificati",
    es: 'Los eventos planificados de una instancia de fullcalendar como mes, semana, día o lista; los eventos se pueden crear, mover y editar',
    pl: 'Zaplanowane zdarzenia instancji fullcalendar jako miesiąc, tydzień, dzień lub lista; zdarzenia można tworzyć, przesuwać i edytować',
    uk: 'Заплановані події екземпляра fullcalendar у вигляді місяця, тижня, дня або списку; події можна створювати, переміщувати та редагувати',
    'zh-cn': 'fullcalendar 实例的计划事件，以月、周、日或列表显示；可以创建、移动和编辑事件',
};

const CALENDAR_HELP: WebComponentText = {
    en: 'A calendar of the instance (fullcalendar.0.Calendars.<id>); empty: the default calendar of the instance',
    de: 'Ein Kalender der Instanz (fullcalendar.0.Calendars.<ID>); leer: der Standardkalender der Instanz',
    ru: 'Календарь экземпляра (fullcalendar.0.Calendars.<id>); пусто: календарь экземпляра по умолчанию',
    pt: 'Um calendário da instância (fullcalendar.0.Calendars.<id>); vazio: o calendário predefinido da instância',
    nl: 'Een kalender van de instantie (fullcalendar.0.Calendars.<id>); leeg: de standaardkalender van de instantie',
    fr: "Un calendrier de l'instance (fullcalendar.0.Calendars.<id>) ; vide : le calendrier par défaut de l'instance",
    it: "Un calendario dell'istanza (fullcalendar.0.Calendars.<id>); vuoto: il calendario predefinito dell'istanza",
    es: 'Un calendario de la instancia (fullcalendar.0.Calendars.<id>); vacío: el calendario predeterminado de la instancia',
    pl: 'Kalendarz instancji (fullcalendar.0.Calendars.<id>); puste: domyślny kalendarz instancji',
    uk: 'Календар екземпляра (fullcalendar.0.Calendars.<id>); порожньо: типовий календар екземпляра',
    'zh-cn': '实例的日历（fullcalendar.0.Calendars.<id>）；为空时使用实例的默认日历',
};

/**
 * The manifest
 *
 * @param vis a word of the vis-2 widget in every language
 */
export function buildManifest(vis: (key: ManifestWord) => WebComponentText): WebComponentManifest {
    return {
        $schema: 'https://raw.githubusercontent.com/ioBroker/web-components/main/schemas/manifest.json',
        manifestVersion: 1,
        tag: TAG,
        // the label of the vis-2 widget "fullcalendar" in its palette
        name: vis('fullcalendar'),
        description: DESCRIPTION,
        // relative to this file: /adapter/fullcalendar/fullcalendar.png
        icon: `../${ADAPTER}.png`,
        module: MODULE_FILE,
        size: { width: 520, height: 420 },
        settings: {
            type: 'panel',
            items: {
                instance: {
                    type: 'instance',
                    adapter: ADAPTER,
                    label: vis('instance'),
                },
                calendar: {
                    type: 'objectId',
                    types: 'folder',
                    root: ADAPTER,
                    label: vis('calendar'),
                    help: CALENDAR_HELP,
                },
                readOnly: {
                    type: 'checkbox',
                    default: false,
                    label: vis('read_only'),
                },
                hideLeftBlock: {
                    type: 'checkbox',
                    default: false,
                    label: vis('hide_left_block'),
                    hidden: '!!data.readOnly',
                },
                hideLeftBlockHint: {
                    type: 'checkbox',
                    default: false,
                    label: vis('hide_left_block_hint'),
                    hidden: '!!data.readOnly || !!data.hideLeftBlock',
                },
                hideTopBlock: {
                    type: 'checkbox',
                    default: false,
                    label: vis('hide_top_block'),
                },
                hideTopBlockButtons: {
                    type: 'checkbox',
                    default: false,
                    label: vis('hide_top_block_buttons'),
                    hidden: '!!data.hideTopBlock',
                },
                hideWeekends: {
                    type: 'checkbox',
                    default: false,
                    label: vis('hide_weekends'),
                },
                viewMode: {
                    type: 'select',
                    default: 'dayGridMonth',
                    label: vis('view_mode'),
                    options: SETTING_VIEW_MODES.map(mode => ({ value: mode, label: vis(mode) })),
                },
                dayStep: {
                    type: 'select',
                    default: String(DEFAULT_DAY_STEP),
                    label: vis('day_step'),
                    help: vis('day_step_minutes'),
                    options: DAY_STEPS.map(step => ({ value: String(step), label: String(step) })),
                    hidden: "data.viewMode !== 'timeGridDay' && data.viewMode !== 'timeGridWeek'",
                },
            },
        },
    };
}
