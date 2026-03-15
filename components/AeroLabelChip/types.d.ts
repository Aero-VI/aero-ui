import { AeroLabel } from '../../types';
/**
 * AeroLabelChip — Colored label tag for inbox rows and thread views.
 *
 * A specialized chip that renders a label with its assigned color.
 * Displayed inline within email rows and message cards.
 *
 * Design:
 * - Height: 20px (inline in rows), 24px (standalone)
 * - Border-radius: 10px
 * - Background: label.color at 20% opacity OR as a solid left border
 * - Text: label.name, 11px, weight 500, truncated at 60px max-width
 * - Delete ×: visible when onDelete is provided (settings / label management)
 *
 * Note: The label color dot in the sidebar uses a different component (AeroFolderItem / label rows).
 * AeroLabelChip is specifically for the chip shown on message rows.
 */
export interface AeroLabelChipProps {
    /** The label to display */
    label: AeroLabel;
    /** Called when the chip is clicked (e.g. navigate to label view) */
    onClick?: (label: AeroLabel) => void;
    /** Called when the × delete button is clicked (label management) */
    onDelete?: (labelId: string) => void;
    /**
     * Size variant.
     * - 'sm': 20px height, 11px text (for inline use in rows)
     * - 'md': 24px height, 13px text (for standalone / thread header use)
     */
    size?: 'sm' | 'md';
    /** Additional CSS class name */
    className?: string;
}
