import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/ru';
import 'moment/locale/zh-cn';
import 'moment/locale/it';
import 'moment/locale/fr';
import 'moment/locale/es';
import 'moment/locale/nl';
import 'moment/locale/pl';
import 'moment/locale/pt';
import 'moment/locale/uk';
import { I18n } from '@iobroker/adapter-react-v5';
import {
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField,
} from '@mui/material';
import { useState } from 'react';
import { Cancel, Delete, PlayCircle } from '@mui/icons-material';
import { withStyles } from '@mui/styles';

const { LocalizationProvider, DateTimePicker } = require('@mui/x-date-pickers');
const { AdapterMoment } = require('@mui/x-date-pickers/AdapterMoment');

const styles = {
    field: {
        '& .MuiFormControl-root': { width: '100%' }, display: 'flex', alignItems: 'end', gap: 20,
    },
    tableCell: {
        textAlign: 'center',
    },
};

const PlaySimulationDialog = props => {
    const [playSimulation, setPlaySimulation] = useState({
        start: null,
        end: null,
        dow: [0, 1, 2, 3, 4, 5, 6],
    });

    moment.locale(I18n.getLanguage());

    return <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>{I18n.t('Play simulation')}</DialogTitle>
        <DialogContent>
            <div className={props.classes.field}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker
                        label="Start"
                        renderInput={params => <TextField {...params} variant="standard" />}
                        value={playSimulation.start}
                        onChange={date => setPlaySimulation({ ...playSimulation, start: date })}
                        InputProps={{
                            fullWidth: true,
                            style: { width: '100%' },
                        }}
                    />
                </LocalizationProvider>
                {playSimulation.start && <IconButton
                    onClick={() => setPlaySimulation({ ...playSimulation, start: null })}
                >
                    <Delete />
                </IconButton>}
            </div>
            <div className={props.classes.field}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker
                        label="End"
                        renderInput={params => <TextField {...params} variant="standard" />}
                        value={playSimulation.end}
                        onChange={date => setPlaySimulation({ ...playSimulation, end: date })}
                    />
                </LocalizationProvider>
                {playSimulation.end && <IconButton
                    onClick={() => setPlaySimulation({ ...playSimulation, end: null })}
                >
                    <Delete />
                </IconButton>}
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            {[0, 1, 2, 3, 4, 5, 6].map(value => <td
                                key={value}
                                className={props.classes.tableCell}
                            >
                                {moment().day(value).format('ddd')}
                            </td>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {[0, 1, 2, 3, 4, 5, 6].map(value => <td key={value}>
                                <Checkbox
                                    checked={playSimulation.dow.includes(value)}
                                    disabled={props.readOnly}
                                    onChange={e => {
                                        if (e.target.checked) {
                                            setPlaySimulation({ ...playSimulation, dow: [...playSimulation.dow, value] });
                                        } else {
                                            setPlaySimulation({ ...playSimulation, dow: playSimulation.dow.filter(v => v !== value) });
                                        }
                                    }}
                                    size="small"
                                />
                            </td>)}
                        </tr>
                    </tbody>
                </table>
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
                onClick={() => {
                    props.playSimulation(props.simulation._id, playSimulation);
                    props.onClose();
                }}
                variant="contained"
                color="primary"
                startIcon={<PlayCircle />}
            >
                {I18n.t('Play')}
            </Button>
        </DialogActions>
    </Dialog>;
};

export default withStyles(styles)(PlaySimulationDialog);
