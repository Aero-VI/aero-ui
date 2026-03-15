import type { ReactNode, MouseEvent } from 'react';

/**
 * AeroButton — Primary action button component.
 *
 * Supports four visual variants mapped to the AeroMail design system:
 * - primary:   Filled blue (#1a73e8), used for Send, Sign In, Save
 * - secondary: Outlined or ghost style, used for secondary actions
 * - text:      No background, text-only (e.g. Reply, Forward)
 * - icon:      Square/circle with only an icon, no label text
 *
 * Sizes:
 * - sm: 28px height, 12px/8px padding — compact toolbars
 * - md: 36px height, 16px/12px padding — standard (default)
 * - lg: 48px height, 24px/16px padding — prominent CTA (e.g. Sign In)
 */
export interface AeroButtonProps {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'text' | 'icon';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Shows a circular spinner and disables interaction */
  loading?: boolean;
  /** Disables the button */
  disabled?: boolean;
  /** Click handler */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Button label / content */
  children?: ReactNode;
  /** Optional leading icon (React element, e.g. <EditOutlined />) */
  startIcon?: ReactNode;
  /** Optional trailing icon */
  endIcon?: ReactNode;
  /** Full width (100%) — used for Sign In button in login form */
  fullWidth?: boolean;
  /** HTML button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Additional CSS class name */
  className?: string;
  /** aria-label for accessibility */
  ariaLabel?: string;
}
