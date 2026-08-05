import React from 'react';

import { I18n } from '@iobroker/adapter-react-v5';
import type {
    RxRenderWidgetProps,
    RxWidgetInfo,
    RxWidgetInfoAttributesField,
    RxWidgetInfoCustomComponentProperties,
    VisRxWidgetProps,
    VisRxWidgetState,
    WidgetData,
    WidgetStyle,
} from '@iobroker/types-vis-2';
import type VisRxWidget from '@iobroker/types-vis-2/visRxWidget';

import Calendar from './Component/Calendar';
import CalendarsSelector from './Component/CalendarsSelector';
import type { CalendarEvent } from './Component/Utils';

const styles: Record<string, React.CSSProperties> = {
    content: {
        display: 'flex',
        width: '100%',
        height: '100%',
        overflow: 'auto',
    },
};

export interface FullCalendarRxData {
    instance?: number;
    calendar?: string;
    readOnly?: boolean;
    hideLeftBlock?: boolean;
    hideLeftBlockHint?: boolean;
    hideTopBlock?: boolean;
    hideTopBlockButtons?: boolean;
    hideWeekends?: boolean;
    viewMode?: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listMonth';
    name?: string;
    dayStep?: number;
}

export interface FullCalendarState extends VisRxWidgetState {
    events: CalendarEvent[];
    serverTimeZone: number;
}

export default class FullCalendar extends (window.visRxWidget as typeof VisRxWidget)<
    FullCalendarRxData,
    FullCalendarState
> {
    private readonly widgetRef = React.createRef<HTMLDivElement>();
    private subscribed: string | null = null;

    constructor(props: VisRxWidgetProps) {
        super(props);
        this.state = {
            ...this.state,
            events: [],
            serverTimeZone: 0,
        };
    }

    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplFullCalendar',
            visSet: 'fullcalendar',
            visWidgetLabel: 'fullcalendar', // Label of widget
            visSetLabel: 'set_label', // Label of widget set
            visSetColor: '#112233',
            visName: 'Full calendar',
            visAttrs: [
                {
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
                            component: (
                                _field: RxWidgetInfoAttributesField,
                                data: WidgetData,
                                onDataChange: (newData: WidgetData) => void,
                                props: RxWidgetInfoCustomComponentProperties,
                            ): React.JSX.Element => (
                                <CalendarsSelector
                                    key={data.instance}
                                    instance={data.instance}
                                    value={data.calendar}
                                    onChange={value => onDataChange({ calendar: value })}
                                    socket={props.context.socket}
                                    t={FullCalendar.t}
                                />
                            ),
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
                            hidden: (data: WidgetData): boolean => !!data.readOnly,
                            default: false,
                        },
                        {
                            label: 'hide_left_block_hint',
                            name: 'hideLeftBlockHint',
                            type: 'checkbox',
                            hidden: (data: WidgetData): boolean => !!data.readOnly || !!data.hideLeftBlock,
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
                            hidden: (data: WidgetData): boolean => !!data.hide_top_block,
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
                            // vis-2 provides the widget style as a third argument
                            hidden: ((_data: WidgetData, _index: number, style: WidgetStyle): boolean =>
                                !!style && style.position !== 'relative') as (
                                data: WidgetData,
                                index: number,
                            ) => boolean,
                        },
                        {
                            label: 'day_step',
                            tooltip: 'day_step_minutes',
                            name: 'dayStep',
                            // the options carry numbers, so the default is a number too
                            default: 30 as unknown as string,
                            type: 'select',
                            noTranslation: true,
                            hidden: (data: WidgetData): boolean =>
                                data.viewMode !== 'timeGridDay' && data.viewMode !== 'timeGridWeek',
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
                },
            ],
            visDefaultStyle: {
                width: '100%',
                height: 355,
                position: 'relative',
                absoluteWidth: 500,
            },
            visPrev: 'widgets/fullcalendar/img/prev_fullcalendar.png',
        };
    }

    static t(key: string, ...args: any[]): string {
        return I18n.t(`full_calendar_${key}`, ...args);
    }

    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return FullCalendar.getWidgetInfo();
    }

    componentDidMount(): void {
        super.componentDidMount();
        void this.updateEvents();
    }

    onEventsChanged = (id: string, obj: ioBroker.Object | null | undefined): void => {
        if (!this.state.rxData.calendar) {
            // filter out all events of sub calendars
            // fullcalendar.0.event-56c1746a-7f82-4ee1-8568-b81b323bac10
            if (id.split('.').length > 3) {
                return;
            }
        }

        const events: CalendarEvent[] = JSON.parse(JSON.stringify(this.state.events));
        const eventPos = events.findIndex(e => e._id === id);

        if (eventPos !== -1) {
            if (obj) {
                events[eventPos] = obj as unknown as CalendarEvent;
            } else {
                events.splice(eventPos, 1);
            }
        } else if (obj) {
            events.push(obj as unknown as CalendarEvent);
        }

        this.setState({ events });
    };

    componentWillUnmount(): void {
        if (this.subscribed) {
            void this.props.context.socket.unsubscribeObject(this.subscribed, this.onEventsChanged);
            this.subscribed = null;
        }
        super.componentWillUnmount();
    }

    onRxDataChanged(): void {
        void this.updateEvents();
    }

    updateEvents = async (): Promise<void> => {
        let subscribed: string;
        if (this.state.rxData.calendar) {
            subscribed = `${this.state.rxData.calendar}.*`;
        } else if (this.state.rxData.instance || this.state.rxData.instance === 0) {
            subscribed = `fullcalendar.${this.state.rxData.instance}.*`;
        } else {
            subscribed = '';
        }

        if (this.subscribed !== subscribed) {
            if (this.subscribed) {
                await this.props.context.socket.unsubscribeObject(this.subscribed, this.onEventsChanged);
            }
            this.subscribed = subscribed;
            if (this.subscribed) {
                await this.props.context.socket.subscribeObject(this.subscribed, this.onEventsChanged);
            }
        }
        if (!this.subscribed) {
            this.setState({ events: [] });
            return;
        }

        const objects = await this.props.context.socket.getObjectViewCustom(
            'schedule',
            'schedule',
            this.state.rxData.calendar
                ? `${this.state.rxData.calendar}.`
                : `fullcalendar.${this.state.rxData.instance}.`,
            this.state.rxData.calendar
                ? `${this.state.rxData.calendar}.香`
                : `fullcalendar.${this.state.rxData.instance}.香`,
        );

        let serverTimeZone = 0;
        try {
            const state = await this.props.context.socket.getState(
                `fullcalendar.${this.state.rxData.instance}.info.timeZone`,
            );
            serverTimeZone = (state?.val as number) || 0;
        } catch {
            // ignore
        }
        let list = Object.values(objects) as unknown as CalendarEvent[];
        if (!this.state.rxData.calendar) {
            // filter out all events of sub calendars
            // fullcalendar.0.event-56c1746a-7f82-4ee1-8568-b81b323bac10
            list = list.filter(obj => obj._id.split('.').length <= 3);
        }

        this.setState({ events: list, serverTimeZone });
    };

    changeEvents = (events: CalendarEvent[]): void => {
        this.setState({ events });
    };

    setEvent = async (id: string, event: CalendarEvent): Promise<void> => {
        await this.props.context.socket.setObject(id, event);
    };

    deleteEvent = async (id: string): Promise<void> => {
        await this.props.context.socket.delObject(id);
    };

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        if (!this.widgetRef.current?.offsetWidth) {
            this.forceUpdate();
        }

        let content: React.JSX.Element;

        if (!this.state.rxData.instance && this.state.rxData.instance !== 0) {
            content = (
                <div
                    style={styles.content}
                    ref={this.widgetRef}
                >
                    {FullCalendar.t('Please select instance')}
                </div>
            );
        } else {
            content = (
                <div
                    style={styles.content}
                    ref={this.widgetRef}
                >
                    <Calendar
                        widget
                        systemConfig={this.props.context.systemConfig.common}
                        key={`${this.state.rxData.viewMode}_${this.state.rxData.dayStep || 30}`}
                        events={this.state.events || []}
                        socket={this.props.context.socket}
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
                        viewMode={this.state.rxData.viewMode}
                        storageName={`fc_${this.props.id}`}
                        hideWeekends={this.state.rxData.hideWeekends || false}
                        t={FullCalendar.t}
                        language={I18n.getLanguage()}
                        dayStep={this.state.rxData.dayStep || 30}
                        theme={this.props.context.theme}
                    />
                </div>
            );
        }

        if (this.state.rxStyle?.position === 'relative') {
            return this.wrapContent(content, null, { height: 'calc(100% - 24px)', width: 'calc(100% - 24px)' });
        }

        return content;
    }
}
