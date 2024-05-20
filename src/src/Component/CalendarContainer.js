import React from 'react';

import PropTypes from 'prop-types';

import { I18n } from '@iobroker/adapter-react-v5';

import Calendar from './Calendar';

class CalendarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            serverTimeZone: 0,
            simulationObject: null,
            isSimulation: props.isSimulation,
            calendarPrefix: props.calendarPrefix,
            updateEvents: false,
        };
    }

    onEventsChanged = (id, obj) => {
        const events = JSON.parse(JSON.stringify(this.state.events));
        const eventPos = events.findIndex(e => e._id === id);
        let changed = false;
        if (eventPos !== -1) {
            if (obj) {
                events[eventPos] = obj;
            } else {
                events.splice(eventPos, 1);
            }
            changed = true;
        } else if (obj) {
            events.push(obj);
            changed = true;
        }
        changed && this.setState({ events });
    };

    updateEvents = async () => {
        let objects;
        let simulationObject = null;
        if (this.props.isSimulation) {
            simulationObject = await this.props.socket.getObject(this.props.simulationId);
            objects = Object.values(simulationObject?.native?.events || []);
        } else {
            objects = Object.values(await this.props.socket.getObjectViewCustom(
                'schedule',
                'schedule',
                `${this.props.calendarPrefix}.`,
                `${this.props.calendarPrefix}.\u9999`,
            ));
            if (this.props.calendarPrefix.match(/^fullcalendar\.[0-9]+$/)) {
                objects = objects.filter(o => !o._id.match(/^fullcalendar\.[0-9]\.Calendars/));
            }
        }

        let serverTimeZone = 0;
        try {
            const state = await this.props.socket.getState('fullcalendar.0.info.timeZone');
            serverTimeZone = state?.val || 0;
        } catch (e) {
            // ignore
        }
        this.setState({ events: objects, serverTimeZone, simulationObject });
    };

    changeEvents = events => this.setState({ events });

    setEvent = async (id, event) => {
        if (this.props.isSimulation) {
            const simulationObject = JSON.parse(JSON.stringify(this.state.simulationObject));
            const eventPos = simulationObject.native.events.findIndex(e => e._id === id);
            if (eventPos !== -1) {
                simulationObject.native.events[eventPos] = event;
            } else {
                simulationObject.native.events.push(event);
            }
            return this.props.socket.setObject(this.props.simulationId, simulationObject);
        }

        return this.props.socket.setObject(id, event);
    };

    deleteEvent = async id => {
        if (this.props.isSimulation) {
            const simulationObject = JSON.parse(JSON.stringify(this.state.simulationObject));
            const eventPos = simulationObject.native.events.findIndex(e => e._id === id);
            if (eventPos !== -1) {
                simulationObject.native.events.splice(eventPos, 1);
            }
            await this.props.socket.setObject(this.props.simulationId, simulationObject);
        }

        return this.props.socket.delObject(id);
    };

    async onPropertyChanged() {
        const subscribed = this.props.calendarPrefix ? `${this.props.calendarPrefix}.*` : null;

        if (subscribed !== this.subscribed) {
            this.subscribed && (await this.props.socket.unsubscribeObject(this.subscribed, this.onEventsChanged));
            this.subscribed = subscribed;
            this.subscribed && (await this.props.socket.subscribeObject(this.subscribed, this.onEventsChanged));
        }

        await this.updateEvents();
    }

    async componentWillUnmount() {
        if (this.subscribed) {
            await this.props.socket.unsubscribeObject(this.subscribed, this.onEventsChanged);
            this.subscribed = null;
        }
        this.updateTimeout && clearTimeout(this.updateTimeout);
        this.updateTimeout = null;
    }

    async componentDidMount() {
        await this.onPropertyChanged();
    }

    render() {
        if (this.state.calendarPrefix !== this.props.calendarPrefix ||
            this.state.isSimulation !== this.props.isSimulation ||
            (this.state.isSimulation && JSON.stringify(this.state.events) !== JSON.stringify(this.props.simulation?.native?.events))
        ) {
            if (!this.updateTimeout) {
                this.updateTimeout = setTimeout(() =>
                    this.setState({ calendarPrefix: this.props.calendarPrefix, isSimulation: this.props.isSimulation }, async () => {
                        this.updateTimeout = null;
                        await this.onPropertyChanged();
                    }), 100);
            }
        }

        return <Calendar
            events={this.state.events || []}
            systemConfig={this.props.systemConfig}
            socket={this.props.socket}
            calendarPrefix={this.props.calendarPrefix}
            changeEvents={this.changeEvents}
            updateEvents={this.updateEvents}
            setEvent={this.setEvent}
            deleteEvent={this.deleteEvent}
            serverTimeZone={this.state.serverTimeZone}
            t={I18n.t}
            language={I18n.getLanguage()}
            isSimulation={this.props.isSimulation}
            simulationId={this.props.simulationId}
            simulation={this.props.simulation}
            simulations={this.props.simulations}
            simulationState={this.props.simulationState}
            readOnly={this.props.readOnly}
            button={this.props.button}
        />;
    }
}

CalendarContainer.propTypes = {
    systemConfig: PropTypes.object,
    socket: PropTypes.object,
    calendarPrefix: PropTypes.string,
    isSimulation: PropTypes.bool,
    simulationId: PropTypes.string,
    simulation: PropTypes.object,
    simulations: PropTypes.array,
    simulationState: PropTypes.string,
    readOnly: PropTypes.bool,
    button: PropTypes.any,
};

export default CalendarContainer;
