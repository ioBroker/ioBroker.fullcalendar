import {
    useEffect,
    useRef,
    useState,
    useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

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

import {
    FormControl,
    Paper,
    Select,
    InputLabel,
    MenuItem,
} from '@mui/material';

import { Utils, I18n } from '@iobroker/adapter-react-v5';

import { RRule } from 'rrule';
import SunCalc from 'suncalc2';

import './styles.css';

import {
    clientDateToServer, cron2obj, obj2cron, serverDateToClient,
} from './Utils';
import EventDialog from './EventDialog';

const eventTypes = [
    { type: 'single', name: 'Single event' },
    { type: 'double', name: 'Double event' },
    { type: 'toggle', name: 'Toggle event' },
];

const MINUTES = [1, 2, 3, 5, 10, 15, 20, 30, 60];

const DraggableButton = ({ type, t, color }) => {
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
            backgroundColor: color || 'rgb(58, 135, 178)',
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

const styles = {
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
    leftMargin: {
        marginLeft: 4,
    },
};

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

function getCurrentScrollTime(el) {
    const rect = el.getBoundingClientRect();
    const slots = el.getElementsByClassName('fc-timegrid-slot');
    for (let i = 0; i < slots.length; i++) {
        const slotRect = slots[i].getBoundingClientRect();
        if (slotRect.top > rect.top + 100) {
            return slots[i].dataset.time;
        }
    }

    return null;
}

function formatter(date) {
    if (date.date.second) {
        return `${date.date.hour}:${date.date.minute.toString().padStart(2, '0')}:${date.date.second.toString().padStart(2, '0')}`;
    }

    return `${date.date.hour}:${date.date.minute.toString().padStart(2, '0')}`;
}

function Calendar(props) {
    const [eventDialog, setEventDialog] = useState(null);
    const [step, setStep] = useState(props.dayStep || parseInt(window.localStorage.getItem('calendarStep'), 10) || 30);
    const storageName = props.storageName || 'calendar';
    const ref = useRef(null);
    const dblClick = useRef(null);
    const scrollBackTimer = useRef(null);
    const scrollTimer = useRef(null);
    const lastEventTime = useRef(null);

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
    const events = useMemo(() => {
        const _events = [];

        props.events.forEach(event => {
            if (!event) {
                return;
            }
            // duration in ms
            const initialDuration = event.native?.intervals && event.native.intervals[0] && event.native.intervals[0].timeOffset ?
                event.native.intervals[0].timeOffset : 30;

            event.common.color = event.common.color || '#3a87b2';

            const backgroundColor = event.common.enabled ? event.common.color : dimColor(event.common.color);
            let textColor = Utils.invertColor(event.common.color, true);
            if (!event.common.enabled) {
                textColor = dimColor(textColor);
            }

            let name = event.common.name;
            if (event.native.oid) {
                let startValue = event.native.startValue;
                if (typeof startValue === 'boolean') {
                    startValue = startValue ? I18n.t('ON') : I18n.t('OFF');
                } else if (event.native.states && event.native.states[startValue]) {
                    startValue = event.native.states[startValue];
                }

                let endValue = event.native.intervals?.[0]?.value;
                if (typeof endValue === 'boolean') {
                    endValue = endValue ? I18n.t('ON') : I18n.t('OFF');
                } else if (event.native.states && event.native.states[endValue]) {
                    endValue = event.native.states[endValue];
                }

                name = `${event.common.name} → ${startValue}`;
                if (event.native.type === 'double') {
                    name += ` → ${(event.native.intervals?.[0]?.timeOffset || 0) / 1000 / 60} ${I18n.t('min')}. → ${endValue}`;
                }
                if (event.native.type === 'toggle') {
                    name += ` → ${(event.native.intervals?.[0]?.timeOffset || 0) / 1000 / 60} ${I18n.t('min')}. → ${I18n.t('initial')}`;
                }
            }

            if (event.native.cron) {
                const start = serverDateToClient(event.native.cron, 'cron', props.serverTimeZone);
                const cronObject = cron2obj(event.native.cron);
                start.setFullYear(new Date().getFullYear() - 1);

                if (Array.isArray(cronObject.months)) {
                    const rule = new RRule({
                        dtstart: start, // new Date(Date.UTC(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes(), start.getSeconds())),
                        until: calendarInterval.end || new Date(),
                        freq: RRule.MONTHLY,
                        bymonth: cronObject.months,
                        bymonthday: cronObject.dates,
                        // tzid: TIME_ZONE,
                    });

                    rule.between(
                        calendarInterval.start || new Date(),
                        calendarInterval.end || new Date(),
                    ).forEach(rruleTime => {
                        const time = event.native.astro ?
                            SunCalc.getTimes(
                                rruleTime,
                                props.systemConfig.latitude,
                                props.systemConfig.longitude,
                            )[event.native.astro] :
                            rruleTime;

                        if (event.native.astro && event.native.offset) {
                            time.setMinutes(time.getMinutes() + event.native.offset);
                        }

                        _events.push({
                            // id: `${event._id}_${rruleTime.getTime()}`,
                            extendedProps: {
                                eventId: event._id,
                                icon: event.common.icon,
                                type: event.native.type,
                                seconds: time.getSeconds(),
                            },
                            title: name,
                            backgroundColor,
                            textColor,
                            start: time, // new Date(time.getTime() + (time.getTimezoneOffset() * 60000)),
                            allDay: false,
                            display: 'block',
                        });
                    });
                } else if (Array.isArray(cronObject.dows)) {
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

                        if (event.native.astro && event.native.offset) {
                            time.setMinutes(time.getMinutes() + event.native.offset);
                        }

                        _events.push({
                            extendedProps: {
                                eventId: event._id,
                                icon: event.common.icon,
                                type: event.native.type,
                                seconds: time.getSeconds(),
                            },
                            title: name,
                            backgroundColor,
                            textColor,
                            start: time, // new Date(time.getTime() + (time.getTimezoneOffset() * 60000)),
                            allDay: false,
                            display: 'block',
                        });
                    });
                } else {
                    _events.push({
                        extendedProps: {
                            eventId: event._id,
                            icon: event.common.icon,
                            type: event.native.type,
                            seconds: 0,
                        },
                        title: name,
                        backgroundColor,
                        textColor,
                        icon: event.common.icon,
                    });
                }
            } else {
                const timeStart = event.native.astro ?
                    SunCalc.getTimes(new Date(), props.systemConfig.latitude, props.systemConfig.longitude)[event.native.astro] :
                    event.native.start;

                if (event.native.astro && event.native.offset) {
                    timeStart.setMinutes(timeStart.getMinutes() + event.native.offset);
                }

                _events.push({
                    extendedProps: {
                        eventId: event._id,
                        icon: event.common.icon,
                        type: event.native.type,
                        seconds: 0,
                    },
                    title: name,
                    display: 'block',
                    backgroundColor,
                    textColor,
                    start: serverDateToClient(timeStart, 'date', props.serverTimeZone),
                    end: serverDateToClient(new Date(new Date(timeStart).getTime() + initialDuration), 'date', props.serverTimeZone),
                });
            }
        });

        return _events;
    }, [props.events, props.serverTimeZone, props.systemConfig.latitude, props.systemConfig.longitude, calendarInterval.end, calendarInterval.start]);

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

    // init last used event time
    useEffect(() => {
        lastEventTime.current = null;
        setTimeout(() => {
            const now = new Date();
            ref.current?.getApi().scrollToTime(`${now.getHours().toString().padStart(2, '0')}:${(step > now.getMinutes() ? 0 : now.getMinutes() - step).toString().padStart(2, '0')}:00`);
        }, 300);
    }, [props.calendarPrefix, props.simulationId, step]);

    useEffect(() => {
        if (props.isSimulation) {
            const calendar = ref.current?.getApi();
            calendar?.changeView(props.simulation?.native.interval === 'day' ? 'timeGridDay' : 'timeGridWeek', new Date());
        }
    }, [props.isSimulation, props.simulation?.native.interval]);

    if (props.isSimulation && !props.simulation) {
        return null;
    }

    const now = lastEventTime.current ? undefined : new Date();
    const scrollTime = now ? `${now.getHours().toString().padStart(2, '0')}:${(step > now.getMinutes() ? 0 : now.getMinutes() - step).toString().padStart(2, '0')}:00` : undefined;
    console.log(`SCROLL TIME: ${scrollTime}`);

    const currentView = ref.current?.getApi().view.type;

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
            event={props.events.find(event => event?._id === eventDialog)}
            onClose={() => {
                setEventDialog(null);
                const _now  = lastEventTime.current ? new Date(lastEventTime.current) : new Date();
                const _scrollTime = `${_now.getHours().toString().padStart(2, '0')}:${(step > _now.getMinutes() ? 0 : _now.getMinutes() - step).toString().padStart(2, '0')}:00`;
                setTimeout(() => ref.current?.getApi().scrollToTime(_scrollTime), 200);
            }}
            socket={props.socket}
            updateEvents={props.updateEvents}
            setEvent={props.setEvent}
            deleteEvent={id => {
                setEventDialog(null);
                props.deleteEvent(id);
            }}
            serverTimeZone={props.serverTimeZone}
            readOnly={props.readOnly}
            t={props.t}
            theme={props.theme}
            language={props.language}
            isSimulation={props.isSimulation}
            simulationId={props.simulationId}
            simulation={props.simulation}
        /> : null}
        <div style={styles.container}>
            {!props.hideLeftBlock && !props.readOnly && <div style={styles.leftBlock}>
                <Paper elevation={4} style={styles.leftPaper}>
                    <div style={styles.leftContent}>
                        <h4>{props.t('Events')}</h4>
                        {_eventTypes.map((type, index) =>
                            <DraggableButton
                                t={props.t}
                                type={type}
                                name={props.t(type.name)}
                                key={type.type}
                                index={index}
                                color={props.isSimulation ? props.simulation?.common?.color : undefined}
                            />)}
                        {props.hideLeftBlockHint ? null : <div>{props.t('Drag and drop the events above to create a new one.')}</div>}
                        {props.hideLeftBlockHint ? null : <hr style={styles.hr} />}
                        {props.hideLeftBlockHint ? null : <div>{props.t('Use ALT by dragging it to copy the events.')}</div>}
                        {props.hideLeftBlockHint ? null : <hr style={styles.hr} />}
                        {props.hideLeftBlockHint ? null : <div>{props.t('Use double click on calendar to add new events.')}</div>}
                        {props.hideLeftBlockHint ? null : <hr style={styles.hr} />}
                        {props.hideLeftBlockHint || currentView === 'dayGridMonth' || currentView === 'listMonth' ? null : <FormControl fullWidth variant="standard">
                            <InputLabel>{props.t('Zoom')}</InputLabel>
                            <Select
                                value={step}
                                onChange={e => {
                                    if (ref.current?.elRef?.current) {
                                        const curTime = getCurrentScrollTime(ref.current.elRef.current);
                                        if (curTime) {
                                            setTimeout(() => ref.current?.getApi().scrollToTime(curTime), 300);
                                        }
                                    }
                                    window.localStorage.setItem('calendarStep', e.target.value.toString());
                                    setStep(e.target.value);
                                }}
                            >
                                {MINUTES.map(minute => <MenuItem key={minute} value={minute}>
                                    {minute}
                                    <span style={styles.leftMargin}>{props.t('min')}</span>
                                </MenuItem>)}
                            </Select>
                        </FormControl>}
                    </div>
                </Paper>
                {props.button}
            </div>}
            <div style={styles.calendarBlock}>
                <div style={styles.calendar}>
                    <FullCalendar
                        ref={ref}
                        plugins={[listPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, rrulePlugin]}
                        weekends={!props.hideWeekends}
                        headerToolbar={props.hideTopBlock ? false : {
                            left: props.hideTopBlockButtons || props.isSimulation ? '' : 'prev,next today',
                            center: props.isSimulation ? '' : 'title',
                            right: props.hideTopBlockButtons || props.isSimulation ? '' : 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                        }}
                        eventTimeFormat={props.isSimulation ? formatter : undefined}
                        scrollTime={props.isSimulation && props.simulationState === 'record' ? scrollTime : undefined}
                        slotDuration={`00:${step.toString().padStart(2, '0')}:00`}
                        eventMinHeight={20}
                        initialView={initialView}
                        initialDate={initialDate}
                        editable={!props.readOnly}
                        selectable
                        selectMirror
                        nowIndicator
                        dayMaxEvents
                        eventResizableFromStart={!props.isSimulation}
                        eventDurationEditable={!props.isSimulation}
                        defaultTimedEventDuration={`00:${step.toString().padStart(2, '0')}`}
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
                                lastEventTime.current = null;
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
                        eventClick={event => {
                            lastEventTime.current = new Date(event.event.start).getTime();
                            setEventDialog(event.event.extendedProps.eventId);
                        }}
                        eventResize={event => {
                            lastEventTime.current = new Date(event.event.start).getTime();
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
                            lastEventTime.current = new Date(event.event.start).getTime();
                            const eventData = props.events.find(_event => _event._id === event.event.extendedProps.eventId);
                            if (eventData?.native?.cron) {
                                const newEvent = JSON.parse(JSON.stringify(eventData));
                                if (event.jsEvent.altKey) {
                                    newEvent._id = `${props.calendarPrefix || props.simulationId}.event-${uuidv4()}`;
                                }
                                const newCron = cron2obj(newEvent.native.cron);
                                const timeZoneCron = clientDateToServer(event.event.start, 'cron', props.serverTimeZone);
                                const date = new Date(event.event.start).getDate();
                                const month = new Date(event.event.start).getMonth() + 1;
                                const dow = new Date(event.event.start).getDay();
                                if (Array.isArray(newCron.months)) {
                                    if (event.delta.days) {
                                        newCron.dates = [date];
                                    }
                                    if (!newCron.months.includes(month)) {
                                        newCron.months = [month];
                                    }
                                    newCron.dows = '*';
                                } else if (Array.isArray(newCron.dows)) {
                                    newCron.months = '*';
                                    newCron.dates = '*';
                                    if (event.delta.days) {
                                        newCron.dows = [dow];
                                    }
                                }

                                newCron.hours = timeZoneCron.hours;
                                newCron.minutes = timeZoneCron.minutes;
                                newEvent.native.cron = obj2cron(newCron);
                                await props.setEvent(newEvent._id, newEvent);
                                props.updateEvents();
                            } else {
                                const newEvent = JSON.parse(JSON.stringify(eventData));
                                if (event.jsEvent.altKey) {
                                    newEvent._id = `${props.calendarPrefix || props.simulationId}.event-${uuidv4()}`;
                                }
                                newEvent.native.start = clientDateToServer(event.event.start, 'date', props.serverTimeZone);
                                await props.setEvent(newEvent._id, newEvent);
                                props.updateEvents();
                            }
                        }}
                        eventReceive={async event => {
                            const newEvent = {
                                _id: `${props.calendarPrefix || props.simulationId}.event-${uuidv4()}`,
                                common: {
                                    name: event.event.title,
                                    enabled: true,
                                    color: '#3A87AD',
                                },
                                native: {
                                    id: Date.now(),
                                    start: clientDateToServer(event.event.start, 'date', props.serverTimeZone),
                                    type: event.event.extendedProps.type,
                                    oid: '',
                                    startValue: '',
                                },
                                type: 'schedule',
                            };
                            const time = new Date(newEvent.native.start);
                            if (!time.getMinutes() && !time.getHours()) {
                                time.setHours(12);
                                newEvent.native.start = clientDateToServer(time, 'date', props.serverTimeZone);
                            }

                            if (event.event.extendedProps.type !== 'single') {
                                newEvent.native.intervals = [{
                                    timeOffset: 30 * 60 * 1000,
                                }];
                            }
                            if (props.isSimulation) {
                                newEvent.common.color = props.simulation.common.color || newEvent.common.color;

                                delete newEvent.native.start;
                                const cron = clientDateToServer(event.event.start, 'cron', props.serverTimeZone);
                                cron.dows = props.simulation.native.interval === 'day' ? [0, 1, 2, 3, 4, 5, 6] : [event.event.start.getDay()];
                                cron.dates = ['?'];
                                cron.months = ['*'];
                                newEvent.native.cron = obj2cron(cron);
                                // newEvent._id = `${props.simulationId}.event-${uuidv4()}`;
                                newEvent.native.record = {
                                    states: [],
                                    enums: [],
                                    start: null,
                                    end: null,
                                };
                            }
                            lastEventTime.current = new Date(event.event.start).getTime();
                            await props.setEvent(newEvent._id, newEvent);
                            props.updateEvents();
                            setTimeout(() => setEventDialog(newEvent._id), 100);
                        }}
                        eventDidMount={info => {
                            let icon = info.event.extendedProps.icon;
                            if (icon) {
                                const img = window.document.createElement('img');
                                if (!icon.startsWith('data:image') && !icon.startsWith('http') && !icon.startsWith('/')) {
                                    icon = `../../${icon}`;
                                }

                                img.setAttribute('src', icon);
                                img.className = 'icon';
                                img.style.width = '20px';
                                img.style.height = '20px';
                                const cnt = info.el.getElementsByClassName('fc-event-title-container');
                                if (cnt.length) {
                                    cnt[0].prepend(img);
                                    const title = cnt[0].getElementsByClassName('fc-event-title');
                                    if (title.length) {
                                        title[0].style.marginLeft = '23px';
                                    }
                                }
                            }
                        }}
                        select={async selectInfo => {
                            const calendarApi = selectInfo.view.calendar;
                            calendarApi.unselect(); // clear date selection

                            if (props.readOnly) {
                                return;
                            }
                            const diff = selectInfo.end.getTime() - selectInfo.start.getTime();
                            if ((!dblClick.current || Date.now() - dblClick.current > 500) && diff === 30 * 60 * 1000) {
                                dblClick.current = Date.now();
                                return;
                            }

                            const newEvent = {
                                _id: `${props.calendarPrefix || props.simulationId}.event-${uuidv4()}`,
                                common: {
                                    name: props.t('Single event'),
                                    enabled: true,
                                    color: '#3A87AD',
                                },
                                native: {
                                    id: Date.now(),
                                    start: clientDateToServer(selectInfo.date || selectInfo.start, 'date', props.serverTimeZone),
                                    intervals: selectInfo.end && !props.isSimulation ? [{
                                        value: '',
                                        timeOffset: (selectInfo.end.getTime() - selectInfo.start.getTime()),
                                    }] : undefined,
                                    type: selectInfo.end && !props.isSimulation ? 'double' : 'single',
                                    oid: '',
                                    startValue: '',
                                },
                                type: 'schedule',
                            };
                            if (props.isSimulation) {
                                newEvent.common.color = props.simulation.common.color || newEvent.common.color;
                            }

                            lastEventTime.current = new Date(newEvent.native.start).getTime();

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
    t: PropTypes.func.isRequired,
    widget: PropTypes.bool,
    language: PropTypes.string.isRequired,
    storageName: PropTypes.string,
    calendarPrefix: PropTypes.string,
    isSimulation: PropTypes.bool,
    simulationId: PropTypes.string,
    setEvent: PropTypes.func,
    deleteEvent: PropTypes.func,
    button: PropTypes.any,
    dayStep: PropTypes.number,
};

export default Calendar;
