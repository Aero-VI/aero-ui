import React from 'react';
import Badge from '@mui/material/Badge';
import type { AeroBadgeProps } from './types';

export function AeroBadge({
  children,
  count,
  max = 99,
  color = '#1a73e8',
  dot = false,
  hideWhenZero = true,
  className,
}: AeroBadgeProps) {
  const invisible = !dot && hideWhenZero && (!count || count === 0);

  return (
    <Badge
      badgeContent={dot ? undefined : count}
      variant={dot ? 'dot' : 'standard'}
      max={max}
      invisible={invisible}
      className={className}
      sx={{
        '& .MuiBadge-badge': {
          backgroundColor: color,
          color: '#ffffff',
          fontSize: '10px',
          fontWeight: 600,
          minWidth: dot ? '8px' : '16px',
          height: dot ? '8px' : '16px',
          borderRadius: dot ? '50%' : '8px',
          padding: dot ? 0 : '0 4px',
          fontFamily: "'Google Sans', Roboto, sans-serif",
        },
      }}
    >
      {children}
    </Badge>
  );
}

export default AeroBadge;
