/**
 * AeroCheckbox — Accessible checkbox with indeterminate state support.
 *
 * Used in:
 * - Inbox email rows (hidden by default, revealed on hover/long-press)
 * - Bulk selection "select all" control in the toolbar
 * - Settings filter creation form
 * - Labels management show/hide toggles
 *
 * Design:
 * - Unchecked border: #9aa0a6 (CHECKBOX_BORDER)
 * - Checked fill: #8ab4f8 (CHECKBOX_CHECKED)
 * - Indeterminate: dash icon, same fill color
 * - Size: 18px × 18px icon within 40px touch target
 */
export interface AeroCheckboxProps {
  /** Whether the checkbox is checked */
  checked: boolean;
  /**
   * Indeterminate state — shows a dash instead of a checkmark.
   * Used for "select all" when only some items are selected.
   */
  indeterminate?: boolean;
  /** Called when the checked state should change */
  onChange: (checked: boolean) => void;
  /** Disables the checkbox */
  disabled?: boolean;
  /** Accessible label (required for icon-only usage) */
  ariaLabel?: string;
  /** HTML name attribute */
  name?: string;
  /** HTML id attribute */
  id?: string;
  /** Additional CSS class name */
  className?: string;
}
