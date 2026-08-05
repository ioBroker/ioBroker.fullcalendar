import { useEffect, useState } from 'react';
import type { JSX } from 'react';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Paper,
    Chip,
    LinearProgress,
} from '@mui/material';

import { Cancel, Check, ExpandMore, Add, Remove } from '@mui/icons-material';

import { I18n, TextWithIcon } from '@iobroker/gui-components';
import type { AdminConnection } from '@iobroker/gui-components';

import { IGNORE_STATES, getIconAsync, getCachedObject, buildOverlap } from './Utils';

const styles: Record<string, any> = {
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

/** Node of the `enum.*` id tree built from the flat list of enum objects */
interface EnumTreeNode {
    items: Record<string, EnumTreeNode>;
    object?: ioBroker.EnumObject;
}

interface EnumsDialogProps {
    onClose: () => void;
    onSelect: (selectedEnums: string[], exceptions: string[]) => void;
    selectedEnums: string[];
    socket: AdminConnection;
    enumsObjects?: Record<string, ioBroker.EnumObject> | null;
    exceptions: string[];
}

const EnumsDialog = (props: EnumsDialogProps): JSX.Element => {
    const [enumsTree, setEnumsTree] = useState<EnumTreeNode>({
        items: {},
    });
    const [selectedEnums, setSelectedEnums] = useState<string[]>([]);
    const [selectedStates, setSelectedStates] = useState<string[]>([]);
    const [enumsObjects, setEnumsObjects] = useState<Record<string, ioBroker.EnumObject> | null>(null);
    const [expanded, setExpanded] = useState<string[]>([]);
    const [statesObjects, setStatesObjects] = useState<Record<string, ioBroker.Object | null>>({});
    const [exceptions, setExceptions] = useState<string[]>(props.exceptions || []);
    const [working, setWorking] = useState(false);

    const requestStates = async (_selectedStates?: string[]): Promise<void> => {
        _selectedStates = _selectedStates || selectedStates;
        const _statesObjects: Record<string, ioBroker.Object | null> = {};
        for (let i = 0; i < _selectedStates.length; i++) {
            const id = _selectedStates[i];
            if (!_statesObjects[id] && !id.startsWith('alexa2.')) {
                try {
                    _statesObjects[id] = await getCachedObject(id, props.socket);
                    if (_statesObjects[id]?.common) {
                        if (!_statesObjects[id].common.iconConverted) {
                            _statesObjects[id].common.iconConverted = true;
                            _statesObjects[id].common.icon = (await getIconAsync(id, props.socket)) || undefined;
                        }
                    }

                    if (
                        _statesObjects[id] &&
                        (_statesObjects[id].type === 'channel' || _statesObjects[id].type === 'device')
                    ) {
                        // find out if any writable state exists
                        const subStates: Record<string, ioBroker.StateObject> = await props.socket.getObjectViewSystem(
                            'state',
                            `${id}.`,
                            `${id}.\u9999`,
                        );
                        const keys: string[] = Object.keys(subStates);
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
                                        _statesObjects[sid].common.icon =
                                            (await getIconAsync(sid, props.socket)) || undefined;
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

    const getStateChip = (id: string): JSX.Element | null => {
        const obj = statesObjects[id];
        if (!obj || obj.type !== 'state') {
            return null;
        }

        if (obj.common && obj.common.write === false) {
            // do not show read-only states
            return null;
        }

        const label = (
            <div>
                <TextWithIcon
                    value={obj || id}
                    title={id}
                    lang={I18n.getLanguage()}
                />
                {obj ? <div style={styles.chipSubText}>{id}</div> : null}
            </div>
        );

        return (
            <Chip
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
                deleteIcon={
                    exceptions.includes(id) ? (
                        <Add titleAccess={I18n.t('Include to list again')} />
                    ) : (
                        <Remove titleAccess={I18n.t('Exclude from list')} />
                    )
                }
                style={{
                    ...styles.chip,
                    ...(exceptions.includes(id) ? styles.chipException : undefined),
                }}
            />
        );
    };

    useEffect(() => {
        try {
            setExpanded(JSON.parse(window.localStorage.getItem('fullcalendar.enumsDialog.expanded') || '[]'));
        } catch {
            setExpanded([]);
        }

        void (async () => {
            const _enumsObjects = props.enumsObjects || enumsObjects || (await props.socket.getEnums());
            const _enumsTree: EnumTreeNode = {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setWorking(true);

        void (async () => {
            const _enumsObjects = props.enumsObjects || enumsObjects || (await props.socket.getEnums());
            if (!enumsObjects) {
                setEnumsObjects(_enumsObjects);
            }

            const states = buildOverlap(selectedEnums, _enumsObjects, []);
            setSelectedStates(states);
            await requestStates(states);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedEnums]);

    const renderEnums = (tree: EnumTreeNode): JSX.Element | null => {
        if (tree.object && !Object.values(tree.items).length && tree.object._id.split('.').length > 2) {
            const objectId = tree.object._id;
            return (
                <MenuItem
                    key={objectId}
                    selected={selectedEnums.includes(objectId)}
                    onClick={e => {
                        e.stopPropagation();
                        if (selectedEnums.includes(objectId)) {
                            setSelectedEnums(selectedEnums.filter(i => i !== objectId));
                        } else {
                            setSelectedEnums([...selectedEnums, objectId]);
                        }
                    }}
                >
                    <div style={{ display: 'flex' }}>
                        <Checkbox
                            checked={selectedEnums.includes(objectId)}
                            size="small"
                        />
                        <TextWithIcon
                            value={tree.object}
                            lang={I18n.getLanguage()}
                        />
                    </div>
                </MenuItem>
            );
        }
        if (!Object.values(tree.items).length) {
            return null;
        }

        const objectId = tree.object?._id;

        return (
            <div
                style={{ borderTop: '1px dashed grey', marginTop: 4 }}
                key={objectId}
            >
                <Accordion
                    style={styles.accordion}
                    expanded={!!objectId && expanded.includes(objectId)}
                    onClick={e => {
                        e.stopPropagation();
                        if (!objectId) {
                            return;
                        }
                        const _expanded = [...expanded];
                        const pos = _expanded.indexOf(objectId);
                        if (pos === -1) {
                            _expanded.push(objectId);
                        } else {
                            _expanded.splice(pos, 1);
                        }
                        window.localStorage.setItem('fullcalendar.enumsDialog.expanded', JSON.stringify(_expanded));
                        setExpanded(_expanded);
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        style={styles.accordionSummary}
                    >
                        {tree.object ? (
                            <TextWithIcon
                                value={tree.object}
                                lang={I18n.getLanguage()}
                            />
                        ) : null}
                    </AccordionSummary>
                    <AccordionDetails style={styles.accordionDetails}>
                        {Object.keys(tree.items).map(key => renderEnums(tree.items[key]))}
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    };

    return (
        <Dialog
            open={!0}
            onClose={props.onClose}
            fullWidth
        >
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
                    <Paper style={styles.content}>
                        {enumsTree.items?.enum &&
                            Object.keys(enumsTree.items.enum.items).map(id =>
                                renderEnums(enumsTree.items.enum.items[id]),
                            )}
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
                    disabled={
                        !selectedEnums.length ||
                        (JSON.stringify([...selectedEnums].sort()) ===
                            JSON.stringify([...(props.selectedEnums || [])].sort()) &&
                            JSON.stringify([...exceptions].sort()) ===
                                JSON.stringify([...(props.exceptions || [])].sort()))
                    }
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
        </Dialog>
    );
};

export default EnumsDialog;
