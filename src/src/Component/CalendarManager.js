import { I18n } from '@iobroker/adapter-react-v5';
import { useEffect, useState } from 'react';
import { Button, IconButton, MenuItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Delete } from '@mui/icons-material';
import CalendarContainer from './CalendarContainer';
import Simulations from './Simulations';

const CalendarManager = props => {
    const [calendarPrefix, setCalendarPrefix] = useState(`fullcalendar.${props.instance}`);
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

    return <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        height: '100%',
    }}
    >
        <Button
            onClick={() => setIsSimulations(!isSimulations)}
            variant="contained"
        >
            {I18n.t('Simulations')}
        </Button>
        {isSimulations ? <Simulations
            systemConfig={props.systemConfig}
            socket={props.socket}
            instance={props.instance}
        /> :
            <>
                <div style={{ display: 'flex' }}>
                    <MenuItem
                        onClick={() => setCalendarPrefix(`fullcalendar.${props.instance}`)}
                        selected={calendarPrefix === `fullcalendar.${props.instance}`}
                    >
                        {I18n.t('Default')}
                    </MenuItem>
                    {calendars.map(calendar =>
                        <div style={{ display: 'flex' }}>
                            <MenuItem
                                key={calendar._id}
                                onClick={() => setCalendarPrefix(calendar._id)}
                                selected={calendarPrefix === calendar._id}
                            >
                                {calendar.common.name}
                            </MenuItem>
                            <IconButton onClick={async () => {
                                await props.socket.delObject(calendar._id);
                                updateCalendars();
                            }}
                            >
                                <Delete />
                            </IconButton>
                        </div>)}
                    <Button
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
                        {I18n.t('+ Manual')}
                    </Button>
                </div>
                <CalendarContainer
                    systemConfig={props.systemConfig}
                    socket={props.socket}
                    instance={props.instance}
                    calendarPrefix={calendarPrefix}
                    t={I18n.t}
                    language={I18n.getLanguage()}
                />
            </>}
    </div>;
};

export default CalendarManager;
