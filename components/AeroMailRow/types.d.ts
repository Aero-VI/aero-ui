import { AeroMessage } from '../../types';
/**
 * AeroMailRow — A single email/thread row in the inbox list.
 *
 * Exact left-to-right layout:
 *   [ checkbox ] [ avatar ] [ sender (200px) ] [ subject · snippet (flex:1) ] [ label chips ] [ 📎 ] [ timestamp ] [ ☆ ]
 *
 * Read vs Unread states:
 * - Unread: sender name weight 700, subject weight 700, text #e8eaed, timestamp weight 700
 * - Read:   sender name weight 400, subject weight 400, text #9aa0a6, timestamp weight 400
 *
 * Hover (desktop): background #2d2e30; checkbox visible; timestamp hidden,
 * shows Archive/Delete/Snooze/MarkUnread action icons
 *
 * Selected: background #394457
 * Row height: 52px desktop, 72px mobile
 */
export interface AeroMailRowProps {
    /** The message data to display */
    message: AeroMessage;
    /** Whether this row is currently selected (checkbox checked) */
    isSelected: boolean;
    /** Called when the selection checkbox is toggled */
    onSelect: (messageId: string, selected: boolean) => void;
    /** Called when the star icon is clicked */
    onStar: (messageId: string, starred: boolean) => void;
    /** Called when the row is clicked (navigate to thread) */
    onClick: (messageId: string) => void;
    /** Called when the archive action is triggered on hover */
    onArchive?: (messageId: string) => void;
    /** Called when the delete action is triggered on hover */
    onDelete?: (messageId: string) => void;
    /** Called when "Mark unread" is triggered on hover */
    onMarkUnread?: (messageId: string) => void;
    /** Override for the unread state (defaults to !message.isRead) */
    unread?: boolean;
    /** Additional CSS class name */
    className?: string;
}
