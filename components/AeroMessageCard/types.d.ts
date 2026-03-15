import { AeroMessage } from '../../types';
/**
 * AeroMessageCard — A single message within a thread view.
 *
 * Two display modes:
 *
 * COLLAPSED (default for all but latest message):
 * - Single line: [Avatar] Sender Name   snippet text...   Date
 * - Height: ~40px, cursor pointer, 13px secondary text
 * - Clicking expands the card
 *
 * EXPANDED (auto-applied to latest message):
 * - Row 1: Avatar (40px) | Sender name (bold) | "to me ▾" | Date | Reply icon | ⋮ menu
 * - Row 2+: Full HTML body (sanitized)
 * - Row 3: Attachments row (if any)
 * - Row 4: [Reply] [Reply All] [Forward] text buttons (#8ab4f8)
 *
 * Card background: #292b2f, border-radius: 8px, margin-bottom: 4px
 *
 * IMPORTANT: HTML body MUST be sanitized via DOMPurify before rendering.
 * This component does NOT sanitize — the caller is responsible.
 */
export interface AeroMessageCardProps {
    /** The message data */
    message: AeroMessage;
    /** Whether this card is currently expanded */
    expanded: boolean;
    /** Called when the card header is clicked (toggle expand/collapse) */
    onExpand: (messageId: string, expanded: boolean) => void;
    /** Called when Reply is clicked */
    onReply: (message: AeroMessage) => void;
    /** Called when Reply All is clicked */
    onReplyAll?: (message: AeroMessage) => void;
    /** Called when Forward is clicked */
    onForward: (message: AeroMessage) => void;
    /** Called when "⋮ More" menu action is triggered */
    onMoreAction?: (messageId: string, action: MessageMoreAction) => void;
    /** Additional CSS class name */
    className?: string;
}
export type MessageMoreAction = 'delete' | 'markUnread' | 'showOriginal' | 'downloadMessage' | 'printMessage' | 'reportPhishing';
