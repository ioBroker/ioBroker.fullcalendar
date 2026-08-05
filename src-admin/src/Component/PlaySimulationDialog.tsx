import { useState } from 'react';
import type { CSSProperties, JSX } from 'react';
import moment from 'moment';
import type { Moment } from 'moment';
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
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Box } from '@mui/material';
import { Cancel, Delete, PlayCircle } from '@mui/icons-material';
import { I18n } from '@iobroker/gui-components';

import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import type { Simulation } from './Utils';

const styles: Record<string, any> = {
    field: {
        '& .MuiFormControl-root': { width: '100%' },
        display: 'flex',
        alignItems: 'end',
        gap: '20px',
    },
    tableCell: {
        textAlign: 'center',
    } as CSSProperties,
};

/** Playback settings collected in this dialog; times are still moment objects here */
export interface PlaySettings {
    start: Moment | null;
    end: Moment | null;
    dow: number[];
}

interface PlaySimulationDialogProps {
    onClose: () => void;
    playSimulation: (id: string, settings: PlaySettings) => void;
    simulation: Simulation;
    readOnly?: boolean;
}

const PlaySimulationDialog = (props: PlaySimulationDialogProps): JSX.Element => {
    const [playSimulation, setPlaySimulation] = useState<PlaySettings>({
        start: null,
        end: null,
        dow: [0, 1, 2, 3, 4, 5, 6],
    });

    moment.locale(I18n.getLanguage());

    return (
        <Dialog
            open={!0}
            onClose={props.onClose}
        >
            <DialogTitle>{I18n.t('Play simulation')}</DialogTitle>
            <DialogContent>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Box
                        component="div"
                        sx={styles.field}
                        style={{ width: '100%', marginBottom: 20, marginTop: 10 }}
                    >
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
                                '&.MuiTextField-root': {
                                    width: '100%',
                                },
                            })}
                            value={playSimulation.start}
                            onChange={date => setPlaySimulation({ ...playSimulation, start: date as Moment | null })}
                        />
                        {playSimulation.start && (
                            <IconButton onClick={() => setPlaySimulation({ ...playSimulation, start: null })}>
                                <Delete />
                            </IconButton>
                        )}
                    </Box>
                    <Box
                        component="div"
                        sx={styles.field}
                        style={{ width: '100%', marginBottom: 30 }}
                    >
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
                            value={playSimulation.end}
                            onChange={date => setPlaySimulation({ ...playSimulation, end: date as Moment | null })}
                        />
                        {playSimulation.end && (
                            <IconButton onClick={() => setPlaySimulation({ ...playSimulation, end: null })}>
                                <Delete />
                            </IconButton>
                        )}
                    </Box>
                </LocalizationProvider>
                <div>
                    <table>
                        <thead>
                            <tr>
                                {[0, 1, 2, 3, 4, 5, 6].map(value => (
                                    <td
                                        key={value}
                                        style={styles.tableCell}
                                    >
                                        {moment().day(value).format('ddd')}
                                    </td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {[0, 1, 2, 3, 4, 5, 6].map(value => (
                                    <td key={value}>
                                        <Checkbox
                                            aria-label="play simulation"
                                            checked={playSimulation.dow.includes(value)}
                                            disabled={props.readOnly}
                                            onChange={e => {
                                                if (e.target.checked) {
                                                    setPlaySimulation({
                                                        ...playSimulation,
                                                        dow: [...playSimulation.dow, value],
                                                    });
                                                } else {
                                                    setPlaySimulation({
                                                        ...playSimulation,
                                                        dow: playSimulation.dow.filter(v => v !== value),
                                                    });
                                                }
                                            }}
                                            size="small"
                                        />
                                    </td>
                                ))}
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
        </Dialog>
    );
};

export default PlaySimulationDialog;
