import React from 'react';
import PropTypes from 'prop-types';

import { MenuItem, Select } from '@mui/material';

import { I18n } from '@iobroker/adapter-react-v5';

import { VisRxWidget } from '@iobroker/vis-2-widgets-react-dev';

class CalendarsSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{ value: '_', label: props.t('default') }],
        };
    }

    static getText(text) {
        if (typeof text === 'object') {
            return text[I18n.getLanguage()] || text.en;
        }
        return text;
    }

    componentDidMount() {
        if (this.props.instance) {
            // read possible calenders
            this.props.socket.getObjectViewSystem(
                'folder',
                `fullcalendar.${this.props.instance}.Calendars.`,
                `fullcalendar.${this.props.instance}.Calendars.\u9999`,
            )
                .then(objects => {
                    const list = Object.keys(objects).map(id => ({
                        value: id,
                        label: CalendarsSelector.getText(objects[id].common.name),
                    }));
                    list.unshift({ value: '_', label: this.props.t('default') });
                    this.setState({ list });
                });
        }
    }

    render() {
        return <Select
            variant="standard"
            fullWidth
            value={this.props.value || '_'}
            onChange={e => this.props.onChange(e.target.value === '_' ? '' : e.target.value)}
        >
            {this.state.list.map(item => <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>)}
        </Select>;
    }
}

CalendarsSelector.propTypes = {
    value: PropTypes.string,
    socket: PropTypes.object,
    onChange: PropTypes.func,
    instance: PropTypes.number,
    t: PropTypes.func.isRequired,
};

export default CalendarsSelector;
