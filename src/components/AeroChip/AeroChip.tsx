import React from 'react';
import Chip from '@mui/material/Chip';
import type { AeroChipProps } from './types';

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function AeroChip({
  label,
  color,
  onDelete,
  icon,
  size = 'sm',
  onClick,
  disabled = false,
  className,
}: AeroChipProps) {
  const bgColor = color ? hexToRgba(color, 0.15) : 'rgba(138,180,248,0.12)';
  const borderColor = color ?? '#8ab4f8';

  return (
    <Chip
      label={label}
      size={size === 'md' ? 'medium' : 'small'}
      icon={icon as any}
      onDelete={onDelete}
      onClick={onClick}
      disabled={disabled}
      className={className}
      sx={{
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
        borderRadius: '10px',
        color: '#e8eaed',
        fontFamily: "'Google Sans', Roboto, sans-serif",
        fontSize: '12px',
        '& .MuiChip-deleteIcon': {
          color: '#9aa0a6',
          '&:hover': { color: '#e8eaed' },
        },
        '& .MuiChip-icon': {
          color: '#9aa0a6',
        },
        '&:hover': onClick
          ? { backgroundColor: color ? hexToRgba(color, 0.25) : 'rgba(138,180,248,0.2)' }
          : {},
        cursor: onClick ? 'pointer' : 'default',
      }}
    />
  );
}

export default AeroChip;
