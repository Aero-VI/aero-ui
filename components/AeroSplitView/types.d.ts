import { ReactNode } from '../../../node_modules/react';
/**
 * AeroSplitView — Two-panel layout shell: sidebar + main content area.
 *
 * Desktop layout:
 *   [ sidebar (256px fixed) ][ content (flex:1) ]
 *
 * When collapsed:
 *   [ sidebar (72px) ][ content (flex:1) ]
 *
 * Mobile: sidebar hidden; content takes full width.
 * Mobile sidebar is handled by AeroDrawer (separate component).
 *
 * The split view manages the responsive breakpoint (768px) and
 * sidebar collapse state.
 */
export interface AeroSplitViewProps {
    /** The sidebar content — typically <AeroSidebar /> */
    sidebar: ReactNode;
    /** The main content area */
    content: ReactNode;
    /** Sidebar width in px when expanded — defaults to 256 */
    sidebarWidth?: number;
    /** Sidebar width in px when collapsed (icon-only) — defaults to 72 */
    collapsedWidth?: number;
    /** Whether the sidebar is currently in collapsed mode */
    sidebarCollapsed?: boolean;
    /** Called when collapse state should toggle */
    onSidebarToggle?: () => void;
    /** Additional CSS class name for the root container */
    className?: string;
}
