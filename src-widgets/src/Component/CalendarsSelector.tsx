import React from 'react';

import { MenuItem, Select } from '@mui/material';

import { I18n } from '@iobroker/adapter-react-v5';

/** Anything that can list objects: the admin connection as well as the vis-2 socket */
interface ObjectViewSocket {
    getObjectViewSystem: (
        type: ioBroker.ObjectType,
        start: string,
        end?: string,
    ) => Promise<Record<string, ioBroker.AnyObject>>;
}

interface CalendarsSelectorProps {
    socket: ObjectViewSocket;
    instance: number;
    value?: string;
    onChange: (value: string) => void;
    t: (text: string) => string;
}

interface CalendarsSelectorState {
    list: { value: string; label: string }[];
}

export default class CalendarsSelector extends React.Component<CalendarsSelectorProps, CalendarsSelectorState> {
    constructor(props: CalendarsSelectorProps) {
        super(props);
        this.state = {
            list: [{ value: '_', label: props.t('default') }],
        };
    }

    static getText(text: ioBroker.StringOrTranslated): string {
        if (typeof text === 'object') {
            return text[I18n.getLanguage()] || text.en;
        }
        return text;
    }

    componentDidMount(): void {
        if (this.props.instance) {
            // read possible calenders
            this.props.socket
                .getObjectViewSystem(
                    'folder',
                    `fullcalendar.${this.props.instance}.Calendars.`,
                    `fullcalendar.${this.props.instance}.Calendars.\u9999`,
                )
                .then(objects => {
                    const list = Object.keys(objects).map(id => ({
                        value: id,
                        label: CalendarsSelector.getText(objects[id].common?.name ?? id),
                    }));
                    list.unshift({ value: '_', label: this.props.t('default') });
                    this.setState({ list });
                });
        }
    }

    render(): React.JSX.Element {
        return (
            <Select
                variant="standard"
                fullWidth
                value={this.props.value || '_'}
                onChange={e => this.props.onChange(e.target.value === '_' ? '' : e.target.value)}
            >
                {this.state.list.map(item => (
                    <MenuItem
                        key={item.value}
                        value={item.value}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        );
    }
}
