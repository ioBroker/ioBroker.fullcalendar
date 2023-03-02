import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { withStyles, withTheme } from '@mui/styles';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule';
import listPlugin from '@fullcalendar/list';
import deLocale from '@fullcalendar/core/locales/de';
import ruLocale from '@fullcalendar/core/locales/ru';
import ptLocale from '@fullcalendar/core/locales/pt';
import nlLocale from '@fullcalendar/core/locales/nl';
import frLocale from '@fullcalendar/core/locales/fr';
import itLocale from '@fullcalendar/core/locales/it';
import esLocale from '@fullcalendar/core/locales/es';
import plLocale from '@fullcalendar/core/locales/pl';
import ukLocale from '@fullcalendar/core/locales/uk';
import zhCnLocale from '@fullcalendar/core/locales/zh-cn';

import { Paper } from '@mui/material';

import {
    clientDateToServer, cron2obj, obj2cron, serverDateToClient,
} from './Utils';
import EventDialog from './EventDialog';

const eventTypes = [
    { type: 'single', name: 'Single event' },
    { type: 'double', name: 'Double event' },
    { type: 'toggle', name: 'Toggle event' },
];

const DraggableButton = ({ type, t }) => {
    const ref = useRef(null);

    useEffect(() => {
        const draggable = new Draggable(ref.current, {
            eventData: () => ({
                id: type.type,
                title: t(type.name),
                create: true,
                extendedProps: {
                    type: type.type,
                },
            }),
        });
        return () => {
            draggable.destroy();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div
        style={{
            backgroundColor: 'rgb(58, 135, 178)',
            color: 'white',
            cursor: 'pointer',
            fontSize: '14px',
            padding: '3px 4px 6px 8px',
            borderRadius: 4,
            marginBottom: 20,
        }}
        ref={ref}
    >
        {t(type.name)}
    </div>;
};

const styles = () => ({
    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
    },
    leftBlock: {
        width: 200,
    },
    calendarBlock: {
        flex: 1,
        display: 'flex',
    },
    calendar: {
        // height: '80%',
        marginRight: 20,
        width: '100%',
    },
    leftPaper: {
        margin: 20,
    },
    leftContent: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 10px',
    },
    hr: {
        width: '100%',
    },
});

function dimColor(color) {
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

function Calendar(props) {
    const [eventDialog, setEventDialog] = useState(null);
    const storageName = props.storageName || 'calendar';
    const ref = useRef(null);
    const scrollBackTimer = useRef(null);
    const scrollTimer = useRef(null);

    const initialDate = !props.widget && window.localStorage.getItem(`${storageName}Start`) ?
        new Date(parseInt(window.localStorage.getItem(`${storageName}Start`), 10)) :
        new Date();

    // create events
    const events = props.events.map(event => {
        // duration in ms
        const initialDuration = event?.native?.intervals && event.native.intervals[0] && event.native.intervals[0].timeOffset ? event.native.intervals[0].timeOffset : 0;

        if (event.native.cron) {
            const start = serverDateToClient(event.native.cron, 'cron', props.serverTimeZone);
            const cronObject = cron2obj(event.native.cron);
            start.setFullYear(1970);
            if (Array.isArray(cronObject.months)) {
                return {
                    id: event._id,
                    title: event.common.name,
                    backgroundColor: event.native.color,
                    start,
                    duration: initialDuration,
                    allDay: false,
                    rrule: {
                        dtstart: new Date(start.getTime() - start.getTimezoneOffset() * 60000),
                        freq: 'daily',
                        bymonth: cronObject.months,
                    },
                };
            }
            if (Array.isArray(cronObject.dows)) {
                return {
                    id: event._id,
                    title: event.common.name,
                    backgroundColor: event.native.color,
                    start,
                    duration: initialDuration,
                    allDay: false,
                    display: 'block',
                    rrule: {
                        dtstart: new Date(start.getTime() - start.getTimezoneOffset() * 60000),
                        freq: 'weekly',
                        byweekday: cronObject.dows.map(dow => (dow === 0 ? 6 : dow - 1)),
                    },
                };
            }
            return {
                id: event._id,
                title: event.common.name,
                backgroundColor: event.native.color,
            };
        }

        return {
            id: event._id,
            title: event.common.name,
            display: 'block',
            backgroundColor: event.common.enabled ? event.native.color : dimColor(event.native.color),
            start: serverDateToClient(event.native.start, 'date', props.serverTimeZone),
            end: serverDateToClient(new Date(new Date(event.native.start).getTime() + initialDuration), 'date', props.serverTimeZone),
        };
    });

    useEffect(() => {
        // update periodically the time
        if (props.widget) {
            const scrollBack = () => {
                const calendar = ref.current?.getApi();
                if (calendar) {
                    console.log('Scroll to now');
                    calendar.scrollToTime(new Date().getTime());
                }
                if (!scrollBackTimer.current) {
                    scrollTimer.current = setTimeout(() => scrollBack, 1000 * 60 * 5); // 5 minutes
                } else {
                    scrollTimer.current = null;
                }
            };

            setTimeout(scrollBack, 1000);
        }

        return () => {
            scrollTimer.current && clearTimeout(scrollTimer.current);
            scrollTimer.current = null;
            scrollBackTimer.current && clearTimeout(scrollBackTimer.current);
            scrollBackTimer.current = null;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>
        <style>
            {props.theme.palette.mode === 'dark' ? `
:root {
    --fc-neutral-bg-color: hsla(0,0%,12%);
    --fc-list-event-hover-bg-color: hsla(0,0%,12%);
}
.fc-col-header-cell {
    background-color: #1e1e1e;
}                
` : `
.fc-col-header-cell {
    background-color: #EEEEEE;
}
`}
        </style>
        {eventDialog ? <EventDialog
            widget={props.widget}
            open={!0}
            event={props.events.find(event => event._id === eventDialog)}
            onClose={() => setEventDialog(null)}
            socket={props.socket}
            updateEvents={props.updateEvents}
            serverTimeZone={props.serverTimeZone}
            readOnly={props.readOnly}
            t={props.t}
        /> : null}
        <div className={props.classes.container}>
            {!props.hideLeftBlock && !props.readOnly && <div className={props.classes.leftBlock}>
                <Paper elevation={4} className={props.classes.leftPaper}>
                    <div className={props.classes.leftContent}>
                        <h4>{props.t('Events')}</h4>
                        {eventTypes.map((type, index) =>
                            <DraggableButton
                                t={props.t}
                                type={type}
                                name={props.t(type.name)}
                                key={type.type}
                                index={index}
                            />)}
                        {props.hideLeftBlockHint ? null : <div>{props.t('Drag and drop the events above to create a new one.')}</div>}
                        {props.hideLeftBlockHint ? null : <hr className={props.classes.hr} />}
                        {props.hideLeftBlockHint ? null : <div>{props.t('Use ALT by dragging it to copy the events.')}</div>}
                    </div>
                </Paper>
            </div>}
            <div className={props.classes.calendarBlock}>
                <div className={props.classes.calendar}>
                    <FullCalendar
                        ref={ref}
                        plugins={[listPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, rrulePlugin]}
                        weekends={!props.hideWeekends}
                        headerToolbar={
                            props.hideTopBlock ? false :
                                {
                                    left: props.hideTopBlockButtons ? '' : 'prev,next today',
                                    center: 'title',
                                    right: props.hideTopBlockButtons ? '' : 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                                }
                        }
                        initialView={props.viewMode || window.localStorage.getItem(`${storageName}View`) || 'dayGridMonth'}
                        initialDate={initialDate}
                        editable={!props.readOnly}
                        selectable
                        selectMirror
                        dayMaxEvents
                        events={events}
                        height="calc(100% - 20px)"
                        locales={[
                            deLocale,
                            ruLocale,
                            ptLocale,
                            nlLocale,
                            frLocale,
                            itLocale,
                            esLocale,
                            plLocale,
                            ukLocale,
                            zhCnLocale,
                        ]}
                        locale={props.language}
                        datesSet={date => {
                            if (!props.widget) {
                                window.localStorage.setItem(`${storageName}Start`, date.view.currentStart.getTime());
                                window.localStorage.setItem(`${storageName}View`, date.view.type);
                            } else {
                                scrollTimer.current && clearTimeout(scrollTimer.current);
                                scrollTimer.current = null;

                                scrollBackTimer.current && clearTimeout(scrollBackTimer.current);
                                scrollBackTimer.current = setTimeout(() => {
                                    scrollBackTimer.current = null;

                                    const scrollBack = () => {
                                        const calendar = ref.current?.getApi();
                                        calendar?.scrollToTime(new Date().getTime());
                                        if (!scrollBackTimer.current) {
                                            scrollTimer.current = setTimeout(() => scrollBack, 1000 * 60 * 5); // 5 minutes
                                        } else {
                                            scrollTimer.current = null;
                                        }
                                    };

                                    scrollBack();
                                }, 60000);
                            }
                        }}
                        // select={this.handleDateSelect}
                        // eventContent={event => <MenuItem>
                        //     {event.event.title}
                        // </MenuItem>}
                        eventClick={event => setEventDialog(event.event.id)}
                        eventResize={event => {
                            const eventData = props.events.find(_event => _event._id === event.event.id);
                            if (eventData.native.intervals?.[0].timeOffset) {
                                const newEvent = JSON.parse(JSON.stringify(eventData));
                                newEvent.native.intervals[0].timeOffset += event.endDelta.milliseconds;
                                props.socket.setObject(newEvent._id, newEvent);
                                props.updateEvents();
                            } else {
                                event.revert();
                            }
                        }}
                        eventDrop={async event => {
                            const eventData = props.events.find(_event => _event._id === event.event.id);
                            if (eventData?.native?.cron) {
                                const newEvent = JSON.parse(JSON.stringify(eventData));
                                if (event.jsEvent.altKey) {
                                    newEvent._id = `fullcalendar.${props.instance}.event-${uuidv4()}`;
                                }
                                const newCron = cron2obj(newEvent.native.cron);
                                const timeZoneCron = clientDateToServer(event.event.start, 'cron', props.serverTimeZone);
                                newCron.hours = timeZoneCron.hours;
                                newCron.minutes = timeZoneCron.minutes;
                                newEvent.native.cron = obj2cron(newCron);
                                await props.socket.setObject(newEvent._id, newEvent);
                                props.updateEvents();
                            } else {
                                const newEvent = JSON.parse(JSON.stringify(eventData));
                                if (event.jsEvent.altKey) {
                                    newEvent._id = `fullcalendar.${props.instance}.event-${uuidv4()}`;
                                }
                                newEvent.native.start = clientDateToServer(event.event.start, 'date', props.serverTimeZone);
                                await props.socket.setObject(newEvent._id, newEvent);
                                props.updateEvents();
                            }
                        }}
                        eventReceive={async event => {
                            const newEvent = {
                                _id: `fullcalendar.${props.instance}.event-${uuidv4()}`,
                                common: {
                                    name: event.event.title,
                                    enabled: true,
                                },
                                native: {
                                    id: Date.now(),
                                    start: clientDateToServer(event.event.start, 'date', props.serverTimeZone),
                                    type: event.event.extendedProps.type,
                                    durationEditable: false,
                                    oid: '',
                                    startValue: '',
                                    color: '#3A87AD',
                                },
                                type: 'schedule',
                            };
                            if (event.event.extendedProps.type !== 'single') {
                                newEvent.native.intervals = [{
                                    timeOffset: 30 * 60 * 1000,
                                }];
                            }
                            await props.socket.setObject(newEvent._id, newEvent);
                            props.updateEvents();
                            setTimeout(() => setEventDialog(newEvent._id), 100);
                        }}
                        select={async selectInfo => {
                            const calendarApi = selectInfo.view.calendar;
                            calendarApi.unselect(); // clear date selection

                            if (props.readOnly) {
                                return;
                            }
                            console.log('ADD', selectInfo);

                            const newEvent = {
                                _id: `fullcalendar.${props.instance}.event-${uuidv4()}`,
                                common: {
                                    name: props.t('Single event'),
                                    enabled: true,
                                },
                                native: {
                                    id: Date.now(),
                                    start: clientDateToServer(selectInfo.date || selectInfo.start, 'date', props.serverTimeZone),
                                    intervals: selectInfo.end ? [{
                                        value: '',
                                        timeOffset: (selectInfo.end.getTime() - selectInfo.start.getTime()),
                                    }] : undefined,
                                    type: selectInfo.end ? 'double' : 'single',
                                    durationEditable: !!selectInfo.end,
                                    oid: '',
                                    startValue: '',
                                    color: '#3A87AD',
                                },
                                type: 'schedule',
                            };
                            await props.socket.setObject(newEvent._id, newEvent);
                            await props.updateEvents();
                            setTimeout(() => setEventDialog(newEvent._id), 100);
                        }}
                    />
                </div>
            </div>
        </div>
    </>;
}

Calendar.propTypes = {
    events: PropTypes.array,
    serverTimeZone: PropTypes.number,
    theme: PropTypes.object,
    socket: PropTypes.object,
    readOnly: PropTypes.bool,
    hideLeftBlock: PropTypes.bool,
    hideTopBlock: PropTypes.bool,
    hideLeftBlockHint: PropTypes.bool,
    hideTopBlockButtons: PropTypes.bool,
    hideWeekends: PropTypes.bool,
    viewMode: PropTypes.bool,
    updateEvents: PropTypes.func,
    instance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    t: PropTypes.func.isRequired,
    widget: PropTypes.bool,
    language: PropTypes.string.isRequired,
    storageName: PropTypes.string,
};

export default withTheme(withStyles(styles)(Calendar));
