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

import { Utils, I18n } from '@iobroker/adapter-react-v5';

import { RRule } from 'rrule';
import SunCalc from 'suncalc2';
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
        width: '100%',
        flex: 1,
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
    if (!color) {
        return undefined;
    }
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
    const [calendarInterval, setCalendarInterval] = useState({
        start: null,
        end: null,
    });

    let initialDate = !props.widget && window.localStorage.getItem(`${storageName}Start`) && false ?
        new Date(parseInt(window.localStorage.getItem(`${storageName}Start`), 10)) :
        new Date();

    let initialView = props.viewMode || window.localStorage.getItem(`${storageName}View`) || 'dayGridMonth';

    if (props.isSimulation) {
        initialDate = new Date();
        initialView = props.simulation?.native.interval === 'day' ? 'timeGridDay' : 'timeGridWeek';
    }

    let _eventTypes = eventTypes;
    if (props.isSimulation) {
        _eventTypes = _eventTypes.filter(type => type.type === 'single');
    }

    // create events
    const events = [];
    props.events.forEach(event => {
        if (!event) {
            return;
        }
        // duration in ms
        const initialDuration = event.native?.intervals && event.native.intervals[0] && event.native.intervals[0].timeOffset ?
            event.native.intervals[0].timeOffset : 20;

        const backgroundColor = event.common.enabled ? event.native.color : dimColor(event.native.color);
        let textColor = Utils.invertColor(event.native.color, true);
        if (!event.common.enabled) {
            textColor = dimColor(textColor);
        }

        let name = event.common.name;
        if (event.native.oid) {
            name = `${event.common.name} → ${event.native.startValue}`;
            if (event.native.type === 'double') {
                name += ` → ${(event.native.intervals?.[0]?.timeOffset || 0) / 1000 / 60} ${I18n.t('min')}. → ${event.native.intervals?.[0]?.value}`;
            }
            if (event.native.type === 'toggle') {
                name += ` → ${(event.native.intervals?.[0]?.timeOffset || 0) / 1000 / 60} ${I18n.t('min')}. → ${I18n.t('initial')}`;
            }
        }

        if (event.native.cron) {
            const start = serverDateToClient(event.native.cron, 'cron', props.serverTimeZone);
            const cronObject = cron2obj(event.native.cron);
            start.setFullYear(1970);
            if (Array.isArray(cronObject.months)) {
                const rule = new RRule({
                    dtstart: start, // new Date(Date.UTC(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes(), start.getSeconds())),
                    until: calendarInterval.end || new Date(),
                    freq: RRule.WEEKLY,
                    bymonth: cronObject.months,
                });
                rule.between(
                    calendarInterval.start || new Date(),
                    calendarInterval.end || new Date(),
                ).forEach(rruleTime => {
                    const time = event.native.astro ?
                        SunCalc.getTimes(
                            rruleTime,
                            props.adapterConfig.latitude || props.systemConfig.latitude,
                            props.adapterConfig.longitude || props.systemConfig.longitude,
                        )[event.native.astro] :
                        rruleTime;
                    events.push({
                        // id: `${event._id}_${rruleTime.getTime()}`,
                        extendedProps: { eventId: event._id },
                        title: name,
                        backgroundColor,
                        textColor,
                        start: time, // new Date(time.getTime() + (time.getTimezoneOffset() * 60000)),
                        duration: initialDuration,
                        allDay: false,
                        display: 'block',
                    });
                });
                return;
            }
            if (Array.isArray(cronObject.dows)) {
                const rule = new RRule({
                    dtstart: start, // new Date(Date.UTC(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes(), start.getSeconds())),
                    until: calendarInterval.end || new Date(),
                    freq: RRule.WEEKLY,
                    byweekday: cronObject.dows.map(dow => (dow === 0 ? 6 : dow - 1)),
                });
                rule.between(
                    calendarInterval.start || new Date(),
                    calendarInterval.end || new Date(),
                ).forEach(rruleTime => {
                    const time = event.native.astro ?
                        SunCalc.getTimes(rruleTime, props.systemConfig.latitude, props.systemConfig.longitude)[event.native.astro] :
                        rruleTime;
                    events.push({
                        // id: `${event._id}_${rruleTime.getTime()}`,
                        extendedProps: { eventId: event._id },
                        title: name,
                        backgroundColor,
                        textColor,
                        start: time, // new Date(time.getTime() + (time.getTimezoneOffset() * 60000)),
                        duration: initialDuration,
                        allDay: false,
                        display: 'block',
                    });
                });
                return;
            }
            events.push({
                // id: event._id,
                extendedProps: { eventId: event._id },
                title: name,
                duration: initialDuration,
                backgroundColor,
                textColor,
            });
            return;
        }

        events.push({
            // id: event._id,
            extendedProps: { eventId: event._id },
            title: name,
            display: 'block',
            backgroundColor,
            textColor,
            start: serverDateToClient(event.native.start, 'date', props.serverTimeZone),
            end: serverDateToClient(new Date(new Date(event.native.start).getTime() + initialDuration), 'date', props.serverTimeZone),
        });
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

    useEffect(() => {
        if (props.isSimulation) {
            const calendar = ref.current?.getApi();
            calendar.changeView(props.simulation.native.interval === 'day' ? 'timeGridDay' : 'timeGridWeek', new Date());
        }
    }, [props.simulations, props.simulationId]);

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
            systemConfig={props.systemConfig}
            widget={props.widget}
            event={props.events.find(event => event._id === eventDialog)}
            onClose={() => setEventDialog(null)}
            socket={props.socket}
            updateEvents={props.updateEvents}
            setEvent={props.setEvent}
            deleteEvent={props.deleteEvent}
            serverTimeZone={props.serverTimeZone}
            readOnly={props.readOnly}
            t={props.t}
            language={props.language}
            isSimulation={props.isSimulation}
            simulationId={props.simulationId}
            simulation={props.simulation}
        /> : null}
        <div className={props.classes.container}>
            {!props.hideLeftBlock && !props.readOnly && <div className={props.classes.leftBlock}>
                <Paper elevation={4} className={props.classes.leftPaper}>
                    <div className={props.classes.leftContent}>
                        <h4>{props.t('Events')}</h4>
                        {_eventTypes.map((type, index) =>
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
                {props.button}
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
                                    left: props.hideTopBlockButtons || props.isSimulation ? '' : 'prev,next today',
                                    center: props.isSimulation ? '' : 'title',
                                    right: props.hideTopBlockButtons || props.isSimulation ? '' : 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                                }
                        }
                        initialView={initialView}
                        initialDate={initialDate}
                        editable={!props.readOnly}
                        selectable
                        selectMirror
                        nowIndicator
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
                            if (date.start.toString() !== calendarInterval.start?.toString() || date.end.toString() !== calendarInterval.end?.toString()) {
                                setCalendarInterval({
                                    start: date.start,
                                    end: date.end,
                                });
                            }
                            if (!props.widget) {
                                // window.localStorage.setItem(`${storageName}Start`, date.view.currentStart.getTime());
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
                        eventClick={event => setEventDialog(event.event.extendedProps.eventId)}
                        eventResize={event => {
                            const eventData = props.events.find(_event => _event._id === event.event.extendedProps.eventId);
                            if (eventData.native.intervals?.[0].timeOffset) {
                                const newEvent = JSON.parse(JSON.stringify(eventData));
                                newEvent.native.intervals[0].timeOffset += event.endDelta.milliseconds;
                                props.setEvent(newEvent._id, newEvent);
                                props.updateEvents();
                            } else {
                                event.revert();
                            }
                        }}
                        // eventClassNames={event => {
                        //    console.log(event);
                        // }}
                        eventDrop={async event => {
                            const eventData = props.events.find(_event => _event._id === event.event.extendedProps.eventId);
                            if (eventData?.native?.cron) {
                                const newEvent = JSON.parse(JSON.stringify(eventData));
                                if (event.jsEvent.altKey) {
                                    newEvent._id = `${props.calendarPrefix}.event-${uuidv4()}`;
                                }
                                const newCron = cron2obj(newEvent.native.cron);
                                const timeZoneCron = clientDateToServer(event.event.start, 'cron', props.serverTimeZone);
                                newCron.hours = timeZoneCron.hours;
                                newCron.minutes = timeZoneCron.minutes;
                                newEvent.native.cron = obj2cron(newCron);
                                await props.setEvent(newEvent._id, newEvent);
                                props.updateEvents();
                            } else {
                                const newEvent = JSON.parse(JSON.stringify(eventData));
                                if (event.jsEvent.altKey) {
                                    newEvent._id = `${props.calendarPrefix}.event-${uuidv4()}`;
                                }
                                newEvent.native.start = clientDateToServer(event.event.start, 'date', props.serverTimeZone);
                                await props.setEvent(newEvent._id, newEvent);
                                props.updateEvents();
                            }
                        }}
                        eventReceive={async event => {
                            const newEvent = {
                                _id: `${props.calendarPrefix}.event-${uuidv4()}`,
                                common: {
                                    name: event.event.title,
                                    enabled: true,
                                },
                                native: {
                                    id: Date.now(),
                                    start: clientDateToServer(event.event.start, 'date', props.serverTimeZone),
                                    type: event.event.extendedProps.type,
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
                            if (props.isSimulation) {
                                delete newEvent.native.start;
                                const cron = clientDateToServer(event.event.start, 'cron', props.serverTimeZone);
                                cron.dows = props.simulation.native.interval === 'day' ? [0, 1, 2, 3, 4, 5, 6] : [event.event.start.getDay()];
                                cron.dates = ['?'];
                                cron.months = ['*'];
                                newEvent.native.cron = obj2cron(cron);
                                newEvent._id = `${props.simulationId}.event-${uuidv4()}`;
                                newEvent.native.color = props.simulation.native.defaultColor;
                                newEvent.native.record = {
                                    states: [],
                                    enums: [],
                                    start: null,
                                    end: null,
                                };
                            }
                            await props.setEvent(newEvent._id, newEvent);
                            props.updateEvents();
                            setTimeout(() => setEventDialog(newEvent._id), 100);
                        }}
                        select={async selectInfo => {
                            const calendarApi = selectInfo.view.calendar;
                            calendarApi.unselect(); // clear date selection

                            if (props.readOnly) {
                                return;
                            }

                            const newEvent = {
                                _id: `${props.calendarPrefix}.event-${uuidv4()}`,
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
                                    oid: '',
                                    startValue: '',
                                    color: '#3A87AD',
                                },
                                type: 'schedule',
                            };
                            await props.setEvent(newEvent._id, newEvent);
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
    systemConfig: PropTypes.object,
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
    calendarPrefix: PropTypes.string,
    isSimulation: PropTypes.bool,
    simulationId: PropTypes.string,
    setEvent: PropTypes.func,
    adapterConfig: PropTypes.object,
    button: PropTypes.any,
};

export default withTheme(withStyles(styles)(Calendar));
