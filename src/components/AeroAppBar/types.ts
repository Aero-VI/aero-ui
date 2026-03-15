import type { ReactNode } from 'react';
import type { AeroAccount } from '../../types';

/**
 * AeroAppBar — Top navigation bar, 64px height.
 *
 * Layout (left to right):
 * 1. Hamburger menu icon (toggles sidebar)
 * 2. AeroMail logo + name
 * 3. Search bar (centered, flex:1, max 720px)
 * 4. Settings icon
 * 5. Apps grid icon (optional)
 * 6. Account avatar (opens account switcher)
 *
 * Background: #1f1f1f (BG_TOPBAR)
 * Height: 64px desktop, 56px mobile
 */
export interface AeroAppBarProps {
  /** Current value of the search input */
  searchValue: string;
  /** Called on every keystroke in the search field */
  onSearchChange: (value: string) => void;
  /** Called when the user submits a search (Enter key or submit button) */
  onSearchSubmit: (value: string) => void;
  /** Called when the search field is cleared */
  onSearchClear?: () => void;
  /** Called when the hamburger menu icon is clicked */
  onMenuClick?: () => void;
  /** Called when the settings gear icon is clicked */
  onSettingsClick?: () => void;
  /** The currently active account — drives the avatar display */
  account?: AeroAccount;
  /** Called when the account avatar is clicked (opens account switcher) */
  onAccountClick?: () => void;
  /**
   * Whether we're in offline mode — shows an offline indicator chip
   * in the AppBar when true.
   */
  isOffline?: boolean;
  /**
   * Slot for injecting custom right-side content (e.g. notifications bell).
   * Rendered between settings icon and account avatar.
   */
  rightSlot?: ReactNode;
  /** Additional CSS class name */
  className?: string;
}
