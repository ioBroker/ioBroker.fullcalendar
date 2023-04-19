import { withStyles } from '@mui/styles';
import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField,
    IconButton, Chip,
} from '@mui/material';

import {
    Cancel, Delete, Save, Add,
} from '@mui/icons-material';

import {
    Confirm, I18n, ColorPicker, SelectID, TextWithIcon,
} from '@iobroker/adapter-react-v5';

import { cron2obj, obj2cron } from './Utils';
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
};

const SimulationDialog = props => {
    const [simulation, setSimulation] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [idDialog, setIdDialog] = useState(false);
    const [enumsDialog, setEnumsDialog] = useState(false);
    const [enumStates, setEnumStates] = useState([]);
    const [enumsObjects, setEnumsObjects] = useState({});
    const [statesObjects, setStatesObjects] = useState({});
    const timer = useRef(null);

    useEffect(() => {
        if (props.open) {
            setSimulation(props.simulation);
            setEnumStates([]);
            if (!Object.keys(enumsObjects).length) {
                // request enums
                props.socket.getEnums()
                    .then(_enums => setEnumsObjects(_enums));
            }
        } else {
            setSimulation(null);
            timer.current && clearTimeout(timer.current);
            timer.current = null;
        }
    }, [props.open]);

    useEffect(() => {
        if (!simulation) {
            return;
        }

        (async () => {
            const _states = [];

            console.log(simulation.native.record.enums);
            const _enums = simulation.native.record.enums || [];

            let objEnums = enumsObjects;
            if (!Object.keys(objEnums).length) {
                // request enums
                objEnums = await props.socket.getEnums();
                setEnumsObjects(objEnums);
            }

            for (const k in _enums) {
                const _enumStates = _enums[k].map(id => objEnums[id]?.common?.members).filter(v => v);
                let intersection = [];
                _enumStates.forEach((s, i) => {
                    if (intersection.length || i) {
                        intersection = intersection.filter(j => s.includes(j));
                    } else {
                        intersection = s;
                    }
                });
                _states.push(...intersection);
            }

            const _enumStates = _states.filter((v, i, a) => a.indexOf(v) === i);
            simulation?.native.record?.states.forEach(id => !_enumStates.includes(id) && _enumStates.push(id));

            setEnumStates(_enumStates);
        })();
    }, [simulation?.native.record?.enums, simulation?.native.record?.states]);

    const requestStates = () => {
        timer.current && clearTimeout(timer.current);
        timer.current = setTimeout(async () => {
            timer.current = null;
            const _statesObjects = JSON.parse(JSON.stringify(statesObjects));
            for (let i = 0; i < enumStates.length; i++) {
                if (!_statesObjects[enumStates[i]]) {
                    try {
                        _statesObjects[enumStates[i]] = await props.socket.getObject(enumStates[i]);
                    } catch (e) {
                        console.error(`Cannot get object for ${enumStates[i]}: ${e}`);
                    }
                    _statesObjects[enumStates[i]] = _statesObjects[enumStates[i]] || null;
                }
            }

            setStatesObjects(_statesObjects);
        }, 300);
    };

    const getStateChip = (id, onDelete) => {
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

    return <Dialog open={props.open} onClose={props.onClose}>
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
                    value={simulation.native.defaultColor}
                    onChange={color => {
                        const _simulation = JSON.parse(JSON.stringify(simulation));
                        _simulation.native.defaultColor = color;
                        setSimulation(_simulation);
                    }}
                />
            </div>
            <h4 className={props.classes.headers}>
                {I18n.t('States')}
                <IconButton
                    size="small"
                    onClick={() => setIdDialog(true)}
                    color="primary"
                >
                    <Add />
                </IconButton>
            </h4>
            <div>
                {simulation.native.record?.states.map((state, i) => getStateChip(state, () => {
                    const _simulation = JSON.parse(JSON.stringify(simulation));
                    _simulation.native.record.states.splice(i, 1);
                    setSimulation(_simulation);
                }))}
            </div>
            <h4 className={props.classes.headers}>
                {I18n.t('Enums')}
                <IconButton
                    size="small"
                    onClick={() => setEnumsDialog(true)}
                    color="primary"
                >
                    <Add />
                </IconButton>
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
                {enumStates.map(state => {
                    if (statesObjects[state] === undefined && !timer.current) {
                        requestStates();
                    }

                    return getStateChip(state);
                })}
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
                disabled={!props.simulation || !simulation || JSON.stringify(simulation.native) === JSON.stringify(props.simulation.native)}
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
                    await props.refreshSimulations();
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
                {I18n.t('Cancel')}
            </Button>
        </DialogActions>
        {deleteDialog && <Confirm
            fullWidth={false}
            title={I18n.t('Delete simulation')}
            text={I18n.t('Simulation will be deleted. Confirm?')}
            ok={I18n.t('Delete')}
            onClose={async isYes => {
                if (isYes) {
                    try {
                        await props.socket.delObject(simulation._id);
                        if (props.selectedSimulation === simulation._id) {
                            props.setSelectedSimulation(null);
                        }
                        await props.refreshSimulations();
                    } catch (e) {
                        window.alert(`Cannot delete simulation: ${e}`);
                    }

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
        <EnumsDialog
            socket={props.socket}
            enumsObjects={enumsObjects}
            instance={props.instance}
            open={enumsDialog !== false}
            selectedEnums={typeof enumsDialog === 'number' ? simulation.native.record.enums[enumsDialog] : []}
            onSelect={ids => {
                const _simulation = JSON.parse(JSON.stringify(simulation));
                _simulation.native.record = _simulation.native.record || { enums: [], states: [] };
                _simulation.native.record.enums = _simulation.native.record.enums || [];
                if (typeof enumsDialog === 'number') {
                    _simulation.native.record.enums[enumsDialog] = ids;
                } else {
                    _simulation.native.record.enums.push(ids);
                }
                setSimulation(_simulation);
                setEnumsDialog(false);
            }}
            onClose={() => setEnumsDialog(false)}
        />
    </Dialog>;
};

SimulationDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    simulation: PropTypes.object,
    socket: PropTypes.object,
    refreshSimulations: PropTypes.func,
    selectedSimulation: PropTypes.string,
    setSelectedSimulation: PropTypes.func,
};

export default withStyles(styles)(SimulationDialog);
