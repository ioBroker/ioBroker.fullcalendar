import {
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import {
    ColorPicker, I18n, SelectID,
} from '@iobroker/adapter-react-v5';
import { useEffect, useState } from 'react';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import moment from 'moment';
import {
    clientDateToServer, cron2obj, obj2cron, serverDateToClient,
} from './Utils';

const EventDialog = props => {
    const [idDialog, setIdDialog] = useState(false);
    const [event, setEvent] = useState(props.event);
    const [object, setObject] = useState(null);
    const updateObject = async id => {
        if (id) {
            setObject(await props.socket.getObject(id));
        } else {
            setObject(null);
        }
    };
    console.log(object);
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
        console.log(date);
    }

    const changeEvent = modify => {
        const newEvent = JSON.parse(JSON.stringify(event));
        modify(newEvent);
        setEvent(newEvent);
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
            <div>
                <FormControlLabel
                    control={<Checkbox
                        checked={!!event?.common.enabled}
                        onChange={e => {
                            changeEvent(newEvent => newEvent.common.enabled = e.target.checked);
                        }}
                    />}
                    label={I18n.t('Active')}
                />
            </div>
            <div>
                <FormControl
                    fullWidth
                    variant="standard"
                >
                    <InputLabel>{I18n.t('Event type')}</InputLabel>
                    <Select
                        value={event?.native.type || ''}
                        onChange={e => {
                            changeEvent(newEvent => newEvent.native.type = e.target.value);
                        }}
                    >
                        {['single', 'double', 'toggle'].map(type => <MenuItem key={type} value={type}>{I18n.t(type)}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
            <div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <TimePicker
                        label="Time"
                        value={date || null}
                        onChange={date => {
                            if (!date) {
                                return;
                            }
                            try {
                                changeEvent(newEvent => {
                                    if (period === 'once') {
                                        newEvent.native.start = clientDateToServer(date.toDate(), 'date', props.serverTimeZone);
                                    } else if (period === 'monthly' || period === 'daily') {
                                        const newCron = cron2obj(newEvent.native.cron);
                                        const timeZoneCron = clientDateToServer(date.toDate(), 'cron', props.serverTimeZone);
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
            {event?.native.type !== 'single' && <div>
                <TextField
                    label={I18n.t('Duration')}
                    value={(event?.native.intervals?.[0].timeOffset || 0) / 1000 / 60}
                    onChange={e => {
                        changeEvent(newEvent => newEvent.native.intervals[0].timeOffset = e.target.value * 1000 * 60);
                    }}
                    variant="standard"
                    fullWidth
                    endAdornment={<InputAdornment position="end">{I18n.t('minutes')}</InputAdornment>}
                />
            </div>}
            <div style={{ display: 'flex' }}>
                <TextField
                    label="Object ID"
                    value={event?.native.oid}
                    onChange={e => {
                        changeEvent(newEvent => newEvent.native.oid = e.target.value);
                        updateObject(e.target.value);
                    }}
                    variant="standard"
                    fullWidth
                />
                <Button onClick={() => setIdDialog(true)}>...</Button>
            </div>
            <div>
                <TextField
                    label={I18n.t('Start value')}
                    value={event?.common.startValue}
                    onChange={e => {
                        changeEvent(newEvent => newEvent.common.startValue = e.target.value);
                    }}
                    variant="standard"
                    fullWidth
                />
            </div>
            {event?.native.type === 'double' && <div>
                <TextField
                    label={I18n.t('End value')}
                    value={event?.common.endValue}
                    onChange={e => {
                        changeEvent(newEvent => newEvent.common.endValue = e.target.value);
                    }}
                    variant="standard"
                    fullWidth
                />
            </div>}
            <div>
                <FormControl
                    fullWidth
                    variant="standard"
                >
                    <InputLabel>{I18n.t('Period')}</InputLabel>
                    <Select
                        value={period}
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
                                    const newCronObject = cron2obj('0 0 ? * 1-7');
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
            {period === 'monthly' && <div>
                <table>
                    <tr>
                        {new Array(12).fill(null).map((value, i) => <td
                            style={{ textAlign: 'center' }}
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
            {period === 'daily' && <div>
                <table>
                    <tr>
                        {new Array(7).fill(null).map((value, i) => <td
                            style={{ textAlign: 'center' }}
                        >
                            {moment().day(i + 1).format('ddd')}
                        </td>)}
                    </tr>
                    <tr>
                        {new Array(7).fill(null).map((value, i) => <td>
                            <Checkbox
                                checked={cronObject?.dows?.includes(i + 1) || false}
                                onChange={e => {
                                    changeEvent(newEvent => {
                                        const newCronObject = cron2obj(newEvent.native.cron);
                                        if (e.target.checked) {
                                            newCronObject.dows.push(i + 1);
                                        } else {
                                            newCronObject.dows = newCronObject.dows.filter(dow => dow !== i + 1);
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
            <div>
                <TextField
                    label="Description"
                    value={event?.common.name}
                    onChange={e => {
                        changeEvent(newEvent => newEvent.common.name = e.target.value);
                    }}
                    variant="standard"
                    fullWidth
                />
            </div>
            <div>
                <ColorPicker
                    value={event?.native.color}
                    onChange={color => {
                        changeEvent(newEvent => newEvent.native.color = color);
                    }}
                    label="Color"
                />
            </div>
            <pre>
                {JSON.stringify(event, null, 2)}
            </pre>
        </DialogContent>
        <DialogActions>
            <Button onClick={async () => {
                await props.socket.delObject(event._id);
                props.updateEvents();
                props.onClose();
            }}
            >
                {I18n.t('Delete')}
            </Button>
            <Button onClick={async () => {
                await props.socket.setObject(event._id, event);
                props.updateEvents();
                props.onClose();
            }}
            >
                {I18n.t('Save')}
            </Button>
            <Button onClick={props.onClose}>{I18n.t('Cancel')}</Button>
        </DialogActions>
    </Dialog>;
};

export default EventDialog;
