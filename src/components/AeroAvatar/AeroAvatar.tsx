import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { getAvatarColor } from '../../utils/avatarColor';
import type { AeroAvatarProps } from './types';

export function AeroAvatar({
  name,
  size = 40,
  src,
  colorOverride,
  showOnlineIndicator = false,
  isOnline = false,
  alt,
  className,
}: AeroAvatarProps) {
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  const bgColor = colorOverride ?? getAvatarColor(name ?? '');
  const fontSize = Math.round(size * 0.4);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }} className={className}>
      <Avatar
        src={src}
        alt={alt ?? name}
        sx={{
          width: size,
          height: size,
          backgroundColor: src ? undefined : bgColor,
          color: '#ffffff',
          fontSize: `${fontSize}px`,
          fontFamily: "'Google Sans', Roboto, sans-serif",
          fontWeight: 500,
        }}
      >
        {!src && initial}
      </Avatar>
      {showOnlineIndicator && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: Math.max(8, Math.round(size * 0.25)),
            height: Math.max(8, Math.round(size * 0.25)),
            borderRadius: '50%',
            backgroundColor: isOnline ? '#34a853' : '#9aa0a6',
            border: '2px solid #1f1f1f',
          }}
        />
      )}
    </Box>
  );
}

export default AeroAvatar;
