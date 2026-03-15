/**
 * AeroSearchBar — Pill-shaped search input used in the AppBar.
 *
 * Design:
 * - Width: 60% of viewport, max 720px (centered in AppBar)
 * - Height: 46px
 * - Border-radius: 24px (pill)
 * - Background: #303134 (BG_INPUT)
 * - Placeholder: "Search mail"
 * - Leading magnifying glass icon (20px)
 * - Trailing × clear button (visible when value is non-empty)
 * - Trailing filter/settings icon (optional)
 *
 * Supports Gmail-style search operators:
 * from:, to:, subject:, has:attachment, after:, before:, in:, - (exclude)
 *
 * Suggestions: shows autocomplete dropdown when suggestions are provided.
 */
export interface SearchSuggestion {
  /** Display text for the suggestion */
  label: string;
  /** Type of suggestion — affects icon shown */
  type: 'recent' | 'contact' | 'operator';
  /** The value to insert when selected */
  value: string;
}

export interface AeroSearchBarProps {
  /** Current search input value */
  value: string;
  /** Called on every keystroke */
  onChange: (value: string) => void;
  /** Called when search is submitted (Enter key or search icon click) */
  onSubmit: (value: string) => void;
  /** Called when the × clear button is clicked */
  onClear?: () => void;
  /** Called when the search field gains focus */
  onFocus?: () => void;
  /** Called when the search field loses focus */
  onBlur?: () => void;
  /** Autocomplete suggestions shown in dropdown */
  suggestions?: SearchSuggestion[];
  /** Called when a suggestion is selected */
  onSuggestionSelect?: (suggestion: SearchSuggestion) => void;
  /** Placeholder text — defaults to "Search mail" */
  placeholder?: string;
  /** Auto-focus on mount */
  autoFocus?: boolean;
  /** Additional CSS class name */
  className?: string;
}
