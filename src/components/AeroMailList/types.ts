import type { ReactNode } from 'react';
import type { AeroMessage } from '../../types';

/**
 * AeroMailList — Virtualized list of email rows with bulk selection support.
 *
 * Renders a list of AeroMailRow components using react-window for performance
 * with 1000+ messages. Shows a loading skeleton, empty state, or message rows.
 *
 * When any rows are selected, a bulk action toolbar appears above the list
 * with: Select All dropdown, Archive, Delete, Mark Read, Mark Unread, Move, Label.
 */
export type BulkAction =
  | 'archive'
  | 'delete'
  | 'markRead'
  | 'markUnread'
  | 'star'
  | 'unstar'
  | 'moveTo'
  | 'label'
  | 'snooze';

export interface AeroMailListProps {
  /** The list of messages to display */
  messages: AeroMessage[];
  /** Set of currently selected message IDs */
  selectedIds: Set<string>;
  /** Called when a row's checkbox is toggled */
  onSelect: (messageId: string, selected: boolean) => void;
  /** Called when "Select All" is triggered from the bulk toolbar */
  onSelectAll: (selected: boolean) => void;
  /** Called when a star is toggled */
  onStar?: (messageId: string, starred: boolean) => void;
  /** Called when a message row is clicked */
  onClick?: (messageId: string) => void;
  /** Called when a bulk action is triggered */
  onBulkAction?: (action: BulkAction, messageIds: string[]) => void;
  /** Called when archive is triggered on a single row */
  onArchive?: (messageId: string) => void;
  /** Called when delete is triggered on a single row */
  onDelete?: (messageId: string) => void;
  /** Whether the list is loading — shows skeleton rows */
  loading?: boolean;
  /** Number of skeleton rows to show during loading — defaults to 8 */
  skeletonCount?: number;
  /** Content shown when messages array is empty and not loading */
  emptyMessage?: ReactNode;
  /** Additional CSS class name */
  className?: string;
}
