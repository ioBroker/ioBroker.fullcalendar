import { I18n, SelectID } from '@iobroker/adapter-react-v5';
import {
    Button,
    Chip,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { Add, Cancel, FiberManualRecord } from '@mui/icons-material';
import EnumsDialog from './EnumsDialog';

const styles = {
    field: {

    },
    chip: {
        margin: 2,
    },
};

const RecordSimulationDialog = props => {
    const [states, setStates] = useState([]);
    const [enums, setEnums] = useState([]);
    const [idDialog, setIdDialog] = useState(false);
    const [enumsDialog, setEnumsDialog] = useState(false);
    useEffect(() => {
        setStates([]);
    }, [props.open]);

    const handleRecord = () => {
        props.recordSimulation(props.simulation._id, states, enums);
        props.onClose();
    };

    return <Dialog
        open={props.open}
        onClose={props.onClose}
    >
        <DialogTitle>{I18n.t('Record simulation')}</DialogTitle>
        <DialogContent>
            <h4>
                {I18n.t('States')}
                <IconButton
                    onClick={() => setIdDialog(true)}
                    color="primary"
                >
                    <Add />
                </IconButton>
            </h4>
            <div className={props.classes.field}>
                <div className={props.classes.field}>
                    {states.map(state => <Chip
                        onDelete={() => {
                            const _states = JSON.parse(JSON.stringify(states));
                            _states.splice(_states.indexOf(state), 1);
                            setStates(_states);
                        }}
                        label={state}
                        key={state}
                        className={props.classes.chip}
                    />)}
                </div>

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
            <div className={props.classes.field}>
                {enums.map(enumId => <Chip
                    onDelete={() => {
                        const _enums = JSON.parse(JSON.stringify(enums));
                        _enums.splice(_enums.indexOf(enumId), 1);
                        setEnums(_enums);
                    }}
                    label={enumId}
                    key={enumId}
                    className={props.classes.chip}
                />)}
            </div>
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
                onClick={handleRecord}
                variant="contained"
                color="primary"
                startIcon={<FiberManualRecord />}
            >
                {I18n.t('Record')}
            </Button>
        </DialogActions>
        {idDialog && <SelectID
            imagePrefix="../.."
            multiSelect
            selected={states}
            onOk={ids => {
                setStates(ids);
                setIdDialog(false);
            }}
            onClose={() => setIdDialog(false)}
            socket={props.socket}
        />}
        <EnumsDialog
            socket={props.socket}
            instance={props.instance}
            open={enumsDialog}
            selectedEnums={enums}
            onSelect={ids => {
                setEnums(ids);
            }}
            onClose={() => setEnumsDialog(false)}
        />
    </Dialog>;
};

RecordSimulationDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    recordSimulation: PropTypes.func,
    simulation: PropTypes.object,
    socket: PropTypes.object,
    instance: PropTypes.any,
};

export default withStyles(styles)(RecordSimulationDialog);
