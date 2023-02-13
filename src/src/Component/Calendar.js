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
import { Button } from '@mui/material';
import { I18n } from '@iobroker/adapter-react-v5';
import { v4 as uuidv4 } from 'uuid';
import {
    clientDateToServer, cron2obj, obj2cron, serverDateToClient,
} from './Utils';
import EventDialog from './EventDialog';

const eventTypes = ['single', 'double', 'toggle'];

const DraggableButton = ({ type }) => {
    const ref = useRef(null);

    useEffect(() => {
        const draggable = new Draggable(ref.current, {
            eventData: () => ({
                id: type,
                title: I18n.t(type),
                create: true,
                extendedProps: {
                    type,
                },
            }),
        });
        return () => {
            draggable.destroy();
        };
    }, []);

    return <Button onClick={() => {}} ref={ref}>{I18n.t(type)}</Button>;
};

function Calendar(props) {
    const [eventDialog, setEventDialog] = useState(null);

    const events = props.events.map(event => {
        if (event.native.cron) {
            const start = serverDateToClient(event.native.cron, 'cron', props.serverTimeZone);
            console.log(start);
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
            backgroundColor: event.native.color,
            start: serverDateToClient(event.native.start, 'date', props.serverTimeZone),
            end:  new Date(event.native.start).getTime() + (event.native.intervals?.[0].timeOffset || 0),
        };
    });

    return (
        <div>
            <EventDialog
                open={!!eventDialog}
                event={props.events.find(event => event._id === eventDialog)}
                onClose={() => setEventDialog(null)}
                socket={props.socket}
                updateEvents={props.updateEvents}
                serverTimeZone={props.serverTimeZone}
            />
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {eventTypes.map((type, index) =>
                        <DraggableButton type={type} key={index} index={index} />)}
                </div>
                <div style={{ flex: 1 }}>
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
                                console.log(newEvent);
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
                                const newCron = cron2obj(newEvent.native.cron);
                                const timeZoneCron = clientDateToServer(event.event.start, 'cron', props.serverTimeZone);
                                newCron.hours = timeZoneCron.hours;
                                newCron.minutes = timeZoneCron.minutes;
                                newEvent.native.cron = obj2cron(newCron);
                                console.log(newEvent);
                                await props.socket.setObject(newEvent._id, newEvent);
                                props.updateEvents();
                            } else {
                                const newEvent = JSON.parse(JSON.stringify(eventData));
                                newEvent.native.start = clientDateToServer(event.event.start, 'date', props.serverTimeZone);
                                console.log(newEvent);
                                await props.socket.setObject(newEvent._id, newEvent);
                                props.updateEvents();
                            }
                        }}
                        eventReceive={async event => {
                            console.log(event);
                            const newEvent = {
                                _id: `fullcalendar.0.event-${uuidv4()}`,
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
                            await props.socket.setObject(newEvent._id, newEvent);
                            props.updateEvents();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Calendar;
