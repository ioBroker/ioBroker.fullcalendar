import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { I18n, Confirm } from '@iobroker/adapter-react-v5';
import {
    Button, IconButton, Tab, Tabs, Paper, AppBar, Toolbar, Tooltip,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import {
    Edit, FiberManualRecord, PlayCircle, Pause, Add,
} from '@mui/icons-material';
import { withStyles } from '@mui/styles';
import moment from 'moment';
import CalendarContainer from './CalendarContainer';
import SimulationDialog from './SimulationDialog';
import PlaySimulationDialog from './PlaySimulationDialog';

const style = {
    container: {
        display: 'flex', width: '100%', flex: 1,
    },
    tabs: {
    },
    toCalendar: {
        paddingLeft: 20,
    },
};

const Simulations = props => {
    const [simulations, setSimulations] = useState([]);
    const [simulationStates, setSimulationStates] = useState({});
    const [selectedSimulation, setSelectedSimulation] = useState(null);
    const [recordDialog, setRecordDialog] = useState(false);
    const [dialogSimulation, setDialogSimulation] = useState(null);
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
    const recordSimulation = id => {
        props.socket.sendTo(`fullcalendar.${props.instance}`, 'recordSimulation', {
            id,
        });
        props.socket.subscribeObject(id, refreshSimulations);
    };
    const playSimulation = (id, options) => {
        props.socket.sendTo(`fullcalendar.${props.instance}`, 'playSimulation', {
            id,
            options,
        });
    };

    const toCalendar = <div className={props.classes.toCalendar}>
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
                const events = simulations.find(s => s._id === selectedSimulation).native.events;
                for (const k in events) {
                    const _event = JSON.parse(JSON.stringify(events[k]));
                    _event.id = `${id}.event-${uuidv4()}`;
                    props.socket.setObject(_event.id, _event);
                }
                props.updateCalendars();
                props.setIsSimulations(false);
                props.setCalendarPrefix(id);
            }}
        >
            {I18n.t('To calendar')}
        </Button>
    </div>;

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
            <PlaySimulationDialog
                socket={props.socket}
                instance={props.instance}
                playSimulation={playSimulation}
                simulation={simulations.find(s => s._id === dialogSimulationPlay)}
                open={!!dialogSimulationPlay}
                onClose={() => setDialogSimulationPlay(null)}
            />
            {recordDialog && <Confirm
                title={I18n.t('Delete record')}
                text={I18n.t('Do you want to delete previously recorded events?')}
                suppressQuestionMinutes={5}
                dialogName="deleteRecordConfirmDialog"
                onClose={async isYes => {
                    if (isYes) {
                        try {
                            const _simulation = simulations.find(s => s._id === recordDialog);
                            _simulation.native.events = [];
                            await props.socket.setObject(_simulation._id, _simulation);
                        } catch (e) {
                            window.alert(`Cannot delete events: ${e}`);
                        }
                    }
                    recordSimulation(recordDialog);
                    setRecordDialog(false);
                }}
            />}
            <Paper>
                <AppBar
                    position="relative"
                    sx={{
                        backgroundColor: theme => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                    }}
                >
                    <Toolbar>
                        <IconButton
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
                                        interval: 'day',
                                        defaultColor: '#3A87AD',
                                        record: {
                                            states: [],
                                            enums: [],
                                            start: null,
                                            end: null,
                                        },
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
                            <Add />
                        </IconButton>
                    </Toolbar>
                </AppBar>
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
                                {['record', 'stop'].includes(simulationStates[simulation._id]) &&
                                <Tooltip title={simulationStates[simulation._id] === 'stop' ?
                                    false :
                                    `${I18n.t('Till')} ${moment(simulation.native.record.end).format('DD.MM.YYYY HH:mm:ss')}`}
                                >
                                    <IconButton
                                        onClick={async e => {
                                            e.stopPropagation();
                                            if (simulationStates[simulation._id] === 'record') {
                                                props.socket.sendTo(
                                                    `fullcalendar.${props.instance}`,
                                                    'stopRecordSimulation',
                                                    {
                                                        id: simulation._id,
                                                    },
                                                );
                                                props.socket.unsubscribeObject(simulation._id, refreshSimulations);
                                                refreshSimulations();
                                            } else if (simulation.native.events.length) {
                                                setRecordDialog(simulation._id);
                                            } else {
                                                recordSimulation(simulation._id);
                                            }
                                        }}
                                        size="small"
                                    >
                                        <FiberManualRecord style={{
                                            color: simulationStates[simulation._id] === 'record' ? 'red' : undefined,
                                        }}
                                        />
                                    </IconButton>
                                </Tooltip>}
                                {['record', 'pause'].includes(simulationStates[simulation._id]) &&
                            <IconButton
                                onClick={async e => {
                                    e.stopPropagation();
                                    props.socket.sendTo(
                                        `fullcalendar.${props.instance}`,
                                        simulationStates[simulation._id] === 'record' ? 'pauseRecordSimulation' : 'resumeRecordSimulation',
                                        {
                                            id: simulation._id,
                                        },
                                    );
                                }}
                                size="small"
                            >
                                <Pause style={{
                                    color: simulationStates[simulation._id] === 'pause' ? 'yellow' : undefined,
                                }}
                                />
                            </IconButton>}
                                {['stop', 'play'].includes(simulationStates[simulation._id]) &&
                            simulation.native.events.length > 0 &&
                            <IconButton
                                onClick={async e => {
                                    e.stopPropagation();
                                    if (simulationStates[simulation._id] === 'play') {
                                        props.socket.sendTo(
                                            `fullcalendar.${props.instance}`,
                                            'stopPlaySimulation',
                                            {
                                                id: simulation._id,
                                            },
                                        );
                                        refreshSimulations();
                                    } else {
                                        setDialogSimulationPlay(simulation._id);
                                    }
                                }}
                                size="small"
                            >
                                <PlayCircle style={{
                                    color: simulationStates[simulation._id] === 'play' ? 'green' : undefined,
                                }}
                                />
                            </IconButton>}
                            </div>
                        }
                        key={simulation._id}
                    />)}
                </Tabs>
            </Paper>
        </div>
        {selectedSimulation && <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            }}
        >

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
                button={toCalendar}
            />
        </div>}
    </div>;
};

Simulations.propTypes = {
    socket: PropTypes.object.isRequired,
    instance: PropTypes.any.isRequired,
    systemConfig: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    updateCalendars: PropTypes.func.isRequired,
    setIsSimulations: PropTypes.func.isRequired,
    setCalendarPrefix: PropTypes.func.isRequired,
};

export default withStyles(style)(Simulations);
