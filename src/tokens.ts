/**
 * AeroMail UI — Design Token System
 * @package @aero-vi/aero-ui
 * @version 2.0.0
 *
 * Single source of truth for all visual constants used across AeroMail.
 * Values derived from Gmail UI research (gmail-research.md) and the
 * AeroMail v2 product specification design tokens (Section 4).
 *
 * Usage:
 *   import { DESIGN_TOKENS } from '@aero-vi/aero-ui'
 *   const bg = DESIGN_TOKENS.colors.dark.BG_MAIN  // '#1f1f1f'
 */

// ---------------------------------------------------------------------------
// Color Tokens — Dark Mode (Default)
// ---------------------------------------------------------------------------

export const DARK_COLORS = {
  // Backgrounds
  BG_MAIN: '#1f1f1f',
  BG_APP: '#1f1f1f',
  BG_TOPBAR: '#1f1f1f',
  BG_SIDEBAR: '#1f1f1f',
  BG_ROW_HOVER: '#2d2e30',
  BG_ROW_UNREAD: '#1f2937',
  BG_ROW_SELECTED: '#394457',
  BG_COMPOSE: '#292b2f',
  BG_COMPOSE_HEADER: '#404144',
  BG_CARD: '#2d2d2f',
  BG_CARD_EXPANDED: '#292b2f',
  BG_INPUT: '#303134',
  BG_SETTINGS: '#1f1f1f',
  BG_MODAL_OVERLAY: 'rgba(0,0,0,0.5)',
  BG_ACCOUNT_SWITCHER: '#2d2d2f',

  // Text
  TEXT_PRIMARY: '#e8eaed',
  TEXT_SECONDARY: '#9aa0a6',
  TEXT_SENDER_READ: '#9aa0a6',
  TEXT_SENDER_UNREAD: '#e8eaed',
  TEXT_SUBJECT_UNREAD: '#e8eaed',
  TEXT_SUBJECT_READ: '#9aa0a6',
  TEXT_SNIPPET: '#9aa0a6',
  TEXT_TIMESTAMP: '#9aa0a6',
  TEXT_TIMESTAMP_UNREAD: '#e8eaed',
  TEXT_LINK: '#8ab4f8',
  TEXT_FOLDER_ACTIVE: '#e8eaed',
  TEXT_FOLDER_INACTIVE: '#e8eaed',
  TEXT_ERROR: '#f28b82',
  TEXT_COMPOSE_HEADER: '#e8eaed',

  // Accent & Interactive
  ACCENT_BLUE: '#8ab4f8',
  BUTTON_BLUE: '#1a73e8',
  BUTTON_BLUE_HOVER: '#1765cc',
  BUTTON_BLUE_LIGHT: '#0b57d0', // Light mode variant
  FAB_TEAL: '#00BCD4',
  FAB_TEAL_ALT: '#1a73e8',
  ACTIVE_PILL: 'rgba(138,180,248,0.12)',
  ACTIVE_PILL_HOVER: 'rgba(138,180,248,0.20)',
  HOVER_BG: 'rgba(255,255,255,0.08)',

  // UI Elements
  DIVIDER: 'rgba(255,255,255,0.12)',
  DIVIDER_ROW: 'rgba(255,255,255,0.06)',
  ICON_COLOR: '#9aa0a6',
  ICON_ACTIVE: '#8ab4f8',
  STAR_DEFAULT: 'rgba(255,255,255,0.4)',
  STAR_ACTIVE: '#fdd663',
  BADGE_TEXT: '#9aa0a6',
  CHIP_BG: 'rgba(138,180,248,0.12)',
  CHECKBOX_BORDER: '#9aa0a6',
  CHECKBOX_CHECKED: '#8ab4f8',
  SCROLL_THUMB: 'rgba(255,255,255,0.2)',
} as const;

// ---------------------------------------------------------------------------
// Color Tokens — Light Mode
// ---------------------------------------------------------------------------

export const LIGHT_COLORS = {
  BG_MAIN: '#ffffff',
  BG_SIDEBAR: '#f6f8fc',
  BG_TOPBAR: '#ffffff',
  BG_ROW_HOVER: '#f2f6fc',
  BG_ROW_UNREAD: '#ffffff',
  BG_INPUT: '#eaf1fb',
  TEXT_PRIMARY: '#202124',
  TEXT_SECONDARY: '#444746',
  TEXT_SENDER_READ: '#444746',
  ACTIVE_PILL: '#d3e3fd',
  ACTIVE_PILL_TEXT: '#041e49',
  DIVIDER: '#e0e0e0',
  BUTTON_BLUE: '#0b57d0',
  ACCENT_BLUE: '#1a73e8',
} as const;

// ---------------------------------------------------------------------------
// Avatar Colors — 12-color hash-assigned palette
// ---------------------------------------------------------------------------

export const AVATAR_COLORS = [
  '#F44336', // Red
  '#E91E63', // Pink
  '#9C27B0', // Purple
  '#673AB7', // Deep Purple
  '#3F51B5', // Indigo
  '#2196F3', // Blue
  '#00BCD4', // Cyan
  '#009688', // Teal
  '#4CAF50', // Green
  '#FF9800', // Orange
  '#FF5722', // Deep Orange
  '#795548', // Brown
] as const;

/**
 * Deterministically maps a sender name to one of 12 avatar colors.
 * Uses a simple character-code sum modulo 12 — same as Gmail's algorithm.
 */
export function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash + name.charCodeAt(i)) % 12;
  }
  return AVATAR_COLORS[hash];
}

// ---------------------------------------------------------------------------
// Label Colors — 12 fixed colors for user-created labels
// ---------------------------------------------------------------------------

export const LABEL_COLORS = [
  '#F44336', // Red
  '#E91E63', // Pink
  '#9C27B0', // Purple
  '#673AB7', // Deep Purple
  '#3F51B5', // Indigo
  '#2196F3', // Blue
  '#00BCD4', // Cyan
  '#009688', // Teal
  '#4CAF50', // Green
  '#FF9800', // Orange
  '#FF5722', // Deep Orange
  '#795548', // Brown
] as const;

// ---------------------------------------------------------------------------
// Typography Tokens
// ---------------------------------------------------------------------------

export const TYPOGRAPHY = {
  fontUi: "'Google Sans', Roboto, 'Helvetica Neue', Arial, sans-serif",
  fontBody: "Roboto, Arial, sans-serif",
  fontMono: "'Google Sans Mono', 'Courier New', monospace",

  // Font sizes
  sizeAppTitle: '20px',
  sizeThreadSubject: '22px',
  sizeSettingsTitle: '22px',
  sizeSender: '14px',
  sizeSubject: '14px',
  sizeSnippet: '14px',
  sizeTimestamp: '12px',
  sizeFolderName: '14px',
  sizeLabelsHeader: '11px',
  sizeFabText: '14px',
  sizeComposeHeader: '13px',
  sizeReplyButton: '13px',
  sizeButton: '14px',

  // Font weights
  weightRegular: 400,
  weightMedium: 500,
  weightSemiBold: 600,
  weightBold: 700,
} as const;

// ---------------------------------------------------------------------------
// Spacing Tokens
// ---------------------------------------------------------------------------

export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
} as const;

// ---------------------------------------------------------------------------
// Dimension Tokens
// ---------------------------------------------------------------------------

export const DIMENSIONS = {
  // Layout
  sidebarWidth: '256px',
  sidebarCollapsedWidth: '72px',
  appBarHeight: '64px',
  appBarHeightMobile: '56px',
  appBarPadding: '16px',

  // Search bar
  searchBarWidth: '60%',
  searchBarMaxWidth: '720px',
  searchBarHeight: '46px',
  searchBarBorderRadius: '24px',

  // Email rows
  rowHeight: '52px',
  rowHeightMobile: '72px',
  rowPadding: '0 16px',

  // Avatars
  avatarSizeXs: '24px',
  avatarSizeSm: '32px',
  avatarSizeMd: '36px',
  avatarSizeLg: '40px',
  avatarSizeXl: '56px',
  avatarFontSize: '14px',

  // Compose modal
  composeWidth: '560px',
  composeHeightDefault: '480px',
  composeHeightMinimized: '40px',
  composeHeightMaximized: '80vh',
  composeHeaderHeight: '40px',
  composeToolbarHeight: '40px',
  composeBorderRadius: '16px 16px 0 0',
  composeZIndex: 1300,

  // FAB
  fabHeight: '56px',
  fabBorderRadius: '16px',

  // Thread
  threadMaxWidth: '860px',
  messageCardBorderRadius: '8px',

  // Folder rows
  folderRowHeight: '32px',

  // Active pill
  activePillBorderRadius: '0 16px 16px 0',

  // Label dots
  labelDotSize: '12px',
  labelSwatchSize: '24px',

  // Buttons
  sendButtonBorderRadius: '18px',
  sendButtonHeight: '36px',

  // Touch targets
  touchTargetMin: '48px',

  // Settings
  settingsNavWidth: '256px',
  settingsContentPadding: '24px 32px',

  // Account switcher
  accountSwitcherWidth: '360px',
  accountSwitcherWidthMobile: '320px',
  accountAvatarSize: '32px',
} as const;

// ---------------------------------------------------------------------------
// Border Radius Tokens
// ---------------------------------------------------------------------------

export const BORDER_RADIUS = {
  button: '18px',
  card: '8px',
  input: '4px',
  searchBar: '24px',
  fab: '16px',
  activePill: '0 16px 16px 0',
  accountSwitcher: '16px',
  avatar: '50%',
  drawer: '0',
  compose: '16px 16px 0 0',
  chip: '10px',
  colorSwatch: '50%',
} as const;

// ---------------------------------------------------------------------------
// Elevation / Shadow Tokens
// ---------------------------------------------------------------------------

export const SHADOWS = {
  none: 'none',
  level1: '0 1px 2px rgba(0,0,0,0.3)',
  level2: '0 2px 6px rgba(0,0,0,0.3)',
  level3: '0 4px 12px rgba(0,0,0,0.4)',
  level4: '0 6px 24px rgba(0,0,0,0.4)',
  level5: '0 8px 32px rgba(0,0,0,0.6)',
} as const;

// ---------------------------------------------------------------------------
// Motion / Transition Tokens
// ---------------------------------------------------------------------------

export const TRANSITIONS = {
  drawerSlide: '225ms cubic-bezier(0, 0, 0.2, 1)',
  rowHover: '150ms ease',
  composeOpen: '200ms ease-out',
  composeMinimize: '150ms ease',
  sidebarCollapse: '300ms cubic-bezier(0.4, 0, 0.6, 1)',
  accountPopover: '150ms ease-out',
  checkboxReveal: '150ms ease',
  toast: '200ms ease',
} as const;

// ---------------------------------------------------------------------------
// Consolidated DESIGN_TOKENS export
// ---------------------------------------------------------------------------

export const DESIGN_TOKENS = {
  colors: {
    dark: DARK_COLORS,
    light: LIGHT_COLORS,
    avatar: AVATAR_COLORS,
    label: LABEL_COLORS,
  },
  typography: TYPOGRAPHY,
  spacing: SPACING,
  dimensions: DIMENSIONS,
  borderRadius: BORDER_RADIUS,
  shadows: SHADOWS,
  transitions: TRANSITIONS,

  // Legacy flat tokens for backwards compatibility with v1
  BG_MAIN: DARK_COLORS.BG_MAIN,
  BG_SIDEBAR: DARK_COLORS.BG_SIDEBAR,
  BG_ROW_HOVER: DARK_COLORS.BG_ROW_HOVER,
  TEXT_PRIMARY: DARK_COLORS.TEXT_PRIMARY,
  TEXT_SECONDARY: DARK_COLORS.TEXT_SECONDARY,
  ACCENT_BLUE: DARK_COLORS.ACCENT_BLUE,
  BUTTON_BLUE: DARK_COLORS.BUTTON_BLUE,
  FAB_TEAL: DARK_COLORS.FAB_TEAL,
  ACTIVE_PILL: DARK_COLORS.ACTIVE_PILL,
} as const;
