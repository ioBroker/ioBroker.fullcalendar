import { I18n } from '@iobroker/adapter-react-v5';
import { Cancel, Check, ExpandMore } from '@mui/icons-material';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Paper,
} from '@mui/material';
import { useEffect, useState } from 'react';

const EnumsDialog = props => {
    const [enumsTree, setEnumsTree] = useState({
        items: {},
    });
    const [selectedEnums, setSelectedEnums] = useState([]);
    useEffect(() => {
        (async () => {
            const objects = await props.socket.getObjectViewCustom(
                'system',
                'enum',
                'enum.',
                'enum.\u9999',
            );
            const _enumsTree = {
                items: {},
            };
            Object.values(objects).forEach(e => {
                const idArray = e._id.split('.');
                let currentTree = _enumsTree;
                idArray.forEach(id => {
                    if (!currentTree.items[id]) {
                        currentTree.items[id] = {
                            items: {},
                        };
                    }
                    currentTree = currentTree.items[id];
                });
                currentTree.object = e;
            });
            setEnumsTree(_enumsTree);
            setSelectedEnums(props.selectedEnums || []);
        })();
    }, [props.open]);
    const renderEnums = tree => {
        if (tree.object && !Object.values(tree.items).length) {
            return <MenuItem
                key={tree.object._id}
                selected={selectedEnums.includes(tree.object._id)}
                onClick={() => {
                    if (selectedEnums.includes(tree.object._id)) {
                        setSelectedEnums(selectedEnums.filter(i => i !== tree.object._id));
                    } else {
                        setSelectedEnums([...selectedEnums, tree.object._id]);
                    }
                }}
            >
                <div>
                    <Checkbox checked={selectedEnums.includes(tree.object._id)} size="small" />
                    {typeof tree.object.common.name === 'string'
                        ? tree.object.common.name
                        : tree.object.common.name[I18n.getLanguage()]}
                </div>
            </MenuItem>;
        }
        return <div>
            <Accordion defaultExpanded style={{ paddingLeft: 20 }}>
                <AccordionSummary expandIcon={<ExpandMore />} style={{ padding: 0, minHeight: 0, margin: 'initial' }}>
                    {typeof tree.object.common.name === 'string'
                        ? tree.object.common.name
                        : tree.object.common.name[I18n.getLanguage()]}
                </AccordionSummary>
                <AccordionDetails style={{ padding: 0 }}>
                    {Object.keys(tree.items).map(key => renderEnums(tree.items[key]))}
                </AccordionDetails>
            </Accordion>
        </div>;
    };
    return <Dialog open={props.open} onClose={props.onClose} fullWidth>
        <DialogTitle>{I18n.t('Select enums')}</DialogTitle>
        <DialogContent>
            <Paper style={{ paddingRight: 20 }}>
                {enumsTree.items?.enum && Object.keys(enumsTree.items.enum.items).map(id => renderEnums(enumsTree.items.enum.items[id], id))}
            </Paper>
        </DialogContent>
        <DialogActions>
            <Button
                onClick={props.onClose}
                variant="contained"
                color="grey"
                startIcon={<Cancel />}
            >
                {I18n.t('Cancel')}
            </Button>
            <Button
                onClick={() => {
                    props.onSelect(selectedEnums);
                    props.onClose();
                }}
                variant="contained"
                color="primary"
                startIcon={<Check />}
            >
                {I18n.t('Ok')}
            </Button>
        </DialogActions>
    </Dialog>;
};

export default EnumsDialog;
