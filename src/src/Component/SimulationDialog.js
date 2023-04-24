import { withStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField,
    IconButton, Chip, Tooltip, LinearProgress,
} from '@mui/material';

import {
    Cancel, Delete, Save, Add,
} from '@mui/icons-material';

import {
    Confirm, I18n, ColorPicker, SelectID, TextWithIcon,
} from '@iobroker/adapter-react-v5';

import {
    IGNORE_STATES,
    getIconAsync,
    getCachedObject,
    cron2obj,
    obj2cron,
    buildOverlap,
} from './Utils';
import EnumsDialog from './EnumsDialog';

const styles = {
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
    '@keyframes blinker': {
        from: { opacity: 'red' },
        to: { color: 'inherit' },
    },
    blink: {
        animationName: '$blinker',
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
    },
    tooltip: {
        pointerEvents: 'none',
    },
};

const SimulationDialog = props => {
    const [simulation, setSimulation] = useState(props.simulation);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [idDialog, setIdDialog] = useState(false);
    const [enumsDialog, setEnumsDialog] = useState(false);
    const [enumStates, setEnumStates] = useState([]);
    const [enumsObjects, setEnumsObjects] = useState({});
    const [statesObjects, setStatesObjects] = useState({});
    const [working, setWorking] = useState(false);

    const requestStates = async _enumStates => {
        _enumStates = _enumStates || enumStates;
        const _statesObjects = {};
        for (let i = 0; i < _enumStates.length; i++) {
            const id = _enumStates[i];
            if (!_statesObjects[id] && !id.startsWith('alexa2.')) {
                try {
                    _statesObjects[id] = await getCachedObject(id, props.socket);
                    if (_statesObjects[id]?.common) {
                        _statesObjects[id].common.icon = await getIconAsync(id, props.socket);
                    }
                    if (_statesObjects[id] && (_statesObjects[id].type === 'channel' || _statesObjects[id].type === 'device')) {
                        // find out if any writable state exists
                        const subStates = await props.socket.getObjectViewSystem('state', `${id}.`, `${id}.\u9999`);
                        const keys = Object.keys(subStates);
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
                                    _statesObjects[sid].common.icon = await getIconAsync(sid, props.socket);
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

        Object.keys(_statesObjects).forEach(id => _statesObjects[id] && _statesObjects[id].type === 'state' && console.log(`+ ${id}`));

        setStatesObjects(_statesObjects);
        setWorking(false);
    };

    useEffect(() => {
        setWorking(true);

        (async () => {
            let _enumsObjects = enumsObjects;
            if (!Object.keys(enumsObjects).length) {
                _enumsObjects = await props.socket.getEnums();
                setEnumsObjects(_enumsObjects);
            }

            const lists = simulation?.native?.record?.enums || [];
            const _enumStates = [];
            lists.forEach(list => {
                const res = buildOverlap(list, _enumsObjects, simulation?.native?.record?.enumsExceptions || []);
                res.forEach(id => !_enumStates.includes(id) && _enumStates.push(id));
            });

            // add normal states
            simulation?.native.record?.states.forEach(id => !_enumStates.includes(id) && _enumStates.push(id));

            setEnumStates(_enumStates);
            await requestStates(_enumStates);
        })();
    }, [simulation?.native.record?.enums, simulation?.native.record?.states]);

    const getStateChip = (id, onDelete) => {
        if (!statesObjects[id] || statesObjects[id].type !== 'state') {
            return null;
        }

        if (statesObjects[id].common && statesObjects[id].common.write === false) {
            // do not show read-only states
            return null;
        }

        const label = <div>
            <TextWithIcon value={statesObjects[id] || id} title={id} lang={I18n.getLanguage()} />
            <div className={props.classes.chipSubText}>{id}</div>
        </div>;

        return <Chip
            onDelete={onDelete}
            label={label}
            key={id}
            className={props.classes.chip}
        />;
    };

    if (!simulation) {
        return null;
    }

    const disabled = !props.simulation || !simulation || (
        JSON.stringify(simulation.native) === JSON.stringify(props.simulation.native) &&
        JSON.stringify(simulation.common) === JSON.stringify(props.simulation.common)
    );

    return <Dialog open={!0} onClose={props.onClose}>
        <DialogTitle>{I18n.t('Edit simulation')}</DialogTitle>
        <DialogContent>
            <div className={props.classes.field}>
                <TextField
                    label={I18n.t('Name')}
                    value={simulation.common.name || ''}
                    onChange={e => {
                        const _simulation = JSON.parse(JSON.stringify(simulation));
                        _simulation.common.name = e.target.value;
                        setSimulation(_simulation);
                    }}
                    variant="standard"
                />
                <FormControl
                    variant="standard"
                >
                    <InputLabel>{I18n.t('Interval')}</InputLabel>
                    <Select
                        value={simulation.native.interval || ''}
                        onChange={e => {
                            const _simulation = JSON.parse(JSON.stringify(simulation));
                            _simulation.native.interval = e.target.value;
                            setSimulation(_simulation);
                        }}
                        variant="standard"
                    >
                        {['day', 'week'].map(interval => <MenuItem
                            value={interval}
                            key={interval}
                        >
                            {I18n.t(interval)}
                        </MenuItem>)}
                    </Select>
                </FormControl>
            </div>
            <div className={props.classes.field}>
                <ColorPicker
                    label={I18n.t('Default color')}
                    value={simulation.common.color}
                    onChange={color => {
                        const _simulation = JSON.parse(JSON.stringify(simulation));
                        _simulation.common.color = color;
                        setSimulation(_simulation);
                    }}
                />
            </div>
            <h4 className={props.classes.headers}>
                {I18n.t('States')}
                <Tooltip title={I18n.t('Add states for recording')} classes={{ popper: props.classes.tooltip }}>
                    <IconButton
                        className={!enumStates.length && simulation?.native?.record?.states?.length ? props.classes.blink : ''}
                        size="small"
                        onClick={() => setIdDialog(true)}
                        color="primary"
                    >
                        <Add />
                    </IconButton>
                </Tooltip>
            </h4>
            <div>
                {simulation.native.record?.states.map((state, i) => getStateChip(state, () => {
                    const _simulation = JSON.parse(JSON.stringify(simulation));
                    _simulation.native.record.states.splice(i, 1);
                    setSimulation(_simulation);
                }))}
            </div>
            <h4 className={props.classes.headers}>
                {I18n.t('Categories')}
                <Tooltip title={I18n.t('Add overlap of categories for recording')} classes={{ popper: props.classes.tooltip }}>
                    <IconButton
                        className={!enumStates.length && simulation?.native?.record?.states?.length ? props.classes.blink : ''}
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
                    const ids = enumIds.map(id => <TextWithIcon key={id} value={enumsObjects[id] || id} lang={I18n.getLanguage()} />);
                    let j = 1;
                    const label = ids.reduce((prev, curr) => [prev, <span key={j++}>+</span>, curr]);

                    return <Chip
                        onClick={() => setEnumsDialog(i)}
                        onDelete={() => {
                            const _simulation = JSON.parse(JSON.stringify(simulation));
                            _simulation.native.record.enums.splice(i, 1);
                            setSimulation(_simulation);
                        }}
                        label={label}
                        key={i}
                        classes={{ label: props.classes.chipLabel }}
                        className={props.classes.chip}
                    />;
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
                    const _simulation = JSON.parse(JSON.stringify(simulation));
                    if (_simulation.native.interval !== props.simulation.native.interval) {
                        if (_simulation.native.interval === 'day') {
                            console.log(_simulation);
                            _simulation.native.events.forEach(event => {
                                console.log(event.native.cron);
                                const cron = cron2obj(event.native.cron);
                                console.log(cron);
                                cron.dows = [0, 1, 2, 3, 4, 5, 6];
                                event.native.cron = obj2cron(cron);
                                console.log(event.native.cron);
                            });
                        }
                    }
                    await props.socket.setObject(simulation._id, _simulation);
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
        {deleteDialog && <Confirm
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
        />}
        {idDialog && <SelectID
            imagePrefix="../.."
            multiSelect
            selected={simulation.native.record.states}
            onOk={ids => {
                const _simulation = JSON.parse(JSON.stringify(simulation));
                _simulation.native.record = _simulation.native.record || { enums: [], states: [] };
                _simulation.native.record.states = _simulation.native.record.states || [];
                _simulation.native.record.states = ids;
                setSimulation(_simulation);
                setIdDialog(false);
            }}
            onClose={() => setIdDialog(false)}
            socket={props.socket}
        />}
        {enumsDialog !== false ? <EnumsDialog
            socket={props.socket}
            enumsObjects={enumsObjects}
            instance={props.instance}
            selectedEnums={typeof enumsDialog === 'number' ? simulation.native.record.enums[enumsDialog] : []}
            exceptions={simulation.native.record.enumsExceptions || []}
            onSelect={(enumIds, exceptions) => {
                const _simulation = JSON.parse(JSON.stringify(simulation));
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
        /> : null}
    </Dialog>;
};

SimulationDialog.propTypes = {
    onClose: PropTypes.func,
    onDelete: PropTypes.func,
    simulation: PropTypes.object,
    socket: PropTypes.object,
};

export default withStyles(styles)(SimulationDialog);
