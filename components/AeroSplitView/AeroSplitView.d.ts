import { default as React } from '../../../node_modules/react';
import { AeroSplitViewProps } from './types';
/**
 * AeroSplitView
 *
 * Desktop: permanent sidebar at `sidebarWidth` (default 256px), content fills rest.
 * Mobile:  sidebar hidden in a temporary AeroDrawer; content is full width.
 *
 * The parent controls `sidebarOpen` / `onSidebarClose` for mobile drawer state.
 */
export declare const AeroSplitView: React.FC<AeroSplitViewProps & {
    /** Mobile: whether the navigation drawer is open */
    sidebarOpen?: boolean;
    /** Mobile: close handler for backdrop click / ESC */
    onSidebarClose?: () => void;
}>;
export default AeroSplitView;
