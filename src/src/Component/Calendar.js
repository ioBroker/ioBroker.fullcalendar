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

import { useEffect, useRef, useState } from 'react';
import {
    Paper,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { withStyles, withTheme } from '@mui/styles';

import PropTypes from 'prop-types';
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

function Calendar(props) {
    const [eventDialog, setEventDialog] = useState(null);
    const [lastDateClick, setLastDateClick] = useState(null);

    const events = props.events.map(event => {
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
                    duration: (event.native.intervals?.[0].timeOffset || 0),
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
                    duration: (event.native.intervals?.[0].timeOffset || 0),
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
            backgroundColor: event.native.color,
            start: serverDateToClient(event.native.start, 'date', props.serverTimeZone),
            end: new Date(event.native.start).getTime() + (event.native.intervals?.[0].timeOffset || 0),
        };
    });

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
        <EventDialog
            open={!!eventDialog}
            event={props.events.find(event => event._id === eventDialog)}
            onClose={() => setEventDialog(null)}
            socket={props.socket}
            updateEvents={props.updateEvents}
            serverTimeZone={props.serverTimeZone}
            readOnly={props.readOnly}
            t={props.t}
        />
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
                        <div>{props.t('Drag and drop the events above to create a new one.')}</div>
                        <hr className={props.classes.hr} />
                        <div>{props.t('Use ALT by dragging it to copy the events.')}</div>
                    </div>
                </Paper>
            </div>}
            <div className={props.classes.calendarBlock}>
                <div className={props.classes.calendar}>
                    <FullCalendar
                        plugins={[listPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, rrulePlugin]}
                        headerToolbar={
                            props.hideTopBlock ? false :
                                {
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                                }
                        }
                        initialView={props.viewMode || localStorage.getItem('calendarView') || 'dayGridMonth'}
                        initialDate={localStorage.getItem('calendarStart') ? new Date(parseInt(localStorage.getItem('calendarStart'))) : new Date()}
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
                            localStorage.setItem('calendarStart', date.view.currentStart.getTime());
                            localStorage.setItem('calendarView', date.view.type);
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
                        dateClick={async event => {
                            // detect double click
                            if (lastDateClick && event.dateStr === lastDateClick.dateStr && Date.now() - lastDateClick.ts < 300) {
                                setLastDateClick(null);

                                const newEvent = {
                                    _id: `fullcalendar.${props.instance}.event-${uuidv4()}`,
                                    common: {
                                        name: props.t('Single event'),
                                        enabled: true,
                                    },
                                    native: {
                                        id: Date.now(),
                                        start: clientDateToServer(event.date, 'date', props.serverTimeZone),
                                        type: 'single',
                                        durationEditable: false,
                                        oid: '',
                                        startValue: '',
                                        color: '#3A87AD',
                                    },
                                    type: 'schedule',
                                };
                                await props.socket.setObject(newEvent._id, newEvent);
                                await props.updateEvents();
                                setTimeout(() => setEventDialog(newEvent._id), 100);
                            } else {
                                setLastDateClick({ dateStr: event.dateStr, ts: Date.now() });
                            }
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
    viewMode: PropTypes.bool,
    updateEvents: PropTypes.func,
    instance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    t: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
};

export default withTheme(withStyles(styles)(Calendar));
