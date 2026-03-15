import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import type { AeroButtonProps } from './types';

const sizeMap = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
} as const;

export function AeroButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  children,
  startIcon,
  endIcon,
  fullWidth = false,
  type = 'button',
  className,
  ariaLabel,
}: AeroButtonProps) {
  const muiSize = sizeMap[size];
  const isDisabled = disabled || loading;

  if (variant === 'icon') {
    return (
      <IconButton
        onClick={onClick as any}
        disabled={isDisabled}
        size={muiSize}
        className={className}
        aria-label={ariaLabel}
        type={type}
      >
        {loading ? <CircularProgress size={16} sx={{ color: '#9aa0a6' }} /> : children}
      </IconButton>
    );
  }

  const variantStyles = {
    primary: {
      muiVariant: 'contained' as const,
      sx: {
        backgroundColor: '#1a73e8',
        color: '#ffffff',
        borderRadius: '18px',
        textTransform: 'none',
        fontFamily: "'Google Sans', Roboto, sans-serif",
        fontWeight: 500,
        '&:hover': { backgroundColor: '#1765cc' },
        '&:disabled': { backgroundColor: 'rgba(26,115,232,0.4)', color: 'rgba(255,255,255,0.6)' },
      },
    },
    secondary: {
      muiVariant: 'outlined' as const,
      sx: {
        borderColor: '#1a73e8',
        color: '#1a73e8',
        borderRadius: '18px',
        textTransform: 'none',
        fontFamily: "'Google Sans', Roboto, sans-serif",
        fontWeight: 500,
        '&:hover': { borderColor: '#1765cc', backgroundColor: 'rgba(26,115,232,0.04)' },
      },
    },
    text: {
      muiVariant: 'text' as const,
      sx: {
        color: '#8ab4f8',
        borderRadius: '18px',
        textTransform: 'none',
        fontFamily: "'Google Sans', Roboto, sans-serif",
        fontWeight: 500,
        background: 'none',
        '&:hover': { backgroundColor: 'rgba(138,180,248,0.08)' },
      },
    },
  };

  const { muiVariant, sx } = variantStyles[variant as 'primary' | 'secondary' | 'text'];

  return (
    <Button
      variant={muiVariant}
      size={muiSize}
      disabled={isDisabled}
      onClick={onClick as any}
      startIcon={!loading && startIcon ? startIcon : undefined}
      endIcon={!loading && endIcon ? endIcon : undefined}
      fullWidth={fullWidth}
      type={type}
      className={className}
      aria-label={ariaLabel}
      sx={sx}
    >
      {loading ? (
        <>
          <CircularProgress size={16} sx={{ color: 'inherit', mr: children ? 1 : 0 }} />
          {children}
        </>
      ) : (
        children
      )}
    </Button>
  );
}

export default AeroButton;
