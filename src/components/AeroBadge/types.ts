import type { ReactNode } from 'react';

/**
 * AeroBadge — Unread count or notification indicator overlaid on children.
 *
 * Two variants:
 * - count: Shows a numeric badge (e.g. unread folder count)
 * - dot:   Shows a small colored dot without a number (notification indicator)
 *
 * Note: In the sidebar, folder unread counts are rendered as plain text spans,
 * NOT as overlaid badges. Use AeroBadge for icon overlays (e.g. notification bell).
 */
export interface AeroBadgeProps {
  /** The element to overlay the badge on (e.g. an icon) */
  children?: ReactNode;
  /** Unread / notification count */
  count?: number;
  /** Maximum count before truncating with '+' (e.g. max=99 → "99+") */
  max?: number;
  /** Badge background color — defaults to BUTTON_BLUE (#1a73e8) */
  color?: string;
  /** Show a dot instead of a count number */
  dot?: boolean;
  /** Hides the badge when count is 0 (default: true) */
  hideWhenZero?: boolean;
  /** Additional CSS class name */
  className?: string;
}
