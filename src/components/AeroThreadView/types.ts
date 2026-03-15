import type { AeroThread, AeroLabel, AeroMessage } from '../../types';

/**
 * AeroThreadView — Full conversation view for a grouped email thread.
 *
 * Layout:
 * 1. Thread header: Back arrow + subject title + action icons (Delete, Archive, More)
 * 2. Message cards: AeroMessageCard for each message in thread
 *    - Latest message auto-expanded
 *    - All others collapsed on initial load
 * 3. Reply box at the bottom (AeroReplyBox)
 *
 * Max content width: 860px (centered)
 * Opens from /thread/:threadId route
 */

export interface ReplyPayload {
  /** Message being replied to */
  inReplyTo: AeroMessage;
  /** Recipients for the reply */
  to: string[];
  /** CC recipients (Reply All) */
  cc?: string[];
  /** Body of the reply */
  body: string;
}

export interface ForwardPayload {
  /** Message being forwarded */
  message: AeroMessage;
  /** Forward recipient emails */
  to: string[];
  /** Additional body text above the forwarded content */
  body?: string;
}

export interface AeroThreadViewProps {
  /** The full thread data with all messages */
  thread: AeroThread;
  /** Called when the back arrow is clicked */
  onBack: () => void;
  /** Called when Reply is triggered on a specific message */
  onReply: (payload: ReplyPayload) => void;
  /** Called when Forward is triggered on a specific message */
  onForward: (payload: ForwardPayload) => void;
  /** Called when Archive is triggered on the thread */
  onArchive: (threadId: string) => void;
  /** Called when Delete is triggered on the thread */
  onDelete: (threadId: string) => void;
  /** Called when a label is applied to or removed from the thread */
  onLabel: (threadId: string, labelId: string, apply: boolean) => void;
  /** Called when Mark Unread is triggered */
  onMarkUnread?: (threadId: string) => void;
  /** All available user labels (for the label picker in the more menu) */
  availableLabels?: AeroLabel[];
  /** Additional CSS class name */
  className?: string;
}
