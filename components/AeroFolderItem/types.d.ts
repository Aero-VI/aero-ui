import { ReactNode } from '../../../node_modules/react';
import { AeroFolder } from '../../types';
/**
 * AeroFolderItem — A single folder row in the sidebar navigation.
 *
 * Design:
 * - Height: 32px
 * - Padding: 0 16px
 * - Icon: 20px × 20px MUI icon, margin-right: 16px
 * - Label: 14px, weight 400 (inactive) or 600 (active)
 * - Unread count: plain text span, 11px, right-aligned
 * - Active state: right-side-rounded pill background rgba(138,180,248,0.12)
 *   border-radius: 0 16px 16px 0 (extends to full sidebar width, right side rounded)
 * - Hover state (inactive): background rgba(255,255,255,0.08)
 * - Hover state (active): background rgba(138,180,248,0.20)
 *
 * Icon mapping (must be done by consumer using MUI icons):
 * inbox → Inbox | starred → Star | sent → Send | drafts → Drafts
 * spam → Report | trash → Delete | allMail → AllInbox | snoozed → WatchLater
 * important → LabelImportant
 */
export interface AeroFolderItemProps {
    /** The folder data */
    folder: AeroFolder;
    /** Whether this is the currently active folder */
    active?: boolean;
    /** Click handler */
    onClick: (folder: AeroFolder) => void;
    /**
     * Icon element to display.
     * Consumer is responsible for providing the correct MUI icon.
     * e.g. <InboxIcon /> for inbox, <SendIcon /> for sent
     */
    icon?: ReactNode;
    /**
     * Override the count shown.
     * Defaults to folder.unreadCount (for inbox/drafts) or undefined.
     */
    count?: number;
    /** Show count even when zero */
    showZeroCount?: boolean;
    /** Additional CSS class name */
    className?: string;
}
