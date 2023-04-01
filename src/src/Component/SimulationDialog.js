import { Confirm, I18n } from '@iobroker/adapter-react-v5';
import { Cancel, Delete, Save } from '@mui/icons-material';
import {
    Button,
    Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { withStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cron2obj, obj2cron } from './Utils';

const styles = {
    field: {
        display: 'flex',
        alignItems: 'end',
        gap: 20,
    },
};

const SimulationDialog = props => {
    const [simulation, setSimulation] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    useEffect(() => {
        setSimulation(props.simulation);
    }, [props.open]);
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
                onClick={props.onClose}
                variant="contained"
                color="grey"
                startIcon={<Cancel />}
            >
                {I18n.t('Cancel')}
            </Button>
            <Button
                onClick={async () => {
                    const _simulation = JSON.parse(JSON.stringify(simulation));
                    if (_simulation.native.interval !== props.simulation.native.interval) {
                        if (_simulation.native.interval === 'day') {
                            console.log( _simulation);
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
