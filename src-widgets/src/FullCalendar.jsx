import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@mui/styles';

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
                        default: false,
                    },
                    {
                        label: 'hide_top_block',
                        name: 'hideTopBlock',
                        type: 'checkbox',
                        default: false,
                    },
                    {
                        label: 'view_mode',
                        name: 'viewMode',
                        type: 'select',
                        options: ['dayGridMonth', 'timeGridWeek', 'timeGridDay', 'listMonth'],
                        default: 'dayGridMonth',
                    },
                    {
                        label: 'name',
                        name: 'name',
                        tooltip: 'used_only_with_relative',
                        default: '',
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

    getWidgetInfo() {
        return FullCalendar.getWidgetInfo();
    }

    constructor(props) {
        super(props);
        this.widgetRef = React.createRef();
    }

    componentDidMount() {
        this.updateEvents();
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

        let width = (this.widgetRef.current?.offsetWidth || 0) - (this.state.rxData.hideDow ? 0 : 80);
        if (width < 0) {
            width = 0;
        }

        const content = <div
            className={this.props.classes.content}
            ref={this.widgetRef}
        >
            <Calendar
                events={this.state.events || []}
                socket={this.props.socket}
                instance={this.state.rxData.instance}
                changeEvents={this.changeEvents}
                updateEvents={this.updateEvents}
                serverTimeZone={this.state.serverTimeZone || 0}
                readOnly={this.state.rxData.readOnly || false}
                hideLeftBlock={this.state.rxData.hideLeftBlock || false}
                hideTopBlock={this.state.rxData.hideTopBlock || false}
                viewMode={this.state.rxData.viewMode || null}
            />
        </div>;

        if (this.state.rxStyle.position === 'relative') {
            return this.wrapContent(content, null, { height: 'calc(100% - 24px)', width: 'calc(100% - 24px)' });
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
