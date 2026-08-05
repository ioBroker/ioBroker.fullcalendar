import { useEffect, useState } from 'react';
import type { JSX, ReactNode } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    IconButton,
    Chip,
    Tooltip,
    LinearProgress,
} from '@mui/material';

import { Cancel, Delete, Save, Add } from '@mui/icons-material';

import { Confirm, I18n, ColorPicker, SelectID, TextWithIcon } from '@iobroker/gui-components';
import type { AdminConnection, IobTheme } from '@iobroker/gui-components';

import { IGNORE_STATES, getIconAsync, getCachedObject, cron2obj, obj2cron, buildOverlap } from './Utils';
import type { Simulation } from './Utils';
import EnumsDialog from './EnumsDialog';

const styles: Record<string, any> = {
    field: {
        display: 'flex',
        alignItems: 'end',
        gap: 20,
    },
    chip: {
        margin: 2,
    },
    chipSubText: {
        fontSize: 10,
        opacity: 0.5,
        fontStyle: 'italic',
        marginTop: -4,
        paddingLeft: 4,
    },
    chipLabel: {
        display: 'flex',
        alignItems: 'center',
    },
    headers: {
        marginBottom: -5,
    },
    blink: {
        animationName: 'fullcalendar-blinker',
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
    },
    tooltip: {
        pointerEvents: 'none',
    },
};

interface SimulationDialogProps {
    onClose: () => void;
    onDelete: (id: string) => Promise<void>;
    simulation: Simulation;
    socket: AdminConnection;
    theme: IobTheme;
}

const SimulationDialog = (props: SimulationDialogProps): JSX.Element | null => {
    const [simulation, setSimulation] = useState<Simulation | null | undefined>(props.simulation);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [idDialog, setIdDialog] = useState(false);
    /** `false` = closed, a number = index of the edited category group, `true` = new group */
    const [enumsDialog, setEnumsDialog] = useState<number | boolean>(false);
    const [enumStates, setEnumStates] = useState<string[]>([]);
    const [enumsObjects, setEnumsObjects] = useState<Record<string, ioBroker.EnumObject>>({});
    const [statesObjects, setStatesObjects] = useState<Record<string, ioBroker.Object | null>>({});
    const [working, setWorking] = useState(false);

    const requestStates = async (_enumStates?: string[]): Promise<void> => {
        _enumStates = _enumStates || enumStates;
        const _statesObjects: Record<string, ioBroker.Object | null> = {};
        for (let i = 0; i < _enumStates.length; i++) {
            const id = _enumStates[i];
            if (!_statesObjects[id] && !id.startsWith('alexa2.')) {
                try {
                    _statesObjects[id] = await getCachedObject(id, props.socket);
                    if (_statesObjects[id]?.common) {
                        _statesObjects[id].common.icon = (await getIconAsync(id, props.socket)) || undefined;
                    }
                    if (
                        _statesObjects[id] &&
                        (_statesObjects[id].type === 'channel' || _statesObjects[id].type === 'device')
                    ) {
                        // find out if any writable state exists
                        const subStates: Record<string, ioBroker.StateObject> = await props.socket.getObjectViewSystem(
                            'state',
                            `${id}.`,
                            `${id}.\u9999`,
                        );
                        const keys: string[] = Object.keys(subStates);
                        for (let k = 0; k < keys.length; k++) {
                            const sid = keys[k];
                            if (
                                !simulation?.native?.record?.enumsExceptions?.includes(sid) &&
                                subStates[sid].type === 'state' &&
                                subStates[sid].common &&
                                subStates[sid].common.write !== false &&
                                !IGNORE_STATES.find(ends => sid.endsWith(ends))
                            ) {
                                _statesObjects[sid] = subStates[sid];
                                // find icon
                                if (_statesObjects[sid]?.common) {
                                    _statesObjects[sid].common.icon =
                                        (await getIconAsync(sid, props.socket)) || undefined;
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.error(`Cannot get object ${id}: ${e}`);
                }
                _statesObjects[id] = _statesObjects[id] || null;
            }
        }

        Object.keys(_statesObjects).forEach(
            id => _statesObjects[id] && _statesObjects[id].type === 'state' && console.log(`+ ${id}`),
        );

        setStatesObjects(_statesObjects);
        setWorking(false);
    };

    useEffect(() => {
        setWorking(true);

        void (async () => {
            let _enumsObjects = enumsObjects;
            if (!Object.keys(enumsObjects).length) {
                _enumsObjects = await props.socket.getEnums();
                setEnumsObjects(_enumsObjects);
            }

            const lists = simulation?.native?.record?.enums || [];
            const _enumStates: string[] = [];
            lists.forEach(list => {
                const res = buildOverlap(list, _enumsObjects, simulation?.native?.record?.enumsExceptions || []);
                res.forEach(id => !_enumStates.includes(id) && _enumStates.push(id));
            });

            // add normal states
            simulation?.native.record?.states.forEach(id => !_enumStates.includes(id) && _enumStates.push(id));

            setEnumStates(_enumStates);
            await requestStates(_enumStates);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [simulation?.native.record?.enums, simulation?.native.record?.states]);

    const getStateChip = (id: string, onDelete?: () => void): JSX.Element | null => {
        const obj = statesObjects[id];
        if (!obj || obj.type !== 'state') {
            return null;
        }

        if (obj.common && obj.common.write === false) {
            // do not show read-only states
            return null;
        }

        const label = (
            <div>
                <TextWithIcon
                    value={obj || id}
                    title={id}
                    lang={I18n.getLanguage()}
                />
                <div style={styles.chipSubText}>{id}</div>
            </div>
        );

        return (
            <Chip
                onDelete={onDelete}
                label={label}
                key={id}
                style={styles.chip}
            />
        );
    };

    if (!simulation) {
        return null;
    }

    const disabled =
        !props.simulation ||
        !simulation ||
        (JSON.stringify(simulation.native) === JSON.stringify(props.simulation.native) &&
            JSON.stringify(simulation.common) === JSON.stringify(props.simulation.common));

    return (
        <Dialog
            open={!0}
            onClose={props.onClose}
        >
            <style>
                {`
@keyframes fullcalendar-blinker {
    from {
        opacity: red;
    }
    to {
        color: inherit;
    }
}
`}
            </style>
            <DialogTitle>{I18n.t('Edit simulation')}</DialogTitle>
            <DialogContent>
                <div style={styles.field}>
                    <TextField
                        label={I18n.t('Name')}
                        value={(simulation.common.name as string) || ''}
                        onChange={e => {
                            const _simulation: Simulation = JSON.parse(JSON.stringify(simulation));
                            _simulation.common.name = e.target.value;
                            setSimulation(_simulation);
                        }}
                        variant="standard"
                    />
                    <FormControl variant="standard">
                        <InputLabel>{I18n.t('Interval')}</InputLabel>
                        <Select
                            value={simulation.native.interval || ''}
                            onChange={e => {
                                const _simulation: Simulation = JSON.parse(JSON.stringify(simulation));
                                _simulation.native.interval = e.target.value as 'day' | 'week';
                                setSimulation(_simulation);
                            }}
                            variant="standard"
                        >
                            {['day', 'week'].map(interval => (
                                <MenuItem
                                    value={interval}
                                    key={interval}
                                >
                                    {I18n.t(interval)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div style={styles.field}>
                    <ColorPicker
                        label={I18n.t('Default color')}
                        value={simulation.common.color}
                        onChange={color => {
                            const _simulation: Simulation = JSON.parse(JSON.stringify(simulation));
                            _simulation.common.color = color;
                            setSimulation(_simulation);
                        }}
                    />
                </div>
                <h4 style={styles.headers}>
                    {I18n.t('States')}
                    <Tooltip
                        title={I18n.t('Add states for recording')}
                        slotProps={{ popper: { sx: styles.tooltip } }}
                    >
                        <IconButton
                            style={
                                !enumStates.length && simulation?.native?.record?.states?.length
                                    ? styles.blink
                                    : undefined
                            }
                            size="small"
                            onClick={() => setIdDialog(true)}
                            color="primary"
                        >
                            <Add />
                        </IconButton>
                    </Tooltip>
                </h4>
                <div>
                    {simulation.native.record?.states.map((state, i) =>
                        getStateChip(state, () => {
                            const _simulation: Simulation = JSON.parse(JSON.stringify(simulation));
                            _simulation.native.record.states.splice(i, 1);
                            setSimulation(_simulation);
                        }),
                    )}
                </div>
                <h4 style={styles.headers}>
                    {I18n.t('Categories')}
                    <Tooltip
                        title={I18n.t('Add overlap of categories for recording')}
                        slotProps={{ popper: { sx: styles.tooltip } }}
                    >
                        <IconButton
                            style={
                                !enumStates.length && simulation?.native?.record?.states?.length
                                    ? styles.blink
                                    : undefined
                            }
                            size="small"
                            onClick={() => setEnumsDialog(true)}
                            color="primary"
                        >
                            <Add />
                        </IconButton>
                    </Tooltip>
                </h4>
                <div>
                    {simulation.native.record?.enums.map((enumIds, i) => {
                        const ids = enumIds.map(id => (
                            <TextWithIcon
                                key={id}
                                value={enumsObjects[id] || id}
                                lang={I18n.getLanguage()}
                            />
                        ));
                        let j = 1;
                        const label = ids.reduce<ReactNode>(
                            (prev, curr) => [prev, <span key={j++}>+</span>, curr],
                            null,
                        );

                        return (
                            <Chip
                                onClick={() => setEnumsDialog(i)}
                                onDelete={() => {
                                    const _simulation: Simulation = JSON.parse(JSON.stringify(simulation));
                                    _simulation.native.record.enums.splice(i, 1);
                                    setSimulation(_simulation);
                                }}
                                label={label}
                                key={i}
                                sx={{ '& .MuiChip-label': styles.chipLabel }}
                                style={styles.chip}
                            />
                        );
                    })}
                </div>
                <h4 style={{ marginBottom: -0 }}>{I18n.t('Recorded states')}</h4>
                <div>
                    {working && <LinearProgress />}
                    {Object.keys(statesObjects).map(id => getStateChip(id))}
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Delete />}
                    onClick={() => setDeleteDialog(true)}
                >
                    {I18n.t('Delete')}
                </Button>
                <Button
                    disabled={disabled}
                    onClick={async () => {
                        const _simulation: Simulation = JSON.parse(JSON.stringify(simulation));
                        if (_simulation.native.interval !== props.simulation.native.interval) {
                            if (_simulation.native.interval === 'day') {
                                console.log(_simulation);
                                _simulation.native.events.forEach(event => {
                                    console.log(event.native.cron);
                                    const cron = cron2obj(event.native.cron!);
                                    console.log(cron);
                                    cron.dows = [0, 1, 2, 3, 4, 5, 6];
                                    event.native.cron = obj2cron(cron);
                                    console.log(event.native.cron);
                                });
                            }
                        }
                        await props.socket.setObject(simulation._id, _simulation as unknown as ioBroker.Object);
                        props.onClose();
                    }}
                    variant="contained"
                    color="primary"
                    startIcon={<Save />}
                >
                    {I18n.t('Save')}
                </Button>
                <Button
                    onClick={props.onClose}
                    variant="contained"
                    color="grey"
                    startIcon={<Cancel />}
                >
                    {disabled ? I18n.t('ra_Close') : I18n.t('ra_Cancel')}
                </Button>
            </DialogActions>
            {deleteDialog && (
                <Confirm
                    fullWidth={false}
                    title={I18n.t('Delete simulation')}
                    text={I18n.t('Simulation will be deleted. Confirm?')}
                    ok={I18n.t('ra_Delete')}
                    onClose={async isYes => {
                        if (isYes) {
                            await props.onDelete(simulation._id);
                            props.onClose();
                        }
                        setDeleteDialog(false);
                    }}
                />
            )}
            {idDialog && (
                <SelectID
                    imagePrefix="../.."
                    multiSelect
                    theme={props.theme}
                    selected={simulation.native.record.states}
                    onOk={ids => {
                        const _simulation: Simulation = JSON.parse(JSON.stringify(simulation));
                        _simulation.native.record = _simulation.native.record || { enums: [], states: [] };
                        _simulation.native.record.states = _simulation.native.record.states || [];
                        _simulation.native.record.states = (Array.isArray(ids) ? ids : [ids]) as string[];
                        setSimulation(_simulation);
                        setIdDialog(false);
                    }}
                    onClose={() => setIdDialog(false)}
                    socket={props.socket}
                />
            )}
            {enumsDialog !== false ? (
                <EnumsDialog
                    socket={props.socket}
                    enumsObjects={enumsObjects}
                    selectedEnums={typeof enumsDialog === 'number' ? simulation.native.record.enums[enumsDialog] : []}
                    exceptions={simulation.native.record.enumsExceptions || []}
                    onSelect={(enumIds, exceptions) => {
                        const _simulation: Simulation = JSON.parse(JSON.stringify(simulation));
                        _simulation.native.record = _simulation.native.record || { enums: [], states: [] };
                        _simulation.native.record.enums = _simulation.native.record.enums || [];
                        _simulation.native.record.enumsExceptions = exceptions || [];
                        if (typeof enumsDialog === 'number') {
                            _simulation.native.record.enums[enumsDialog] = enumIds;
                        } else {
                            _simulation.native.record.enums.push(enumIds);
                        }
                        setSimulation(_simulation);
                        setEnumsDialog(false);
                    }}
                    onClose={() => setEnumsDialog(false)}
                />
            ) : null}
        </Dialog>
    );
};

export default SimulationDialog;
