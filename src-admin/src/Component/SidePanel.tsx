import type { JSX, ReactNode } from 'react';

import { Box, IconButton, List, ListItemButton, ListItemText, Paper, Tab, Tabs, Tooltip } from '@mui/material';
import { alpha } from '@mui/material/styles';

import { Add, CalendarMonth, PlaylistPlay as SimulationIcon, ReportProblem as Alert } from '@mui/icons-material';

import { I18n, Icon } from '@iobroker/gui-components';
import type { IobTheme } from '@iobroker/gui-components';

/**
 * Left panel of the admin tab: mode switch (calendars/simulations), a header with the "add" button
 * and the list of the calendars resp. simulations.
 *
 * The look follows the "modern" (admin 8) themes of `@iobroker/gui-components`: everything is taken
 * from the theme (`ListItemButton`, `Tabs`, `divider`, …) instead of hard-coded greys, so that both
 * the classic and the modern themes stay consistent.
 */

// mixes plain inline styles with MUI `sx` entries (incl. theme callbacks), hence `any`
const styles: Record<string, any> = {
    panel: (theme: IobTheme) => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        borderRight: `1px solid ${theme.palette.divider}`,
        overflow: 'hidden',
    }),
    modeTabs: {
        flexShrink: 0,
        minHeight: 42,
        '& .MuiTab-root': {
            minHeight: 42,
            minWidth: 0,
            flex: 1,
            padding: '0 8px',
        },
    },
    header: (theme: IobTheme) => ({
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        minHeight: 44,
        padding: '6px 6px 6px 12px',
        borderBottom: `1px solid ${theme.palette.divider}`,
    }),
    headerTitle: (theme: IobTheme) => ({
        flexGrow: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: theme.palette.text.secondary,
    }),
    addButton: (theme: IobTheme) => ({
        flexShrink: 0,
        width: 28,
        height: 28,
        color: theme.palette.primary.contrastText || '#fff',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.primary.contrastText || '#fff',
            backgroundColor: theme.palette.primary.dark,
        },
        '& .MuiSvgIcon-root': { fontSize: 18 },
    }),
    alert: (theme: IobTheme) => ({
        display: 'flex',
        flexShrink: 0,
        color: theme.palette.error.main,
        '& .MuiSvgIcon-root': { fontSize: 18 },
    }),
    list: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '6px',
    },
    item: (theme: IobTheme) => ({
        gap: 1,
        minHeight: 34,
        paddingTop: '3px',
        paddingBottom: '3px',
        paddingLeft: '8px',
        paddingRight: '4px',
        marginBottom: '2px',
        '& .actions': {
            opacity: 0,
            transition: 'opacity 0.15s ease-in-out',
        },
        '&:hover .actions, &.Mui-focusVisible .actions, &.Mui-selected .actions': {
            opacity: 1,
        },
        '&.Mui-selected .MuiIconButton-root': {
            color: 'inherit',
        },
        '&.Mui-selected .count': {
            backgroundColor: 'rgba(255, 255, 255, 0.22)',
            color: 'inherit',
        },
        // the "modern" themes fill the selected item with a gradient by themselves, the classic ones
        // only tint it slightly - too weak for a navigation list, hence the explicit selection here
        ...(theme.name?.startsWith('modern')
            ? undefined
            : {
                  '&.Mui-selected': {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      '&:hover': {
                          backgroundColor: theme.palette.primary.dark,
                      },
                  },
              }),
    }),
    itemText: {
        margin: 0,
        overflow: 'hidden',
    },
    swatch: {
        flexShrink: 0,
        width: 10,
        height: 10,
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.25)',
    },
    icon: {
        flexShrink: 0,
        width: 16,
        height: 16,
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        '& .MuiIconButton-root': { padding: '4px' },
        '& .MuiSvgIcon-root': { fontSize: 18 },
    },
    count: (theme: IobTheme) => ({
        flexShrink: 0,
        minWidth: 20,
        height: 18,
        padding: '0 5px',
        borderRadius: '9px',
        fontSize: 10,
        fontWeight: 600,
        lineHeight: '18px',
        textAlign: 'center',
        backgroundColor: alpha(theme.palette.text.primary, 0.08),
        color: theme.palette.text.secondary,
    }),
    tooltip: {
        pointerEvents: 'none',
    },
};

interface SidePanelProps {
    /** `true` if the simulations are shown, `false` for the calendars */
    isSimulations: boolean;
    /** Toggle between calendars and simulations */
    onChangeMode: () => void;
    /** Caption of the list */
    title: string;
    /** Tooltip of the "add" button */
    addTitle: string;
    onAdd: () => void;
    /** `false` shows the "instance inactive" warning */
    alive?: boolean;
    /** Width of the panel. In the calendars view the splitter defines it, hence the default */
    width?: number | string;
    /** The `SidePanelItem`s */
    children: ReactNode;
}

export function SidePanel(props: SidePanelProps): JSX.Element {
    return (
        <Paper sx={[styles.panel, { width: props.width ?? '100%' }]}>
            <Tabs
                value={props.isSimulations ? 1 : 0}
                onChange={props.onChangeMode}
                variant="fullWidth"
                sx={styles.modeTabs}
            >
                <Tab
                    title={I18n.t('Calendars')}
                    icon={<CalendarMonth />}
                />
                <Tab
                    title={I18n.t('Simulations')}
                    icon={<SimulationIcon />}
                />
            </Tabs>
            <Box sx={styles.header}>
                <Box
                    component="div"
                    sx={styles.headerTitle}
                >
                    {props.title}
                </Box>
                {props.alive === false && (
                    <Tooltip
                        title={I18n.t('Instance inactive')}
                        slotProps={{ popper: { sx: styles.tooltip } }}
                    >
                        <Box
                            component="span"
                            sx={styles.alert}
                        >
                            <Alert />
                        </Box>
                    </Tooltip>
                )}
                <Tooltip
                    title={props.addTitle}
                    slotProps={{ popper: { sx: styles.tooltip } }}
                >
                    <IconButton
                        size="small"
                        sx={styles.addButton}
                        onClick={props.onAdd}
                    >
                        <Add />
                    </IconButton>
                </Tooltip>
            </Box>
            <List
                dense
                disablePadding
                sx={styles.list}
            >
                {props.children}
            </List>
        </Paper>
    );
}

interface SidePanelItemProps {
    selected: boolean;
    onClick: () => void;
    /** Displayed name */
    name: string;
    /** `common.color` of the object; shown as a small swatch in front of the name */
    color?: string;
    /** `common.icon` of the object; replaces the swatch */
    icon?: string;
    /** Number of the events; shown as a badge at the right */
    count?: number;
    /** Buttons that appear on hover or if the item is selected */
    actions?: ReactNode;
    /** Buttons that are always visible, e.g. the stop button of a running simulation */
    status?: ReactNode;
}

export function SidePanelItem(props: SidePanelItemProps): JSX.Element {
    return (
        <ListItemButton
            selected={props.selected}
            onClick={props.onClick}
            sx={styles.item}
        >
            {props.icon ? (
                <Icon
                    src={props.icon}
                    style={styles.icon}
                />
            ) : props.color ? (
                <Box
                    component="span"
                    sx={styles.swatch}
                    style={{ backgroundColor: props.color }}
                />
            ) : null}
            <ListItemText
                sx={styles.itemText}
                title={props.name}
                primary={props.name}
                slotProps={{
                    primary: {
                        noWrap: true,
                        sx: { fontSize: 13, fontWeight: props.selected ? 600 : 400 },
                    },
                }}
            />
            {props.actions ? (
                <Box
                    component="span"
                    className="actions"
                    sx={styles.actions}
                >
                    {props.actions}
                </Box>
            ) : null}
            {props.status ? (
                <Box
                    component="span"
                    sx={styles.actions}
                >
                    {props.status}
                </Box>
            ) : null}
            {props.count === undefined ? null : (
                <Tooltip
                    title={I18n.t('Events')}
                    slotProps={{ popper: { sx: styles.tooltip } }}
                >
                    <Box
                        component="span"
                        className="count"
                        sx={styles.count}
                    >
                        {props.count}
                    </Box>
                </Tooltip>
            )}
        </ListItemButton>
    );
}
