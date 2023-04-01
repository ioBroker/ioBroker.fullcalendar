import { I18n, SelectID } from '@iobroker/adapter-react-v5';
import {
    Button,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import { Cancel, FiberManualRecord } from '@mui/icons-material';
import EnumsDialog from './EnumsDialog';

const styles = {
    field: {
        display: 'flex',
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
            <DialogContentText>
                {I18n.t('Record simulation description')}
            </DialogContentText>
            <div className={props.classes.field}>
                <TextField
                    label={I18n.t('States')}
                    fullWidth
                    value={states.join(', ')}
                    variant="standard"
                />
                <Button
                    onClick={() => setIdDialog(true)}
                    color="primary"
                >
                    ...
                </Button>
            </div>
            <div className={props.classes.field}>
                <TextField
                    label={I18n.t('Enums')}
                    fullWidth
                    value={enums.join(', ')}
                    variant="standard"
                />
                <Button
                    onClick={() => setEnumsDialog(true)}
                    color="primary"
                >
                    ...
                </Button>
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

export default withStyles(styles)(RecordSimulationDialog);
