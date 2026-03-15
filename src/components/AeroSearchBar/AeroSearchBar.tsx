import React from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import type { AeroSearchBarProps } from './types';
import { DARK_COLORS, TYPOGRAPHY } from '../../tokens';

export function AeroSearchBar({
  value,
  onChange,
  onSubmit,
  onClear,
  onFocus,
  onBlur,
  placeholder = 'Search mail',
  autoFocus = false,
  className,
}: AeroSearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(value);
    }
  };

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 46,
        backgroundColor: DARK_COLORS.BG_INPUT,
        borderRadius: '24px',
        px: 1.5,
        gap: 0.5,
        '&:focus-within': {
          backgroundColor: '#3c4043',
          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        },
      }}
    >
      {/* Search icon (clickable to submit) */}
      <IconButton
        size="small"
        onClick={() => onSubmit(value)}
        sx={{ color: DARK_COLORS.ICON_COLOR, p: 0.75, flexShrink: 0 }}
        aria-label="Search"
      >
        <SearchIcon sx={{ fontSize: 20 }} />
      </IconButton>

      {/* Input */}
      <InputBase
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        autoFocus={autoFocus}
        fullWidth
        sx={{
          color: DARK_COLORS.TEXT_PRIMARY,
          fontFamily: TYPOGRAPHY.fontUi,
          fontSize: 16,
          flex: 1,
          '& input': {
            padding: 0,
            '&::placeholder': {
              color: DARK_COLORS.TEXT_SECONDARY,
              opacity: 1,
            },
          },
        }}
      />

      {/* Clear button — only shown when value is non-empty */}
      {value && (
        <IconButton
          size="small"
          onClick={() => {
            onClear?.();
            onChange('');
          }}
          sx={{ color: DARK_COLORS.ICON_COLOR, p: 0.75, flexShrink: 0 }}
          aria-label="Clear search"
        >
          <CloseIcon sx={{ fontSize: 18 }} />
        </IconButton>
      )}
    </Box>
  );
}

export default AeroSearchBar;
