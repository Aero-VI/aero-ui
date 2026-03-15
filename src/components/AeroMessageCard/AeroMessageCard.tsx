import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ForwardIcon from '@mui/icons-material/Forward';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { AeroAvatar } from '../AeroAvatar/AeroAvatar';
import type { AeroMessageCardProps, MessageMoreAction } from './types';
import { DARK_COLORS, TYPOGRAPHY } from '../../tokens';

function formatDate(ts: string | number): string {
  const date = typeof ts === 'number' ? new Date(ts) : new Date(ts);
  return date.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function formatDateShort(ts: string | number): string {
  const date = typeof ts === 'number' ? new Date(ts) : new Date(ts);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

const MORE_ACTIONS: { label: string; action: MessageMoreAction }[] = [
  { label: 'Delete', action: 'delete' },
  { label: 'Mark as unread', action: 'markUnread' },
  { label: 'Show original', action: 'showOriginal' },
  { label: 'Download message', action: 'downloadMessage' },
  { label: 'Print', action: 'printMessage' },
  { label: 'Report phishing', action: 'reportPhishing' },
];

export function AeroMessageCard({
  message,
  expanded,
  onExpand,
  onReply,
  onReplyAll,
  onForward,
  onMoreAction,
  className,
}: AeroMessageCardProps) {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);
  const senderName = message.from.name || message.from.address;
  const snippet = message.snippet || (message.body ? message.body.replace(/<[^>]*>/g, '').slice(0, 100) : '');

  return (
    <Box
      className={className}
      sx={{
        backgroundColor: DARK_COLORS.BG_CARD,
        borderRadius: '8px',
        mb: 0.5,
        boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
        overflow: 'hidden',
      }}
    >
      {expanded ? (
        /* Expanded view */
        <Box>
          {/* Expanded header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1.5,
              p: 2,
              pb: 1,
            }}
          >
            <AeroAvatar name={senderName} size={40} />
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: TYPOGRAPHY.weightBold,
                      color: DARK_COLORS.TEXT_PRIMARY,
                      fontFamily: TYPOGRAPHY.fontUi,
                    }}
                  >
                    {senderName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: DARK_COLORS.TEXT_SECONDARY,
                      fontFamily: TYPOGRAPHY.fontUi,
                      cursor: 'pointer',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    to me ▾
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: DARK_COLORS.TEXT_SECONDARY,
                      fontFamily: TYPOGRAPHY.fontUi,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {formatDate(message.timestamp)}
                  </Typography>
                  <IconButton size="small" onClick={() => onReply(message)} sx={{ color: DARK_COLORS.ICON_COLOR }}>
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={(e) => setMenuAnchor(e.currentTarget)}
                    sx={{ color: DARK_COLORS.ICON_COLOR }}
                  >
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Body */}
          <Box sx={{ px: 2, pb: 1, color: DARK_COLORS.TEXT_PRIMARY }}>
            {message.body ? (
              message.bodyType === 'html' ? (
                <Box
                  component="div"
                  sx={{
                    fontSize: 14,
                    fontFamily: TYPOGRAPHY.fontBody,
                    lineHeight: 1.6,
                    color: DARK_COLORS.TEXT_PRIMARY,
                    '& a': { color: DARK_COLORS.TEXT_LINK },
                  }}
                  // Note: caller is responsible for sanitizing HTML via DOMPurify
                  dangerouslySetInnerHTML={{ __html: message.body }}
                />
              ) : (
                <Typography
                  component="pre"
                  sx={{
                    fontSize: 14,
                    fontFamily: TYPOGRAPHY.fontBody,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    color: DARK_COLORS.TEXT_PRIMARY,
                    m: 0,
                  }}
                >
                  {message.body}
                </Typography>
              )
            ) : (
              <Typography sx={{ fontSize: 14, color: DARK_COLORS.TEXT_SECONDARY, fontFamily: TYPOGRAPHY.fontUi }}>
                {snippet}
              </Typography>
            )}
          </Box>

          {/* Attachments */}
          {message.attachments && message.attachments.length > 0 && (
            <Box sx={{ px: 2, pb: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {message.attachments.map((att) => (
                <Box
                  key={att.id}
                  component="a"
                  href={att.url}
                  download={att.filename}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 1.5,
                    py: 0.75,
                    border: `1px solid ${DARK_COLORS.DIVIDER}`,
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: DARK_COLORS.TEXT_PRIMARY,
                    fontSize: 13,
                    fontFamily: TYPOGRAPHY.fontUi,
                    '&:hover': { backgroundColor: DARK_COLORS.HOVER_BG },
                  }}
                >
                  <AttachFileIcon sx={{ fontSize: 16 }} />
                  {att.filename}
                </Box>
              ))}
            </Box>
          )}

          {/* Reply / Forward buttons */}
          <Box sx={{ display: 'flex', gap: 1, px: 2, pb: 2, pt: 1 }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<ReplyIcon />}
              onClick={() => onReply(message)}
              sx={{
                color: DARK_COLORS.TEXT_PRIMARY,
                borderColor: DARK_COLORS.DIVIDER,
                fontSize: 13,
                textTransform: 'none',
                borderRadius: '18px',
                '&:hover': { borderColor: DARK_COLORS.TEXT_SECONDARY, backgroundColor: DARK_COLORS.HOVER_BG },
              }}
            >
              Reply
            </Button>
            {onReplyAll && (
              <Button
                variant="outlined"
                size="small"
                startIcon={<ReplyIcon sx={{ transform: 'scaleX(-1)' }} />}
                onClick={() => onReplyAll(message)}
                sx={{
                  color: DARK_COLORS.TEXT_PRIMARY,
                  borderColor: DARK_COLORS.DIVIDER,
                  fontSize: 13,
                  textTransform: 'none',
                  borderRadius: '18px',
                  '&:hover': { borderColor: DARK_COLORS.TEXT_SECONDARY, backgroundColor: DARK_COLORS.HOVER_BG },
                }}
              >
                Reply All
              </Button>
            )}
            <Button
              variant="outlined"
              size="small"
              startIcon={<ForwardIcon />}
              onClick={() => onForward(message)}
              sx={{
                color: DARK_COLORS.TEXT_PRIMARY,
                borderColor: DARK_COLORS.DIVIDER,
                fontSize: 13,
                textTransform: 'none',
                borderRadius: '18px',
                '&:hover': { borderColor: DARK_COLORS.TEXT_SECONDARY, backgroundColor: DARK_COLORS.HOVER_BG },
              }}
            >
              Forward
            </Button>
          </Box>
        </Box>
      ) : (
        /* Collapsed view */
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            px: 2,
            py: 1,
            cursor: 'pointer',
            '&:hover': { backgroundColor: DARK_COLORS.HOVER_BG },
          }}
          onClick={() => onExpand(message.id, true)}
        >
          <AeroAvatar name={senderName} size={32} />
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: TYPOGRAPHY.weightMedium,
              color: DARK_COLORS.TEXT_PRIMARY,
              fontFamily: TYPOGRAPHY.fontUi,
              flexShrink: 0,
              minWidth: 120,
            }}
          >
            {senderName}
          </Typography>
          <Typography
            noWrap
            sx={{
              fontSize: 13,
              color: DARK_COLORS.TEXT_SECONDARY,
              fontFamily: TYPOGRAPHY.fontUi,
              flex: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {snippet}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              color: DARK_COLORS.TEXT_SECONDARY,
              fontFamily: TYPOGRAPHY.fontUi,
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
          >
            {formatDateShort(message.timestamp)}
          </Typography>
        </Box>
      )}

      {/* More options menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
        PaperProps={{
          sx: {
            backgroundColor: DARK_COLORS.BG_CARD,
            color: DARK_COLORS.TEXT_PRIMARY,
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          },
        }}
      >
        {MORE_ACTIONS.map(({ label, action }) => (
          <MenuItem
            key={action}
            onClick={() => {
              onMoreAction?.(message.id, action);
              setMenuAnchor(null);
            }}
            sx={{ fontSize: 14, fontFamily: TYPOGRAPHY.fontUi, '&:hover': { backgroundColor: DARK_COLORS.HOVER_BG } }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default AeroMessageCard;
