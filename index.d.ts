/**
 * @aero-vi/aero-ui
 * AeroMail UI Component Library
 * @version 2.0.0
 *
 * Exports:
 * - Data model types (AeroMessage, AeroThread, AeroFolder, etc.)
 * - Component prop interfaces (all 19 components)
 * - Design tokens (colors, typography, spacing, shadows, transitions)
 * - Utility functions (getAvatarColor)
 */
export * from './types';
export * from './components';
export { DESIGN_TOKENS, DARK_COLORS, LIGHT_COLORS, AVATAR_COLORS, LABEL_COLORS, TYPOGRAPHY, SPACING, DIMENSIONS, BORDER_RADIUS, SHADOWS, TRANSITIONS, getAvatarColor, } from './tokens';
export { getAvatarColor as getAvatarColorUtil } from './utils/avatarColor';
export declare const AERO_UI_VERSION = "2.0.0";
