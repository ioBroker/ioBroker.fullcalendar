import { I18n } from '@iobroker/adapter-react-v5';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
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

    return <div>
        <div>
            <Button
                onClick={() => setCalendarPrefix(`fullcalendar.${props.instance}`)}
            >
                {I18n.t('Default')}
            </Button>
            {calendars.map(calendar =>
                <Button
                    key={calendar._id}
                    onClick={() => setCalendarPrefix(calendar._id)}
                >
                    {calendar.common.name}
                </Button>)}
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
            >
                {I18n.t('+ Manual')}
            </Button>
            <Button onClick={() => setIsSimulations(!isSimulations)}>
                {I18n.t('Simulations')}
            </Button>
        </div>
        <div>
            {calendarPrefix !== `fullcalendar.${props.instance}` &&
                <Button
                    onClick={async () => {
                        await props.socket.delObject(calendarPrefix);
                        setCalendarPrefix(`fullcalendar.${props.instance}`);
                        updateCalendars();
                    }}
                >
                    {I18n.t('Delete')}
                </Button>}
        </div>
        {isSimulations ? <Simulations
            systemConfig={props.systemConfig}
            socket={props.socket}
            instance={props.instance}
        /> :
            <CalendarContainer
                systemConfig={props.systemConfig}
                socket={props.socket}
                instance={props.instance}
                calendarPrefix={calendarPrefix}
                t={I18n.t}
                language={I18n.getLanguage()}
            />}
    </div>;
};

export default CalendarManager;
