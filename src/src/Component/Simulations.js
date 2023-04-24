import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import {
    Button,
    IconButton,
    Tab,
    Tabs,
    Paper,
    Toolbar,
    Tooltip,
    Fab,
    DialogActions,
    DialogContentText,
    DialogContent,
    Dialog, DialogTitle,
} from '@mui/material';

import {
    Edit, FiberManualRecord, Pause,
    Add, PlayArrow, Delete, Check,
    ReportProblem as Alert,
    Stop, CalendarMonth,
    PlaylistPlay as SimulationIcon,
} from '@mui/icons-material';

import {
    I18n, Utils, Confirm, TextWithIcon,
} from '@iobroker/adapter-react-v5';

import CalendarContainer from './CalendarContainer';
import SimulationDialog from './SimulationDialog';
import PlaySimulationDialog from './PlaySimulationDialog';

const style = theme => ({
    container: {
        display: 'flex',
        width: '100%',
        flex: 1,
    },
    tabs: {

    },
    toCalendar: {
        paddingLeft: 20,
    },
    calendarsPaper: {
        minHeight: '100%',
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
    toolbar: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        padding: '2px 5px',
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
    eventsCount: {
        position: 'absolute',
        right: 5,
        top: 2,
        fontSize: 10,
        opacity: 0.7,
        fontStyle: 'italic',
    },
    tooltip: {
        pointerEvents: 'none',
    },
});

const Simulations = props => {
    const [simulations, setSimulations] = useState([]);
    const [simulationStates, setSimulationStates] = useState({});
    const [selectedSimulation, setSelectedSimulation] = useState(window.localStorage.getItem('fullcalendar.selectedSimulation') || null);
    const [recordDialog, setRecordDialog] = useState(false);
    const [stopRecordDialog, setStopRecordDialog] = useState(false);
    const [dialogSimulation, setDialogSimulation] = useState(null);
    const [dialogSimulationPlay, setDialogSimulationPlay] = useState(null);

    const updateState = async (id, state) => {
        if (state) {
            setSimulationStates(_simulationStates => ({ ..._simulationStates, ...{ [id]: state.val } }));
        }
    };

    const updateObject = async (id, obj) => {
        setSimulations(oldSimulations => {
            const _simulations = JSON.parse(JSON.stringify(oldSimulations));

            const pos = _simulations.findIndex(s => s._id === id);

            if (pos === -1) {
                if (!obj) {
                    return oldSimulations;
                }
                _simulations.push(obj);
            } else if (!obj) {
                _simulations.splice(pos, 1);
            } else {
                _simulations[pos] = obj;
            }

            return _simulations;
        });
    };

    const loadSimulations = async () => {
        const objects = await props.socket.getObjectViewSystem(
            'state',
            `fullcalendar.${props.instance}.Simulations.`,
            `fullcalendar.${props.instance}.Simulations.\u9999`,
        );

        const _simulationStates = {};
        for (const id in objects) {
            _simulationStates[id] = (await props.socket.getState(id)).val;
        }

        const _simulations = Object.values(objects);
        _simulations.sort((a, b) => a.common.name.localeCompare(b.common.name));
        setSimulations(_simulations);

        if (!selectedSimulation || (simulations.length && !simulations.find(s => s._id === selectedSimulation))) {
            setSelectedSimulation(simulations[0]?._id);
        }

        setSimulationStates(_simulationStates);

        props.socket.subscribeObject(`fullcalendar.${props.instance}.Simulations.*`, updateObject);
        props.socket.subscribeState(`fullcalendar.${props.instance}.Simulations.*`, updateState);
    };

    useEffect(() => {
        loadSimulations()
            .catch(() => {}); // ignore errors

        return async () => {
            await props.socket.unsubscribeObject(`fullcalendar.${props.instance}.Simulations.*`, updateObject);
            await props.socket.unsubscribeState(`fullcalendar.${props.instance}.Simulations.*`, updateState);
        };
    }, []);

    useEffect(() => {
        if (!selectedSimulation || (simulations.length && !simulations.find(s => s._id === selectedSimulation))) {
            setSelectedSimulation(simulations[0]?._id);
        }
    }, [simulations]);

    const recordSimulation = async (id, obj) => {
        obj = obj || (await props.socket.getObject(id));
        obj.native.record = obj.native.record || {};
        obj.native.record.start = Date.now();
        obj.native.record.end = obj.native.interval === 'day' ? new Date(Date.now() + 24 * 60 * 60 * 1000) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

        props.socket.setObject(id, obj);
        props.socket.setState(id, 'record');
    };

    const playSimulation = async (id, options) => {
        const obj = await props.socket.getObject(id);
        obj.native.play = options;
        await props.socket.setObject(id, obj);
        props.socket.setState(id, 'play');
    };

    const toCalendar = <div className={props.classes.toCalendar}>
        <Tooltip title={I18n.t('You can export events to static calender')} classes={{ popper: props.classes.tooltip }}>
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
        </Tooltip>
    </div>;

    return <div className={Utils.clsx(props.classes.container, props.classes.simulations)}>
        <div>
            {dialogSimulation && <SimulationDialog
                socket={props.socket}
                instance={props.instance}
                simulation={simulations.find(s => s._id === dialogSimulation)}
                selectedSimulation={selectedSimulation}
                setSelectedSimulation={setSelectedSimulation}
                onClose={() => setDialogSimulation(null)}
                onDelete={async id => {
                    try {
                        if (selectedSimulation === id) {
                            const firstSimulation = simulations.find(s => s._id !== id);

                            setSelectedSimulation(firstSimulation?._id || null);
                        }
                        await props.socket.delObject(id);
                    } catch (e) {
                        window.alert(`Cannot delete simulation: ${e}`);
                    }
                }}
            />}
            {dialogSimulationPlay && <PlaySimulationDialog
                socket={props.socket}
                instance={props.instance}
                playSimulation={playSimulation}
                simulation={simulations.find(s => s._id === dialogSimulationPlay)}
                onClose={() => setDialogSimulationPlay(null)}
            />}
            {recordDialog && <Dialog
                open={!0}
                maxWidth="md"
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                        setRecordDialog(false);
                    }
                }}
            >
                <DialogTitle id="confirmation-dialog-title">{I18n.t('Start recording')}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {I18n.t('Do you want to delete previously recorded events?')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        onClick={async () => {
                            const obj = await props.socket.getObject(recordDialog);
                            obj.native.events = [];
                            await recordSimulation(obj._id, obj);
                            setRecordDialog(false);
                        }}
                        style={{ backgroundColor: 'red', color: 'white' }}
                        autoFocus
                        startIcon={<Delete />}
                    >
                        {I18n.t('Delete events')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={async () => {
                            await recordSimulation(recordDialog);
                            setRecordDialog(false);
                        }}
                        color="grey"
                        startIcon={<Check />}
                    >
                        {I18n.t('Keep events')}
                    </Button>
                </DialogActions>
            </Dialog>}
            {stopRecordDialog !== false && <Confirm
                fullWidth={false}
                title={I18n.t('Stop recording')}
                text={I18n.t('Do you want to stop recording? You cannot restart it again.')}
                ok={I18n.t('Stop')}
                onClose={async isYes => {
                    if (isYes) {
                        props.socket.setState(stopRecordDialog, 'stop');
                    }
                    setStopRecordDialog(false);
                }}
            />}
            <Paper className={props.classes.calendarsPaper}>
                <Tabs
                    value={1}
                    onChange={props.changeCalendarType}
                    className={props.classes.tabs}
                >
                    <Tab title={I18n.t('Calendars')} icon={<CalendarMonth />} />
                    <Tab title={I18n.t('Simulations')} icon={<SimulationIcon />} className={props.classes.simulations} />
                </Tabs>
                <Toolbar variant="dense" className={props.classes.toolbar}>
                    <Fab
                        color="primary"
                        size="small"
                        title={I18n.t('Create new simulation')}
                        onClick={async () => {
                            const id = `fullcalendar.${props.instance}.Simulations.${uuidv4()}`;
                            await props.socket.setObject(id, {
                                common: {
                                    name: I18n.t('Simulation %s', simulations.length + 1),
                                    role: 'state',
                                    type: 'string',
                                    states: ['stop', 'record', 'play', 'pause'],
                                    color: '#3A87AD',
                                },
                                native: {
                                    events: [],
                                    interval: 'day',
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

                            window.localStorage.setItem('fullcalendar.selectedSimulation', id);
                            setTimeout(() => {
                                setSelectedSimulation(id);
                                setDialogSimulation(id);
                            }, 300);
                        }}
                        variant="contained"
                    >
                        <Add />
                    </Fab>
                    <div className={props.classes.divider} />
                    {!props.alive && <Tooltip title={I18n.t('Instance inactive')} classes={{ popper: props.classes.tooltip }}><Alert className={props.classes.alert} /></Tooltip>}
                </Toolbar>
                <Tabs
                    value={(selectedSimulation ? (simulations.find(s => s._id === selectedSimulation) ? selectedSimulation : simulations[0]?._id) : simulations[0]?._id) || ''}
                    onChange={(e, value) => {
                        window.localStorage.setItem('fullcalendar.selectedSimulation', value);
                        setSelectedSimulation(value);
                    }}
                    orientation="vertical"
                    className={props.classes.tabs}
                >
                    {simulations.map(simulation => <Tab
                        classes={{ root: props.classes.tabRoot, selected: props.classes.selected }}
                        component="div"
                        value={simulation._id}
                        label={
                            <div className={props.classes.label}>
                                <TextWithIcon value={simulation} lang={I18n.getLanguage()} />
                                <div className={props.classes.divider} />
                                <Tooltip title={I18n.t('Edit name and settings')} classes={{ popper: props.classes.tooltip }}>
                                    <IconButton
                                        className="edit"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setDialogSimulation(simulation._id);
                                        }}
                                        size="small"
                                    >
                                        <Edit />
                                    </IconButton>
                                </Tooltip>
                                {simulationStates[simulation._id] === 'stop' &&
                                    <Tooltip title={I18n.t('Start recording')} classes={{ popper: props.classes.tooltip }}>
                                        <span>
                                            <IconButton
                                                onClick={async e => {
                                                    e.stopPropagation();
                                                    if (simulation.native.events.length) {
                                                        setRecordDialog(simulation._id);
                                                    } else {
                                                        await recordSimulation(simulation._id);
                                                    }
                                                }}
                                                size="small"
                                            >
                                                <FiberManualRecord />
                                            </IconButton>
                                        </span>
                                    </Tooltip>}
                                {simulationStates[simulation._id] === 'stop' && simulation.native.events.length > 0 &&
                                    <Tooltip title={I18n.t('Start playing')} classes={{ popper: props.classes.tooltip }}>
                                        <span>
                                            <IconButton
                                                onClick={async e => {
                                                    e.stopPropagation();
                                                    setDialogSimulationPlay(simulation._id);
                                                }}
                                                size="small"
                                            >
                                                <PlayArrow />
                                            </IconButton>
                                        </span>
                                    </Tooltip>}
                                {(simulationStates[simulation._id] === 'record' || simulationStates[simulation._id] === 'pause') &&
                                    <Tooltip title={I18n.t('Stop recording. Recording till %s', moment(simulation.native.record.end).format('DD.MM.YYYY HH:mm:ss'))} classes={{ popper: props.classes.tooltip }}>
                                        <span style={{ opacity: simulationStates[simulation._id] === 'pause' ? 0.5 : 1 }}>
                                            <IconButton
                                                disabled={simulationStates[simulation._id] === 'pause'}
                                                onClick={async e => {
                                                    e.stopPropagation();
                                                    setStopRecordDialog(simulation._id);
                                                }}
                                                size="small"
                                            >
                                                <Stop style={{ color: 'red' }} />
                                            </IconButton>
                                        </span>
                                    </Tooltip>}
                                {simulationStates[simulation._id] === 'play' &&
                                    <Tooltip title={I18n.t('Stop playing')} classes={{ popper: props.classes.tooltip }}>
                                        <span>
                                            <IconButton
                                                onClick={async e => {
                                                    e.stopPropagation();
                                                    props.socket.setState(simulation._id, 'stop');
                                                }}
                                                size="small"
                                            >
                                                <Stop style={{ color: 'green' }} />
                                            </IconButton>
                                        </span>
                                    </Tooltip>}
                                {simulationStates[simulation._id] === 'record' &&
                                    <Tooltip title={I18n.t('Pause recording')} classes={{ popper: props.classes.tooltip }}>
                                        <span>
                                            <IconButton
                                                onClick={async e => {
                                                    e.stopPropagation();
                                                    props.socket.setState(simulation._id, 'pause');
                                                }}
                                                size="small"
                                            >
                                                <Pause />
                                            </IconButton>
                                        </span>
                                    </Tooltip>}
                                {simulationStates[simulation._id] === 'pause' &&
                                    <Tooltip title={I18n.t('Resume recording. Recording till %s', moment(simulation.native.record.end).format('DD.MM.YYYY HH:mm:ss'))} classes={{ popper: props.classes.tooltip }}>
                                        <span>
                                            <IconButton
                                                onClick={async e => {
                                                    e.stopPropagation();
                                                    props.socket.setState(simulation._id, 'record');
                                                }}
                                                size="small"
                                            >
                                                <Pause style={{ color: 'yellow' }} />
                                            </IconButton>
                                        </span>
                                    </Tooltip>}
                                <div className={props.classes.eventsCount}>{simulation.native.events?.length}</div>
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
    changeCalendarType: PropTypes.func.isRequired,
    setCalendarPrefix: PropTypes.func.isRequired,
};

export default withStyles(style)(Simulations);
