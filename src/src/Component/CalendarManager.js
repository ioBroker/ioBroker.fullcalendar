import PropTypes from 'prop-types';
import { I18n } from '@iobroker/adapter-react-v5';
import React, { useEffect, useState } from 'react';
import {
    IconButton, Tab, Tabs, Paper, Tooltip, Toolbar, Fab,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Add, Edit } from '@mui/icons-material';
import { withStyles } from '@mui/styles';
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
});

const CalendarManager = props => {
    const [calendarPrefix, setCalendarPrefix] = useState(window.localStorage.getItem('fullcalendar.calendar') || `fullcalendar.${props.instance}`);
    const [calendarDialog, setCalendarDialog] = useState(null);
    const [calendars, setCalendars] = useState([]);
    const [isSimulations, setIsSimulations] = useState(window.localStorage.getItem('fullcalendar.tab') === '1' ? 1 : 0);

    const updateCalendars = async () => {
        const objects = await props.socket.getObjectViewSystem(
            'folder',
            `fullcalendar.${props.instance}.Calendars.`,
            `fullcalendar.${props.instance}.Calendars.\u9999`,
        );
        setCalendars(Object.values(objects));
    };

    useEffect(() => {
        updateCalendars()
            .catch(e => console.error(e));
    }, []);

    return <div className={props.classes.column}>
        <Tabs
            value={isSimulations ? 1 : 0}
            onChange={() => {
                window.localStorage.setItem('fullcalendar.tab', isSimulations ? '0' : '1');
                setIsSimulations(!isSimulations);
            }}
            className={props.classes.tabs}
        >
            <Tab label={I18n.t('Calendars')} />
            <Tab label={I18n.t('Simulations')} className={props.classes.simulations} />
        </Tabs>
        {isSimulations ? <Simulations
            systemConfig={props.systemConfig}
            socket={props.socket}
            instance={props.instance}
            updateCalendars={updateCalendars}
            setIsSimulations={setIsSimulations}
            setCalendarPrefix={setCalendarPrefix}
        /> :
            <div className={props.classes.container}>
                <div className={props.classes.calendars}>
                    <Paper className={props.classes.calendarsPaper}>
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
                        </Toolbar>
                        <Tabs
                            value={calendarPrefix}
                            onChange={(e, value) => {
                                window.localStorage.setItem('fullcalendar.calendar', value);
                                setCalendarPrefix(value);
                            }}
                            className={props.classes.tabs}
                            orientation="vertical"
                        >
                            <Tab
                                classes={{ root: props.classes.tabRoot }}
                                label={<div className={props.classes.label}>
                                    {I18n.t('Default')}
                                </div>}
                                value={`fullcalendar.${props.instance}`}
                            />
                            {calendars.map(calendar =>
                                <Tab
                                    component="div"
                                    key={calendar._id}
                                    classes={{ root: props.classes.tabRoot }}
                                    label={<div className={props.classes.label}>
                                        {calendar.common.name}
                                        <div className={props.classes.divider} />
                                        <Tooltip title={I18n.t('Edit name or delete calendar')}>
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
                    adapterConfig={props.adapterConfig}
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
    adapterConfig: PropTypes.object.isRequired,
};

export default withStyles(style)(CalendarManager);
