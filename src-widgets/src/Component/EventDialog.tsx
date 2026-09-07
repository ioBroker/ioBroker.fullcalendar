import { useEffect, useState, useCallback, type JSX } from 'react';
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
import dayjs from 'dayjs';

import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Cancel, Delete, Save } from '@mui/icons-material';

import { ColorPicker, SelectID, Confirm, Icon, Utils, type IobTheme, type Connection } from '@iobroker/gui-components';

import {
    clientDateToServer,
    cron2obj,
    obj2cron,
    serverDateToClient,
    type AstroName,
    type CalendarEvent,
    type CronObjectArrays,
    type EventType,
    type Simulation,
} from './Utils';

const typeDescriptions: Record<EventType, string> = {
    single: 'single_description',
    double: 'double_description',
    toggle: 'toggle_description',
};

// mixes plain inline styles with MUI `sx` entries (incl. theme callbacks), hence `any`
const styles: Record<string, any> = {
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
    timeSelector: (theme: IobTheme) => ({
        marginLeft: '16px',
        marginTop: '7.5px',
        width: 120,
        borderBottomColor: theme.palette.mode === 'dark' ? '#FFFFFFB2' : '#000000B2',
    }),
    days: (theme: IobTheme) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#656565' : '#dadada',
    }),
};

const astroTypes: AstroName[] = [
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

function getText(text: ioBroker.StringOrTranslated | undefined, lang: ioBroker.Languages): string | undefined {
    if (text && typeof text === 'object') {
        return text[lang] || text.en;
    }
    return text;
}

async function getImage(id: string | ioBroker.Object, socket: Connection): Promise<string | null> {
    let obj: ioBroker.Object | null | undefined;
    if (typeof id === 'string') {
        obj = await socket.getObject(id);
    } else {
        obj = id;
    }
    let icon: string | null = null;

    if (obj && obj.common && obj.common.icon) {
        icon = Utils.getObjectIcon(obj);
    } else if (obj?.type === 'state') {
        // get parent name
        let parts = obj._id.split('.');
        parts.pop();
        let parentId = parts.join('.');
        obj = await socket.getObject(parentId);
        if (obj && obj.common && obj.common.icon) {
            icon = Utils.getObjectIcon(obj);
        } else if (!obj || obj.type === 'channel' || obj.type === 'device') {
            parts = parentId.split('.');
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

export interface EventDialogProps {
    event: CalendarEvent;
    socket: Connection;
    systemConfig: ioBroker.SystemConfigCommon;
    serverTimeZone: number;
    language: ioBroker.Languages;
    t: (word: string, ...args: any[]) => string;
    theme: IobTheme;
    readOnly?: boolean;
    widget?: boolean;
    isSimulation?: boolean;
    simulationId?: string;
    simulation?: Simulation | null;
    onClose: () => void;
    updateEvents: () => void | Promise<void>;
    setEvent: (id: string, event: CalendarEvent) => void | Promise<void>;
    deleteEvent: (id: string) => void;
}

const EventDialog = (props: EventDialogProps): JSX.Element | null => {
    const initialDuration =
        props.event?.native?.intervals && props.event.native.intervals[0] && props.event.native.intervals[0].timeOffset
            ? props.event.native.intervals[0].timeOffset / 60000
            : 0;
    const initialEndValue =
        props.event?.native?.intervals &&
        props.event.native.intervals[0] &&
        props.event.native.intervals[0].value !== undefined
            ? props.event.native.intervals[0].value
            : '';
    const [idDialog, setIdDialog] = useState(false);
    const [event, setEvent] = useState<CalendarEvent>(props.event);
    const [object, setObject] = useState<ioBroker.StateObject | null>(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [duration, setDuration] = useState<number | string>(initialDuration);
    const [endValue, setEndValue] = useState<ioBroker.StateValue>(initialEndValue);
    const [astroEventTimes, setAstroEventTimes] = useState<Partial<Record<AstroName, Date>>>({});

    moment.locale(props.language);

    const changeEvent = useCallback(
        (modify: (newEvent: CalendarEvent) => void) => {
            const newEvent: CalendarEvent = JSON.parse(JSON.stringify(event));
            modify(newEvent);
            setEvent(newEvent);
        },
        [event],
    );

    useEffect(() => {
        const now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);

        const _astroEventTimes = SunCalc.getTimes(now, props.systemConfig.latitude!, props.systemConfig.longitude!);

        setAstroEventTimes(_astroEventTimes);

        if (event.native?.oid) {
            if (!object || object._id !== event.native?.oid) {
                try {
                    // read object
                    void props.socket.getObject(event.native?.oid).then(obj => {
                        if (!obj) {
                            setObject(null);
                            return;
                        }
                        const stateObj = obj as ioBroker.StateObject;
                        // update states if required
                        if (JSON.stringify(event.native?.states) !== JSON.stringify(stateObj.common.states)) {
                            changeEvent(
                                newEvent =>
                                    (newEvent.native.states = stateObj.common.states as
                                        Record<string, string> | undefined),
                            );
                        }

                        if (object || props.event.native.oid !== event.native.oid) {
                            void getImage(stateObj, props.socket).then(newImage =>
                                changeEvent(newEvent => (newEvent.common.icon = newImage || undefined)),
                            );
                        }

                        setObject(stateObj);
                    });
                } catch (e) {
                    console.error(`Cannot get object ${event.native.oid}: ${e}`);
                    setObject(null);
                }
            }
        } else {
            setObject(null);
        }
    }, [
        event.native?.oid,
        props.socket,
        changeEvent,
        event.native?.states,
        object,
        props.event?.native.oid,
        props.systemConfig.latitude,
        props.systemConfig.longitude,
    ]);

    const cronObject = event.native?.cron ? cron2obj(event.native.cron) : null;
    let period: 'once' | 'daily' | 'monthly' = 'once';
    let maxMonthDay = 29;

    if (Array.isArray(cronObject?.months)) {
        period = 'monthly';
        const month30 = [4, 6, 9, 11];
        const month31 = [1, 3, 5, 7, 8, 10, 12];
        if (cronObject.months?.find(month => month31.includes(month))) {
            maxMonthDay = 31;
        } else if (cronObject.months?.find(month => month30.includes(month))) {
            maxMonthDay = 30;
        }
    } else if (Array.isArray(cronObject?.dows)) {
        period = 'daily';
    }

    let date: Date | null | undefined;

    if (event) {
        if (period === 'once') {
            date = serverDateToClient(event.native?.start, 'date', props.serverTimeZone);
        } else if (period === 'monthly' || period === 'daily') {
            date = serverDateToClient(event.native?.cron, 'cron', props.serverTimeZone);
        }
    }

    const changed =
        JSON.stringify(props.event) !== JSON.stringify(event) ||
        duration !== initialDuration ||
        endValue !== initialEndValue;

    const valueField = (field: 'startValue' | 'endValue', name: string): JSX.Element | null => {
        if (!object) {
            return null;
        }
        if (object.common.type === 'boolean') {
            if (field === 'startValue' && typeof (event.native as Record<string, any>)[field] !== 'boolean') {
                setTimeout(
                    () =>
                        changeEvent(
                            newEvent =>
                                ((newEvent.native as Record<string, any>)[field] = !!(
                                    newEvent.native as Record<string, any>
                                )[field]),
                        ),
                    100,
                );
            }

            return (
                <FormControlLabel
                    style={styles.narrowText2}
                    control={
                        <Checkbox
                            checked={!!(event.native as Record<string, any>)[field]}
                            disabled={props.readOnly}
                            onChange={e =>
                                changeEvent(
                                    newEvent => ((newEvent.native as Record<string, any>)[field] = e.target.checked),
                                )
                            }
                        />
                    }
                    label={
                        <div>
                            <div>{props.t(name)}</div>
                            <div style={{ fontSize: 10, fontStyle: 'italic' }}>
                                {props.t('Checked means ON, unchecked means OFF')}
                            </div>
                        </div>
                    }
                />
            );
        }

        if (object.common.states) {
            return (
                <FormControl
                    style={styles.narrowText2}
                    variant="standard"
                >
                    <InputLabel>{props.t(name)}</InputLabel>
                    <Select
                        value={(event.native as Record<string, any>)[field] || ''}
                        disabled={props.readOnly}
                        onChange={e =>
                            changeEvent(newEvent => ((newEvent.native as Record<string, any>)[field] = e.target.value))
                        }
                    >
                        {Object.keys(object.common.states as Record<string, string>).map(option => (
                            <MenuItem
                                key={option}
                                value={option}
                            >
                                {(object.common.states as Record<string, string>)[option]}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
        }

        return (
            <TextField
                style={styles.narrowText2}
                label={props.t(name)}
                value={(event.native as Record<string, any>)[field] || ''}
                disabled={props.readOnly}
                onChange={e =>
                    changeEvent(newEvent => ((newEvent.native as Record<string, any>)[field] = e.target.value))
                }
                variant="standard"
            />
        );
    };

    const endValueField = (): React.JSX.Element | null => {
        if (!object) {
            return null;
        }
        if (object.common.type === 'boolean') {
            if (typeof endValue !== 'boolean') {
                setTimeout(() => setEndValue(!!endValue), 100);
            }

            return (
                <FormControlLabel
                    style={styles.narrowText2}
                    control={
                        <Checkbox
                            checked={!!endValue}
                            disabled={props.readOnly}
                            onChange={e => setEndValue(e.target.checked)}
                        />
                    }
                    label={
                        <div>
                            <div>{props.t('End value')}</div>
                            <div style={{ fontSize: 10, fontStyle: 'italic' }}>
                                {props.t('Checked means ON, unchecked means OFF')}
                            </div>
                        </div>
                    }
                />
            );
        }

        if (object.common.states) {
            return (
                <FormControl
                    style={styles.narrowText2}
                    variant="standard"
                >
                    <InputLabel>{props.t('End value')}</InputLabel>
                    <Select
                        value={endValue || ''}
                        disabled={props.readOnly}
                        onChange={e => setEndValue(e.target.value)}
                    >
                        {Object.keys(object.common.states as Record<string, string>).map(option => (
                            <MenuItem
                                key={option}
                                value={option}
                            >
                                {(object.common.states as Record<string, string>)[option]}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
        }

        return (
            <TextField
                label={props.t('End value')}
                value={endValue || ''}
                disabled={props.readOnly}
                onChange={e => setEndValue(e.target.value)}
                variant="standard"
                style={styles.narrowText2}
            />
        );
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

    return (
        <Dialog
            open={!0}
            onClose={props.onClose}
            fullWidth
        >
            <DialogTitle>{props.t('Configure event')}</DialogTitle>
            <DialogContent>
                {idDialog && !props.readOnly ? (
                    <SelectID
                        imagePrefix="../.."
                        theme={props.theme}
                        selected={event.native.oid}
                        onOk={_id => {
                            let id: string;
                            if (!_id || typeof _id === 'string') {
                                id = _id || '';
                            } else {
                                id = _id[0];
                            }
                            changeEvent(newEvent => (newEvent.native.oid = id));
                            setIdDialog(false);
                        }}
                        onClose={() => setIdDialog(false)}
                        socket={props.socket}
                    />
                ) : null}
                <div style={styles.field}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={!!event?.common.enabled}
                                disabled={props.readOnly}
                                onChange={e => changeEvent(newEvent => (newEvent.common.enabled = e.target.checked))}
                            />
                        }
                        label={props.t('Active')}
                    />
                </div>
                <div style={styles.field}>
                    <FormControl
                        style={{ ...styles.timeType, width: 180 }}
                        variant="standard"
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
                                })
                            }
                            renderValue={value => props.t(value)}
                        >
                            {['time', 'astro'].map(type => (
                                <MenuItem
                                    key={type}
                                    value={type}
                                >
                                    <div>{props.t(type)}</div>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {event.native.astro ? (
                        <FormControl
                            style={{ ...styles.narrowText, width: 250 }}
                            variant="standard"
                        >
                            <InputLabel>{props.t('Astronomic event')}</InputLabel>
                            <Select
                                value={event.native.astro || ''}
                                disabled={!!props.readOnly || !event?.common.enabled}
                                onChange={e => changeEvent(newEvent => (newEvent.native.astro = e.target.value))}
                                renderValue={value => props.t(value)}
                            >
                                {astroTypes.map(astroType => (
                                    <MenuItem
                                        key={astroType}
                                        value={astroType}
                                    >
                                        <div style={{ display: 'flex', width: '100%' }}>
                                            <span>{props.t(astroType)}</span>
                                            <span style={{ flexGrow: 1 }} />
                                            <span>
                                                {' '}
                                                - [
                                                {astroEventTimes && astroEventTimes[astroType]
                                                    ? astroEventTimes[astroType]
                                                          .toLocaleTimeString()
                                                          .replace(/:\d\d$/, '')
                                                    : '??:??'}
                                                ]
                                            </span>
                                        </div>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ) : (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
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
                                    '&.MuiFormControl-root': styles.timeSelector,
                                })}
                                label={props.t('Time')}
                                value={date ? dayjs(date) : null}
                                disabled={props.readOnly || !event?.common.enabled}
                                onChange={_date => {
                                    if (!_date) {
                                        return;
                                    }
                                    try {
                                        changeEvent(newEvent => {
                                            if (period === 'once') {
                                                newEvent.native.start = clientDateToServer(
                                                    _date.toDate(),
                                                    'date',
                                                    props.serverTimeZone,
                                                );
                                            } else if (period === 'monthly' || period === 'daily') {
                                                const newCron = cron2obj(newEvent.native.cron!);
                                                const timeZoneCron = clientDateToServer(
                                                    _date.toDate(),
                                                    'cron',
                                                    props.serverTimeZone,
                                                );
                                                newCron.hours = timeZoneCron.hours!;
                                                newCron.minutes = timeZoneCron.minutes!;
                                                newEvent.native.cron = obj2cron(newCron);
                                            }
                                        });
                                    } catch {
                                        //
                                    }
                                }}
                                ampm={false}
                            />
                        </LocalizationProvider>
                    )}
                    {event.native.astro ? (
                        <FormControl
                            variant="standard"
                            style={{ ...styles.width60, width: 95 }}
                        >
                            <InputLabel>{props.t('Offset')}</InputLabel>
                            <Select
                                value={event.native.offset || 0}
                                disabled={props.readOnly || !event?.common.enabled}
                                onChange={e => changeEvent(newEvent => (newEvent.native.offset = e.target.value))}
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
                                ].map(time => (
                                    <MenuItem
                                        key={time.value}
                                        value={time.value}
                                    >
                                        {time.value < 0 ? `- ${props.t(time.label)}` : props.t(time.label)}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ) : null}

                    {props.isSimulation && (
                        <TextField
                            style={styles.randomTime}
                            label={props.t('Time random offset')}
                            value={event.native.timeRandomOffset || 0}
                            disabled={props.readOnly || !event?.common.enabled}
                            onChange={e =>
                                changeEvent(newEvent => (newEvent.native.timeRandomOffset = parseInt(e.target.value)))
                            }
                            variant="standard"
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">{props.t('ms')}</InputAdornment>,
                                },
                            }}
                        />
                    )}
                </div>
                {event.native.astro ? (
                    <div style={styles.field}>
                        {props.t('Today %s is at %s.', props.t(event.native.astro), astroText)}
                        &nbsp;
                        {event.native.offset ? props.t('With offset at %s.', astroTextOffset) : null}
                    </div>
                ) : null}
                <div style={styles.field}>
                    {!props.isSimulation && (
                        <FormControl
                            variant="standard"
                            style={styles.narrowText2}
                        >
                            <InputLabel>{props.t('Event type')}</InputLabel>
                            <Select
                                value={event.native.type || ''}
                                disabled={props.readOnly || !event?.common.enabled}
                                onChange={e =>
                                    changeEvent(newEvent => {
                                        if (
                                            newEvent.native.type &&
                                            newEvent.common.name === props.t(newEvent.native.type)
                                        ) {
                                            newEvent.common.name = props.t(e.target.value);
                                        }
                                        newEvent.native.type = e.target.value;
                                    })
                                }
                                renderValue={value => props.t(value)}
                            >
                                {['single', 'double', 'toggle'].map(type => (
                                    <MenuItem
                                        key={type}
                                        value={type}
                                    >
                                        <div>
                                            <div>{props.t(type)}</div>
                                            <div style={styles.typeDescription}>
                                                {props.t(typeDescriptions[type as EventType])}
                                            </div>
                                        </div>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                    {event.native.type !== 'single' && (
                        <TextField
                            label={props.t('Duration')}
                            value={duration}
                            disabled={props.readOnly || !event?.common.enabled}
                            onChange={e => setDuration(e.target.value)}
                            variant="standard"
                            style={styles.narrowText}
                            slotProps={{
                                input: {
                                    endAdornment: <InputAdornment position="end">{props.t('minutes')}</InputAdornment>,
                                },
                            }}
                        />
                    )}
                </div>
                <div style={styles.field}>
                    <div style={styles.selectId}>
                        <Icon
                            src={icon || ''}
                            style={{ width: 32, height: 32 }}
                        />
                        <TextField
                            label={props.t('Object ID')}
                            value={event.native.oid || ''}
                            disabled={props.readOnly || !event?.common.enabled}
                            onChange={e => changeEvent(newEvent => (newEvent.native.oid = e.target.value))}
                            variant="standard"
                            helperText={getText(object?.common.name || '', props.language)}
                            fullWidth
                        />
                        <Button
                            disabled={props.readOnly || !event?.common.enabled}
                            onClick={() => setIdDialog(true)}
                        >
                            ...
                        </Button>
                    </div>
                </div>
                <div style={styles.field}>
                    {valueField(
                        'startValue',
                        event.native.type === 'toggle'
                            ? 'First value'
                            : event.native.type === 'single'
                              ? 'Desired value'
                              : 'Start value',
                    )}
                    {event.native.type === 'double' && endValueField()}
                </div>
                <div style={styles.field}>
                    {!props.isSimulation && (
                        <FormControl variant="standard">
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
                                            newEvent.native.start = clientDateToServer(
                                                date!,
                                                'date',
                                                props.serverTimeZone,
                                            );
                                        } else if (e.target.value === 'daily') {
                                            delete newEvent.native.start;
                                            const newCronObject = cron2obj(
                                                '0 0 ? * 0-6',
                                            ) as unknown as CronObjectArrays;
                                            const timeZoneCron = clientDateToServer(
                                                date!,
                                                'cron',
                                                props.serverTimeZone,
                                            );
                                            newCronObject.hours = timeZoneCron.hours as number[];
                                            newCronObject.minutes = timeZoneCron.minutes as number[];
                                            newEvent.native.cron = obj2cron(newCronObject);
                                        } else if (e.target.value === 'monthly') {
                                            const start = newEvent.native.start;
                                            let newCronObject;
                                            if (start) {
                                                newCronObject = cron2obj(
                                                    `0 0 ${new Date(start).getDate()} ${new Date(start).getMonth() + 1} *`,
                                                );
                                                delete newEvent.native.start;
                                            } else {
                                                newCronObject = cron2obj('0 0 1-31 1-12 *');
                                            }
                                            const timeZoneCron = clientDateToServer(
                                                date!,
                                                'cron',
                                                props.serverTimeZone,
                                            );
                                            newCronObject.hours = timeZoneCron.hours as number[];
                                            newCronObject.minutes = timeZoneCron.minutes as number[];
                                            newEvent.native.cron = obj2cron(newCronObject);
                                        }
                                    });
                                }}
                            >
                                {['once', 'daily', 'monthly'].map(type => (
                                    <MenuItem
                                        key={type}
                                        value={type}
                                    >
                                        {props.t(type)}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                    {period === 'daily' && (!props.isSimulation || props.simulation?.native.interval === 'week') && (
                        <table
                            style={{
                                ...styles.dayTable,
                                marginLeft: props.isSimulation ? 0 : undefined,
                            }}
                        >
                            <thead>
                                <tr>
                                    {daysOfWeek.map(value => (
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
                                    {daysOfWeek.map(value => (
                                        <td key={value}>
                                            <Checkbox
                                                aria-label="day"
                                                checked={(cronObject?.dows as number[])?.includes(value) || false}
                                                disabled={props.readOnly || !event?.common.enabled}
                                                onChange={e =>
                                                    changeEvent(newEvent => {
                                                        const newCronObject = cron2obj(
                                                            newEvent.native.cron!,
                                                        ) as unknown as CronObjectArrays;
                                                        if (e.target.checked) {
                                                            newCronObject.dows.push(value);
                                                        } else {
                                                            newCronObject.dows = newCronObject.dows.filter(
                                                                dow => dow !== value,
                                                            );
                                                        }
                                                        newEvent.native.cron = obj2cron(newCronObject);
                                                    })
                                                }
                                                size="small"
                                            />
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
                {period === 'monthly' && (
                    <div style={styles.field}>
                        <table>
                            <thead>
                                <tr>
                                    {new Array(12).fill(null).map((value, i) => (
                                        <td
                                            key={i}
                                            style={styles.tableCell}
                                        >
                                            {moment().month(i).format('MMM')}
                                        </td>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {new Array(12).fill(null).map((value, i) => (
                                        <td key={i}>
                                            <Checkbox
                                                aria-label="month"
                                                checked={(cronObject?.months as number[])?.includes(i + 1) || false}
                                                disabled={props.readOnly || !event?.common.enabled}
                                                onChange={e =>
                                                    changeEvent(newEvent => {
                                                        const newCronObject = cron2obj(
                                                            newEvent.native.cron!,
                                                        ) as unknown as CronObjectArrays;
                                                        if (e.target.checked) {
                                                            newCronObject.months.push(i + 1);
                                                        } else {
                                                            newCronObject.months = newCronObject.months.filter(
                                                                month => month !== i + 1,
                                                            );
                                                            if (!newCronObject.months.length) {
                                                                newCronObject.months = [1];
                                                            }
                                                        }
                                                        newEvent.native.cron = obj2cron(newCronObject);
                                                    })
                                                }
                                                size="small"
                                            />
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <Box
                                    component="tr"
                                    sx={styles.days}
                                >
                                    {new Array(12).fill(null).map((value, i) => (
                                        <td
                                            key={i}
                                            style={styles.tableCell}
                                        >
                                            {i + 1}
                                        </td>
                                    ))}
                                </Box>
                            </thead>
                            <tbody>
                                <Box
                                    component="tr"
                                    sx={styles.days}
                                >
                                    {new Array(12).fill(null).map((value, i) => (
                                        <td key={i}>
                                            <Checkbox
                                                aria-label="day"
                                                checked={(cronObject?.dates as number[])?.includes(i + 1) || false}
                                                disabled={props.readOnly || !event?.common.enabled}
                                                onChange={e =>
                                                    changeEvent(newEvent => {
                                                        const newCronObject = cron2obj(
                                                            newEvent.native.cron!,
                                                        ) as unknown as CronObjectArrays;
                                                        if (e.target.checked) {
                                                            newCronObject.dates.push(i + 1);
                                                            newCronObject.dates = newCronObject.dates.filter(
                                                                day => day,
                                                            );
                                                        } else {
                                                            newCronObject.dates = newCronObject.dates.filter(
                                                                day => day !== i + 1,
                                                            );
                                                            if (!newCronObject.dates.length) {
                                                                newCronObject.dates = [1];
                                                            }
                                                        }
                                                        newEvent.native.cron = obj2cron(newCronObject);
                                                    })
                                                }
                                                size="small"
                                            />
                                        </td>
                                    ))}
                                </Box>
                                <Box
                                    component="tr"
                                    sx={styles.days}
                                >
                                    {new Array(12).fill(null).map((value, i) => (
                                        <td
                                            key={i}
                                            style={styles.tableCell}
                                        >
                                            {i + 13}
                                        </td>
                                    ))}
                                </Box>
                                <Box
                                    component="tr"
                                    sx={styles.days}
                                >
                                    {new Array(12).fill(null).map((value, i) => (
                                        <td key={i}>
                                            <Checkbox
                                                aria-label="day"
                                                checked={(cronObject?.dates as number[])?.includes(i + 13) || false}
                                                disabled={props.readOnly || !event?.common.enabled}
                                                onChange={e => {
                                                    changeEvent(newEvent => {
                                                        const newCronObject = cron2obj(
                                                            newEvent.native.cron!,
                                                        ) as unknown as CronObjectArrays;
                                                        if (e.target.checked) {
                                                            newCronObject.dates.push(i + 13);
                                                            newCronObject.dates = newCronObject.dates.filter(
                                                                day => day,
                                                            );
                                                        } else {
                                                            newCronObject.dates = newCronObject.dates.filter(
                                                                day => day !== i + 13,
                                                            );
                                                            if (!newCronObject.dates.length) {
                                                                newCronObject.dates = [1];
                                                            }
                                                        }
                                                        newEvent.native.cron = obj2cron(newCronObject);
                                                    });
                                                }}
                                                size="small"
                                            />
                                        </td>
                                    ))}
                                </Box>
                                <Box
                                    component="tr"
                                    sx={styles.days}
                                >
                                    {new Array(11).fill(null).map((value, i) => (
                                        <td
                                            key={i}
                                            style={styles.tableCell}
                                        >
                                            {maxMonthDay < i + 25 ? null : i + 25}
                                        </td>
                                    ))}
                                    <td style={styles.tableCell}>{props.t('All')}</td>
                                </Box>
                                <Box
                                    component="tr"
                                    sx={styles.days}
                                >
                                    {new Array(11).fill(null).map((value, i) => (
                                        <td key={i}>
                                            {maxMonthDay < i + 25 ? null : (
                                                <Checkbox
                                                    aria-label="day"
                                                    checked={(cronObject?.dates as number[])?.includes(i + 25) || false}
                                                    disabled={props.readOnly || !event?.common.enabled}
                                                    onChange={e =>
                                                        changeEvent(newEvent => {
                                                            const newCronObject = cron2obj(
                                                                newEvent.native.cron!,
                                                            ) as unknown as CronObjectArrays;
                                                            if (e.target.checked) {
                                                                newCronObject.dates.push(i + 25);
                                                                newCronObject.dates = newCronObject.dates.filter(
                                                                    day => day,
                                                                );
                                                            } else {
                                                                newCronObject.dates = newCronObject.dates.filter(
                                                                    day => day !== i + 25,
                                                                );
                                                                if (!newCronObject.dates.length) {
                                                                    newCronObject.dates = [1];
                                                                }
                                                            }
                                                            newEvent.native.cron = obj2cron(newCronObject);
                                                        })
                                                    }
                                                    size="small"
                                                />
                                            )}
                                        </td>
                                    ))}
                                    <td>
                                        <Checkbox
                                            aria-label="all"
                                            checked={cronObject?.dates?.length === maxMonthDay}
                                            indeterminate={
                                                cronObject?.dates?.length !== maxMonthDay &&
                                                !(cronObject?.dates as number[])?.includes(0)
                                            }
                                            disabled={props.readOnly || !event?.common.enabled}
                                            onChange={() =>
                                                changeEvent(newEvent => {
                                                    const newCronObject = cron2obj(
                                                        newEvent.native.cron!,
                                                    ) as unknown as CronObjectArrays;
                                                    if (newCronObject?.dates?.length !== maxMonthDay) {
                                                        newCronObject.dates = [];
                                                        for (let i = 0; i < maxMonthDay; i++) {
                                                            newCronObject.dates.push(i + 1);
                                                        }
                                                    } else {
                                                        newCronObject.dates = [1];
                                                    }
                                                    newEvent.native.cron = obj2cron(newCronObject);
                                                })
                                            }
                                            size="small"
                                        />
                                    </td>
                                </Box>
                            </tbody>
                        </table>
                    </div>
                )}
                <div style={styles.field}>
                    <TextField
                        label={props.t('Description')}
                        value={event?.common.name || ''}
                        disabled={props.readOnly || !event?.common.enabled}
                        onChange={e => changeEvent(newEvent => (newEvent.common.name = e.target.value))}
                        variant="standard"
                        fullWidth
                    />
                </div>
                <div style={styles.narrowColor}>
                    <ColorPicker
                        value={event.common.color || event.native.color || ''}
                        disabled={props.readOnly || !event?.common.enabled}
                        onChange={color => changeEvent(newEvent => (newEvent.common.color = color))}
                        name={props.t('Color')}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                {!props.readOnly ? (
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<Delete />}
                        onClick={() => setDeleteDialog(true)}
                    >
                        {props.t('Delete')}
                    </Button>
                ) : null}
                {!props.readOnly && !props.widget ? <div style={{ flex: 1 }} /> : null}
                {!props.readOnly ? (
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={
                            !changed ||
                            (period === 'monthly' &&
                                (!cronObject?.dates?.length ||
                                    (cronObject.dates as number[]).includes(0) ||
                                    !cronObject?.months?.length))
                        }
                        startIcon={<Save />}
                        onClick={async () => {
                            const newEvent = { ...event };
                            if (newEvent.native.type === 'single') {
                                if (newEvent.native.intervals) {
                                    delete newEvent.native.intervals;
                                }
                            } else if (newEvent.native.type === 'double') {
                                newEvent.native.intervals = newEvent.native.intervals || [];
                                newEvent.native.intervals[0] = newEvent.native.intervals[0] || {};
                                newEvent.native.intervals[0].timeOffset = (parseFloat(duration as string) || 1) * 60000;
                                newEvent.native.intervals[0].value = endValue;
                            } else if (newEvent.native.type === 'toggle') {
                                newEvent.native.intervals = newEvent.native.intervals || [];
                                newEvent.native.intervals[0] = newEvent.native.intervals[0] || {};
                                newEvent.native.intervals[0].timeOffset = (parseFloat(duration as string) || 1) * 60000;
                            }

                            await props.setEvent(newEvent._id, newEvent);
                            await props.updateEvents();
                            props.onClose();
                        }}
                    >
                        {props.t('Save')}
                    </Button>
                ) : null}
                <Button
                    variant="contained"
                    color="grey"
                    startIcon={<Cancel />}
                    onClick={props.onClose}
                >
                    {props.readOnly || !changed ? props.t('ra_Close') : props.t('ra_Cancel')}
                </Button>
            </DialogActions>
            {deleteDialog && (
                <Confirm
                    fullWidth={false}
                    title={props.t('Delete event')}
                    text={props.t('Event will be deleted. Confirm?')}
                    suppressQuestionMinutes={5}
                    dialogName="deleteConfirmDialog"
                    ok={props.t('Delete')}
                    onClose={async isYes => {
                        if (isYes) {
                            try {
                                props.deleteEvent(event._id);
                                await props.updateEvents();
                            } catch (e) {
                                window.alert(`Cannot delete event: ${e}`);
                            }

                            props.onClose();
                        }
                        setDeleteDialog(false);
                    }}
                />
            )}
        </Dialog>
    );
};

export default EventDialog;
