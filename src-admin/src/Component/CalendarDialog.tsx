import { useState, type CSSProperties, type JSX } from 'react';
import { Confirm, I18n, type AdminConnection } from '@iobroker/gui-components';
import { Cancel, Delete, Save } from '@mui/icons-material';
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    TextField,
} from '@mui/material';

const styles: Record<string, CSSProperties> = {
    field: {
        display: 'flex',
        alignItems: 'end',
        gap: 20,
    },
    hint: {
        fontSize: 12,
        fontStyle: 'italic',
    },
};

/** A calendar is a folder-like object that groups events */
export interface CalendarObject {
    _id: string;
    type: 'folder';
    /**
     * `color` and `icon` are not edited here, but can be set on the object, e.g. in the object browser.
     * `enabled: false` switches all events of the calendar off.
     */
    common: { name: string; color?: string; icon?: string; enabled?: boolean };
    native: Record<string, unknown>;
}

interface CalendarDialogProps {
    onClose: () => void;
    calendar?: CalendarObject | null;
    socket: AdminConnection;
    instance: number;
    calendarPrefix: string;
    setCalendarPrefix: (prefix: string) => void;
    updateCalendars: () => Promise<void>;
}

const CalendarDialog = (props: CalendarDialogProps): JSX.Element | null => {
    const [calendar, setCalendar] = useState<CalendarObject | null | undefined>(props.calendar);
    const [deleteDialog, setDeleteDialog] = useState(false);

    if (!calendar) {
        return null;
    }

    return (
        <Dialog
            open={!0}
            onClose={props.onClose}
        >
            <DialogTitle>{I18n.t('Edit calendar')}</DialogTitle>
            <DialogContent>
                <div style={styles.field}>
                    <TextField
                        label={I18n.t('Name')}
                        value={calendar.common.name || ''}
                        onChange={e => {
                            const _calendar: CalendarObject = JSON.parse(JSON.stringify(calendar));
                            _calendar.common.name = e.target.value;
                            setCalendar(_calendar);
                        }}
                        variant="standard"
                    />
                </div>
                <div style={styles.field}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={calendar.common.enabled !== false}
                                onChange={e => {
                                    const _calendar: CalendarObject = JSON.parse(JSON.stringify(calendar));
                                    _calendar.common.enabled = e.target.checked;
                                    setCalendar(_calendar);
                                }}
                            />
                        }
                        label={
                            <div>
                                <div>{I18n.t('Active')}</div>
                                <div style={styles.hint}>
                                    {I18n.t('Inactive calendars do not execute their events')}
                                </div>
                            </div>
                        }
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Delete />}
                    onClick={() => setDeleteDialog(true)}
                >
                    {I18n.t('Delete')}
                </Button>
                <Button
                    disabled={
                        !calendar ||
                        !props.calendar ||
                        !calendar.common.name ||
                        (calendar.common.name === props.calendar.common.name &&
                            (calendar.common.enabled !== false) === (props.calendar.common.enabled !== false))
                    }
                    onClick={async () => {
                        await props.socket.setObject(calendar._id, calendar);
                        await props.updateCalendars();
                        props.onClose();
                    }}
                    variant="contained"
                    color="primary"
                    startIcon={<Save />}
                >
                    {I18n.t('Save')}
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
            {deleteDialog && (
                <Confirm
                    fullWidth={false}
                    title={I18n.t('Delete calendar')}
                    text={I18n.t('Calendar will be deleted. Confirm?')}
                    ok={I18n.t('Delete')}
                    onClose={async isYes => {
                        if (isYes) {
                            try {
                                const events = Object.keys(
                                    await props.socket.getObjectViewCustom(
                                        'schedule',
                                        'schedule',
                                        `${calendar._id}.`,
                                        `${calendar._id}.\u9999`,
                                    ),
                                );
                                await props.socket.delObject(calendar._id);
                                await Promise.all(events.map(event => props.socket.delObject(event)));
                                if (props.calendarPrefix === calendar._id) {
                                    props.setCalendarPrefix(`fullcalendar.${props.instance}`);
                                }
                                await props.updateCalendars();
                            } catch (e) {
                                window.alert(`Cannot delete calendar: ${e}`);
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

export default CalendarDialog;
