import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import type { AeroCheckboxProps } from './types';

export function AeroCheckbox({
  checked,
  indeterminate = false,
  onChange,
  disabled = false,
  ariaLabel,
  name,
  id,
  className,
}: AeroCheckboxProps) {
  return (
    <Checkbox
      checked={checked}
      indeterminate={indeterminate}
      disabled={disabled}
      name={name}
      id={id}
      className={className}
      inputProps={{ 'aria-label': ariaLabel }}
      onChange={(e) => onChange(e.target.checked)}
      sx={{
        color: '#9aa0a6',
        padding: '11px',
        '&.Mui-checked': {
          color: '#8ab4f8',
        },
        '&.MuiCheckbox-indeterminate': {
          color: '#8ab4f8',
        },
        '& .MuiSvgIcon-root': {
          fontSize: '18px',
        },
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.08)',
        },
      }}
    />
  );
}

export default AeroCheckbox;
