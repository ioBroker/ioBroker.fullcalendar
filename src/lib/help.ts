/**
 * The messages of the adapter, in one table: the answer of `getCommands`, the text and the list of `help` (for AI
 * agents, e.g. ioBroker.pi-agent or the MCP server with `send_to`, and script authors) and the reference in the
 * README. Keep it in sync with `onMessage` in main.ts and the README.
 */

/** One message of the adapter */
export interface CommandInfo {
    command: string;
    /** what the command does */
    description: string;
    params: string;
    answer: string;
    /** the command changes something (an event, a calendar, an object) */
    write: boolean;
}

/** The messages of the adapter, the answer of `getCommands` and the reference in the README */
export const COMMANDS: CommandInfo[] = [
    {
        command: 'addEvent',
        description: 'plans an event that writes value into the state oid, once or as a series',
        params:
            'oid, value, start (local time "2026-10-29T07:30" or ms) or in (delay: seconds, "90s", "30m", "2h"); ' +
            'optional: duration or durationSec (then type "double", endValue default: opposite of a boolean value), ' +
            'type ("single", "double", "toggle"), endValue, recurring ("daily", "weekly", "monthly", "yearly") ' +
            'with weekdays (0 = Sunday or "MO"…), monthDays, months, or rrule ("FREQ=YEARLY", "FREQ=WEEKLY;BYDAY=MO,FR"), ' +
            'name, calendar (name or ID), color',
        answer: '{id, name, type, start, ts, cron?}: start/ts = first execution',
        write: true,
    },
    {
        command: 'updateEvent',
        description: 'changes an event in place',
        params:
            'id, and every parameter of addEvent to change (the others stay): start or in moves a one-shot event, ' +
            'of a series it changes the time of day; recurring/rrule make it a series, recurring: false (with start ' +
            'or in) a one-shot event; enabled; calendar moves it (new id)',
        answer: '{id, name, type, enabled, start, ts, cron?}: start/ts = next execution, null if none',
        write: true,
    },
    {
        command: 'deleteEvent',
        description: 'deletes events',
        params: 'id, ids (a list) and/or name (all events with this name, any case), optional calendar for name',
        answer: '{result: "ok", deleted: [id…], notFound?: [id…]}',
        write: true,
    },
    {
        command: 'getEvent',
        description: 'the definition of one event',
        params: 'id',
        answer: '{event: definition}',
        write: false,
    },
    {
        command: 'getEvents',
        description: 'the definitions of all events',
        params: 'optional calendar',
        answer: '{events: [definition…]}',
        write: false,
    },
    {
        command: 'listEvents',
        description: 'the executions in a time range, of the switched on events and calendars',
        params: 'optional from, to (default now … 7 days, or days), calendar, max (default 100)',
        answer: '{events: [execution…]}',
        write: false,
    },
    {
        command: 'getCalendars',
        description: 'the calendars (the default calendar has the ID of the instance)',
        params: '-',
        answer: '{calendars: [{id, name, enabled}…]}',
        write: false,
    },
    {
        command: 'addCalendar',
        description: 'creates a calendar',
        params: 'name; optional: color, icon, enabled (default true)',
        answer: '{id, name, enabled}',
        write: true,
    },
    {
        command: 'enableCalendar',
        description:
            'switches a calendar (not the default one) on or off: its events stay, but run only while it is on',
        params: 'calendar (name or ID), enabled',
        answer: '{id, enabled}',
        write: true,
    },
    {
        command: 'getEventObjects',
        description: 'the schedule objects, for the web component',
        params: 'optional calendar (<namespace>.Calendars.<id>)',
        answer: '{events: [object…]}: the schedule objects, for the web component',
        write: false,
    },
    {
        command: 'setEventObject',
        description: 'writes a schedule object, for the web component',
        params: 'event (a schedule object of this instance)',
        answer: '{result: "ok"}',
        write: true,
    },
    {
        command: 'deleteEventObject',
        description: 'deletes a schedule object, for the web component',
        params: 'id',
        answer: '{result: "ok"}',
        write: true,
    },
    {
        command: 'getCommands',
        description: 'all messages as a table (command, description, params, answer, write)',
        params: '-',
        answer: '{commands: [{command, description, params, answer, write}…]}',
        write: false,
    },
    {
        command: 'help',
        description: 'a description of all messages for AI agents',
        params: '-',
        answer: '{help, commands: [{command, write}…]}',
        write: false,
    },
];

/** Only for the web component `<iob-fullcalendar>`: one line in the help */
const WEB_COMPONENT = ['getEventObjects', 'setEventObject', 'deleteEventObject'];

/** Longest line of the help */
const WIDTH = 120;

/**
 * Breaks a text into lines of at most WIDTH characters, the following lines indented by two spaces
 *
 * @param text one entry of the help
 */
function wrap(text: string): string[] {
    const lines: string[] = [];
    let line = '';
    for (const word of text.split(' ')) {
        if (line && `${line} ${word}`.length > WIDTH) {
            lines.push(line);
            line = `  ${word}`;
        } else {
            line = line ? `${line} ${word}` : word;
        }
    }
    if (line) {
        lines.push(line);
    }
    return lines;
}

/** The answer of `help`: built from COMMANDS */
export const HELP = [
    'ioBroker.fullcalendar: a calendar inside ioBroker. Its events write a value into a state at a planned time, once or',
    'as a series (daily, weekly, monthly, yearly or by weekdays). An agent can plan, move, change and delete events (e.g.',
    '"turn off the light in 2 hours"), list what is planned and switch whole calendars (e.g. "Vacation") on and off.',
    'Events are objects of type schedule: fullcalendar.0.event-<uuid> (default calendar) or',
    'fullcalendar.0.Calendars.<calendar>.event-<uuid>. Times are the local time of the ioBroker host',
    '("2026-10-29T07:30", "07:30" = today, or the next 07:30 for a one-shot event), ts = milliseconds since 1970.',
    'A definition (getEvent, getEvents) is {id, name, calendar, enabled, oid, value, type, start? (one-shot), cron?',
    '(series), astro?, offset?, durationSec?, endValue?, condition?, next}; an execution (listEvents) is {id, name,',
    'calendar, time, ts, oid, value, valueText?, endTime?, endValue?, toggleBack?, recurring}. calendar "" = default.',
    'type "double" writes endValue after the duration, "toggle" switches back after it. Errors come back as {error}.',
    '',
    'Commands (sendTo fullcalendar.0):',
    ...COMMANDS.filter(c => c.command !== 'help' && !WEB_COMPONENT.includes(c.command)).flatMap(c =>
        wrap(`- ${c.command}${c.params === '-' ? '' : ` {${c.params}}`}: ${c.description}; answer ${c.answer}`),
    ),
    ...wrap(`${WEB_COMPONENT.join(', ')}: for the web component <iob-fullcalendar>, not for agents.`),
    '',
    'How to talk to the user:',
    '- Find the state to switch first (search the objects by name and room); if several fit, ask which one.',
    '- Name events, states and calendars by name, not by ID; times in local time, e.g. "today at 22:30".',
    "- Plan, change or delete events and switch calendars only on the user's request; deleteEvent by name deletes all",
    '  events of that name: list them first (getEvents) and confirm.',
    '- Tell the user the time of the first or next execution from the answer (start).',
].join('\n');
