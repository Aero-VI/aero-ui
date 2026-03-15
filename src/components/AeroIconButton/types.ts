import type { ReactNode, MouseEvent } from 'react';

/**
 * AeroIconButton — Icon-only button with hover circle background.
 *
 * Used throughout the app for toolbar actions, row hover actions,
 * AppBar controls, and thread message controls.
 *
 * Design:
 * - Default: no background, icon color #9aa0a6
 * - Hover: background rgba(255,255,255,0.08), 40px circle
 * - Active: icon color #8ab4f8
 * - Touch target: 40px × 40px minimum
 */
export interface AeroIconButtonProps {
  /** The icon to render (React element, e.g. <ArchiveOutlined />) */
  icon: ReactNode;
  /** Tooltip text shown on hover — also serves as aria-label */
  tooltip?: string;
  /** Button size — affects touch target and icon scale */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Icon color override.
   * Defaults to ICON_COLOR (#9aa0a6).
   * Pass ICON_ACTIVE (#8ab4f8) for active state.
   */
  color?: string;
  /** Click handler */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Disables the button */
  disabled?: boolean;
  /** Whether the button is in an active state (different icon color) */
  active?: boolean;
  /** aria-label — required if no tooltip is provided */
  ariaLabel?: string;
  /** Additional CSS class name */
  className?: string;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
}
