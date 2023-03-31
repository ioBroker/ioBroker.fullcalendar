import { I18n } from '@iobroker/adapter-react-v5';
import { Cancel, Save } from '@mui/icons-material';
import {
    Button,
    Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';

const SimulationDialog = props => {
    const [simulation, setSimulation] = useState(null);
    useEffect(() => {
        setSimulation(props.simulation);
    }, [props.open]);
    if (!simulation) return null;
    return <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>{I18n.t('Create simulation')}</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
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
                    await props.socket.setObject(simulation._id, simulation);
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
    </Dialog>;
};

export default SimulationDialog;
