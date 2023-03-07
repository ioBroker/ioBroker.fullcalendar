import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@mui/styles';

import { Card, CardContent } from '@mui/material';

import {
    I18n,
} from '@iobroker/adapter-react-v5';

import { VisRxWidget } from '@iobroker/vis-2-widgets-react-dev';
import Calendar from './Component/Calendar';

const styles = () => ({
    content: {
        display: 'flex',
        width: '100%',
        height: '100%',
        overflow: 'auto',
    },
});

const Generic = window.visRxWidget || VisRxWidget;

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
                ],
            }],
            visDefaultStyle: {
                width: '100%',
                height: 355,
                position: 'relative',
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
        this.props.socket.subscribeObject(`fullcalendar.${this.state.rxData.instance}.*`, this.onEventsChanged);

        this.updateEvents();
    }

    onEventsChanged = (id, obj) => {
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
        this.props.socket.unsubscribeObject(`fullcalendar.${this.state.rxData.instance}.*`, this.onEventsChanged);
        super.componentWillUnmount();
    }

    onRxDataChanged() {
        this.updateEvents();
    }

    updateEvents = async () => {
        const objects = await this.props.socket.getObjectViewCustom(
            'schedule',
            'schedule',
            `fullcalendar.${this.state.rxData.instance}.`,
            `fullcalendar.${this.state.rxData.instance}.\u9999`,
        );
        let serverTimeZone = 0;
        try {
            const state = await this.props.socket.getState('fullcalendar.0.info.timeZone');
            serverTimeZone = state?.val || 0;
        } catch (e) {
            // ignore
        }
        this.setState({ events: Object.values(objects), serverTimeZone });
    };

    changeEvents = events => {
        this.setState({ events });
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

        const content = <div
            className={this.props.classes.content}
            ref={this.widgetRef}
        >
            <Calendar
                widget
                key={this.state.rxData.viewMode}
                events={this.state.events || []}
                socket={this.props.socket}
                instance={this.state.rxData.instance}
                changeEvents={this.changeEvents}
                updateEvents={this.updateEvents}
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
            />
        </div>;

        if (this.state.rxStyle.position === 'relative') {
            return this.wrapContent(content, null, { height: 'calc(100% - 24px)', width: 'calc(100% - 24px)' }, null, null, { Card, CardContent });
        }

        return content;
    }
}

FullCalendar.propTypes = {
    systemConfig: PropTypes.object,
    socket: PropTypes.object,
    themeType: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object,
};

export default withStyles(styles)(withTheme(FullCalendar));
