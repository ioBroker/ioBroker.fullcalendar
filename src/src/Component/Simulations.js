import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { I18n } from '@iobroker/adapter-react-v5';
import {
    Button, IconButton, Tab, Tabs,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import {
    Edit, FiberManualRecord, PlayCircle, Stop,
} from '@mui/icons-material';
import { withStyles } from '@mui/styles';
import CalendarContainer from './CalendarContainer';
import SimulationDialog from './SimulationDialog';
import RecordSimulationDialog from './RecordSimulationDialog';
import PlaySimulationDialog from './PlaySimulationDialog';

const style = {
    container: {
        display: 'flex', width: '100%', flex: 1,
    },
    tabs: {
        paddingRight: 20,
    },
};

const Simulations = props => {
    const [simulations, setSimulations] = useState([]);
    const [simulationStates, setSimulationStates] = useState({});
    const [selectedSimulation, setSelectedSimulation] = useState(null);
    const [dialogSimulation, setDialogSimulation] = useState(null);
    const [dialogSimulationRecord, setDialogSimulationRecord] = useState(null);
    const [dialogSimulationPlay, setDialogSimulationPlay] = useState(null);
    const updateState = async (id, state) => {
        if (state) {
            setSimulationStates(_simulationStates => ({ ..._simulationStates, ...{ [id]: state.val } }));
        }
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
    };
    useEffect(() => {
        refreshSimulations();
    }, []);
    useEffect(() => {
        if (!selectedSimulation) {
            setSelectedSimulation(simulations[0]?._id);
        }
    }, [simulations]);
    const recordSimulation = (id, states, enums) => {
        props.socket.sendTo(`fullcalendar.${props.instance}`, 'recordSimulation', {
            id,
            states,
            enums,
        });
        props.socket.subscribeObject(id, refreshSimulations);
    };
    const playSimulation = (id, options) => {
        props.socket.sendTo(`fullcalendar.${props.instance}`, 'playSimulation', {
            id,
            options,
        });
    };
    return <div className={props.classes.container}>
        <div>
            <SimulationDialog
                socket={props.socket}
                instance={props.instance}
                simulation={simulations.find(s => s._id === dialogSimulation)}
                selectedSimulation={selectedSimulation}
                setSelectedSimulation={setSelectedSimulation}
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
            <Tabs value={selectedSimulation} onChange={(e, value) => setSelectedSimulation(value)} orientation="vertical" className={props.classes.tabs}>
                {simulations.map(simulation => <Tab
                    component="div"
                    value={simulation._id}
                    label={
                        <div style={{ width: '100%', textAlign: 'left' }}>
                            {simulation.common.name}
                            <IconButton
                                onClick={e => {
                                    e.stopPropagation();
                                    setDialogSimulation(simulation._id);
                                }}
                                size="small"
                            >
                                <Edit />
                            </IconButton>
                            {simulationStates[simulation._id] === 'stop' && <IconButton
                                onClick={async e => {
                                    e.stopPropagation();
                                    setDialogSimulationRecord(simulation._id);
                                }}
                                size="small"
                            >
                                <FiberManualRecord />
                            </IconButton>}
                            {simulationStates[simulation._id] === 'stop' && <IconButton
                                onClick={async e => {
                                    e.stopPropagation();
                                    setDialogSimulationPlay(simulation._id);
                                }}
                                size="small"
                            >
                                <PlayCircle />
                            </IconButton>}
                            {simulationStates[simulation._id] !== 'stop' && <IconButton
                                onClick={async e => {
                                    e.stopPropagation();
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
                                size="small"
                            >
                                <Stop />
                            </IconButton>}
                        </div>
                    }
                    key={simulation._id}
                />)}
            </Tabs>
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
                            interval: 'week',
                        },
                        type: 'state',
                    });
                    await props.socket.setState(id, 'stop');
                    // props.socket.sendTo(`fullcalendar.${props.instance}`, 'recordSimulation', id);
                    await refreshSimulations();
                    setSelectedSimulation(id);
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
                readOnly={simulationStates[selectedSimulation] === 'play'}
                refreshSimulations={refreshSimulations}
            />
        </div>}
    </div>;
};

Simulations.propTypes = {
    socket: PropTypes.object.isRequired,
    instance: PropTypes.any.isRequired,
    systemConfig: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Simulations);
