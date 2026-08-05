import { useState } from 'react';
import type { CSSProperties, JSX } from 'react';
import { Confirm, I18n } from '@iobroker/gui-components';
import type { AdminConnection } from '@iobroker/gui-components';
import { Cancel, Delete, Save } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const styles: Record<string, CSSProperties> = {
    field: {
        display: 'flex',
        alignItems: 'end',
        gap: 20,
    },
};

/** A calendar is a folder-like object that groups events */
export interface CalendarObject {
    _id: string;
    type: 'folder';
    common: { name: string };
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
            <DialogTitle>{I18n.t('Edit calendar name')}</DialogTitle>
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
                        calendar.common.name === props.calendar.common.name
                    }
                    onClick={async () => {
                        await props.socket.setObject(calendar._id, calendar as unknown as ioBroker.Object);
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
