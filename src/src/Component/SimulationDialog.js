import {
    Confirm, I18n, ColorPicker, SelectID,
} from '@iobroker/adapter-react-v5';
import {
    Cancel, Delete, Save, Add,
} from '@mui/icons-material';
import {
    Button,
    Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField,
    IconButton, Chip,
} from '@mui/material';
import { withStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
};

const SimulationDialog = props => {
    const [simulation, setSimulation] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [idDialog, setIdDialog] = useState(false);
    const [enumsDialog, setEnumsDialog] = useState(false);
    const [enumStates, setEnumStates] = useState([]);
    useEffect(() => {
        setSimulation(props.simulation);
        setEnumStates([]);
    }, [props.open]);
    useEffect(() => {
        if (!simulation) return;
        (async () => {
            const _states = [];
            console.log(simulation.native.record.enums);
            for (const k in simulation.native.record.enums) {
                const _enumStates = (await Promise.all(simulation.native.record.enums[k].map(id => props.socket.getObject(id)))).map(e => e.common.members);
                let intersection = [];
                _enumStates.forEach((s, i) => {
                    if (intersection.length || i) {
                        intersection = intersection.filter(i => s.includes(i));
                    } else {
                        intersection = s;
                    }
                    console.log(intersection);
                });
                _states.push(...intersection);
            }
            setEnumStates(_states.filter((v, i, a) => a.indexOf(v) === i));
        })();
    }, [simulation?.native.record.enums]);
    if (!simulation) return null;
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
            <h4>
                {I18n.t('States')}
                <IconButton
                    onClick={() => setIdDialog(true)}
                    color="primary"
                >
                    <Add />
                </IconButton>
            </h4>
            <div>
                {simulation.native.record.states.map((state, i) => <Chip
                    onDelete={() => {
                        const _simulation = JSON.parse(JSON.stringify(simulation));
                        _simulation.native.record.states.splice(i, 1);
                        setSimulation(_simulation);
                    }}
                    label={state}
                    key={i}
                    className={props.classes.chip}
                />)}
            </div>
            <h4>
                {I18n.t('Enums')}
                <IconButton
                    onClick={() => setEnumsDialog(true)}
                    color="primary"
                >
                    <Add />
                </IconButton>
            </h4>
            <div>
                {simulation.native.record.enums.map((enumIds, i) => <Chip
                    onDelete={() => {
                        const _simulation = JSON.parse(JSON.stringify(simulation));
                        _simulation.native.record.enums.splice(i, 1);
                        setSimulation(_simulation);
                    }}
                    label={enumIds.join(' + ')}
                    key={i}
                    className={props.classes.chip}
                />)}
            </div>
            <h4>{I18n.t('States from enums')}</h4>
            <div>
                {enumStates.map((state, i) => <Chip
                    label={state}
                    key={i}
                    className={props.classes.chip}
                />)}
            </div>
            {/* <pre>{JSON.stringify(simulation, null, 2)}</pre> */}
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
            title={I18n.t('Delete simulation')}
            text={I18n.t('Simulation will be deleted. Confirm?')}
            suppressQuestionMinutes={5}
            dialogName="deleteConfirmDialog"
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
                _simulation.native.record.states = ids;
                setSimulation(_simulation);
                setIdDialog(false);
            }}
            onClose={() => setIdDialog(false)}
            socket={props.socket}
        />}
        <EnumsDialog
            socket={props.socket}
            instance={props.instance}
            open={enumsDialog}
            selectedEnums={[]}
            onSelect={ids => {
                const _simulation = JSON.parse(JSON.stringify(simulation));
                _simulation.native.record.enums.push(ids);
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
