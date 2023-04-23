import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { v4 as uuidv4 } from 'uuid';

import {
    IconButton, Tab, Tabs, Paper, Tooltip, Toolbar, Fab,
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

const style = theme => ({
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
    toolbar: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        padding: '2px 5px',
    },
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
    simulations: {
        backgroundColor: theme.palette.mode === 'dark' ? '#131b2680' : '#b6d3ff80',
    },
    tabRoot: {
        padding: '0 6px',
    },
    alert: {
        color: theme.palette.error.main,
    },
    selected: {
        backgroundColor: theme.palette.primary.main,
        color: 'white !important',
    },
    tooltip: {
        pointerEvents: 'none',
    },
});

const CalendarManager = props => {
    const [calendarPrefix, setCalendarPrefix] = useState(window.localStorage.getItem('fullcalendar.calendar') || `fullcalendar.${props.instance}`);
    const [calendarDialog, setCalendarDialog] = useState(null);
    const [calendars, setCalendars] = useState([]);
    const [isSimulations, setIsSimulations] = useState(window.localStorage.getItem('fullcalendar.tab') === '1' ? 1 : 0);
    const [alive, setAlive] = useState(false);

    const updateCalendars = async () => {
        const objects = await props.socket.getObjectViewSystem(
            'folder',
            `fullcalendar.${props.instance}.Calendars.`,
            `fullcalendar.${props.instance}.Calendars.\u9999`,
        );
        setCalendars(Object.values(objects));
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

    return <div className={props.classes.column}>
        {isSimulations ? <Simulations
            systemConfig={props.systemConfig}
            socket={props.socket}
            instance={props.instance}
            updateCalendars={updateCalendars}
            changeCalendarType={changeCalendarType}
            setCalendarPrefix={setCalendarPrefix}
            alive={alive}
        /> :
            <div className={props.classes.container}>
                <div className={props.classes.calendars}>
                    <Paper className={props.classes.calendarsPaper}>
                        <Tabs
                            value={0}
                            onChange={changeCalendarType}
                            className={props.classes.tabs}
                        >
                            <Tab title={I18n.t('Calendars')} icon={<CalendarMonth />} />
                            <Tab title={I18n.t('Simulations')} icon={<SimulationIcon />} className={props.classes.simulations} />
                        </Tabs>
                        <Toolbar variant="dense" className={props.classes.toolbar}>
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
                            <div className={props.classes.divider} />
                            {!alive && <Tooltip title={I18n.t('Instance inactive')} classes={{ popper: props.classes.tooltip }}><Alert className={props.classes.alert} /></Tooltip>}
                        </Toolbar>
                        <Tabs
                            value={calendars.find(c => c._id === calendarPrefix) ? calendarPrefix : `fullcalendar.${props.instance}`}
                            onChange={(e, value) => {
                                window.localStorage.setItem('fullcalendar.calendar', value);
                                setCalendarPrefix(value);
                            }}
                            className={props.classes.tabs}
                            orientation="vertical"
                        >
                            <Tab
                                classes={{ root: props.classes.tabRoot, selected: props.classes.selected }}
                                label={<div className={props.classes.label}>
                                    {I18n.t('Default')}
                                </div>}
                                value={`fullcalendar.${props.instance}`}
                            />
                            {calendars.map(calendar =>
                                <Tab
                                    component="div"
                                    key={calendar._id}
                                    classes={{ root: props.classes.tabRoot, selected: props.classes.selected }}
                                    label={<div className={props.classes.label}>
                                        {calendar.common.name}
                                        <div className={props.classes.divider} />
                                        <Tooltip title={I18n.t('Edit name or delete calendar')} classes={{ popper: props.classes.tooltip }}>
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
                                    </div>}
                                    value={calendar._id}
                                />)}
                        </Tabs>
                    </Paper>
                </div>
                <CalendarContainer
                    systemConfig={props.systemConfig}
                    socket={props.socket}
                    instance={props.instance}
                    calendarPrefix={calendarPrefix}
                    t={I18n.t}
                    language={I18n.getLanguage()}
                />
            </div>}
        <CalendarDialog
            open={!!calendarDialog}
            onClose={() => setCalendarDialog(null)}
            calendarPrefix={calendarPrefix}
            setCalendarPrefix={setCalendarPrefix}
            calendar={calendars.find(calendar => calendar._id === calendarDialog)}
            socket={props.socket}
            instance={props.instance}
            updateCalendars={updateCalendars}
        />
    </div>;
};

CalendarManager.propTypes = {
    socket: PropTypes.object.isRequired,
    instance: PropTypes.any.isRequired,
    systemConfig: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(CalendarManager);
