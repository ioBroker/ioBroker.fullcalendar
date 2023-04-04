import { I18n, SelectID } from '@iobroker/adapter-react-v5';
import {
    Button,
    Chip,
    Dialog, DialogActions, DialogContent, DialogTitle, IconButton,
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
    const [enumStates, setEnumStates] = useState([]);
    const [idDialog, setIdDialog] = useState(false);
    const [enumsDialog, setEnumsDialog] = useState(false);
    useEffect(() => {
        setStates([]);
        setEnums([]);
    }, [props.open]);
    useEffect(() => {
        (async () => {
            const _states = [];
            console.log(enums);
            for (const k in enums) {
                const _enumStates = (await Promise.all(enums[k].map(id => props.socket.getObject(id)))).map(e => e.common.members);
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
    }, [enums]);

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
                {enums.map(enumIds => <Chip
                    onDelete={() => {
                        const _enums = JSON.parse(JSON.stringify(enums));
                        _enums.splice(_enums.indexOf(enumIds), 1);
                        setEnums(_enums);
                    }}
                    label={enumIds.join(' + ')}
                    key={enumIds}
                    className={props.classes.chip}
                />)}
            </div>
            <h4>{I18n.t('States from enums')}</h4>
            <div className={props.classes.field}>
                {enumStates.map(state => <Chip
                    label={state}
                    key={state}
                    className={props.classes.chip}
                />)}
            </div>
        </DialogContent>
        <DialogActions>
            <Button
                onClick={handleRecord}
                variant="contained"
                color="primary"
                startIcon={<FiberManualRecord />}
            >
                {I18n.t('Record')}
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
            selectedEnums={[]}
            onSelect={ids => {
                setEnums(_enums => [..._enums, ids]);
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
