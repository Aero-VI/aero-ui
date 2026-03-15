/**
 * AeroDrawer — MUI Drawer wrapper for mobile/desktop navigation.
 * @package @aero-vi/aero-ui
 */

import React from 'react';
import Drawer from '@mui/material/Drawer';

import type { AeroDrawerProps } from './types';
import { DARK_COLORS, TRANSITIONS } from '../../tokens';

export const AeroDrawer: React.FC<AeroDrawerProps & { mobile?: boolean }> = ({
  open,
  onClose,
  children,
  anchor = 'left',
  variant,
  fullWidth = false,
  width = 256,
  zIndex = 1200,
  className,
  mobile = false,
}) => {
  const resolvedVariant = variant ?? (mobile ? 'temporary' : 'permanent');
  const resolvedWidth = fullWidth || mobile ? '100%' : width;

  return (
    <Drawer
      anchor={anchor}
      open={resolvedVariant === 'permanent' ? true : open}
      onClose={onClose}
      variant={resolvedVariant}
      sx={{
        '& .MuiDrawer-paper': {
          width: resolvedWidth,
          bgcolor: DARK_COLORS.BG_SIDEBAR,
          border: 'none',
          overflowX: 'hidden',
          transition: TRANSITIONS.drawerSlide,
          zIndex,
        },
        '& .MuiBackdrop-root': {
          backgroundColor: DARK_COLORS.BG_MODAL_OVERLAY,
        },
      }}
      PaperProps={{
        className,
        sx: {
          width: resolvedWidth,
          bgcolor: DARK_COLORS.BG_SIDEBAR,
          border: 'none',
          overflowX: 'hidden',
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export default AeroDrawer;
