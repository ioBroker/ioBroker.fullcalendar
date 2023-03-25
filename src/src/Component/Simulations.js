import { useEffect, useState } from 'react';
import SunCalc from 'suncalc2';
import { I18n } from '@iobroker/adapter-react-v5';
import { Button, IconButton, MenuItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import {
    Delete, Edit, FiberManualRecord, PlayCircle, Stop,
} from '@mui/icons-material';
import CalendarContainer from './CalendarContainer';
import SimulationDialog from './SimulationDialog';

const Simulations = props => {
    const [simulations, setSimulations] = useState([]);
    const [selectedSimulation, setSelectedSimulation] = useState(null);
    const [coords, setCoords] = useState({ lat: 0, lng: 0 });
    const [dialogSimulation, setDialogSimulation] = useState(null);
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
    return <div style={{ display: 'flex', width: '100%', flex: 1 }}>
        <div>
            <SimulationDialog
                socket={props.socket}
                instance={props.instance}
                simulation={simulations.find(s => s._id === dialogSimulation)}
                refreshSimulations={refreshSimulations}
                open={!!dialogSimulation}
                onClose={() => setDialogSimulation(null)}
            />
            {simulations.map(simulation =>
                <div style={{ display: 'flex' }}>
                    <MenuItem
                        key={simulation._id}
                        onClick={() => setSelectedSimulation(simulation._id)}
                        selected={selectedSimulation === simulation._id}
                    >
                        {simulation.common.name}
                    </MenuItem>
                    <IconButton onClick={() => setDialogSimulation(simulation._id)}>
                        <Edit />
                    </IconButton>
                    <IconButton onClick={async () => {
                        props.socket.sendTo(`fullcalendar.${props.instance}`, 'recordSimulation', {
                            id: simulation._id,
                            states: ['javascript.0.power'],
                        });
                    }}
                    >
                        <FiberManualRecord />
                    </IconButton>
                    <IconButton onClick={async () => {
                        props.socket.sendTo(`fullcalendar.${props.instance}`, 'stopRecordSimulation', {
                            id: simulation._id,
                        });
                        refreshSimulations();
                    }}
                    >
                        <Stop />
                    </IconButton>
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
                    await props.socket.setState(id, 'stop');
                    // props.socket.sendTo(`fullcalendar.${props.instance}`, 'recordSimulation', id);
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
            simulation={simulations.find(s => s._id === selectedSimulation)}
            t={I18n.t}
            language={I18n.getLanguage()}
        />}
    </div>;
};

export default Simulations;
