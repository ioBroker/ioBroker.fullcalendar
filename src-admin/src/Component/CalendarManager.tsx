import { useEffect, useState, type CSSProperties, type JSX } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactSplit, { SplitDirection, GutterTheme } from '@devbookhq/splitter';

import { IconButton, Tooltip } from '@mui/material';

import { Edit } from '@mui/icons-material';

import { I18n, type AdminConnection, type IobTheme, type ThemeType } from '@iobroker/gui-components';

import CalendarContainer from './CalendarContainer';
import Simulations from './Simulations';
import CalendarDialog, { type CalendarObject } from './CalendarDialog';
import { SidePanel, SidePanelItem } from './SidePanel';

const styles: Record<string, CSSProperties> = {
    column: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        height: '100%',
    },
    calendars: {
        height: '100%',
    },
    container: {
        display: 'flex',
        width: '100%',
        flex: 1,
    },
    tooltip: {
        pointerEvents: 'none',
    },
};

interface CalendarManagerProps {
    socket: AdminConnection;
    instance: number;
    systemConfig: ioBroker.SystemConfigCommon | undefined;
    themeType?: ThemeType;
    theme: IobTheme;
    alive?: boolean;
}

const CalendarManager = (props: CalendarManagerProps): JSX.Element => {
    const [calendarPrefix, setCalendarPrefix] = useState<string>(
        window.localStorage.getItem('fullcalendar.calendar') || `fullcalendar.${props.instance}`,
    );
    const [calendarDialog, setCalendarDialog] = useState<string | null>(null);
    const [calendars, setCalendars] = useState<CalendarObject[]>([]);
    const [isSimulations, setIsSimulations] = useState(window.localStorage.getItem('fullcalendar.tab') === '1');
    const [alive, setAlive] = useState(false);
    const [splitSizes, setSplitSizes] = useState<number[]>(
        window.localStorage.getItem('fullcalendar.splitSizes')
            ? JSON.parse(window.localStorage.getItem('fullcalendar.splitSizes')!)
            : [15, 85],
    );

    const updateCalendars = async (): Promise<void> => {
        const objects = await props.socket.getObjectViewSystem(
            'folder',
            `fullcalendar.${props.instance}.Calendars.`,
            `fullcalendar.${props.instance}.Calendars.\u9999`,
        );
        setCalendars(Object.values(objects) as unknown as CalendarObject[]);
        // check that selected calendar exists, else select default
        if (!Object.keys(objects).includes(calendarPrefix)) {
            window.localStorage.removeItem('fullcalendar.calendar');
            setCalendarPrefix(`fullcalendar.${props.instance}`);
        }
    };

    const changeCalendarType = (): void =>
        setIsSimulations(_isSimulations => {
            window.localStorage.setItem('fullcalendar.tab', _isSimulations ? '0' : '1');
            return !_isSimulations;
        });

    useEffect(() => {
        const onAliveChanged = (_id: string, state: ioBroker.State | null | undefined): void => {
            const val = (state && state.val) || false;
            setAlive(!!val);
        };
        const init = (): void => {
            updateCalendars().catch(e => console.error(e));

            props.socket
                .subscribeState(`system.adapter.fullcalendar.${props.instance}.alive`, onAliveChanged)
                .catch(e => console.error(e));

            props.socket
                .getState(`system.adapter.fullcalendar.${props.instance}.alive`)
                .then(state => setAlive(!!((state && state.val) || false)))
                .catch(e => console.error(e));
        };
        init();
        return () => {
            props.socket.unsubscribeState(`system.adapter.fullcalendar.${props.instance}.alive`, onAliveChanged);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={styles.column}>
            {isSimulations ? (
                <Simulations
                    systemConfig={props.systemConfig}
                    socket={props.socket}
                    theme={props.theme}
                    instance={props.instance}
                    updateCalendars={updateCalendars}
                    changeCalendarType={changeCalendarType}
                    setCalendarPrefix={setCalendarPrefix}
                    alive={alive}
                />
            ) : (
                <div style={styles.container}>
                    <ReactSplit
                        direction={SplitDirection.Horizontal}
                        initialSizes={splitSizes}
                        minWidths={[195, 500]}
                        onResizeFinished={(_gutterIdx, newSplitSizes) => {
                            setSplitSizes(newSplitSizes);
                            window.localStorage.setItem('fullcalendar.splitSizes', JSON.stringify(newSplitSizes));
                        }}
                        gutterTheme={props.themeType === 'dark' ? GutterTheme.Dark : GutterTheme.Light}
                        gutterClassName={props.themeType === 'dark' ? 'Dark visGutter' : 'Light visGutter'}
                    >
                        <div style={styles.calendars}>
                            <SidePanel
                                isSimulations={false}
                                onChangeMode={changeCalendarType}
                                title={I18n.t('Calendars')}
                                addTitle={I18n.t('Add new calendar')}
                                alive={alive}
                                onAdd={async () => {
                                    const id = `fullcalendar.${props.instance}.Calendars.Calendar-${uuidv4()}`;
                                    await props.socket.setObject(id, {
                                        type: 'folder',
                                        common: {
                                            name: 'NewCalendar',
                                        },
                                        native: {},
                                    } as unknown as ioBroker.Object);
                                    await updateCalendars();
                                    setCalendarPrefix(id);
                                    window.localStorage.setItem('fullcalendar.calendar', id);
                                    setTimeout(() => setCalendarDialog(id), 300);
                                }}
                            >
                                <SidePanelItem
                                    name={I18n.t('Default')}
                                    selected={!calendars.find(c => c._id === calendarPrefix)}
                                    onClick={() => {
                                        const id = `fullcalendar.${props.instance}`;
                                        window.localStorage.setItem('fullcalendar.calendar', id);
                                        setCalendarPrefix(id);
                                    }}
                                />
                                {calendars.map(calendar => (
                                    <SidePanelItem
                                        key={calendar._id}
                                        name={calendar.common.name}
                                        color={calendar.common.color}
                                        icon={calendar.common.icon}
                                        selected={calendar._id === calendarPrefix}
                                        onClick={() => {
                                            window.localStorage.setItem('fullcalendar.calendar', calendar._id);
                                            setCalendarPrefix(calendar._id);
                                        }}
                                        actions={
                                            <Tooltip
                                                title={I18n.t('Edit name or delete calendar')}
                                                slotProps={{ popper: { sx: styles.tooltip } }}
                                            >
                                                <IconButton
                                                    size="small"
                                                    onClick={e => {
                                                        setCalendarDialog(calendar._id);
                                                        e.stopPropagation();
                                                    }}
                                                >
                                                    <Edit />
                                                </IconButton>
                                            </Tooltip>
                                        }
                                    />
                                ))}
                            </SidePanel>
                        </div>
                        <CalendarContainer
                            key={calendarPrefix}
                            systemConfig={props.systemConfig!}
                            socket={props.socket}
                            theme={props.theme}
                            calendarPrefix={calendarPrefix}
                        />
                    </ReactSplit>
                </div>
            )}
            {calendarDialog ? (
                <CalendarDialog
                    onClose={() => setCalendarDialog(null)}
                    calendarPrefix={calendarPrefix}
                    setCalendarPrefix={setCalendarPrefix}
                    calendar={calendars.find(calendar => calendar._id === calendarDialog)}
                    socket={props.socket}
                    instance={props.instance}
                    updateCalendars={updateCalendars}
                />
            ) : null}
        </div>
    );
};

export default CalendarManager;
