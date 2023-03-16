import React, { useEffect, useState } from 'react';

import { I18n, Loader } from '@iobroker/adapter-react-v5';

import Calendar from './Calendar';

const CalendarContainer = props => {
    const [events, setEvents] = useState([]);
    const [serverTimeZone, setServerTimeZone] = useState(0);
    const [subscribed, setSubscribed] = useState(false);
    const [simulationObject, setSimulationObject] = useState(null);

    const onEventsChanged = (id, obj) => {
        const _events = JSON.parse(JSON.stringify(events));
        const eventPos = _events.findIndex(e => e._id === id);
        if (eventPos !== -1) {
            if (obj) {
                _events[eventPos] = obj;
            } else {
                _events.splice(eventPos, 1);
            }
        } else {
            _events.push(obj);
        }
        setEvents(_events);
    };

    const updateEvents = async () => {
        let objects;
        if (props.isSimulation) {
            const _simulationObject = await props.socket.getObject(props.simulationId);
            setSimulationObject(_simulationObject);
            objects = _simulationObject.native.events;
        } else {
            objects = await props.socket.getObjectViewCustom(
                'schedule',
                'schedule',
                `${props.calendarPrefix}.`,
                `${props.calendarPrefix}.\u9999`,
            );
        }
        let _serverTimeZone = 0;
        try {
            const state = await props.socket.getState('fullcalendar.0.info.timeZone');
            _serverTimeZone = state?.val || 0;
        } catch (e) {
            // ignore
        }
        setEvents(Object.values(objects));
        setServerTimeZone(_serverTimeZone);
    };

    const changeEvents = _events => {
        setEvents(_events);
    };

    const setEvent = async (id, event) => {
        if (props.isSimulation) {
            const _simulationObject = JSON.parse(JSON.stringify(simulationObject));
            const eventPos = _simulationObject.native.events.findIndex(e => e._id === id);
            if (eventPos !== -1) {
                _simulationObject.native.events[eventPos] = event;
            } else {
                _simulationObject.native.events.push(event);
            }
            return props.socket.setObject(props.simulationId, _simulationObject);
        }
        return props.socket.setObject(id, event);
    };
    const deleteEvent = async id => {
        if (props.isSimulation) {
            const _simulationObject = JSON.parse(JSON.stringify(simulationObject));
            const eventPos = _simulationObject.native.events.findIndex(e => e._id === id);
            if (eventPos !== -1) {
                _simulationObject.native.events.splice(eventPos, 1);
            }
            return props.socket.setObject(props.simulationId, _simulationObject);
        }
        return props.socket.delObject(id);
    };

    useEffect(() => {
        props.socket.subscribeObject(`${props.calendarPrefix}.*`, onEventsChanged);
        setSubscribed(true);

        updateEvents();

        return () => {
            if (subscribed) {
                props.socket.unsubscribeObject(`${props.calendarPrefix}.*`, onEventsChanged);
            }
        };
    }, [props.calendarPrefix]);

    return <>
        <Calendar
            systemConfig={props._systemConfig}
            events={events || []}
            socket={props.socket}
            instance={props.instance}
            calendarPrefix={props.calendarPrefix}
            changeEvents={changeEvents}
            updateEvents={updateEvents}
            setEvent={setEvent}
            deleteEvent={deleteEvent}
            serverTimeZone={serverTimeZone}
            t={I18n.t}
            language={I18n.getLanguage()}
        />
        {/* <pre>
            {JSON.stringify(this.state.events, null, 2)}
        </pre> */}
    </>;
};

export default CalendarContainer;
