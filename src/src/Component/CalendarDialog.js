import PropTypes from 'prop-types';
import { Confirm, I18n } from '@iobroker/adapter-react-v5';
import { Cancel, Delete, Save } from '@mui/icons-material';
import {
    Button,
    Dialog, DialogActions, DialogContent, DialogTitle, TextField,
} from '@mui/material';
import { withStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

const styles = {
    field: {
        display: 'flex',
        alignItems: 'end',
        gap: 20,
    },
};

const CalendarDialog = props => {
    const [calendar, setCalendar] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);

    useEffect(() => {
        setCalendar(props.calendar);
    }, [props.open]);

    if (!calendar) return null;
    return <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>{I18n.t('Edit calendar name')}</DialogTitle>
        <DialogContent>
            <div className={props.classes.field}>
                <TextField
                    label={I18n.t('Name')}
                    value={calendar.common.name || ''}
                    onChange={e => {
                        const _calendar = JSON.parse(JSON.stringify(calendar));
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
                disabled={!calendar || !props.calendar || !calendar.common.name || calendar.common.name === props.calendar.common.name}
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
        {deleteDialog && <Confirm
            fullWidth={false}
            title={I18n.t('Delete calendar')}
            text={I18n.t('Calendar will be deleted. Confirm?')}
            ok={I18n.t('Delete')}
            onClose={async isYes => {
                if (isYes) {
                    try {
                        const events = Object.keys(await props.socket.getObjectViewCustom(
                            'schedule',
                            'schedule',
                            `${calendar._id}.`,
                            `${calendar._id}.\u9999`,
                        ));
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
        />}
    </Dialog>;
};

CalendarDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    calendar: PropTypes.object,
    socket: PropTypes.object,
    instance: PropTypes.any,
    calendarPrefix: PropTypes.string,
    setCalendarPrefix: PropTypes.func,
    updateCalendars: PropTypes.func,
};

export default withStyles(styles)(CalendarDialog);
