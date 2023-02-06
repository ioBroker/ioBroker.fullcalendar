import {
    Button, Dialog, DialogContent, TextField,
} from '@mui/material';
import {
    ColorPicker, I18n, ObjectBrowser, SelectID,
} from '@iobroker/adapter-react-v5';
import { useState } from 'react';

const EventDialog = props => {
    const [idDialog, setIdDialog] = useState(false);
    return <Dialog open={props.open} onClose={props.onClose}>
        <DialogContent>
            {idDialog && <SelectID
                selected={props.event?.native.oid}
                onOk={id => setIdDialog(false)}
                onClose={() => setIdDialog(false)}
                socket={props.socket}
            />}
            <div>
                <ColorPicker value={props.event?.native.color} label="Color" />
            </div>
            <div>
                <TextField label="Object ID" value={props.event?.native.oid} />
                <Button onClick={() => setIdDialog(true)}>...</Button>
            </div>
            <pre>
                {JSON.stringify(props.event, null, 2)}
            </pre>
        </DialogContent>
    </Dialog>;
};

export default EventDialog;
