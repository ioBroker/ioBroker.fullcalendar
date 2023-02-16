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
    Button, Card, CardContent, Paper,
} from '@mui/material';
import { I18n } from '@iobroker/adapter-react-v5';
import { v4 as uuidv4 } from 'uuid';
import { withTheme } from '@mui/styles';
import {
    clientDateToServer, cron2obj, obj2cron, serverDateToClient,
} from './Utils';
import EventDialog from './EventDialog';

const eventTypes = [{ type: 'single', name: 'Single event' },
    { type: 'double', name: 'Double event' },
    { type: 'toggle', name: 'Toggle event' }];

const DraggableButton = ({ type }) => {
    const ref = useRef(null);

    useEffect(() => {
        const draggable = new Draggable(ref.current, {
            eventData: () => ({
                id: type.type,
                title: I18n.t(type.name),
                create: true,
                extendedProps: {
                    type: type.type,
                },
            }),
        });
        return () => {
            draggable.destroy();
        };
    }, []);

    return <div
        style={{
            backgroundColor: 'rgb(58, 135, 178)',
            color: 'white',
            cursor: 'pointer',
            fontSize: 14,
            borderRadius: 4,
            margin: 10,
        }}
        ref={ref}
    >
        {I18n.t(type.name)}
    </div>;
};

function Calendar(props) {
    const [eventDialog, setEventDialog] = useState(null);

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
                        byweekday: cronObject.dows,
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
            end:  new Date(event.native.start).getTime() + (event.native.intervals?.[0].timeOffset || 0),
        };
    });

    return (
        <div>
            <style>
                {props.theme.palette.mode === 'dark' ? `:root {
                    --fc-neutral-bg-color: hsla(0,0%,12%);
                    --fc-list-event-hover-bg-color: hsla(0,0%,12%);
                ` : null}
            </style>
            <EventDialog
                open={!!eventDialog}
                event={props.events.find(event => event._id === eventDialog)}
                onClose={() => setEventDialog(null)}
                socket={props.socket}
                updateEvents={props.updateEvents}
                serverTimeZone={props.serverTimeZone}
            />
            <div style={{ display: 'flex' }}>
                <div style={{ width: 200 }}>
                    <Paper elevation={4} style={{ margin: 20 }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '0px 10px',
                        }}
                        >
                            {eventTypes.map((type, index) =>
                                <DraggableButton
                                    type={type}
                                    name={type.name}
                                    key={type.type}
                                    index={index}
                                />)}
                            <div>{I18n.t('Drag and drop the events above to create a new one.')}</div>
                            <hr style={{ width: '100%' }} />
                            <div>{I18n.t('Use ALT by dragging it to copy the events.')}</div>
                        </div>
                    </Paper>
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ height: '80%' }}>
                        <FullCalendar
                            plugins={[listPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, rrulePlugin]}
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                            }}
                            initialView={localStorage.getItem('calendarView') || 'dayGridMonth'}
                            initialDate={localStorage.getItem('calendarStart') ? new Date(parseInt(localStorage.getItem('calendarStart'))) : new Date()}
                            editable
                            selectable
                            selectMirror
                            dayMaxEvents
                            events={events}
                            height="80vh"
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
                            locale={I18n.getLanguage()}
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
                                if (eventData.native.cron) {
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
                                        id: new Date().getTime(),
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
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTheme(Calendar);
