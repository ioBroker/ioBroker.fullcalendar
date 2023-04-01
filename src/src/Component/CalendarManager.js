import PropTypes from 'prop-types';
import { I18n } from '@iobroker/adapter-react-v5';
import { useEffect, useState } from 'react';
import {
    IconButton, Tab, Tabs,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Add, Edit } from '@mui/icons-material';
import { withStyles } from '@mui/styles';
import CalendarContainer from './CalendarContainer';
import Simulations from './Simulations';
import CalendarDialog from './CalendarDialog';

const style = {
    tabs: {
        paddingBottom: 20,
    },
    column: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        height: '100%',
    },
    calendars: {
        display: 'flex',
    },
};

const CalendarManager = props => {
    const [calendarPrefix, setCalendarPrefix] = useState(`fullcalendar.${props.instance}`);
    const [calendarDialog, setCalendarDialog] = useState(null);
    const [calendars, setCalendars] = useState([]);
    const [isSimulations, setIsSimulations] = useState(false);

    const updateCalendars = async () => {
        const objects = await props.socket.getObjectViewCustom(
            'system',
            'folder',
            `fullcalendar.${props.instance}.Calendars.`,
            `fullcalendar.${props.instance}.Calendars.\u9999`,
        );
        setCalendars(Object.values(objects));
    };

    useEffect(() => {
        updateCalendars();
    }, []);

    return <div className={props.classes.column}>
        <Tabs value={isSimulations ? 1 : 0} onChange={() => setIsSimulations(!isSimulations)} className={props.classes.tabs}>
            <Tab label={I18n.t('Calendars')} />
            <Tab label={I18n.t('Simulations')} />
        </Tabs>
        {isSimulations ? <Simulations
            systemConfig={props.systemConfig}
            socket={props.socket}
            instance={props.instance}
        /> :
            <>
                <div className={props.classes.calendars}>
                    <Tabs value={calendarPrefix} onChange={(e, value) => setCalendarPrefix(value)} className={props.classes.tabs}>
                        <Tab label={I18n.t('Default')} value={`fullcalendar.${props.instance}`} />
                        {calendars.map(calendar =>
                            <Tab
                                component="div"
                                key={calendar._id}
                                label={<div>
                                    {calendar.common.name}
                                    <IconButton
                                        size="small"
                                        onClick={async e => {
                                            setCalendarDialog(calendar._id);
                                            e.stopPropagation();
                                        }}
                                    >
                                        <Edit />
                                    </IconButton>
                                </div>}
                                value={calendar._id}
                            />)}
                    </Tabs>
                    <IconButton
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
                        }}
                        variant="contained"
                    >
                        <Add />
                    </IconButton>
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
            </>}
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
