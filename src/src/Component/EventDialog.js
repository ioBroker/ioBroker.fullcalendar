import {
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { Cancel, Delete, Save } from '@mui/icons-material';
import {
    ColorPicker, I18n, SelectID, Confirm,
} from '@iobroker/adapter-react-v5';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import moment from 'moment';
import { withStyles } from '@mui/styles';
import {
    clientDateToServer, cron2obj, obj2cron, serverDateToClient,
} from './Utils';

const typeDescriptions = {
    single: 'single_description',
    double: 'double_description',
    toggle: 'toggle_description',
};

const styles = {
    field: {
        padding: '2px 0px',
    },
    tableCell: {
        textAlign: 'center',
    },
    dialogActions: {
        justifyContent: 'space-between',
    },
    dialogActionsRight: {
        display: 'flex',
        gap: 8,
    },
    typeDescription: {
        fontSize: 12,
        whiteSpace: 'normal',
        fontStyle: 'italic',
    },
    selectId: {
        display: 'flex',
    },
};

const EventDialog = props => {
    const [idDialog, setIdDialog] = useState(false);
    const [event, setEvent] = useState(props.event);
    const [object, setObject] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const updateObject = async id => {
        if (id) {
            setObject(await props.socket.getObject(id));
        } else {
            setObject(null);
        }
    };
    useEffect(() => {
        setEvent(props.event);
        updateObject(event?.native.oid);
    }, [props.open]);

    const cronObject = event?.native.cron ? cron2obj(event?.native.cron) : null;
    let period = 'once';
    if (Array.isArray(cronObject?.months)) {
        period = 'monthly';
    } else if (Array.isArray(cronObject?.dows)) {
        period = 'daily';
    }

    let date;

    if (event) {
        if (period === 'once') {
            date = serverDateToClient(event.native.start, 'date', props.serverTimeZone);
        } else if (period === 'monthly' || period === 'daily') {
            date = serverDateToClient(event.native.cron, 'cron', props.serverTimeZone);
        }
    }

    const changeEvent = modify => {
        const newEvent = JSON.parse(JSON.stringify(event));
        modify(newEvent);
        setEvent(newEvent);
    };

    const valueField = (field, name) => {
        if (!object) {
            return null;
        }
        if (object.common.type === 'boolean') {
            return <FormControlLabel
                control={<Checkbox
                    checked={!!event?.native[field]}
                    onChange={e => {
                        changeEvent(newEvent => newEvent.native[field] = e.target.checked);
                    }}
                />}
                label={I18n.t(name)}
            />;
        } if (object.common.states) {
            return <FormControl
                fullWidth
                variant="standard"
            >
                <InputLabel>{I18n.t(name)}</InputLabel>
                <Select
                    value={event?.native[field] || ''}
                    onChange={e => {
                        changeEvent(newEvent => newEvent.native[field] = e.target.value);
                    }}
                >
                    {Object.keys(object.common.states)
                        .map(option => <MenuItem key={option} value={option}>{object.common.states[option]}</MenuItem>)}
                </Select>
            </FormControl>;
        }
        return <TextField
            label={I18n.t(name)}
            value={event?.native[field] || ''}
            onChange={e =>
                changeEvent(newEvent => newEvent.native[field] = e.target.value)}
            variant="standard"
            fullWidth
        />;
    };

    return <Dialog open={props.open} onClose={props.onClose} fullWidth>
        <DialogTitle>{I18n.t('Configure event')}</DialogTitle>
        <DialogContent>
            {idDialog && <SelectID
                selected={event?.native.oid}
                onOk={id => {
                    changeEvent(newEvent => newEvent.native.oid = id);
                    setIdDialog(false);
                    updateObject(id);
                }}
                onClose={() => setIdDialog(false)}
                socket={props.socket}
            />}
            <div className={props.classes.field}>
                <FormControlLabel
                    control={<Checkbox
                        checked={!!event?.common.enabled}
                        onChange={e =>
                            changeEvent(newEvent => newEvent.common.enabled = e.target.checked)}
                    />}
                    label={I18n.t('Active')}
                />
            </div>
            <div className={props.classes.field}>
                <FormControl
                    fullWidth
                    variant="standard"
                >
                    <InputLabel>{I18n.t('Event type')}</InputLabel>
                    <Select
                        value={event?.native.type || ''}
                        onChange={e =>
                            changeEvent(newEvent => newEvent.native.type = e.target.value)}
                        renderValue={value => I18n.t(value)}
                    >
                        {['single', 'double', 'toggle'].map(type =>
                            <MenuItem key={type} value={type}>
                                <div>
                                    <div>{I18n.t(type)}</div>
                                    <div className={props.classes.typeDescription}>{I18n.t(typeDescriptions[type])}</div>
                                </div>
                            </MenuItem>)}
                    </Select>
                </FormControl>
            </div>
            <div className={props.classes.field}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <TimePicker
                        label="Time"
                        value={date || null}
                        onChange={_date => {
                            if (!_date) {
                                return;
                            }
                            try {
                                changeEvent(newEvent => {
                                    if (period === 'once') {
                                        newEvent.native.start = clientDateToServer(_date.toDate(), 'date', props.serverTimeZone);
                                    } else if (period === 'monthly' || period === 'daily') {
                                        const newCron = cron2obj(newEvent.native.cron);
                                        const timeZoneCron = clientDateToServer(_date.toDate(), 'cron', props.serverTimeZone);
                                        newCron.hours = timeZoneCron.hours;
                                        newCron.minutes = timeZoneCron.minutes;
                                        newEvent.native.cron = obj2cron(newCron);
                                    }
                                });
                            } catch {
                                //
                            }
                        }}
                        renderInput={params => <TextField {...params} variant="standard" fullWidth />}
                        ampm={false}
                    />
                </LocalizationProvider>
            </div>
            {event?.native.type !== 'single' && <div className={props.classes.field}>
                <TextField
                    label={I18n.t('Duration')}
                    value={(event?.native.intervals?.[0].timeOffset || 0) / 1000 / 60}
                    onChange={e =>
                        changeEvent(newEvent => newEvent.native.intervals[0].timeOffset = e.target.value * 1000 * 60)}
                    variant="standard"
                    fullWidth
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{I18n.t('minutes')}</InputAdornment>,
                    }}
                />
            </div>}
            <div className={props.classes.field}>
                <div className={props.classes.selectId}>
                    <TextField
                        label="Object ID"
                        value={event?.native.oid || ''}
                        onChange={e => {
                            changeEvent(newEvent => newEvent.native.oid = e.target.value);
                            updateObject(e.target.value);
                        }}
                        variant="standard"
                        fullWidth
                    />
                    <Button onClick={() => setIdDialog(true)}>...</Button>
                </div>
            </div>
            <div className={props.classes.field}>
                {valueField('startValue', event?.native.type === 'toggle' ? 'First value' : 'Start value')}
            </div>
            {event?.native.type === 'double' && <div className={props.classes.field}>
                {valueField('endValue', 'End value')}
            </div>}
            <div className={props.classes.field}>
                <FormControl
                    fullWidth
                    variant="standard"
                >
                    <InputLabel>{I18n.t('Period')}</InputLabel>
                    <Select
                        value={period || 'once'}
                        onChange={e => {
                            if (e.target.value === event.native.cron) {
                                return;
                            }
                            changeEvent(newEvent => {
                                if (e.target.value === 'once') {
                                    delete newEvent.native.cron;
                                    newEvent.native.start = clientDateToServer(date, 'date', props.serverTimeZone);
                                } else if (e.target.value === 'daily') {
                                    delete newEvent.native.start;
                                    const newCronObject = cron2obj('0 0 ? * 0-6');
                                    const timeZoneCron = clientDateToServer(date, 'cron', props.serverTimeZone);
                                    newCronObject.hours = timeZoneCron.hours;
                                    newCronObject.minutes = timeZoneCron.minutes;
                                    newEvent.native.cron = obj2cron(newCronObject);
                                } else if (e.target.value === 'monthly') {
                                    delete newEvent.native.start;
                                    const newCronObject = cron2obj('0 0 ? 1-12 ?');
                                    const timeZoneCron = clientDateToServer(date, 'cron', props.serverTimeZone);
                                    newCronObject.hours = timeZoneCron.hours;
                                    newCronObject.minutes = timeZoneCron.minutes;
                                    newEvent.native.cron = obj2cron(newCronObject);
                                }
                            });
                        }}
                    >
                        {['once', 'daily', 'monthly'].map(type => <MenuItem key={type} value={type}>{I18n.t(type)}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
            {period === 'monthly' && <div className={props.classes.field}>
                <table>
                    <tr>
                        {new Array(12).fill(null).map((value, i) => <td
                            className={props.classes.tableCell}
                        >
                            {moment().month(i).format('MMM')}
                        </td>)}
                    </tr>
                    <tr>
                        {new Array(12).fill(null).map((value, i) => <td>
                            <Checkbox
                                checked={cronObject?.months?.includes(i + 1) || false}
                                onChange={e => {
                                    changeEvent(newEvent => {
                                        const newCronObject = cron2obj(newEvent.native.cron);
                                        if (e.target.checked) {
                                            newCronObject.months.push(i + 1);
                                        } else {
                                            newCronObject.months = newCronObject.months.filter(month => month !== i + 1);
                                        }
                                        newEvent.native.cron = obj2cron(newCronObject);
                                    });
                                }}
                                size="small"
                            />
                        </td>)}
                    </tr>
                </table>
            </div>}
            {period === 'daily' && <div className={props.classes.field}>
                <table>
                    <tr>
                        {new Array(7).fill(null).map((value, i) => <td
                            className={props.classes.tableCell}
                        >
                            {moment().day(i).format('ddd')}
                        </td>)}
                    </tr>
                    <tr>
                        {new Array(7).fill(null).map((value, i) => <td>
                            <Checkbox
                                checked={cronObject?.dows?.includes(i) || false}
                                onChange={e => {
                                    changeEvent(newEvent => {
                                        const newCronObject = cron2obj(newEvent.native.cron);
                                        if (e.target.checked) {
                                            newCronObject.dows.push(i);
                                        } else {
                                            newCronObject.dows = newCronObject.dows.filter(dow => dow !== i);
                                        }
                                        newEvent.native.cron = obj2cron(newCronObject);
                                    });
                                }}
                                size="small"
                            />
                        </td>)}
                    </tr>
                </table>
            </div>}
            <div className={props.classes.field}>
                <TextField
                    label="Description"
                    value={event?.common.name || ''}
                    onChange={e =>
                        changeEvent(newEvent => newEvent.common.name = e.target.value)}
                    variant="standard"
                    fullWidth
                />
            </div>
            <div className={props.classes.field}>
                <ColorPicker
                    value={event?.native.color || ''}
                    onChange={color =>
                        changeEvent(newEvent => newEvent.native.color = color)}
                    label="Color"
                />
            </div>
            {/* <pre>
                {JSON.stringify(event, null, 2)}
            </pre> */}
        </DialogContent>
        <DialogActions className={props.classes.dialogActions}>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<Delete />}
                onClick={() => setDeleteDialog(true)}
            >
                {I18n.t('Delete')}
            </Button>
            <div className={props.classes.dialogActionsRight}>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={JSON.stringify(props.event) === JSON.stringify(event)}
                    startIcon={<Save />}
                    onClick={async () => {
                        await props.socket.setObject(event._id, event);
                        props.updateEvents();
                        props.onClose();
                    }}
                >
                    {I18n.t('Save')}
                </Button>
                <Button
                    variant="contained"
                    color="grey"
                    startIcon={<Cancel />}
                    onClick={props.onClose}
                >
                    {I18n.t('Cancel')}
                </Button>
            </div>
        </DialogActions>
        {deleteDialog && <Confirm
            title={I18n.t('Delete event')}
            text={I18n.t('All data will be lost. Confirm?')}
            suppressQuestionMinutes={5}
            dialogName="deleteConfirmDialog"
            onClose={async isYes => {
                if (isYes) {
                    await props.socket.delObject(event._id);
                    props.updateEvents();
                    props.onClose();
                }
                setDeleteDialog(false);
            }}
        />}
    </Dialog>;
};

EventDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    event: PropTypes.object,
    updateEvents: PropTypes.func.isRequired,
    serverTimeZone: PropTypes.number.isRequired,
};

export default withStyles(styles)(EventDialog);
