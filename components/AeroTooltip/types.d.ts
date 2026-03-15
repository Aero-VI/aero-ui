import { ReactNode } from '../../../node_modules/react';
/**
 * AeroTooltip — Hover/focus tooltip for icon buttons and interactive elements.
 *
 * Design:
 * - Background: #404144 (BG_COMPOSE_HEADER)
 * - Text: #e8eaed (TEXT_PRIMARY), 12px
 * - Border-radius: 4px
 * - Max width: 200px
 * - Delay: 300ms on appear (prevents flash on quick mouse movement)
 * - Placement defaults to 'bottom'
 */
export type TooltipPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'right';
export interface AeroTooltipProps {
    /** The tooltip text content */
    title: string;
    /** Placement relative to the child element */
    placement?: TooltipPlacement;
    /** The element that triggers the tooltip */
    children: ReactNode;
    /** Delay before tooltip appears (ms) — default 300 */
    enterDelay?: number;
    /** Delay before tooltip disappears (ms) — default 0 */
    leaveDelay?: number;
    /** Disables the tooltip entirely */
    disabled?: boolean;
    /** Additional CSS class name for the tooltip popper */
    className?: string;
}
