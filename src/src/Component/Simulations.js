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
import RecordSimulationDialog from './RecordSimulationDialog';
import PlaySimulationDialog from './PlaySimulationDialog';

const Simulations = props => {
    const [simulations, setSimulations] = useState([]);
    const [simulationStates, setSimulationStates] = useState({});
    const [selectedSimulation, setSelectedSimulation] = useState(null);
    const [coords, setCoords] = useState({ lat: 0, lng: 0 });
    const [dialogSimulation, setDialogSimulation] = useState(null);
    const [dialogSimulationRecord, setDialogSimulationRecord] = useState(null);
    const [dialogSimulationPlay, setDialogSimulationPlay] = useState(null);
    const updateState = async (id, state) => {
        setSimulationStates(_simulationStates => ({ ..._simulationStates, ...{ [id]: state.val } }));
    };
    const refreshSimulations = async () => {
        const objects = await props.socket.getObjectViewCustom(
            'system',
            'state',
            `fullcalendar.${props.instance}.Simulations.`,
            `fullcalendar.${props.instance}.Simulations.\u9999`,
        );
        for (const k in simulations) {
            props.socket.unsubscribeState(simulations[k]._id, updateState);
        }
        const _simulationStates = {};
        for (const id in objects) {
            _simulationStates[id] = (await props.socket.getState(id)).val;
            props.socket.subscribeState(id, updateState);
        }
        setSimulations(Object.values(objects));
        setSimulationStates(_simulationStates);
        const config = await props.socket.getObject('system.config');
        setCoords({ lat: config.common.latitude, lng: config.common.longitude });
    };
    useEffect(() => {
        refreshSimulations();
    }, []);
    const recordSimulation = (id, states) => {
        props.socket.sendTo(`fullcalendar.${props.instance}`, 'recordSimulation', {
            id,
            states,
        });
        props.socket.subscribeObject(id, refreshSimulations);
    };
    const playSimulation = (id, options) => {
        props.socket.sendTo(`fullcalendar.${props.instance}`, 'playSimulation', {
            id,
            options,
        });
    }
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
            <RecordSimulationDialog
                socket={props.socket}
                instance={props.instance}
                recordSimulation={recordSimulation}
                simulation={simulations.find(s => s._id === dialogSimulationRecord)}
                open={!!dialogSimulationRecord}
                onClose={() => setDialogSimulationRecord(null)}
            />
            <PlaySimulationDialog
                socket={props.socket}
                instance={props.instance}
                playSimulation={playSimulation}
                simulation={simulations.find(s => s._id === dialogSimulationPlay)}
                open={!!dialogSimulationPlay}
                onClose={() => setDialogSimulationPlay(null)}
            />
            {simulations.map(simulation =>
                <div
                    style={{ display: 'flex' }}
                    key={simulation._id}
                >
                    <MenuItem
                        onClick={() => setSelectedSimulation(simulation._id)}
                        selected={selectedSimulation === simulation._id}
                    >
                        {simulation.common.name}
                    </MenuItem>
                    <IconButton onClick={() => setDialogSimulation(simulation._id)}>
                        <Edit />
                    </IconButton>
                    {simulationStates[simulation._id] === 'stop' && <IconButton onClick={async () => {
                        setDialogSimulationRecord(simulation._id);
                        // props.socket.sendTo(`fullcalendar.${props.instance}`, 'recordSimulation', {
                        //     id: simulation._id,
                        //     states: ['javascript.0.power'],
                        // });
                    }}
                    >
                        <FiberManualRecord />
                    </IconButton>}
                    {simulationStates[simulation._id] === 'stop' && <IconButton onClick={async () => {
                        setDialogSimulationPlay(simulation._id);
                        // props.socket.sendTo(`fullcalendar.${props.instance}`, 'playSimulation', {
                        //     id: simulation._id,
                        // });
                    }}
                    >
                        <PlayCircle />
                    </IconButton>}
                    {simulationStates[simulation._id] !== 'stop' && <IconButton onClick={async () => {
                        props.socket.sendTo(
                            `fullcalendar.${props.instance}`,
                            simulationStates[simulation._id] === 'record' ? 'stopRecordSimulation' : 'stopPlaySimulation',
                            {
                                id: simulation._id,
                            },
                        );
                        if (simulationStates[simulation._id] === 'record') {
                            props.socket.unsubscribeObject(simulation._id, refreshSimulations);
                        }
                        refreshSimulations();
                    }}
                    >
                        <Stop />
                    </IconButton>}
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
        {selectedSimulation && <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            }}
        >
            <div>
                <Button
                    variant="contained"
                    onClick={async () => {
                        const id = `fullcalendar.${props.instance}.Calendars.Calendar-${uuidv4()}`;
                        await props.socket.setObject(id, {
                            type: 'folder',
                            common: {
                                name: 'NewCalendar',
                            },
                            native: {},
                        });
                        simulations.find(s => s._id === selectedSimulation).native.events.forEach(event => {
                            const _event = JSON.parse(JSON.stringify(event));
                            _event.id = `${id}.event-${uuidv4()}`;
                            props.socket.setObject(_event.id, event);
                        });
                    }}
                >
                    {I18n.t('To calendar')}
                </Button>
            </div>
            <CalendarContainer
                systemConfig={props.systemConfig}
                socket={props.socket}
                instance={props.instance}
                isSimulation
                simulationId={selectedSimulation}
                simulation={simulations.find(s => s._id === selectedSimulation)}
                simulations={simulations}
                t={I18n.t}
                language={I18n.getLanguage()}
            />
        </div>}
    </div>;
};

export default Simulations;
