import { AeroFolder, AeroLabel } from '../../types';
/**
 * AeroSidebar — Left navigation panel with folder list, labels, and compose FAB.
 *
 * Desktop: persistent, 256px width, fixed to the left side.
 * Mobile: rendered inside AeroDrawer; this component handles the content only.
 *
 * Layout (top to bottom):
 * 1. Compose FAB — teal pill button (#00BCD4), 56px height
 * 2. Folder list — Inbox, Starred, Snoozed, Important, Sent, Drafts, + more
 * 3. Divider
 * 4. Labels section header ("LABELS")
 * 5. Label rows (colored dot + name + count)
 * 6. "+ Create new label" link
 *
 * Active folder: right-side-rounded pill, rgba(138,180,248,0.12) background
 */
export interface AeroSidebarProps {
    /** Full list of IMAP folders to display */
    folders: AeroFolder[];
    /** User-created labels to display in the labels section */
    labels: AeroLabel[];
    /** ID of the currently active/selected folder */
    activeFolder?: string;
    /** ID of the currently active label (if navigating by label) */
    activeLabel?: string;
    /** Called when a folder is clicked */
    onFolderSelect: (folder: AeroFolder) => void;
    /** Called when a label is clicked in the labels section */
    onLabelSelect: (label: AeroLabel) => void;
    /** Called when the Compose FAB is clicked */
    onCompose: () => void;
    /** Called when "+ Create new label" is clicked */
    onCreateLabel?: () => void;
    /**
     * Width override in px — defaults to 256.
     * When collapsed, set to 72 (icon-only mode).
     */
    width?: number;
    /** Whether the sidebar is in icon-only collapsed mode */
    collapsed?: boolean;
    /** Whether this instance is being rendered inside a mobile drawer */
    mobile?: boolean;
    /** Additional CSS class name */
    className?: string;
}
