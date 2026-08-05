import { useEffect, useState } from 'react';
import type { JSX } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import {
    Button,
    IconButton,
    Tooltip,
    DialogActions,
    DialogContentText,
    DialogContent,
    Dialog,
    DialogTitle,
    Box,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

import { Edit, FiberManualRecord, Pause, PlayArrow, Delete, Check, Stop } from '@mui/icons-material';

import { I18n, Confirm } from '@iobroker/gui-components';
import type { AdminConnection, IobTheme } from '@iobroker/gui-components';

import CalendarContainer from './CalendarContainer';
import SimulationDialog from './SimulationDialog';
import PlaySimulationDialog from './PlaySimulationDialog';
import { SidePanel, SidePanelItem } from './SidePanel';
import type { PlaySettings } from './PlaySimulationDialog';
import type { Simulation, SimulationStatus } from './Utils';

/** Width of the left panel. Unlike the calendars view, the simulations view has no splitter */
const PANEL_WIDTH = 260;

// mixes plain inline styles with MUI `sx` entries (incl. theme callbacks), hence `any`
const styles: Record<string, any> = {
    container: {
        display: 'flex',
        width: '100%',
        flex: 1,
    },
    toCalendar: {
        paddingLeft: 20,
    },
    /** Faint tint that tells the simulations view apart from the calendars view */
    simulations: (theme: IobTheme) => ({
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.04 : 0.05),
    }),
    tooltip: {
        pointerEvents: 'none',
    },
};

interface SimulationsProps {
    socket: AdminConnection;
    instance: number;
    systemConfig: ioBroker.SystemConfigCommon | undefined;
    updateCalendars: () => Promise<void>;
    changeCalendarType: () => void;
    setCalendarPrefix: (prefix: string) => void;
    theme: IobTheme;
    alive?: boolean;
}

const Simulations = (props: SimulationsProps): JSX.Element => {
    const [simulations, setSimulations] = useState<Simulation[]>([]);
    const [simulationStates, setSimulationStates] = useState<Record<string, SimulationStatus>>({});
    const [selectedSimulation, setSelectedSimulation] = useState<string | null>(
        window.localStorage.getItem('fullcalendar.selectedSimulation') || null,
    );
    /** `false` = closed, otherwise the id of the simulation to record */
    const [recordDialog, setRecordDialog] = useState<string | false>(false);
    /** `false` = closed, otherwise the id of the simulation to stop */
    const [stopRecordDialog, setStopRecordDialog] = useState<string | false>(false);
    const [dialogSimulation, setDialogSimulation] = useState<string | null>(null);
    const [dialogSimulationPlay, setDialogSimulationPlay] = useState<string | null>(null);

    const updateState = (id: string, state: ioBroker.State | null | undefined): void => {
        if (state) {
            setSimulationStates(_simulationStates => ({
                ..._simulationStates,
                ...{ [id]: state.val as SimulationStatus },
            }));
        }
    };

    const updateObject = (id: string, obj: ioBroker.Object | null | undefined): void => {
        setSimulations(oldSimulations => {
            const _simulations: Simulation[] = JSON.parse(JSON.stringify(oldSimulations));

            const pos = _simulations.findIndex(s => s._id === id);

            if (pos === -1) {
                if (!obj) {
                    return oldSimulations;
                }
                _simulations.push(obj as unknown as Simulation);
            } else if (!obj) {
                _simulations.splice(pos, 1);
            } else {
                _simulations[pos] = obj as unknown as Simulation;
            }

            return _simulations;
        });
    };

    const loadSimulations = async (): Promise<void> => {
        const objects = await props.socket.getObjectViewSystem(
            'state',
            `fullcalendar.${props.instance}.Simulations.`,
            `fullcalendar.${props.instance}.Simulations.\u9999`,
        );

        const _simulationStates: Record<string, SimulationStatus> = {};
        for (const id in objects) {
            _simulationStates[id] = (await props.socket.getState(id))?.val as SimulationStatus;
        }

        const _simulations = Object.values(objects) as unknown as Simulation[];
        _simulations.sort((a, b) => (a.common.name as string).localeCompare(b.common.name as string));
        setSimulations(_simulations);

        if (!selectedSimulation || (simulations.length && !simulations.find(s => s._id === selectedSimulation))) {
            setSelectedSimulation(simulations[0]?._id || null);
        }

        setSimulationStates(_simulationStates);

        void props.socket.subscribeObject(`fullcalendar.${props.instance}.Simulations.*`, updateObject);
        void props.socket.subscribeState(`fullcalendar.${props.instance}.Simulations.*`, updateState);
    };

    useEffect(() => {
        loadSimulations().catch(() => {}); // ignore errors

        return () => {
            void props.socket.unsubscribeObject(`fullcalendar.${props.instance}.Simulations.*`, updateObject);
            props.socket.unsubscribeState(`fullcalendar.${props.instance}.Simulations.*`, updateState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!selectedSimulation || (simulations.length && !simulations.find(s => s._id === selectedSimulation))) {
            setSelectedSimulation(simulations[0]?._id || null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [simulations]);

    const recordSimulation = async (id: string, obj?: Simulation): Promise<void> => {
        obj = obj || ((await props.socket.getObject(id)) as unknown as Simulation);
        obj.native.record = obj.native.record || {};
        obj.native.record.start = Date.now();
        obj.native.record.end =
            obj.native.interval === 'day'
                ? new Date(Date.now() + 24 * 60 * 60 * 1000)
                : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

        void props.socket.setObject(id, obj as unknown as ioBroker.Object);
        void props.socket.setState(id, 'record');
    };

    const playSimulation = async (id: string, options: PlaySettings): Promise<void> => {
        const obj = (await props.socket.getObject(id)) as unknown as Simulation;
        obj.native.play = options as unknown as Simulation['native']['play'];
        await props.socket.setObject(id, obj as unknown as ioBroker.Object);
        void props.socket.setState(id, 'play');
    };

    const toCalendar = (
        <div style={styles.toCalendar}>
            <Tooltip
                title={I18n.t('You can export events to static calender')}
                slotProps={{ popper: { sx: styles.tooltip } }}
            >
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
                        } as unknown as ioBroker.Object);

                        const events = simulations.find(s => s._id === selectedSimulation)!.native.events;
                        for (const k in events) {
                            const _event = JSON.parse(JSON.stringify(events[k]));
                            _event.id = `${id}.event-${uuidv4()}`;
                            void props.socket.setObject(_event.id, _event);
                        }

                        void props.updateCalendars();
                        props.changeCalendarType();
                        props.setCalendarPrefix(id);
                    }}
                >
                    {I18n.t('To calendar')}
                </Button>
            </Tooltip>
        </div>
    );

    /** The stored selection can point to a deleted simulation - then the first one is highlighted */
    const effectiveSimulation: string =
        (selectedSimulation && simulations.find(s => s._id === selectedSimulation)
            ? selectedSimulation
            : simulations[0]?._id) || '';

    return (
        <Box
            component="div"
            style={styles.container}
            sx={styles.simulations}
        >
            <div>
                {dialogSimulation && (
                    <SimulationDialog
                        socket={props.socket}
                        simulation={simulations.find(s => s._id === dialogSimulation)!}
                        onClose={() => setDialogSimulation(null)}
                        theme={props.theme}
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
                    />
                )}
                {dialogSimulationPlay && (
                    <PlaySimulationDialog
                        playSimulation={playSimulation}
                        simulation={simulations.find(s => s._id === dialogSimulationPlay)!}
                        onClose={() => setDialogSimulationPlay(null)}
                    />
                )}
                {recordDialog && (
                    <Dialog
                        open={!0}
                        maxWidth="md"
                        onClose={(_event, reason) => {
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
                                    const obj = (await props.socket.getObject(recordDialog)) as unknown as Simulation;
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
                    </Dialog>
                )}
                {stopRecordDialog !== false && (
                    <Confirm
                        fullWidth={false}
                        title={I18n.t('Stop recording')}
                        text={I18n.t('Do you want to stop recording? You cannot restart it again.')}
                        ok={I18n.t('Stop')}
                        onClose={isYes => {
                            if (isYes) {
                                void props.socket.setState(stopRecordDialog, 'stop');
                            }
                            setStopRecordDialog(false);
                        }}
                    />
                )}
                <SidePanel
                    isSimulations
                    onChangeMode={props.changeCalendarType}
                    title={I18n.t('Simulations')}
                    addTitle={I18n.t('Create new simulation')}
                    alive={props.alive}
                    width={PANEL_WIDTH}
                    onAdd={async () => {
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
                        } as unknown as ioBroker.Object);
                        await props.socket.setState(id, 'stop');

                        window.localStorage.setItem('fullcalendar.selectedSimulation', id);
                        setTimeout(() => {
                            setSelectedSimulation(id);
                            setDialogSimulation(id);
                        }, 300);
                    }}
                >
                    {simulations.map(simulation => (
                        <SidePanelItem
                            key={simulation._id}
                            name={(simulation.common.name as string) || simulation._id}
                            color={simulation.common.color}
                            icon={simulation.common.icon}
                            count={simulation.native.events?.length || 0}
                            selected={simulation._id === effectiveSimulation}
                            onClick={() => {
                                window.localStorage.setItem('fullcalendar.selectedSimulation', simulation._id);
                                setSelectedSimulation(simulation._id);
                            }}
                            actions={
                                <>
                                    <Tooltip
                                        title={I18n.t('Edit name and settings')}
                                        slotProps={{ popper: { sx: styles.tooltip } }}
                                    >
                                        <IconButton
                                            onClick={e => {
                                                e.stopPropagation();
                                                setDialogSimulation(simulation._id);
                                            }}
                                            size="small"
                                        >
                                            <Edit />
                                        </IconButton>
                                    </Tooltip>
                                    {simulationStates[simulation._id] === 'stop' && (
                                        <Tooltip
                                            title={I18n.t('Start recording')}
                                            slotProps={{ popper: { sx: styles.tooltip } }}
                                        >
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
                                        </Tooltip>
                                    )}
                                    {simulationStates[simulation._id] === 'stop' &&
                                        simulation.native.events.length > 0 && (
                                            <Tooltip
                                                title={I18n.t('Start playing')}
                                                slotProps={{ popper: { sx: styles.tooltip } }}
                                            >
                                                <span>
                                                    <IconButton
                                                        onClick={e => {
                                                            e.stopPropagation();
                                                            setDialogSimulationPlay(simulation._id);
                                                        }}
                                                        size="small"
                                                    >
                                                        <PlayArrow />
                                                    </IconButton>
                                                </span>
                                            </Tooltip>
                                        )}
                                </>
                            }
                            status={
                                <>
                                    {(simulationStates[simulation._id] === 'record' ||
                                        simulationStates[simulation._id] === 'pause') && (
                                        <Tooltip
                                            title={I18n.t(
                                                'Stop recording. Recording till %s',
                                                moment(simulation.native.record.end).format('DD.MM.YYYY HH:mm:ss'),
                                            )}
                                            slotProps={{ popper: { sx: styles.tooltip } }}
                                        >
                                            <span
                                                style={{
                                                    opacity: simulationStates[simulation._id] === 'pause' ? 0.5 : 1,
                                                }}
                                            >
                                                <IconButton
                                                    disabled={simulationStates[simulation._id] === 'pause'}
                                                    onClick={e => {
                                                        e.stopPropagation();
                                                        setStopRecordDialog(simulation._id);
                                                    }}
                                                    size="small"
                                                >
                                                    <Stop style={{ color: 'red' }} />
                                                </IconButton>
                                            </span>
                                        </Tooltip>
                                    )}
                                    {simulationStates[simulation._id] === 'play' && (
                                        <Tooltip
                                            title={I18n.t('Stop playing')}
                                            slotProps={{ popper: { sx: styles.tooltip } }}
                                        >
                                            <span>
                                                <IconButton
                                                    onClick={e => {
                                                        e.stopPropagation();
                                                        void props.socket.setState(simulation._id, 'stop');
                                                    }}
                                                    size="small"
                                                >
                                                    <Stop style={{ color: 'green' }} />
                                                </IconButton>
                                            </span>
                                        </Tooltip>
                                    )}
                                    {simulationStates[simulation._id] === 'record' && (
                                        <Tooltip
                                            title={I18n.t('Pause recording')}
                                            slotProps={{ popper: { sx: styles.tooltip } }}
                                        >
                                            <span>
                                                <IconButton
                                                    onClick={e => {
                                                        e.stopPropagation();
                                                        void props.socket.setState(simulation._id, 'pause');
                                                    }}
                                                    size="small"
                                                >
                                                    <Pause />
                                                </IconButton>
                                            </span>
                                        </Tooltip>
                                    )}
                                    {simulationStates[simulation._id] === 'pause' && (
                                        <Tooltip
                                            title={I18n.t(
                                                'Resume recording. Recording till %s',
                                                moment(simulation.native.record.end).format('DD.MM.YYYY HH:mm:ss'),
                                            )}
                                            slotProps={{ popper: { sx: styles.tooltip } }}
                                        >
                                            <span>
                                                <IconButton
                                                    onClick={e => {
                                                        e.stopPropagation();
                                                        void props.socket.setState(simulation._id, 'record');
                                                    }}
                                                    size="small"
                                                >
                                                    <Pause style={{ color: 'yellow' }} />
                                                </IconButton>
                                            </span>
                                        </Tooltip>
                                    )}
                                </>
                            }
                        />
                    ))}
                </SidePanel>
            </div>
            {selectedSimulation && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                    }}
                >
                    <CalendarContainer
                        key={selectedSimulation}
                        systemConfig={props.systemConfig!}
                        socket={props.socket}
                        isSimulation
                        calendarPrefix={selectedSimulation}
                        simulationId={selectedSimulation}
                        simulation={simulations.find(s => s._id === selectedSimulation)}
                        simulations={simulations}
                        theme={props.theme}
                        readOnly={simulationStates[selectedSimulation] === 'play'}
                        simulationState={simulationStates[selectedSimulation]}
                        button={toCalendar}
                    />
                </div>
            )}
        </Box>
    );
};

export default Simulations;
