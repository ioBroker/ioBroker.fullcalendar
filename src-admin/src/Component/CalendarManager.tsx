import { useEffect, useState } from 'react';
import type { CSSProperties, JSX } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactSplit, { SplitDirection, GutterTheme } from '@devbookhq/splitter';

import { IconButton, Tab, Tabs, Paper, Tooltip, Toolbar, Fab, Box } from '@mui/material';

import { Add, Edit, ReportProblem as Alert, PlaylistPlay as SimulationIcon, CalendarMonth } from '@mui/icons-material';

import { I18n } from '@iobroker/gui-components';
import type { AdminConnection, IobTheme, ThemeType } from '@iobroker/gui-components';

import CalendarContainer from './CalendarContainer';
import Simulations from './Simulations';
import CalendarDialog from './CalendarDialog';
import type { CalendarObject } from './CalendarDialog';

// mixes plain inline styles with MUI `sx` entries (incl. theme callbacks), hence `any`
const styles: Record<string, any> = {
    tabs: {},
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
    calendarsPaper: {
        minHeight: '100%',
    },
    container: {
        display: 'flex',
        width: '100%',
        flex: 1,
    },
    toolbar: (theme: IobTheme) => ({
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        padding: '2px 5px',
    }),
    label: {
        width: '100%',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        '& .edit': {
            opacity: 0,
        },
        '&:hover .edit': {
            opacity: 1,
        },
    },
    divider: {
        flexGrow: 1,
    },
    simulations: (theme: IobTheme) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#131b2680' : '#b6d3ff80',
    }),
    tabRoot: {
        padding: '0 6px',
        maxWidth: '100%',
    },
    alert: (theme: IobTheme) => ({
        display: 'inline-block',
        '& svg': {
            color: theme.palette.error.main,
        },
    }),
    selected: (theme: IobTheme) => ({
        backgroundColor: theme.palette.primary.main,
        color: 'white !important',
    }),
    tooltip: {
        pointerEvents: 'none',
    },
    eventsCount: {
        position: 'absolute',
        right: 5,
        top: 2,
        fontSize: 10,
        opacity: 0.7,
        fontStyle: 'italic',
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
        updateCalendars().catch(e => console.error(e));

        const onAliveChanged = (_id: string, state: ioBroker.State | null | undefined): void => {
            const val = (state && state.val) || false;
            setAlive(!!val);
        };

        void props.socket.subscribeState(`system.adapter.fullcalendar.${props.instance}.alive`, onAliveChanged);

        void props.socket
            .getState(`system.adapter.fullcalendar.${props.instance}.alive`)
            .then(state => setAlive(!!((state && state.val) || false)));

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
                            <Paper style={styles.calendarsPaper}>
                                <Tabs
                                    value={0}
                                    onChange={changeCalendarType}
                                    style={styles.tabs}
                                >
                                    <Tab
                                        title={I18n.t('Calendars')}
                                        icon={<CalendarMonth />}
                                    />
                                    <Tab
                                        title={I18n.t('Simulations')}
                                        icon={<SimulationIcon />}
                                        sx={styles.simulations}
                                    />
                                </Tabs>
                                <Toolbar
                                    variant="dense"
                                    sx={styles.toolbar}
                                >
                                    <Fab
                                        size="small"
                                        title={I18n.t('Add new calendar')}
                                        color="primary"
                                        onClick={async () => {
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
                                        <Add />
                                    </Fab>
                                    <div style={styles.divider} />
                                    {!alive && (
                                        <Tooltip
                                            title={I18n.t('Instance inactive')}
                                            slotProps={{ popper: { sx: styles.tooltip } }}
                                        >
                                            <Box
                                                component="div"
                                                sx={styles.alert}
                                            >
                                                <Alert />
                                            </Box>
                                        </Tooltip>
                                    )}
                                </Toolbar>
                                <Tabs
                                    value={
                                        calendars.find(c => c._id === calendarPrefix)
                                            ? calendarPrefix
                                            : `fullcalendar.${props.instance}`
                                    }
                                    onChange={(_e, value: string) => {
                                        window.localStorage.setItem('fullcalendar.calendar', value);
                                        setCalendarPrefix(value);
                                    }}
                                    style={styles.tabs}
                                    orientation="vertical"
                                >
                                    <Tab
                                        sx={{
                                            ...styles.tabRoot,
                                            '& .MuiTab-selected': styles.selected,
                                        }}
                                        label={
                                            <Box
                                                component="div"
                                                sx={styles.label}
                                            >
                                                {I18n.t('Default')}
                                            </Box>
                                        }
                                        value={`fullcalendar.${props.instance}`}
                                    />
                                    {calendars.map(calendar => (
                                        <Tab
                                            component="div"
                                            key={calendar._id}
                                            sx={{
                                                ...styles.tabRoot,
                                                '& .MuiTab-selected': styles.selected,
                                            }}
                                            label={
                                                <Box
                                                    component="div"
                                                    sx={styles.label}
                                                >
                                                    {calendar.common.name}
                                                    <div style={styles.divider} />
                                                    <Tooltip
                                                        title={I18n.t('Edit name or delete calendar')}
                                                        slotProps={{ popper: { sx: styles.tooltip } }}
                                                    >
                                                        <IconButton
                                                            size="small"
                                                            className="edit"
                                                            onClick={e => {
                                                                setCalendarDialog(calendar._id);
                                                                e.stopPropagation();
                                                            }}
                                                        >
                                                            <Edit />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Box>
                                            }
                                            value={calendar._id}
                                        />
                                    ))}
                                </Tabs>
                            </Paper>
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
