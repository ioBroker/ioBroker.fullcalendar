import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Paper,
    Chip, LinearProgress,
} from '@mui/material';

import {
    Cancel,
    Check,
    ExpandMore,
    Add,
    Remove,
} from '@mui/icons-material';

import { I18n, TextWithIcon, Utils } from '@iobroker/adapter-react-v5';

import {
    IGNORE_STATES,
    getIconAsync,
    getCachedObject,
    buildOverlap,
} from './Utils';

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
    chipException: {
        opacity: 0.3,
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
    const [exceptions, setExceptions] = useState(props.exceptions || []);
    const [working, setWorking] = useState(false);

    const requestStates = async _selectedStates => {
        _selectedStates = _selectedStates || selectedStates;
        const _statesObjects = {};
        for (let i = 0; i < _selectedStates.length; i++) {
            const id = _selectedStates[i];
            if (!_statesObjects[id] && !id.startsWith('alexa2.')) {
                try {
                    _statesObjects[id] = await getCachedObject(id, props.socket);
                    if (_statesObjects[id]?.common) {
                        if (!_statesObjects[id].common.iconConverted) {
                            _statesObjects[id].common.iconConverted = true;
                            _statesObjects[id].common.icon = await getIconAsync(id, props.socket);
                        }
                    }

                    if (_statesObjects[id] && (_statesObjects[id].type === 'channel' || _statesObjects[id].type === 'device')) {
                        // find out if any writable state exists
                        const subStates = await props.socket.getObjectViewSystem('state', `${id}.`, `${id}.\u9999`);
                        const keys = Object.keys(subStates);
                        for (let k = 0; k < keys.length; k++) {
                            const sid = keys[k];
                            if (
                                subStates[sid].type === 'state' &&
                                subStates[sid].common &&
                                subStates[sid].common.write !== false &&
                                !IGNORE_STATES.find(ends => sid.endsWith(ends))
                            ) {
                                _statesObjects[sid] = subStates[sid];
                                // find icon
                                if (_statesObjects[sid]?.common) {
                                    if (!_statesObjects[sid].common.iconConverted) {
                                        _statesObjects[sid].common.iconConverted = true;
                                        _statesObjects[sid].common.icon = await getIconAsync(sid, props.socket);
                                    }
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.error(`Cannot get object ${id}: ${e}`);
                }
                _statesObjects[id] = _statesObjects[id] || null;
            }
        }

        // Object.keys(_statesObjects).forEach(id => _statesObjects[id].type === 'state' && console.log(`+ ${id}`));

        setStatesObjects(_statesObjects);
        setWorking(false);
    };

    const getStateChip = id => {
        if (!statesObjects[id] || statesObjects[id].type !== 'state') {
            return null;
        }

        if (statesObjects[id].common && statesObjects[id].common.write === false) {
            // do not show read-only states
            return null;
        }

        const label = <div>
            <TextWithIcon value={statesObjects[id] || id} title={id} lang={I18n.getLanguage()} />
            {statesObjects[id] ? <div className={props.classes.chipSubText}>{id}</div> : null}
        </div>;

        return <Chip
            label={label}
            key={id}
            onDelete={() => {
                const _exceptions = [...exceptions];
                const pos = _exceptions.indexOf(id);
                if (pos !== -1) {
                    _exceptions.splice(pos, 1);
                } else {
                    _exceptions.push(id);
                }
                setExceptions(_exceptions);
            }}
            deleteIcon={exceptions.includes(id) ? <Add title={I18n.t('Include to list again')} /> : <Remove title={I18n.t('Exclude from list')} />}
            className={Utils.clsx(props.classes.chip, exceptions.includes(id) && props.classes.chipException)}
        />;
    };

    useEffect(() => {
        try {
            setExpanded(JSON.parse(window.localStorage.getItem('fullcalendar.enumsDialog.expanded') || '[]'));
        } catch (e) {
            setExpanded([]);
        }

        (async () => {
            const _enumsObjects = props.enumsObjects || enumsObjects || (await props.socket.getEnums());
            const _enumsTree = {
                items: {},
            };

            setEnumsObjects(_enumsObjects);

            // Build enums tree
            Object.values(_enumsObjects).forEach(e => {
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
    }, []);

    useEffect(() => {
        setWorking(true);

        (async () => {
            const _enumsObjects = props.enumsObjects || enumsObjects || (await props.socket.getEnums());
            if (!enumsObjects) {
                setEnumsObjects(_enumsObjects);
            }

            const states = buildOverlap(selectedEnums, _enumsObjects, []);
            setSelectedStates(states);
            await requestStates(states);
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

    return <Dialog open={!0} onClose={props.onClose} fullWidth>
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
                <Paper className={props.classes.content}>
                    {enumsTree.items?.enum && Object.keys(enumsTree.items.enum.items).map(id => renderEnums(enumsTree.items.enum.items[id], id))}
                </Paper>
                <div style={{ marginLeft: 8, overflow: 'auto' }}>
                    <h4>{I18n.t('States as overlap of all selected categories')}</h4>
                    {working && <LinearProgress />}
                    {Object.keys(statesObjects).map(id => getStateChip(id))}
                </div>
            </div>
        </DialogContent>
        <DialogActions>
            <Button
                disabled={!selectedEnums.length || (JSON.stringify(selectedEnums.sort()) === JSON.stringify(props.selectedEnums.sort()) && JSON.stringify(exceptions.sort()) === JSON.stringify(props.exceptions.sort()))}
                onClick={() => {
                    props.onSelect(selectedEnums, exceptions);
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
    onClose: PropTypes.func,
    onSelect: PropTypes.func,
    selectedEnums: PropTypes.array,
    socket: PropTypes.object,
    classes: PropTypes.object,
    enumsObjects: PropTypes.object,
    exceptions: PropTypes.array,
};

export default withStyles(style)(EnumsDialog);
