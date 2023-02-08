import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule';
import listPlugin from '@fullcalendar/list';
import { useEffect, useRef, useState } from 'react';
import { Button, MenuItem } from '@mui/material';
import { I18n } from '@iobroker/adapter-react-v5';
import { cron2obj } from './Utils';
import EventDialog from './EventDialog';

const eventTypes = ['single', 'double', 'toggle'];

const DraggableButton = ({ type }) => {
    const ref = useRef(null);

    useEffect(() => {
        new Draggable(ref.current, {
            eventData: () => ({
                id: type,
                title: I18n.t(type),
                create: true,
                extendedProps: {
                    type,
                },
            }),
        });
    }, []);

    return <Button onClick={() => {}} ref={ref}>{I18n.t(type)}</Button>;
};

function Calendar(props) {
    const [eventDialog, setEventDialog] = useState(null);

    const events = props.events.map(event => {
        if (event.native.cron) {
            const cronObject = cron2obj(event.native.cron);
            if (Array.isArray(cronObject.months)) {
                const start = new Date();
                start.setHours(cronObject.hours, cronObject.minutes, 0, 0);
                start.setFullYear(1970);
                return {
                    id: event._id,
                    title: event.common.name,
                    start,
                    duration: (event.native.intervals?.[0].timeOffset || 0),
                    allDay: false,
                    rrule: {
                        dtstart: start,
                        freq: 'monthly',
                        bymonth: cronObject.months,
                    },
                };
            }
            if (Array.isArray(cronObject.dows)) {
                const start = new Date();
                start.setHours(cronObject.hours, cronObject.minutes, 0, 0);
                start.setFullYear(1970);
                return {
                    id: event._id,
                    title: event.common.name,
                    start,
                    duration: (event.native.intervals?.[0].timeOffset || 0),
                    allDay: false,
                    rrule: {
                        dtstart: start,
                        freq: 'weekly',
                        byweekday: cronObject.dows,
                    },
                };
            }
            return {
                id: event._id,
                title: event.common.name,
            };
        }
        return {
            id: event._id,
            title: event.common.name,
            start: new Date(event.native.start),
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
            />
            <div style={{ display: 'flex' }}>
                <div>
                    {eventTypes.map((type, index) =>
                        <DraggableButton type={type} key={index} index={index} />)}
                </div>
                <div style={{ flex: 1 }}>
                    <FullCalendar
                        plugins={[listPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, rrulePlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                        }}
                        initialView="dayGridMonth"
                        editable
                        selectable
                        selectMirror
                        dayMaxEvents
                        events={events}
                        // select={this.handleDateSelect}
                        eventContent={event => <MenuItem>
                            {event.event.title}
                        </MenuItem>}
                        eventClick={event => setEventDialog(event.event.id)}
                        eventResize={event => {
                            console.log(event.startDelta);
                            console.log(event.endDelta);
                        }}
                        eventDrop={event => {
                            const eventData = props.events.find(_event => _event._id === event.event.id);
                            if (eventData.native.cron) {
                                event.revert();
                            }
                        }}
                        eventReceive={event => console.log(event)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Calendar;
