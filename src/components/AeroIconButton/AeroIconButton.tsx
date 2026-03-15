import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type { AeroIconButtonProps } from './types';

const sizeMap = {
  sm: 24,
  md: 32,
  lg: 40,
} as const;

export function AeroIconButton({
  icon,
  tooltip,
  size = 'md',
  color,
  onClick,
  disabled = false,
  active = false,
  ariaLabel,
  className,
  type = 'button',
}: AeroIconButtonProps) {
  const containerSize = sizeMap[size];
  const iconColor = color ?? (active ? '#8ab4f8' : '#9aa0a6');

  const button = (
    <IconButton
      onClick={onClick as any}
      disabled={disabled}
      type={type}
      className={className}
      aria-label={ariaLabel ?? tooltip}
      sx={{
        width: containerSize,
        height: containerSize,
        color: iconColor,
        borderRadius: '50%',
        padding: 0,
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.08)',
        },
        '&.Mui-disabled': {
          color: 'rgba(154,160,166,0.4)',
        },
        '& .MuiSvgIcon-root': {
          fontSize: `${Math.round(containerSize * 0.6)}px`,
        },
      }}
    >
      {icon}
    </IconButton>
  );

  if (tooltip) {
    return (
      <Tooltip
        title={tooltip}
        placement="bottom"
        enterDelay={300}
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: '#292b2f',
              color: '#e8eaed',
              fontSize: '12px',
              borderRadius: '4px',
              maxWidth: '200px',
            },
          },
        }}
      >
        <span style={{ display: 'inline-flex' }}>{button}</span>
      </Tooltip>
    );
  }

  return button;
}

export default AeroIconButton;
