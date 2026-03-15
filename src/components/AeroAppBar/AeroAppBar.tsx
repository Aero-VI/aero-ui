/**
 * AeroAppBar — Top navigation bar, 64px height.
 * @package @aero-vi/aero-ui
 */

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import SettingsIcon from '@mui/icons-material/Settings';
import WifiOffIcon from '@mui/icons-material/WifiOff';

import type { AeroAppBarProps } from './types';
import { DARK_COLORS, TYPOGRAPHY, DIMENSIONS, getAvatarColor } from '../../tokens';

/**
 * Inline avatar — deterministically maps name/email to one of 12 accent colors.
 * Used as a fallback until a standalone AeroAvatar implementation is available.
 */
function InlineAvatar({ name, size = 32 }: { name: string; size?: number }) {
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  const bgColor = getAvatarColor(name);
  return (
    <Avatar
      sx={{
        width: size,
        height: size,
        bgcolor: bgColor,
        fontSize: size * 0.44,
        fontFamily: TYPOGRAPHY.fontUi,
        fontWeight: TYPOGRAPHY.weightMedium,
        cursor: 'pointer',
      }}
    >
      {initial}
    </Avatar>
  );
}

export const AeroAppBar: React.FC<AeroAppBarProps> = ({
  searchValue,
  onSearchChange,
  onSearchSubmit,
  onSearchClear,
  onMenuClick,
  onSettingsClick,
  account,
  onAccountClick,
  isOffline = false,
  rightSlot,
  className,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchSubmit(searchValue);
    }
  };

  const handleClear = () => {
    onSearchChange('');
    if (onSearchClear) onSearchClear();
  };

  const accountDisplayName = account?.name ?? account?.email ?? '';

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={className}
      sx={{
        bgcolor: DARK_COLORS.BG_TOPBAR,
        height: DIMENSIONS.appBarHeight,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: `1px solid ${DARK_COLORS.DIVIDER}`,
      }}
    >
      <Toolbar
        sx={{
          height: DIMENSIONS.appBarHeight,
          minHeight: `${DIMENSIONS.appBarHeight} !important`,
          px: { xs: '8px', sm: '16px' },
          gap: '8px',
        }}
      >
        {/* ── Left: hamburger + logo ── */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            minWidth: { xs: 'auto', md: '200px' },
            flexShrink: 0,
          }}
        >
          <IconButton
            onClick={onMenuClick}
            edge="start"
            sx={{
              color: DARK_COLORS.ICON_COLOR,
              '&:hover': { bgcolor: DARK_COLORS.HOVER_BG },
            }}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>

          {/* AeroMail wordmark */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: '4px', gap: '6px' }}>
            {/* Logo mark — teal circle with 'A' */}
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                bgcolor: DARK_COLORS.FAB_TEAL,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#fff',
                  fontFamily: TYPOGRAPHY.fontUi,
                  lineHeight: 1,
                }}
              >
                A
              </Box>
            </Box>

            <Box
              component="span"
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontSize: TYPOGRAPHY.sizeAppTitle,
                fontWeight: TYPOGRAPHY.weightMedium,
                color: DARK_COLORS.TEXT_PRIMARY,
                fontFamily: TYPOGRAPHY.fontUi,
                letterSpacing: '-0.2px',
                userSelect: 'none',
              }}
            >
              AeroMail
            </Box>
          </Box>
        </Box>

        {/* ── Center: search bar ── */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            mx: { xs: '4px', md: '16px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: { xs: '100%', md: DIMENSIONS.searchBarWidth },
              maxWidth: DIMENSIONS.searchBarMaxWidth,
              height: DIMENSIONS.searchBarHeight,
              bgcolor: DARK_COLORS.BG_INPUT,
              borderRadius: DIMENSIONS.searchBarBorderRadius,
              px: '12px',
              gap: '8px',
              '&:focus-within': {
                bgcolor: '#3C4043',
                boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
              },
              transition: 'background-color 150ms ease, box-shadow 150ms ease',
            }}
          >
            <SearchIcon sx={{ fontSize: '20px', color: DARK_COLORS.ICON_COLOR, flexShrink: 0 }} />

            <InputBase
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search mail"
              fullWidth
              inputProps={{ 'aria-label': 'Search mail' }}
              sx={{
                flex: 1,
                fontSize: '16px',
                color: DARK_COLORS.TEXT_PRIMARY,
                fontFamily: TYPOGRAPHY.fontUi,
                '& input': {
                  padding: 0,
                  '&::placeholder': {
                    color: DARK_COLORS.TEXT_SECONDARY,
                    opacity: 1,
                  },
                },
              }}
            />

            {/* Clear button — visible only when input has a value */}
            {searchValue && (
              <IconButton
                onClick={handleClear}
                size="small"
                sx={{
                  color: DARK_COLORS.ICON_COLOR,
                  p: '4px',
                  '&:hover': { bgcolor: DARK_COLORS.HOVER_BG },
                  flexShrink: 0,
                }}
                aria-label="Clear search"
              >
                <ClearIcon sx={{ fontSize: '18px' }} />
              </IconButton>
            )}
          </Box>
        </Box>

        {/* ── Right: offline chip + custom slot + settings + avatar ── */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            minWidth: { xs: 'auto', md: '200px' },
            justifyContent: 'flex-end',
            flexShrink: 0,
          }}
        >
          {isOffline && (
            <Chip
              icon={<WifiOffIcon sx={{ fontSize: '14px !important' }} />}
              label="Offline"
              size="small"
              sx={{
                bgcolor: 'rgba(242,139,130,0.16)',
                color: DARK_COLORS.TEXT_ERROR,
                fontSize: '12px',
                height: '24px',
                display: { xs: 'none', sm: 'flex' },
              }}
            />
          )}

          {rightSlot}

          <IconButton
            onClick={onSettingsClick}
            sx={{
              color: DARK_COLORS.ICON_COLOR,
              '&:hover': { bgcolor: DARK_COLORS.HOVER_BG },
            }}
            aria-label="Settings"
          >
            <SettingsIcon />
          </IconButton>

          {accountDisplayName && (
            <Box onClick={onAccountClick} sx={{ cursor: 'pointer', ml: '4px' }}>
              <InlineAvatar name={accountDisplayName} size={32} />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AeroAppBar;
