import { I18n } from '@iobroker/adapter-react-v5';
import { ExpandMore } from '@mui/icons-material';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem,
} from '@mui/material';
import { useEffect, useState } from 'react';

const EnumsDialog = props => {
    const [enums, setEnums] = useState([]);
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
            setEnums(Object.values(objects));
            setEnumsTree(_enumsTree);
            setSelectedEnums(props.selectedEnums || []);
        })();
    }, [props.open]);
    console.log(enumsTree);
    const renderEnums = (tree, id = '') => {
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
                    {tree.object._id}
                </div>
            </MenuItem>;
        }
        return <div style={{ paddingLeft: 20 }}>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />} style={{ padding: 0, minHeight: 0, margin: 'initial' }}>
                    {id}
                </AccordionSummary>
                <AccordionDetails style={{ padding: 0 }}>
                    {Object.keys(tree.items).map(key => renderEnums(tree.items[key], key))}
                </AccordionDetails>
            </Accordion>
        </div>;
    };
    return <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>{I18n.t('Select enums')}</DialogTitle>
        <DialogContent>
            {renderEnums(enumsTree)}
        </DialogContent>
        <DialogActions>
            <Button onClick={props.onClose} color="primary">
                {I18n.t('Cancel')}
            </Button>
            <Button
                onClick={() => {
                    props.onSelect(selectedEnums);
                    props.onClose();
                }}
                color="primary"
            >
                {I18n.t('Ok')}
            </Button>
        </DialogActions>
    </Dialog>;
};

export default EnumsDialog;
