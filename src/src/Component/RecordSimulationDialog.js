import { I18n, SelectID } from '@iobroker/adapter-react-v5';
import {
    Button,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';

const RecordSimulationDialog = props => {
    const [states, setStates] = useState([]);
    const [idDialog, setIdDialog] = useState(true);
    useEffect(() => {
        setStates([]);
    }, [props.open]);

    const handleRecord = () => {
        props.recordSimulation(props.simulation._id, states);
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
            <div>
                <TextField
                    margin="dense"
                    id="states"
                    label={I18n.t('States')}
                    type="text"
                    fullWidth
                    value={states.join(', ')}
                />
                <Button
                    onClick={() => setIdDialog(true)}
                    color="primary"
                >
                    ...
                </Button>
            </div>
        </DialogContent>
        <DialogActions>
            <Button
                onClick={props.onClose}
                color="primary"
            >
                {I18n.t('Cancel')}
            </Button>
            <Button onClick={handleRecord} color="primary">
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
    </Dialog>;
};

export default RecordSimulationDialog;
