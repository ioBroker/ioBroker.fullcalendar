import { useEffect, useState } from 'react';
import SunCalc from 'suncalc2';
import { I18n } from '@iobroker/adapter-react-v5';
import { Button, IconButton, MenuItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Delete } from '@mui/icons-material';
import CalendarContainer from './CalendarContainer';

const Simulations = props => {
    const [simulations, setSimulations] = useState([]);
    const [selectedSimulation, setSelectedSimulation] = useState(null);
    const [coords, setCoords] = useState({ lat: 0, lng: 0 });
    const refreshSimulations = async () => {
        const objects = await props.socket.getObjectViewCustom(
            'system',
            'state',
            `fullcalendar.${props.instance}.Simulations.`,
            `fullcalendar.${props.instance}.Simulations.\u9999`,
        );
        setSimulations(Object.values(objects));
        const config = await props.socket.getObject('system.config');
        setCoords({ lat: config.common.latitude, lng: config.common.longitude });
    };
    useEffect(() => {
        refreshSimulations();
    }, []);
    console.log(coords);
    console.log(SunCalc.getTimes(new Date(), coords.lat, coords.lng));
    return <div style={{ display: 'flex', width: '100%', flex: 1 }}>
        <div>
            {simulations.map(simulation =>
                <div style={{ display: 'flex' }}>
                    <MenuItem
                        key={simulation._id}
                        onClick={() => setSelectedSimulation(simulation._id)}
                        selected={selectedSimulation === simulation._id}
                    >
                        {simulation.common.name}
                    </MenuItem>
                    <IconButton onClick={async () => {
                        await props.socket.delObject(simulation._id);
                        refreshSimulations();
                    }}
                    >
                        <Delete />
                    </IconButton>
                </div>)}
            <Button
                onClick={async () => {
                    const id = `fullcalendar.${props.instance}.Simulations.${uuidv4()}`;
                    await props.socket.setObject(id, {
                        common: {
                            name: 'New simulation',
                            role: 'state',
                            type: 'string',
                        },
                        native: {
                            events: [
                            ],
                        },
                        type: 'state',
                    });
                    refreshSimulations();
                }}
                variant="contained"
            >
                {I18n.t('Add simulation')}
            </Button>
        </div>
        {selectedSimulation && <CalendarContainer
            systemConfig={props.systemConfig}
            socket={props.socket}
            instance={props.instance}
            isSimulation
            simulationId={selectedSimulation}
            t={I18n.t}
            language={I18n.getLanguage()}
        />}
    </div>;
};

export default Simulations;
