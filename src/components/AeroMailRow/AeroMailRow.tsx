import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SnoozeIcon from '@mui/icons-material/Snooze';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { AeroAvatar } from '../AeroAvatar/AeroAvatar';
import { AeroCheckbox } from '../AeroCheckbox/AeroCheckbox';
import type { AeroMailRowProps } from './types';
import { DARK_COLORS, TYPOGRAPHY } from '../../tokens';

function formatTimestamp(ts: string | number): string {
  const date = typeof ts === 'number' ? new Date(ts) : new Date(ts);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  if (diffDays < 1 && date.getDate() === now.getDate()) {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  } else if (diffDays < 7) {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  } else if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function AeroMailRow({
  message,
  isSelected,
  onSelect,
  onStar,
  onClick,
  onArchive,
  onDelete,
  onMarkUnread,
  unread,
  className,
}: AeroMailRowProps) {
  const [hovered, setHovered] = useState(false);
  const isUnread = unread !== undefined ? unread : !message.isRead;
  const showCheckbox = hovered || isSelected;

  const senderName = message.from.name || message.from.address;

  const bgColor = isSelected
    ? DARK_COLORS.BG_ROW_SELECTED
    : isUnread
    ? DARK_COLORS.BG_ROW_UNREAD
    : 'transparent';

  return (
    <Box
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '56px',
        width: '100%',
        px: 1,
        backgroundColor: bgColor,
        cursor: 'pointer',
        borderBottom: `1px solid ${DARK_COLORS.DIVIDER_ROW}`,
        transition: 'background-color 150ms ease',
        '&:hover': {
          backgroundColor: isSelected ? DARK_COLORS.BG_ROW_SELECTED : DARK_COLORS.BG_ROW_HOVER,
        },
        userSelect: 'none',
      }}
      onClick={() => onClick(message.id)}
    >
      {/* Checkbox */}
      <Box
        sx={{
          width: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          opacity: showCheckbox ? 1 : 0,
          transition: 'opacity 150ms ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <AeroCheckbox
          checked={isSelected}
          onChange={(checked) => onSelect(message.id, checked)}
          ariaLabel={`Select email from ${senderName}`}
        />
      </Box>

      {/* Avatar */}
      <Box
        sx={{ width: 36, height: 36, flexShrink: 0, mr: 1.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <AeroAvatar name={senderName} size={36} />
      </Box>

      {/* Sender name */}
      <Box sx={{ width: 180, flexShrink: 0, mr: 1, overflow: 'hidden' }}>
        <Typography
          noWrap
          sx={{
            fontSize: TYPOGRAPHY.sizeSender,
            fontWeight: isUnread ? TYPOGRAPHY.weightBold : TYPOGRAPHY.weightRegular,
            color: isUnread ? DARK_COLORS.TEXT_SENDER_UNREAD : DARK_COLORS.TEXT_SENDER_READ,
            fontFamily: TYPOGRAPHY.fontUi,
          }}
        >
          {senderName}
        </Typography>
      </Box>

      {/* Subject · Snippet */}
      <Box sx={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Typography
          component="span"
          noWrap
          sx={{
            fontSize: TYPOGRAPHY.sizeSubject,
            fontWeight: isUnread ? TYPOGRAPHY.weightBold : TYPOGRAPHY.weightRegular,
            color: isUnread ? DARK_COLORS.TEXT_SUBJECT_UNREAD : DARK_COLORS.TEXT_SUBJECT_READ,
            fontFamily: TYPOGRAPHY.fontUi,
            flexShrink: 0,
            maxWidth: '40%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {message.subject}
        </Typography>
        <Typography
          component="span"
          sx={{
            fontSize: TYPOGRAPHY.sizeSubject,
            fontWeight: TYPOGRAPHY.weightRegular,
            color: DARK_COLORS.TEXT_SNIPPET,
            fontFamily: TYPOGRAPHY.fontUi,
            mx: 0.5,
            flexShrink: 0,
          }}
        >
          ·
        </Typography>
        <Typography
          component="span"
          noWrap
          sx={{
            fontSize: TYPOGRAPHY.sizeSnippet,
            fontWeight: TYPOGRAPHY.weightRegular,
            color: DARK_COLORS.TEXT_SNIPPET,
            fontFamily: TYPOGRAPHY.fontUi,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {message.snippet}
        </Typography>
      </Box>

      {/* Attachment icon */}
      {message.hasAttachment && (
        <Box sx={{ flexShrink: 0, ml: 0.5 }}>
          <AttachFileIcon sx={{ fontSize: 16, color: DARK_COLORS.ICON_COLOR }} />
        </Box>
      )}

      {/* Hover actions */}
      {hovered ? (
        <Box
          sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, ml: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          {onArchive && (
            <IconButton size="small" onClick={() => onArchive(message.id)} sx={{ color: DARK_COLORS.ICON_COLOR }}>
              <ArchiveOutlinedIcon fontSize="small" />
            </IconButton>
          )}
          {onDelete && (
            <IconButton size="small" onClick={() => onDelete(message.id)} sx={{ color: DARK_COLORS.ICON_COLOR }}>
              <DeleteOutlineIcon fontSize="small" />
            </IconButton>
          )}
          {onMarkUnread && (
            <IconButton size="small" onClick={() => onMarkUnread(message.id)} sx={{ color: DARK_COLORS.ICON_COLOR }}>
              <SnoozeIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      ) : (
        /* Timestamp */
        <Box sx={{ flexShrink: 0, ml: 1, minWidth: 64, textAlign: 'right' }}>
          <Typography
            sx={{
              fontSize: TYPOGRAPHY.sizeTimestamp,
              fontWeight: isUnread ? TYPOGRAPHY.weightBold : TYPOGRAPHY.weightRegular,
              color: isUnread ? DARK_COLORS.TEXT_TIMESTAMP_UNREAD : DARK_COLORS.TEXT_TIMESTAMP,
              fontFamily: TYPOGRAPHY.fontUi,
              whiteSpace: 'nowrap',
            }}
          >
            {formatTimestamp(message.timestamp)}
          </Typography>
        </Box>
      )}

      {/* Star icon */}
      <Box
        sx={{ flexShrink: 0, ml: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          size="small"
          onClick={() => onStar(message.id, !message.isStarred)}
          sx={{ color: message.isStarred ? DARK_COLORS.STAR_ACTIVE : DARK_COLORS.STAR_DEFAULT }}
        >
          {message.isStarred ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default AeroMailRow;
