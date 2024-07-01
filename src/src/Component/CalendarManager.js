import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ReactSplit, { SplitDirection, GutterTheme } from '@devbookhq/splitter';

import {
    IconButton, Tab, Tabs,
    Paper, Tooltip, Toolbar, Fab, Box,
} from '@mui/material';

import {
    Add,
    Edit,
    ReportProblem as Alert,
    PlaylistPlay as SimulationIcon,
    CalendarMonth,
} from '@mui/icons-material';

import { I18n } from '@iobroker/adapter-react-v5';

import CalendarContainer from './CalendarContainer';
import Simulations from './Simulations';
import CalendarDialog from './CalendarDialog';

const styles = {
    tabs: {
    },
    column: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        height: '100%',
    },
    calendars: {
    },
    calendarsPaper: {
        minHeight: '100%',
    },
    container: {
        display: 'flex', width: '100%', flex: 1,
    },
    toolbar: theme => ({
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
    simulations: theme => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#131b2680' : '#b6d3ff80',
    }),
    tabRoot: {
        padding: '0 6px',
        maxWidth: '100%',
    },
    alert: theme => ({
        display: 'inline-block',
        '& svg': {
            color: theme.palette.error.main,
        },
    }),
    selected: theme => ({
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

const CalendarManager = props => {
    const [calendarPrefix, setCalendarPrefix] = useState(window.localStorage.getItem('fullcalendar.calendar') || `fullcalendar.${props.instance}`);
    const [calendarDialog, setCalendarDialog] = useState(null);
    const [calendars, setCalendars] = useState([]);
    const [isSimulations, setIsSimulations] = useState(window.localStorage.getItem('fullcalendar.tab') === '1' ? 1 : 0);
    const [alive, setAlive] = useState(false);
    const [splitSizes, setSplitSizes] = useState(window.localStorage.getItem('fullcalendar.splitSizes') ? JSON.parse(window.localStorage.getItem('fullcalendar.splitSizes')) : [15, 85]);

    const updateCalendars = async () => {
        const objects = await props.socket.getObjectViewSystem(
            'folder',
            `fullcalendar.${props.instance}.Calendars.`,
            `fullcalendar.${props.instance}.Calendars.\u9999`,
        );
        setCalendars(Object.values(objects));
        // check that selected calendar exists, else select default
        if (!Object.keys(objects).includes(calendarPrefix)) {
            window.localStorage.removeItem('fullcalendar.calendar');
            setCalendarPrefix(`fullcalendar.${props.instance}`);
        }
    };

    const changeCalendarType = () => setIsSimulations(_isSimulations => {
        window.localStorage.setItem('fullcalendar.tab', _isSimulations ? '0' : '1');
        return !_isSimulations;
    });

    useEffect(() => {
        updateCalendars()
            .catch(e => console.error(e));

        const onAliveChanged = (id, state) => {
            const val = (state && state.val) || false;
            setAlive(val);
        };

        props.socket.subscribeState(`system.adapter.fullcalendar.${props.instance}.alive`, onAliveChanged);

        props.socket.getState(`system.adapter.fullcalendar.${props.instance}.alive`)
            .then(state => setAlive((state && state.val) || false));

        return () => {
            props.socket.unsubscribeState(`system.adapter.fullcalendar.${props.instance}.alive`, onAliveChanged);
        };
    }, []);

    return <div style={styles.column}>
        {isSimulations ? <Simulations
            systemConfig={props.systemConfig}
            socket={props.socket}
            instance={props.instance}
            updateCalendars={updateCalendars}
            changeCalendarType={changeCalendarType}
            setCalendarPrefix={setCalendarPrefix}
            alive={alive}
        /> :
            <div style={styles.container}>
                <ReactSplit
                    direction={SplitDirection.Horizontal}
                    initialSizes={splitSizes}
                    minWidths={[195, 500]}
                    onResizeFinished={(gutterIdx, newSplitSizes) => {
                        setSplitSizes(newSplitSizes);
                        window.localStorage.setItem('fullcalendar.splitSizes', JSON.stringify(newSplitSizes));
                    }}
                    theme={props.themeType === 'dark' ? GutterTheme.Dark : GutterTheme.Light}
                    gutterClassName={props.themeType === 'dark' ? 'Dark visGutter' : 'Light visGutter'}
                >
                    <div style={styles.calendars}>
                        <Paper style={styles.calendarsPaper}>
                            <Tabs
                                value={0}
                                onChange={changeCalendarType}
                                style={styles.tabs}
                            >
                                <Tab title={I18n.t('Calendars')} icon={<CalendarMonth />} />
                                <Tab title={I18n.t('Simulations')} icon={<SimulationIcon />} sx={styles.simulations} />
                            </Tabs>
                            <Toolbar variant="dense" sx={styles.toolbar}>
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
                                        });
                                        await updateCalendars();
                                        setCalendarPrefix(id);
                                        window.localStorage.setItem('fullcalendar.calendar', id);
                                        setTimeout(() => setCalendarDialog(id), 300);
                                    }}
                                    variant="contained"
                                >
                                    <Add />
                                </Fab>
                                <div style={styles.divider} />
                                {!alive && <Tooltip
                                    title={I18n.t('Instance inactive')}
                                    componentsProps={{ popper: { sx: styles.tooltip } }}
                                >
                                    <Box component="div" sx={styles.alert}>
                                        <Alert />
                                    </Box>
                                </Tooltip>}
                            </Toolbar>
                            <Tabs
                                value={calendars.find(c => c._id === calendarPrefix) ? calendarPrefix : `fullcalendar.${props.instance}`}
                                onChange={(e, value) => {
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
                                    label={<Box component="div" sx={styles.label}>
                                        {I18n.t('Default')}
                                    </Box>}
                                    value={`fullcalendar.${props.instance}`}
                                />
                                {calendars.map(calendar => <Tab
                                    component="div"
                                    key={calendar._id}
                                    sx={{
                                        ...styles.tabRoot,
                                        '& .MuiTab-selected': styles.selected,
                                    }}
                                    label={<Box component="div" sx={styles.label}>
                                        {calendar.common.name}
                                        <div style={styles.divider} />
                                        <Tooltip title={I18n.t('Edit name or delete calendar')} componentsProps={{ popper: { sx: styles.tooltip } }}>
                                            <IconButton
                                                size="small"
                                                className="edit"
                                                onClick={async e => {
                                                    setCalendarDialog(calendar._id);
                                                    e.stopPropagation();
                                                }}
                                            >
                                                <Edit />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>}
                                    value={calendar._id}
                                />)}
                            </Tabs>
                        </Paper>
                    </div>
                    <CalendarContainer
                        key={calendarPrefix}
                        systemConfig={props.systemConfig}
                        socket={props.socket}
                        instance={props.instance}
                        calendarPrefix={calendarPrefix}
                        t={I18n.t}
                        language={I18n.getLanguage()}
                    />
                </ReactSplit>
            </div>}
        {calendarDialog ? <CalendarDialog
            onClose={() => setCalendarDialog(null)}
            calendarPrefix={calendarPrefix}
            setCalendarPrefix={setCalendarPrefix}
            calendar={calendars.find(calendar => calendar._id === calendarDialog)}
            socket={props.socket}
            instance={props.instance}
            updateCalendars={updateCalendars}
        /> : null}
    </div>;
};

CalendarManager.propTypes = {
    socket: PropTypes.object.isRequired,
    instance: PropTypes.any.isRequired,
    systemConfig: PropTypes.object.isRequired,
    themeType: PropTypes.string,
};

export default CalendarManager;
