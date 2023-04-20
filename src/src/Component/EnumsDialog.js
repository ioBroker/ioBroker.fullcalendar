import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { useEffect, useRef, useState } from 'react';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Paper,
    Chip,
} from '@mui/material';

import { Cancel, Check, ExpandMore } from '@mui/icons-material';

import { I18n, TextWithIcon } from '@iobroker/adapter-react-v5';

const style = {
    accordion: {
        paddingLeft: 20,
    },
    accordionSummary: {
        paddingLeft: 0,
        minHeight: 0,
        margin: 'initial',
    },
    accordionDetails: {
        padding: 0,
    },
    content: {
        overflow: 'auto',
        minWidth: 250,
    },
    chipSubText: {
        fontSize: 10,
        opacity: 0.5,
        fontStyle: 'italic',
        marginTop: -4,
        paddingLeft: 4,
    },
    chip: {
        margin: 2,
    },
};

const EnumsDialog = props => {
    const [enumsTree, setEnumsTree] = useState({
        items: {},
    });
    const [selectedEnums, setSelectedEnums] = useState([]);
    const [selectedStates, setSelectedStates] = useState([]);
    const [enumsObjects, setEnumsObjects] = useState(null);
    const [expanded, setExpanded] = useState([]);
    const [statesObjects, setStatesObjects] = useState({});
    const timer = useRef(null);

    const requestStates = () => {
        timer.current && clearTimeout(timer.current);
        timer.current = setTimeout(async () => {
            timer.current = null;
            const _statesObjects = JSON.parse(JSON.stringify(statesObjects));
            for (let i = 0; i < selectedStates.length; i++) {
                if (!_statesObjects[selectedStates[i]]) {
                    try {
                        _statesObjects[selectedStates[i]] = await props.socket.getObject(selectedStates[i]);
                    } catch (e) {
                        console.error(`Cannot get object ${selectedStates[i]}`);
                    }
                    _statesObjects[selectedStates[i]] = _statesObjects[selectedStates[i]] || null;
                }
            }

            setStatesObjects(_statesObjects);
        }, 300);
    };

    const getStateChip = id => {
        if (statesObjects[id] === undefined && !timer.current) {
            requestStates();
        }

        const label = <div>
            <TextWithIcon value={statesObjects[id] || id} title={id} lang={I18n.getLanguage()} />
            {statesObjects[id] ? <div className={props.classes.chipSubText}>{id}</div> : null}
        </div>;

        return <Chip
            label={label}
            key={id}
            className={props.classes.chip}
        />;
    };

    useEffect(() => {
        if (!props.open) {
            timer.current && clearTimeout(timer.current);
            timer.current = null;
            return;
        }
        try {
            setExpanded(JSON.parse(window.localStorage.getItem('fullcalendar.enumsDialog.expanded') || '[]'));
        } catch (e) {
            setExpanded([]);
        }

        (async () => {
            const objects = props.enumsObjects || enumsObjects || (await props.socket.getEnums());
            const _enumsTree = {
                items: {},
            };

            setEnumsObjects(objects);

            // Build enums tree
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

    useEffect(() => {
        (async () => {
            const objects = props.enumsObjects || enumsObjects || (await props.socket.getEnums());
            if (!enumsObjects) {
                setEnumsObjects(objects);
            }

            const states = selectedEnums.map(id => objects[id].common.members);
            let intersection = [];
            states.forEach((s, i) => {
                if (intersection.length || i) {
                    intersection = intersection.filter(j => s.includes(j));
                } else {
                    intersection = s;
                }
            });

            setSelectedStates(intersection.filter((v, i, a) => a.indexOf(v) === i));
        })();
    }, [selectedEnums]);

    const renderEnums = tree => {
        if (tree.object && !Object.values(tree.items).length && tree.object._id.split('.').length > 2) {
            return <MenuItem
                key={tree.object._id}
                selected={selectedEnums.includes(tree.object._id)}
                onClick={e => {
                    e.stopPropagation();
                    if (selectedEnums.includes(tree.object._id)) {
                        setSelectedEnums(selectedEnums.filter(i => i !== tree.object._id));
                    } else {
                        setSelectedEnums([...selectedEnums, tree.object._id]);
                    }
                }}
            >
                <div style={{ display: 'flex' }}>
                    <Checkbox checked={selectedEnums.includes(tree.object._id)} size="small" />
                    <TextWithIcon value={tree.object} lang={I18n.getLanguage()} />
                </div>
            </MenuItem>;
        }
        if (!Object.values(tree.items).length) {
            return null;
        }

        return <div style={{ borderTop: '1px dashed grey', marginTop: 4 }} key={tree.object._id}>
            <Accordion
                className={props.classes.accordion}
                expanded={expanded.includes(tree.object._id)}
                onClick={e => {
                    e.stopPropagation();
                    const _expanded = [...expanded];
                    const pos = _expanded.indexOf(tree.object._id);
                    if (pos === -1) {
                        _expanded.push(tree.object._id);
                    } else {
                        _expanded.splice(pos, 1);
                    }
                    window.localStorage.setItem('fullcalendar.enumsDialog.expanded', JSON.stringify(_expanded));
                    setExpanded(_expanded);
                }}
            >
                <AccordionSummary expandIcon={<ExpandMore />} className={props.classes.accordionSummary}>
                    <TextWithIcon value={tree.object} lang={I18n.getLanguage()} />
                </AccordionSummary>
                <AccordionDetails className={props.classes.accordionDetails}>
                    {Object.keys(tree.items).map(key => renderEnums(tree.items[key]))}
                </AccordionDetails>
            </Accordion>
        </div>;
    };

    return <Dialog open={props.open} onClose={props.onClose} fullWidth>
        <DialogTitle>{I18n.t('Select categories')}</DialogTitle>
        <DialogContent>
            <div
                style={{
                    height: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Paper className={props.classes.content} >
                    {enumsTree.items?.enum && Object.keys(enumsTree.items.enum.items).map(id => renderEnums(enumsTree.items.enum.items[id], id))}
                </Paper>
                <div style={{ marginLeft: 8, overflow: 'auto' }}>
                    <h4>{I18n.t('States as overlap of all selected categories')}</h4>
                    {selectedStates.map(id => getStateChip(id))}
                </div>
            </div>
        </DialogContent>
        <DialogActions>
            <Button
                disabled={!selectedEnums.length}
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
            <Button
                onClick={props.onClose}
                variant="contained"
                color="grey"
                startIcon={<Cancel />}
            >
                {selectedEnums.length ? I18n.t('ra_Cancel') : I18n.t('ra_Close')}
            </Button>
        </DialogActions>
    </Dialog>;
};

EnumsDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onSelect: PropTypes.func,
    selectedEnums: PropTypes.array,
    socket: PropTypes.object,
    classes: PropTypes.object,
    enumsObjects: PropTypes.object,
};

export default withStyles(style)(EnumsDialog);
