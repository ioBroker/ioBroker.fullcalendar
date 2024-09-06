import { useState } from 'react';
import PropTypes from 'prop-types';
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
import {
    Button, Checkbox, Dialog, DialogActions,
    DialogContent, DialogTitle, IconButton, TextField,
    Box,
} from '@mui/material';
import { Cancel, Delete, PlayCircle } from '@mui/icons-material';
import { I18n } from '@iobroker/adapter-react-v5';

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

    return <Dialog open={!0} onClose={props.onClose}>
        <DialogTitle>{I18n.t('Play simulation')}</DialogTitle>
        <DialogContent>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Box component="div" sx={styles.field} style={{ width: '100%', marginBottom: 20, marginTop: 10 }}>
                    <DateTimePicker
                        label="Start"
                        sx={theme => ({
                            borderBottom: `1px solid ${theme.palette.text.primary}`,
                            '& fieldset': {
                                display: 'none',
                            },
                            '& input': {
                                padding: `${theme.spacing(1.5)} 0 4px 0`,
                            },
                            '& .MuiInputAdornment-root': {
                                marginLeft: 0,
                                marginTop: 1, // it is already in spaces
                            },
                            '& label': {
                                transform: 'translate(0px, -9px) scale(0.75)',
                            },
                        })}
                        renderInput={params => <TextField {...params} variant="standard" />}
                        value={playSimulation.start}
                        onChange={date => setPlaySimulation({ ...playSimulation, start: date })}
                        slotProps={{
                            input: {
                                fullWidth: true,
                                style: { width: '100%' },
                            },
                        }}
                    />
                    {playSimulation.start && <IconButton
                        onClick={() => setPlaySimulation({ ...playSimulation, start: null })}
                    >
                        <Delete />
                    </IconButton>}
                </Box>
                <Box component="div" sx={styles.field} style={{ width: '100%', marginBottom: 30 }}>
                    <DateTimePicker
                        label="End"
                        sx={theme => ({
                            borderBottom: `1px solid ${theme.palette.text.primary}`,
                            '& fieldset': {
                                display: 'none',
                            },
                            '& input': {
                                padding: `${theme.spacing(1.5)} 0 4px 0`,
                            },
                            '& .MuiInputAdornment-root': {
                                marginLeft: 0,
                                marginTop: 1, // it is already in spaces
                            },
                            '& label': {
                                transform: 'translate(0px, -9px) scale(0.75)',
                            },
                        })}
                        renderInput={params => <TextField {...params} variant="standard" />}
                        value={playSimulation.end}
                        onChange={date => setPlaySimulation({ ...playSimulation, end: date })}
                    />
                    {playSimulation.end && <IconButton
                        onClick={() => setPlaySimulation({ ...playSimulation, end: null })}
                    >
                        <Delete />
                    </IconButton>}
                </Box>
            </LocalizationProvider>
            <div>
                <table>
                    <thead>
                        <tr>
                            {[0, 1, 2, 3, 4, 5, 6].map(value => <td
                                key={value}
                                style={styles.tableCell}
                            >
                                {moment().day(value).format('ddd')}
                            </td>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {[0, 1, 2, 3, 4, 5, 6].map(value => <td key={value}>
                                <Checkbox
                                    aria-label="play simulation"
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
            <Button
                onClick={props.onClose}
                variant="contained"
                color="grey"
                startIcon={<Cancel />}
            >
                {I18n.t('Cancel')}
            </Button>
        </DialogActions>
    </Dialog>;
};

PlaySimulationDialog.propTypes = {
    onClose: PropTypes.func,
    playSimulation: PropTypes.func,
    simulation: PropTypes.object,
    readOnly: PropTypes.bool,
};

export default PlaySimulationDialog;
