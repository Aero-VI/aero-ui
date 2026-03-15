/**
 * AeroSplitView — Two-panel responsive layout: fixed sidebar + flexible content.
 * @package @aero-vi/aero-ui
 */

import React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { AeroDrawer } from '../AeroDrawer/AeroDrawer';
import type { AeroSplitViewProps } from './types';
import { DARK_COLORS } from '../../tokens';

/**
 * AeroSplitView
 *
 * Desktop: permanent sidebar at `sidebarWidth` (default 256px), content fills rest.
 * Mobile:  sidebar hidden in a temporary AeroDrawer; content is full width.
 *
 * The parent controls `sidebarOpen` / `onSidebarClose` for mobile drawer state.
 */
export const AeroSplitView: React.FC<
  AeroSplitViewProps & {
    /** Mobile: whether the navigation drawer is open */
    sidebarOpen?: boolean;
    /** Mobile: close handler for backdrop click / ESC */
    onSidebarClose?: () => void;
  }
> = ({
  sidebar,
  content,
  sidebarWidth = 256,
  collapsedWidth = 72,
  sidebarCollapsed = false,
  onSidebarToggle,
  className,
  sidebarOpen = false,
  onSidebarClose = () => {},
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const effectiveWidth = sidebarCollapsed ? collapsedWidth : sidebarWidth;

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        height: '100vh',
        bgcolor: DARK_COLORS.BG_MAIN,
        overflow: 'hidden',
      }}
    >
      {isMobile ? (
        /* Mobile: temporary full-width drawer */
        <AeroDrawer
          open={sidebarOpen}
          onClose={onSidebarClose}
          mobile={true}
          variant="temporary"
        >
          {sidebar}
        </AeroDrawer>
      ) : (
        /* Desktop: permanent sidebar panel */
        <Box
          sx={{
            width: effectiveWidth,
            flexShrink: 0,
            height: '100%',
            bgcolor: DARK_COLORS.BG_SIDEBAR,
            overflowY: 'auto',
            overflowX: 'hidden',
            transition: 'width 300ms cubic-bezier(0.4, 0, 0.6, 1)',
          }}
          onClick={sidebarCollapsed ? onSidebarToggle : undefined}
        >
          {sidebar}
        </Box>
      )}

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          bgcolor: DARK_COLORS.BG_MAIN,
          minWidth: 0,
        }}
      >
        {content}
      </Box>
    </Box>
  );
};

export default AeroSplitView;
