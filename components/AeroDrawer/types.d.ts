import { ReactNode } from '../../../node_modules/react';
/**
 * AeroDrawer — Slide-in drawer overlay, primarily for mobile navigation.
 *
 * Mobile behavior:
 * - Width: 100% of viewport (temporary variant — covers full screen)
 * - Slides from the left (translateX animation)
 * - Semi-transparent backdrop (rgba(0,0,0,0.5)) covers the right
 * - Clicking backdrop closes drawer
 * - Animation: 225ms cubic-bezier(0, 0, 0.2, 1)
 *
 * Desktop behavior (optional usage):
 * - Permanent or persistent variant, 256px width
 * - No backdrop
 *
 * The drawer content (sidebar) is passed as children.
 */
export type DrawerAnchor = 'left' | 'right' | 'top' | 'bottom';
export type DrawerVariant = 'temporary' | 'persistent' | 'permanent';
export interface AeroDrawerProps {
    /** Whether the drawer is currently open */
    open: boolean;
    /** Called when the drawer should close (backdrop click, ESC key) */
    onClose: () => void;
    /** Drawer content */
    children?: ReactNode;
    /** Which edge the drawer slides from */
    anchor?: DrawerAnchor;
    /** MUI drawer variant */
    variant?: DrawerVariant;
    /**
     * Force full-width mode.
     * On mobile, always true. On desktop with this prop, expands to 100%.
     */
    fullWidth?: boolean;
    /** Width in px when not full-width — defaults to 256 */
    width?: number;
    /** Z-index override — defaults to 1200 (above content, below compose modal) */
    zIndex?: number;
    /** Additional CSS class name for the drawer paper */
    className?: string;
}
