import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import type { AeroTooltipProps } from './types';

export function AeroTooltip({
  title,
  placement = 'bottom',
  children,
  enterDelay = 300,
  leaveDelay = 0,
  disabled = false,
  className,
}: AeroTooltipProps) {
  return (
    <Tooltip
      title={disabled ? '' : title}
      placement={placement}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      disableHoverListener={disabled}
      disableFocusListener={disabled}
      disableTouchListener={disabled}
      classes={className ? { popper: className } : undefined}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#292b2f',
            color: '#e8eaed',
            fontSize: '12px',
            fontFamily: "'Google Sans', Roboto, sans-serif",
            borderRadius: '4px',
            maxWidth: '200px',
            padding: '4px 8px',
          },
        },
      }}
    >
      <span style={{ display: 'inline-flex' }}>{children}</span>
    </Tooltip>
  );
}

export default AeroTooltip;
