/**
 * AeroAvatar — Circular avatar with auto-generated background color.
 *
 * Displays the first letter of the provided name on a colored background.
 * Color is deterministically derived from the name using getAvatarColor().
 * Optionally shows an image (src) instead of the initial.
 *
 * Sizes map to exact pixel diameters used across the app:
 * - 24: label chips, compact areas
 * - 32: account switcher secondary accounts, AppBar
 * - 36: inbox email rows (desktop)
 * - 40: thread view message cards
 * - 48: label picker header
 * - 56: account switcher primary account
 */
export type AeroAvatarSize = 24 | 32 | 36 | 40 | 48 | 56;

export interface AeroAvatarProps {
  /** Name used to generate the initial letter and auto-color */
  name: string;
  /** Pixel diameter of the avatar circle */
  size?: AeroAvatarSize;
  /** Optional URL to an image — overrides the initial+color display */
  src?: string;
  /** Override the auto-generated background color with a specific hex */
  colorOverride?: string;
  /** Show a green online indicator dot in the bottom-right corner */
  showOnlineIndicator?: boolean;
  /** Whether the user is currently online (requires showOnlineIndicator) */
  isOnline?: boolean;
  /** Alt text for image mode; defaults to name */
  alt?: string;
  /** Additional CSS class name */
  className?: string;
}
