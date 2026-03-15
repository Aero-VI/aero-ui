import { ReactNode } from '../../../node_modules/react';
/**
 * AeroChip — A small pill-shaped tag component.
 *
 * Used for:
 * - Email recipient chips in compose To/CC fields
 * - Label chips on inbox rows and thread views
 * - Filter chips on search results page
 *
 * Design: border-radius 10px, height 20px (inline) or 24px (standalone),
 * background rgba(138,180,248,0.12) (CHIP_BG) by default.
 */
export interface AeroChipProps {
    /** The text label shown inside the chip */
    label: string;
    /**
     * Background color for the chip.
     * For label chips, pass the label's color hex (e.g. '#F44336').
     * For recipient chips, use the default CHIP_BG.
     */
    color?: string;
    /** Called when the × delete button is clicked */
    onDelete?: () => void;
    /** Optional leading icon element */
    icon?: ReactNode;
    /** Size variant */
    size?: 'sm' | 'md';
    /** Whether the chip is interactive / clickable */
    onClick?: () => void;
    /** Disabled state — prevents onDelete and onClick */
    disabled?: boolean;
    /** Additional CSS class name */
    className?: string;
}
