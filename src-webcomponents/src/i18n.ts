/**
 * The words the element shows, in the languages of ioBroker: those of the vis-2 widget (`VIS_WORDS`, picked from
 * `src-widgets/src/i18n/` by the build) and a few of its own that the widget does not have.
 */
import { VIS_WORDS, type VisWord } from './words';

/** `VIS_WORDS` in every language and in their order, from `vite.config.ts` - without the keys, 11 times */
declare const __FC_VIS_WORDS__: Record<string, string[]>;

const EN = {
    ON: 'ON',
    OFF: 'OFF',
    initial: 'initial value',
    notRunning: 'Instance %s is not running',
    noAnswer: 'No answer from %s',
    notCalendar: 'Not a calendar of the adapter fullcalendar',
    loadError: 'Cannot read the events: %s',
    saveError: 'Cannot save the event: %s',
    date: 'Date',
    dateHelp: 'Year-month-day, e.g. 2026-12-24',
    timeHelp: 'Hours:minutes, e.g. 07:30',
    weekdays: 'Days of the week',
    months: 'Months',
    days: 'Days of the month',
    daysHelp: 'e.g. 1, 15 or 1-31',
    invalid: 'Invalid value: %s',
};

type OwnWord = keyof typeof EN;

export type Word = VisWord | OwnWord;

const OWN: Record<string, Record<OwnWord, string>> = {
    en: EN,
    de: {
        ON: 'EIN',
        OFF: 'AUS',
        initial: 'Ausgangswert',
        notRunning: 'Instanz %s läuft nicht',
        noAnswer: 'Keine Antwort von %s',
        notCalendar: 'Kein Kalender des Adapters fullcalendar',
        loadError: 'Ereignisse können nicht gelesen werden: %s',
        saveError: 'Ereignis kann nicht gespeichert werden: %s',
        date: 'Datum',
        dateHelp: 'Jahr-Monat-Tag, z. B. 2026-12-24',
        timeHelp: 'Stunden:Minuten, z. B. 07:30',
        weekdays: 'Wochentage',
        months: 'Monate',
        days: 'Tage des Monats',
        daysHelp: 'z. B. 1, 15 oder 1-31',
        invalid: 'Ungültiger Wert: %s',
    },
    ru: {
        ON: 'ВКЛ',
        OFF: 'ВЫКЛ',
        initial: 'исходное значение',
        notRunning: 'Экземпляр %s не запущен',
        noAnswer: 'Нет ответа от %s',
        notCalendar: 'Это не календарь адаптера fullcalendar',
        loadError: 'Не удалось прочитать события: %s',
        saveError: 'Не удалось сохранить событие: %s',
        date: 'Дата',
        dateHelp: 'Год-месяц-день, например 2026-12-24',
        timeHelp: 'Часы:минуты, например 07:30',
        weekdays: 'Дни недели',
        months: 'Месяцы',
        days: 'Дни месяца',
        daysHelp: 'например 1, 15 или 1-31',
        invalid: 'Недопустимое значение: %s',
    },
    pt: {
        ON: 'LIGADO',
        OFF: 'DESLIGADO',
        initial: 'valor inicial',
        notRunning: 'A instância %s não está em execução',
        noAnswer: 'Sem resposta de %s',
        notCalendar: 'Não é um calendário do adaptador fullcalendar',
        loadError: 'Não é possível ler os eventos: %s',
        saveError: 'Não é possível guardar o evento: %s',
        date: 'Data',
        dateHelp: 'Ano-mês-dia, p. ex. 2026-12-24',
        timeHelp: 'Horas:minutos, p. ex. 07:30',
        weekdays: 'Dias da semana',
        months: 'Meses',
        days: 'Dias do mês',
        daysHelp: 'p. ex. 1, 15 ou 1-31',
        invalid: 'Valor inválido: %s',
    },
    nl: {
        ON: 'AAN',
        OFF: 'UIT',
        initial: 'beginwaarde',
        notRunning: 'Instantie %s draait niet',
        noAnswer: 'Geen antwoord van %s',
        notCalendar: 'Geen kalender van de adapter fullcalendar',
        loadError: 'De gebeurtenissen kunnen niet worden gelezen: %s',
        saveError: 'De gebeurtenis kan niet worden opgeslagen: %s',
        date: 'Datum',
        dateHelp: 'Jaar-maand-dag, bijv. 2026-12-24',
        timeHelp: 'Uren:minuten, bijv. 07:30',
        weekdays: 'Dagen van de week',
        months: 'Maanden',
        days: 'Dagen van de maand',
        daysHelp: 'bijv. 1, 15 of 1-31',
        invalid: 'Ongeldige waarde: %s',
    },
    fr: {
        ON: 'ALLUMÉ',
        OFF: 'ÉTEINT',
        initial: 'valeur initiale',
        notRunning: "L'instance %s ne fonctionne pas",
        noAnswer: 'Pas de réponse de %s',
        notCalendar: "Pas un calendrier de l'adaptateur fullcalendar",
        loadError: 'Impossible de lire les événements : %s',
        saveError: "Impossible d'enregistrer l'événement : %s",
        date: 'Date',
        dateHelp: 'Année-mois-jour, p. ex. 2026-12-24',
        timeHelp: 'Heures:minutes, p. ex. 07:30',
        weekdays: 'Jours de la semaine',
        months: 'Mois',
        days: 'Jours du mois',
        daysHelp: 'p. ex. 1, 15 ou 1-31',
        invalid: 'Valeur invalide : %s',
    },
    it: {
        ON: 'ACCESO',
        OFF: 'SPENTO',
        initial: 'valore iniziale',
        notRunning: "L'istanza %s non è in esecuzione",
        noAnswer: 'Nessuna risposta da %s',
        notCalendar: "Non è un calendario dell'adattatore fullcalendar",
        loadError: 'Impossibile leggere gli eventi: %s',
        saveError: "Impossibile salvare l'evento: %s",
        date: 'Data',
        dateHelp: 'Anno-mese-giorno, ad es. 2026-12-24',
        timeHelp: 'Ore:minuti, ad es. 07:30',
        weekdays: 'Giorni della settimana',
        months: 'Mesi',
        days: 'Giorni del mese',
        daysHelp: 'ad es. 1, 15 o 1-31',
        invalid: 'Valore non valido: %s',
    },
    es: {
        ON: 'ENCENDIDO',
        OFF: 'APAGADO',
        initial: 'valor inicial',
        notRunning: 'La instancia %s no está en ejecución',
        noAnswer: 'Sin respuesta de %s',
        notCalendar: 'No es un calendario del adaptador fullcalendar',
        loadError: 'No se pueden leer los eventos: %s',
        saveError: 'No se puede guardar el evento: %s',
        date: 'Fecha',
        dateHelp: 'Año-mes-día, p. ej. 2026-12-24',
        timeHelp: 'Horas:minutos, p. ej. 07:30',
        weekdays: 'Días de la semana',
        months: 'Meses',
        days: 'Días del mes',
        daysHelp: 'p. ej. 1, 15 o 1-31',
        invalid: 'Valor no válido: %s',
    },
    pl: {
        ON: 'WŁĄCZONY',
        OFF: 'WYŁĄCZONY',
        initial: 'wartość początkowa',
        notRunning: 'Instancja %s nie działa',
        noAnswer: 'Brak odpowiedzi od %s',
        notCalendar: 'To nie jest kalendarz adaptera fullcalendar',
        loadError: 'Nie można odczytać zdarzeń: %s',
        saveError: 'Nie można zapisać zdarzenia: %s',
        date: 'Data',
        dateHelp: 'Rok-miesiąc-dzień, np. 2026-12-24',
        timeHelp: 'Godziny:minuty, np. 07:30',
        weekdays: 'Dni tygodnia',
        months: 'Miesiące',
        days: 'Dni miesiąca',
        daysHelp: 'np. 1, 15 lub 1-31',
        invalid: 'Nieprawidłowa wartość: %s',
    },
    uk: {
        ON: 'УВІМКНЕНО',
        OFF: 'ВИМКНЕНО',
        initial: 'початкове значення',
        notRunning: 'Екземпляр %s не запущено',
        noAnswer: 'Немає відповіді від %s',
        notCalendar: 'Це не календар адаптера fullcalendar',
        loadError: 'Не вдалося прочитати події: %s',
        saveError: 'Не вдалося зберегти подію: %s',
        date: 'Дата',
        dateHelp: 'Рік-місяць-день, наприклад 2026-12-24',
        timeHelp: 'Години:хвилини, наприклад 07:30',
        weekdays: 'Дні тижня',
        months: 'Місяці',
        days: 'Дні місяця',
        daysHelp: 'наприклад 1, 15 або 1-31',
        invalid: 'Неприпустиме значення: %s',
    },
    'zh-cn': {
        ON: '开',
        OFF: '关',
        initial: '初始值',
        notRunning: '实例 %s 未运行',
        noAnswer: '%s 没有响应',
        notCalendar: '不是 fullcalendar 适配器的日历',
        loadError: '无法读取事件：%s',
        saveError: '无法保存事件：%s',
        date: '日期',
        dateHelp: '年-月-日，例如 2026-12-24',
        timeHelp: '时:分，例如 07:30',
        weekdays: '星期',
        months: '月份',
        days: '每月日期',
        daysHelp: '例如 1、15 或 1-31',
        invalid: '无效值：%s',
    },
};

function isOwnWord(key: Word): key is OwnWord {
    return Object.prototype.hasOwnProperty.call(EN, key);
}

/**
 * A word in the language of the system, English if there is none in it; every `%s` takes the next argument
 *
 * @param lang the language of the ioBroker system
 * @param key the word
 * @param args what goes in place of `%s`
 */
export function getWord(lang: string, key: Word, ...args: (string | number)[]): string {
    let text: string;
    if (isOwnWord(key)) {
        text = OWN[lang]?.[key] || EN[key];
    } else {
        const index = VIS_WORDS.indexOf(key);
        text = __FC_VIS_WORDS__[lang]?.[index] || __FC_VIS_WORDS__.en?.[index] || key;
    }
    for (const arg of args) {
        text = text.replace('%s', String(arg));
    }
    return text;
}
