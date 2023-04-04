import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { I18n } from '@iobroker/adapter-react-v5';

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
            objects = Object.values(_simulationObject.native.events);
        } else {
            objects = Object.values(await props.socket.getObjectViewCustom(
                'schedule',
                'schedule',
                `${props.calendarPrefix}.`,
                `${props.calendarPrefix}.\u9999`,
            ));
            if (props.calendarPrefix.match(/^fullcalendar\.[0-9]+$/)) {
                objects = objects.filter(o => !o._id.match(/^fullcalendar\.[0-9]\.Calendars/));
            }
        }
        let _serverTimeZone = 0;
        try {
            const state = await props.socket.getState('fullcalendar.0.info.timeZone');
            _serverTimeZone = state?.val || 0;
        } catch (e) {
            // ignore
        }
        setEvents(objects);
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
            await props.socket.setObject(props.simulationId, _simulationObject);
            props.refreshSimulations();
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
            await props.socket.setObject(props.simulationId, _simulationObject);
            props.refreshSimulations();
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
    }, [props.calendarPrefix, props.isSimulation, props.simulationId, props.simulations]);

    return <>
        {props.button}
        <Calendar
            systemConfig={props.systemConfig}
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
            isSimulation={props.isSimulation}
            simulationId={props.simulationId}
            simulation={props.simulation}
            simulations={props.simulations}
            readOnly={props.readOnly}
            adapterConfig={props.adapterConfig}
        />
        {/* <pre>
            {JSON.stringify(this.state.events, null, 2)}
        </pre> */}
    </>;
};

CalendarContainer.propTypes = {
    systemConfig: PropTypes.object,
    socket: PropTypes.object,
    instance: PropTypes.any,
    calendarPrefix: PropTypes.string,
    isSimulation: PropTypes.bool,
    simulationId: PropTypes.string,
    simulation: PropTypes.object,
    simulations: PropTypes.array,
    refreshSimulations: PropTypes.func,
    readOnly: PropTypes.bool,
    adapterConfig: PropTypes.object,
    button: PropTypes.any,
};

export default CalendarContainer;
