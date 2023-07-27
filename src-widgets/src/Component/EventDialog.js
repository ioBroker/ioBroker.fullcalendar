import { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
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
import SunCalc from 'suncalc2';

import {
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { Cancel, Delete, Save } from '@mui/icons-material';

import {
    ColorPicker, SelectID, Confirm, Icon, Utils,
} from '@iobroker/adapter-react-v5';

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
    typeDescription: {
        fontSize: 12,
        whiteSpace: 'normal',
        fontStyle: 'italic',
    },
    selectId: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
    timeType: {
        width: 150,
    },
    narrowText: {
        width: 140,
        marginLeft: 8,
    },
    width60: {
        width: 80,
        marginLeft: 16,
    },
    narrowText2: {
        minWidth: 150,
        marginRight: 8,
    },
    narrowColor: {
        width: 200,
    },
    dayTable: {
        marginLeft: 20,
        display: 'inline-block',
    },
    randomTime: {
        marginLeft: 16,
        width: 133,
    },
};

const astroTypes = [
    'sunrise',
    'sunriseEnd',
    'goldenHourEnd',
    'solarNoon',
    'goldenHour',
    'sunsetStart',
    'sunset',
    'dusk',
    'nauticalDusk',
    'night',
    'nadir',
    'nightEnd',
    'nauticalDawn',
    'dawn',
];

function getText(text, lang) {
    if (text && typeof text === 'object') {
        return text[lang] || text.en;
    }
    return text;
}

async function getImage(id, socket) {
    let obj;
    if (typeof id === 'string') {
        obj = await socket.getObject(id);
    } else {
        obj = id;
    }
    let icon = null;

    if (obj && obj.common && obj.common.icon) {
        icon = Utils.getObjectIcon(obj);
    } else if (obj.type === 'state') {
        // get parent name
        let parts = obj._id.split('.');
        parts.pop();
        let parentId = parts.join('.');
        obj = await socket.getObject(parentId);
        if (obj && obj.common && obj.common.icon) {
            icon = Utils.getObjectIcon(obj);
        } else if (!obj || (obj.type === 'channel' || obj.type === 'device')) {
            parts = obj._id.split('.');
            parts.pop();
            parentId = parts.join('.');
            obj = await socket.getObject(parentId);
            if (obj && obj.common && obj.common.icon) {
                icon = Utils.getObjectIcon(obj);
            }
        }
    }

    return icon;
}

const EventDialog = props => {
    const initialDuration = props.event?.native?.intervals && props.event.native.intervals[0] && props.event.native.intervals[0].timeOffset ? props.event.native.intervals[0].timeOffset / 60000 : 0;
    const initialEndValue = props.event?.native?.intervals && props.event.native.intervals[0] && props.event.native.intervals[0].value !== undefined ? props.event.native.intervals[0].value : '';
    const [idDialog, setIdDialog] = useState(false);
    const [event, setEvent] = useState(props.event);
    const [object, setObject] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [duration, setDuration] = useState(initialDuration);
    const [endValue, setEndValue] = useState(initialEndValue);
    const [astroEventTimes, setAstroEventTimes] = useState({});

    moment.locale(props.language);

    const changeEvent = useCallback(modify => {
        const newEvent = JSON.parse(JSON.stringify(event));
        modify(newEvent);
        setEvent(newEvent);
    }, [event]);

    useEffect(() => {
        const now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);

        const _astroEventTimes = SunCalc.getTimes(
            now,
            props.systemConfig.latitude,
            props.systemConfig.longitude,
        );

        setAstroEventTimes(_astroEventTimes);

        if (event.native?.oid) {
            if (!object || object._id !== event.native?.oid) {
                try {
                    // read object
                    props.socket.getObject(event.native?.oid)
                        .then(obj => {
                            // update states if required
                            if (JSON.stringify(event.native?.states) !== JSON.stringify(obj.common.states)) {
                                changeEvent(newEvent => newEvent.native.states = obj.common.states);
                            }

                            if (object || props.event.native.oid !== event.native.oid) {
                                getImage(obj, props.socket)
                                    .then(newImage => changeEvent(newEvent => newEvent.common.icon = newImage));
                            }

                            setObject(obj);
                        });
                } catch (e) {
                    console.error(`Cannot get object ${event.native.oid}: ${e}`);
                    setObject(null);
                }
            }
        } else {
            setObject(null);
        }
    }, [event.native?.oid, props.socket, changeEvent, event.native?.states, object, props.event?.native.oid, props.systemConfig.latitude, props.systemConfig.longitude]);

    const cronObject = event.native?.cron ? cron2obj(event.native.cron) : null;
    let period = 'once';
    if (Array.isArray(cronObject?.months)) {
        period = 'monthly';
    } else if (Array.isArray(cronObject?.dows)) {
        period = 'daily';
    }

    let date;

    if (event) {
        if (period === 'once') {
            date = serverDateToClient(event.native?.start, 'date', props.serverTimeZone);
        } else if (period === 'monthly' || period === 'daily') {
            date = serverDateToClient(event.native?.cron, 'cron', props.serverTimeZone);
        }
    }

    const changed = JSON.stringify(props.event) !== JSON.stringify(event) ||
        duration !== initialDuration ||
        endValue !== initialEndValue;

    const valueField = (field, name) => {
        if (!object) {
            return null;
        }
        if (object.common.type === 'boolean') {
            if (field === 'startValue' && typeof event.native[field] !== 'boolean') {
                setTimeout(() => changeEvent(newEvent => newEvent.native[field] = !!newEvent.native[field]), 100);
            }

            return <FormControlLabel
                className={props.classes.narrowText2}
                control={<Checkbox
                    checked={!!event.native[field]}
                    disabled={props.readOnly}
                    onChange={e => changeEvent(newEvent => newEvent.native[field] = e.target.checked)}
                />}
                label={
                    <div>
                        <div>{props.t(name)}</div>
                        <div style={{ fontSize: 10, fontStyle: 'italic' }}>{props.t('Checked means ON, unchecked means OFF')}</div>
                    </div>
                }
            />;
        }

        if (object.common.states) {
            return <FormControl
                className={props.classes.narrowText2}
                variant="standard"
            >
                <InputLabel>{props.t(name)}</InputLabel>
                <Select
                    value={event.native[field] || ''}
                    disabled={props.readOnly}
                    onChange={e => changeEvent(newEvent => newEvent.native[field] = e.target.value)}
                >
                    {Object.keys(object.common.states)
                        .map(option => <MenuItem key={option} value={option}>{object.common.states[option]}</MenuItem>)}
                </Select>
            </FormControl>;
        }

        return <TextField
            className={props.classes.narrowText2}
            label={props.t(name)}
            value={event.native[field] || ''}
            disabled={props.readOnly}
            onChange={e => changeEvent(newEvent => newEvent.native[field] = e.target.value)}
            variant="standard"
        />;
    };

    const endValueField = () => {
        if (!object) {
            return null;
        }
        if (object.common.type === 'boolean') {
            if (typeof endValue !== 'boolean') {
                setTimeout(() => setEndValue(!!endValue), 100);
            }

            return <FormControlLabel
                className={props.classes.narrowText2}
                control={<Checkbox
                    checked={!!endValue}
                    disabled={props.readOnly}
                    onChange={e => setEndValue(e.target.checked)}
                />}
                label={
                    <div>
                        <div>{props.t('End value')}</div>
                        <div style={{ fontSize: 10, fontStyle: 'italic' }}>{props.t('Checked means ON, unchecked means OFF')}</div>
                    </div>
                }
            />;
        }

        if (object.common.states) {
            return <FormControl
                className={props.classes.narrowText2}
                variant="standard"
            >
                <InputLabel>{props.t('End value')}</InputLabel>
                <Select
                    value={endValue || ''}
                    disabled={props.readOnly}
                    onChange={e => setEndValue(e.target.value)}
                >
                    {Object.keys(object.common.states)
                        .map(option => <MenuItem key={option} value={option}>{object.common.states[option]}</MenuItem>)}
                </Select>
            </FormControl>;
        }

        return <TextField
            label={props.t('End value')}
            value={endValue || ''}
            disabled={props.readOnly}
            onChange={e => setEndValue(e.target.value)}
            variant="standard"
            className={props.classes.narrowText2}
        />;
    };

    const daysOfWeek = props.systemConfig?.firstDayOfWeek === 'monday' ? [1, 2, 3, 4, 5, 6, 0] : [0, 1, 2, 3, 4, 5, 6];

    const astroTime = event.native?.astro && astroEventTimes ? astroEventTimes[event.native.astro] : '';
    const astroText = astroTime ? astroTime.toLocaleTimeString().replace(/:\d\d$/, '') : '';
    let astroTextOffset = '';
    if (event.native?.astro && event.native?.offset && astroTime) {
        const t = new Date(astroTime.getTime() + event.native.offset * 60000);
        astroTextOffset = t.toLocaleTimeString().replace(/:\d\d$/, '');
    }

    let icon = event?.common.icon;
    if (icon && !icon.startsWith('data:image') && !icon.startsWith('http') && !icon.startsWith('/')) {
        icon = `../../${icon}`;
    }

    if (!props.event) {
        return null;
    }

    return <Dialog open={!0} onClose={props.onClose} fullWidth>
        <DialogTitle>{props.t('Configure event')}</DialogTitle>
        <DialogContent>
            {idDialog && <SelectID
                imagePrefix="../.."
                selected={event.native.oid}
                disabled={props.readOnly}
                onOk={id => {
                    changeEvent(newEvent => newEvent.native.oid = id);
                    setIdDialog(false);
                }}
                onClose={() => setIdDialog(false)}
                socket={props.socket}
            />}
            <div className={props.classes.field}>
                <FormControlLabel
                    control={<Checkbox
                        checked={!!event?.common.enabled}
                        disabled={props.readOnly}
                        onChange={e =>
                            changeEvent(newEvent => newEvent.common.enabled = e.target.checked)}
                    />}
                    label={props.t('Active')}
                />
            </div>
            <div className={props.classes.field}>
                <FormControl
                    variant="standard"
                    className={props.classes.timeType}
                >
                    <InputLabel>{props.t('Time type')}</InputLabel>
                    <Select
                        value={event.native.astro ? 'astro' : 'time'}
                        disabled={props.readOnly || !event?.common.enabled}
                        onChange={e =>
                            changeEvent(newEvent => {
                                if (e.target.value === 'astro') {
                                    newEvent.native.astro = 'sunrise';
                                } else {
                                    delete newEvent.native.astro;
                                }
                            })}
                        renderValue={value => props.t(value)}
                    >
                        {['time', 'astro'].map(type =>
                            <MenuItem key={type} value={type}>
                                <div>
                                    {props.t(type)}
                                </div>
                            </MenuItem>)}
                    </Select>
                </FormControl>
                {event.native.astro ?
                    <FormControl
                        className={props.classes.narrowText}
                        variant="standard"
                    >
                        <InputLabel>{props.t('Astronomic event')}</InputLabel>
                        <Select
                            value={event.native.astro || ''}
                            disabled={props.readOnly || !event?.common.enabled}
                            onChange={e => changeEvent(newEvent => newEvent.native.astro = e.target.value)}
                            renderValue={value => props.t(value)}
                        >
                            {astroTypes
                                .map(astroType => <MenuItem
                                    key={astroType}
                                    value={astroType}
                                >
                                    <div style={{ display: 'flex', width: '100%' }}>
                                        <span>{props.t(astroType)}</span>
                                        <span style={{ flexGrow: 1 }} />
                                        <span>
                                            {' '}
                                            - [
                                            {astroEventTimes && astroEventTimes[astroType] ? astroEventTimes[astroType].toLocaleTimeString().replace(/:\d\d$/, '') : '??:??'}
                                            ]
                                        </span>
                                    </div>
                                </MenuItem>)}
                        </Select>
                    </FormControl>

                    : <LocalizationProvider dateAdapter={AdapterMoment}>
                        <TimePicker
                            label={props.t('Time')}
                            value={date || null}
                            disabled={props.readOnly || !event?.common.enabled}
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
                            renderInput={params => <TextField
                                {...params}
                                variant="standard"
                                className={props.classes.narrowText}
                                helperText={date.getSeconds() ? date.toLocaleTimeString() : ''}
                            />}
                            ampm={false}
                        />
                    </LocalizationProvider>}
                {event.native.astro ? <FormControl
                    variant="standard"
                    className={props.classes.width60}
                >
                    <InputLabel>{props.t('Offset')}</InputLabel>
                    <Select
                        value={event.native.offset || 0}
                        disabled={props.readOnly || !event?.common.enabled}
                        onChange={e =>
                            changeEvent(newEvent => newEvent.native.offset = e.target.value)}
                    >
                        {[
                            { label: 'none', value: 0 },
                            { label: '5 min', value: 5 },
                            { label: '10 min', value: 10 },
                            { label: '15 min', value: 15 },
                            { label: '20 min', value: 20 },
                            { label: '30 min', value: 30 },
                            { label: '45 min', value: 45 },
                            { label: '1 hour', value: 60 },
                            { label: '1.5 hours', value: 90 },
                            { label: '2 hours', value: 120 },
                            { label: '2.5 hours', value: 150 },
                            { label: '3 hours', value: 180 },
                            { label: '4 hours', value: 240 },
                            { label: '5 min', value: -5 },
                            { label: '10 min', value: -10 },
                            { label: '15 min', value: -15 },
                            { label: '20 min', value: -20 },
                            { label: '30 min', value: -30 },
                            { label: '45 min', value: -45 },
                            { label: '1 hour', value: -60 },
                            { label: '1.5 hours', value: -90 },
                            { label: '2 hours', value: -120 },
                            { label: '2.5 hours', value: -150 },
                            { label: '3 hours', value: -180 },
                            { label: '4 hours', value: -240 },
                        ]
                            .map(time =>
                                <MenuItem key={time.value} value={time.value}>
                                    {time.value < 0 ? `- ${props.t(time.label)}` : props.t(time.label)}
                                </MenuItem>)}
                    </Select>
                </FormControl> : null}

                {props.isSimulation && <TextField
                    className={props.classes.randomTime}
                    label={props.t('Time random offset')}
                    value={event.native.timeRandomOffset || 0}
                    disabled={props.readOnly || !event?.common.enabled}
                    onChange={e => changeEvent(newEvent => newEvent.native.timeRandomOffset = parseInt(e.target.value))}
                    variant="standard"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{props.t('ms')}</InputAdornment>,
                    }}
                />}
            </div>
            {event.native.astro ? <div className={props.classes.field}>
                {props.t('Today %s is at %s.', props.t(event.native.astro), astroText)}
                &nbsp;
                {event.native.offset ? props.t('With offset at %s.', astroTextOffset) : null}
            </div> : null}
            <div className={props.classes.field}>
                {!props.isSimulation && <FormControl
                    variant="standard"
                    className={props.classes.narrowText2}
                >
                    <InputLabel>{props.t('Event type')}</InputLabel>
                    <Select
                        value={event.native.type || ''}
                        disabled={props.readOnly || !event?.common.enabled}
                        onChange={e =>
                            changeEvent(newEvent => {
                                if (newEvent.common.name === props.t(newEvent.native.type)) {
                                    newEvent.common.name = props.t(e.target.value);
                                }
                                newEvent.native.type = e.target.value;
                            })}
                        renderValue={value => props.t(value)}
                    >
                        {['single', 'double', 'toggle'].map(type =>
                            <MenuItem key={type} value={type}>
                                <div>
                                    <div>{props.t(type)}</div>
                                    <div className={props.classes.typeDescription}>{props.t(typeDescriptions[type])}</div>
                                </div>
                            </MenuItem>)}
                    </Select>
                </FormControl>}
                {event.native.type !== 'single' && <TextField
                    label={props.t('Duration')}
                    value={duration}
                    disabled={props.readOnly || !event?.common.enabled}
                    onChange={e => setDuration(e.target.value)}
                    variant="standard"
                    className={props.classes.narrowText}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{props.t('minutes')}</InputAdornment>,
                    }}
                />}
            </div>
            <div className={props.classes.field}>
                <div className={props.classes.selectId}>
                    <Icon src={icon || ''} style={{ width: 32, height: 32 }} />
                    <TextField
                        label="Object ID"
                        value={event.native.oid || ''}
                        disabled={props.readOnly || !event?.common.enabled}
                        onChange={e => changeEvent(newEvent => newEvent.native.oid = e.target.value)}
                        variant="standard"
                        helperText={getText(object?.common.name || '', props.language)}
                        fullWidth
                    />
                    <Button onClick={() => setIdDialog(true)}>...</Button>
                </div>
            </div>
            <div className={props.classes.field}>
                {valueField('startValue', event.native.type === 'toggle' ? 'First value' : (event.native.type === 'single' ? 'Desired value' : 'Start value'))}
                {event.native.type === 'double' && endValueField()}
            </div>
            <div className={props.classes.field}>
                {!props.isSimulation && <FormControl
                    variant="standard"
                >
                    <InputLabel>{props.t('Period')}</InputLabel>
                    <Select
                        value={period || 'once'}
                        disabled={props.readOnly || !event?.common.enabled}
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
                                    const newCronObject = cron2obj('0 0 * 1-12 *');
                                    const timeZoneCron = clientDateToServer(date, 'cron', props.serverTimeZone);
                                    newCronObject.hours = timeZoneCron.hours;
                                    newCronObject.minutes = timeZoneCron.minutes;
                                    newEvent.native.cron = obj2cron(newCronObject);
                                }
                            });
                        }}
                    >
                        {['once', 'daily', 'monthly'].map(type => <MenuItem key={type} value={type}>{props.t(type)}</MenuItem>)}
                    </Select>
                </FormControl>}
                {period === 'daily' && (!props.isSimulation || props.simulation.native.interval === 'week') && <table
                    className={props.classes.dayTable}
                    style={
                        props.isSimulation ? { marginLeft: 0 } : undefined
                    }
                >
                    <thead>
                        <tr>
                            {daysOfWeek.map(value => <td
                                key={value}
                                className={props.classes.tableCell}
                            >
                                {moment().day(value).format('ddd')}
                            </td>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {daysOfWeek.map(value => <td key={value}>
                                <Checkbox
                                    checked={cronObject?.dows?.includes(value) || false}
                                    disabled={props.readOnly || !event?.common.enabled}
                                    onChange={e => {
                                        changeEvent(newEvent => {
                                            const newCronObject = cron2obj(newEvent.native.cron);
                                            if (e.target.checked) {
                                                newCronObject.dows.push(value);
                                            } else {
                                                newCronObject.dows = newCronObject.dows.filter(dow => dow !== value);
                                            }
                                            newEvent.native.cron = obj2cron(newCronObject);
                                        });
                                    }}
                                    size="small"
                                />
                            </td>)}
                        </tr>
                    </tbody>
                </table>}
            </div>
            {period === 'monthly' && <div className={props.classes.field}>
                <table>
                    <thead>
                        <tr>
                            {new Array(12).fill(null).map((value, i) => <td
                                key={i}
                                className={props.classes.tableCell}
                            >
                                {moment().month(i).format('MMM')}
                            </td>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {new Array(12).fill(null).map((value, i) => <td key={i}>
                                <Checkbox
                                    checked={cronObject?.months?.includes(i + 1) || false}
                                    disabled={props.readOnly || !event?.common.enabled}
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
                    </tbody>
                </table>
            </div>}
            <div className={props.classes.field}>
                <TextField
                    label="Description"
                    value={event?.common.name || ''}
                    disabled={props.readOnly || !event?.common.enabled}
                    onChange={e =>
                        changeEvent(newEvent => newEvent.common.name = e.target.value)}
                    variant="standard"
                    fullWidth
                />
            </div>
            <div className={props.classes.narrowColor}>
                <ColorPicker
                    value={event.common.color || event.native.color || ''}
                    disabled={props.readOnly || !event?.common.enabled}
                    onChange={color =>
                        changeEvent(newEvent => newEvent.common.color = color)}
                    name={props.t('Color')}
                />
            </div>
        </DialogContent>
        <DialogActions>
            {!props.readOnly ? <Button
                variant="contained"
                color="secondary"
                startIcon={<Delete />}
                onClick={() => setDeleteDialog(true)}
            >
                {props.t('Delete')}
            </Button> : null}
            {!props.readOnly && !props.widget ? <div style={{ flex: 1 }} /> : null}
            {!props.readOnly ? <Button
                variant="contained"
                color="primary"
                disabled={!changed}
                startIcon={<Save />}
                onClick={async () => {
                    if (event.native.type === 'single') {
                        if (event.native.intervals) {
                            delete event.native.intervals;
                        }
                    } else if (event.native.type === 'double') {
                        event.native.intervals = event.native.intervals || [];
                        event.native.intervals[0] = event.native.intervals[0] || {};
                        event.native.intervals[0].timeOffset = (parseFloat(duration) || 1) * 60000;
                        event.native.intervals[0].value = endValue;
                    } else if (event.native.type === 'toggle') {
                        event.native.intervals = event.native.intervals || [];
                        event.native.intervals[0] = event.native.intervals[0] || {};
                        event.native.intervals[0].timeOffset = (parseFloat(duration) || 1) * 60000;
                    }

                    await props.setEvent(event._id, event);
                    props.updateEvents();
                    props.onClose();
                }}
            >
                {props.t('Save')}
            </Button> : null}
            <Button
                variant="contained"
                color="grey"
                startIcon={<Cancel />}
                onClick={props.onClose}
            >
                {props.readOnly || !changed ? props.t('ra_Close') : props.t('ra_Cancel')}
            </Button>
        </DialogActions>
        {deleteDialog && <Confirm
            fullWidth={false}
            title={props.t('Delete event')}
            text={props.t('Event will be deleted. Confirm?')}
            suppressQuestionMinutes={5}
            dialogName="deleteConfirmDialog"
            ok={props.t('Delete')}
            onClose={async isYes => {
                if (isYes) {
                    try {
                        await props.deleteEvent(event._id);
                        props.updateEvents();
                    } catch (e) {
                        window.alert(`Cannot delete event: ${e}`);
                    }

                    props.onClose();
                }
                setDeleteDialog(false);
            }}
        />}
    </Dialog>;
};

EventDialog.propTypes = {
    systemConfig: PropTypes.object,
    classes: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    event: PropTypes.object,
    readOnly: PropTypes.bool,
    updateEvents: PropTypes.func.isRequired,
    serverTimeZone: PropTypes.number.isRequired,
    t: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    widget: PropTypes.bool,
    setEvent: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired,
};

export default withStyles(styles)(EventDialog);
