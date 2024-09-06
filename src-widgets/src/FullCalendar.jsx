import React from 'react';
import PropTypes from 'prop-types';

import {
    I18n,
} from '@iobroker/adapter-react-v5';

import Calendar from './Component/Calendar';
import CalendarsSelector from './Component/CalendarsSelector';

const styles = {
    content: {
        display: 'flex',
        width: '100%',
        height: '100%',
        overflow: 'auto',
    },
};

const Generic = window.visRxWidget;

class FullCalendar extends Generic {
    static getWidgetInfo() {
        return {
            id: 'tplFullCalendar',
            visSet: 'fullcalendar',
            visWidgetLabel: 'fullcalendar',  // Label of widget
            visSetLabel: 'set_label', // Label of widget set
            visSetColor: '#112233',
            visName: 'Full calendar',
            visAttrs: [{
                name: 'common',
                fields: [
                    {
                        label: 'instance',
                        name: 'instance',
                        type: 'instance',
                        adapter: 'fullcalendar',
                        isShort: true,
                    },
                    {
                        label: 'calendar',
                        name: 'calendar',
                        type: 'custom',
                        component: (field, data, onDataChange, props) =>
                            <CalendarsSelector
                                key={data.instance}
                                instance={data.instance}
                                value={data.calendar}
                                onChange={value => onDataChange({ calendar: value })}
                                socket={props.context.socket}
                                t={FullCalendar.t}
                            />,
                        default: '',
                    },
                    {
                        label: 'read_only',
                        name: 'readOnly',
                        type: 'checkbox',
                        default: false,
                    },
                    {
                        label: 'hide_left_block',
                        name: 'hideLeftBlock',
                        type: 'checkbox',
                        hidden: data => data.readOnly,
                        default: false,
                    },
                    {
                        label: 'hide_left_block_hint',
                        name: 'hideLeftBlockHint',
                        type: 'checkbox',
                        hidden: data => data.readOnly || data.hideLeftBlock,
                        default: false,
                    },
                    {
                        label: 'hide_top_block',
                        name: 'hideTopBlock',
                        type: 'checkbox',
                        default: false,
                    },
                    {
                        label: 'hide_top_block_buttons',
                        name: 'hideTopBlockButtons',
                        type: 'checkbox',
                        hidden: data => data.hide_top_block,
                        default: false,
                    },
                    {
                        label: 'hide_weekends',
                        name: 'hideWeekends',
                        type: 'checkbox',
                        default: false,
                    },
                    {
                        label: 'view_mode',
                        name: 'viewMode',
                        type: 'select',
                        options: [
                            { label: 'full_calendar_dayGridMonth', value: 'dayGridMonth' },
                            { label: 'full_calendar_timeGridWeek', value: 'timeGridWeek' },
                            { label: 'full_calendar_timeGridDay', value: 'timeGridDay' },
                            { label: 'full_calendar_listMonth', value: 'listMonth' },
                        ],
                        default: 'dayGridMonth',
                    },
                    {
                        label: 'name',
                        name: 'name',
                        tooltip: 'used_only_with_relative',
                        default: '',
                        hidden: (data, index, style) => style && style.position !== 'relative',
                    },
                    {
                        label: 'day_step',
                        tooltip: 'day_step_minutes',
                        name: 'dayStep',
                        default: 30,
                        type: 'select',
                        noTranslation: true,
                        hidden: data => data.viewMode !== 'timeGridDay' && data.viewMode !== 'timeGridWeek',
                        options: [
                            { label: '1', value: 1 },
                            { label: '2', value: 2 },
                            { label: '3', value: 3 },
                            { label: '5', value: 5 },
                            { label: '10', value: 10 },
                            { label: '15', value: 15 },
                            { label: '20', value: 20 },
                            { label: '30', value: 30 },
                            { label: '60', value: 60 },
                        ],
                    },
                ],
            }],
            visDefaultStyle: {
                width: '100%',
                height: 355,
                position: 'relative',
                absoluteWidth: 500,
            },
            visPrev: 'widgets/fullcalendar/img/prev_fullcalendar.png',
        };
    }

    static t(key, ...args) {
        return I18n.t(`full_calendar_${key}`, ...args);
    }

    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo() {
        return FullCalendar.getWidgetInfo();
    }

    constructor(props) {
        super(props);
        this.widgetRef = React.createRef();
    }

    componentDidMount() {
        super.componentDidMount();
        this.updateEvents();
    }

    onEventsChanged = (id, obj) => {
        if (!this.state.rxData.calendar) {
            // filter out all events of sub calendars
            // fullcalendar.0.event-56c1746a-7f82-4ee1-8568-b81b323bac10
            if (id.split('.').length > 3) {
                return;
            }
        }

        const events = JSON.parse(JSON.stringify(this.state.events));
        const eventPos = events.findIndex(e => e._id === id);

        if (eventPos !== -1) {
            if (obj) {
                events[eventPos] = obj;
            } else {
                events.splice(eventPos, 1);
            }
        } else {
            events.push(obj);
        }

        this.setState({ events });
    };

    componentWillUnmount() {
        this.subscribed && this.props.context.socket.unsubscribeObject(this.subscribed, this.onEventsChanged);
        this.subscribed = null;
        super.componentWillUnmount();
    }

    onRxDataChanged() {
        this.updateEvents();
    }

    updateEvents = async () => {
        let subscribed;
        if (this.state.rxData.calendar) {
            subscribed = `${this.state.rxData.calendar}.*`;
        } else if (this.state.rxData.instance || this.state.rxData.instance === 0) {
            subscribed = `fullcalendar.${this.state.rxData.instance}.*`;
        } else {
            subscribed = '';
        }

        if (this.subscribed !== subscribed) {
            this.subscribed && (await this.props.context.socket.unsubscribeObject(this.subscribed, this.onEventsChanged));
            this.subscribed = subscribed;
            this.subscribed && (await this.props.context.socket.subscribeObject(this.subscribed, this.onEventsChanged));
        }
        if (!this.subscribed) {
            this.setState({ events: [] });
            return;
        }

        const objects = await this.props.context.socket.getObjectViewCustom(
            'schedule',
            'schedule',
            this.state.rxData.calendar ? `${this.state.rxData.calendar}.` : `fullcalendar.${this.state.rxData.instance}.`,
            this.state.rxData.calendar ? `${this.state.rxData.calendar}.\u9999` : `fullcalendar.${this.state.rxData.instance}.\u9999`,
        );

        let serverTimeZone = 0;
        try {
            const state = await this.props.context.socket.getState(`fullcalendar.${this.state.rxData.instance}.info.timeZone`);
            serverTimeZone = state?.val || 0;
        } catch (e) {
            // ignore
        }
        let list = Object.values(objects);
        if (!this.state.rxData.calendar) {
            // filter out all events of sub calendars
            // fullcalendar.0.event-56c1746a-7f82-4ee1-8568-b81b323bac10
            list = list.filter(obj => obj._id.split('.').length <= 3);
        }

        this.setState({ events: list, serverTimeZone });
    };

    changeEvents = events => {
        this.setState({ events });
    };

    setEvent = async (id, event) => {
        await this.props.context.socket.setObject(id, event);
    };

    deleteEvent = async id => {
        await this.props.context.socket.delObject(id);
    };

    renderWidgetBody(props) {
        super.renderWidgetBody(props);

        if (!this.widgetRef.current?.offsetWidth) {
            this.forceUpdate();
        }
        /* let width = (this.widgetRef.current?.offsetWidth || 0) - (this.state.rxData.hideDow ? 0 : 80);
        if (width < 0) {
            width = 0;
        } */

        let content;

        if (!this.state.rxData.instance && this.state.rxData.instance !== 0) {
            content = <div
                style={styles.content}
                ref={this.widgetRef}
            >
                {FullCalendar.t('Please select instance')}
            </div>;
        } else {
            content = <div
                style={styles.content}
                ref={this.widgetRef}
            >
                <Calendar
                    widget
                    systemConfig={this.props.systemConfig ? this.props.systemConfig.common : this.props.context.systemConfig?.common}
                    key={`${this.state.rxData.viewMode}_${this.state.rxData.dayStep || 30}`}
                    events={this.state.events || []}
                    socket={this.props.context.socket}
                    instance={this.state.rxData.instance}
                    calendarPrefix={`fullcalendar.${this.state.rxData.instance}`}
                    changeEvents={this.changeEvents}
                    updateEvents={this.updateEvents}
                    setEvent={this.setEvent}
                    deleteEvent={this.deleteEvent}
                    serverTimeZone={this.state.serverTimeZone || 0}
                    readOnly={this.state.rxData.readOnly || false}
                    hideLeftBlock={this.state.rxData.hideLeftBlock || false}
                    hideTopBlock={this.state.rxData.hideTopBlock || false}
                    hideLeftBlockHint={this.state.rxData.hideLeftBlockHint || false}
                    hideTopBlockButtons={this.state.rxData.hideTopBlockButtons || false}
                    viewMode={this.state.rxData.viewMode || null}
                    storageName={`fc_${this.props.id}`}
                    hideWeekends={this.state.rxData.hideWeekends || false}
                    t={FullCalendar.t}
                    language={I18n.getLanguage()}
                    dayStep={this.state.rxData.dayStep || 30}
                    theme={this.props.context.theme}
                />
            </div>;
        }

        if (this.state.rxStyle.position === 'relative') {
            return this.wrapContent(content, null, { height: 'calc(100% - 24px)', width: 'calc(100% - 24px)' });
        }

        return content;
    }
}

FullCalendar.propTypes = {
    style: PropTypes.object,
    data: PropTypes.object,
    context: PropTypes.object,
};

export default FullCalendar;
