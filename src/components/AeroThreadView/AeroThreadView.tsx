import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import SendIcon from '@mui/icons-material/Send';
import { AeroMessageCard } from '../AeroMessageCard/AeroMessageCard';
import type { AeroThreadViewProps, ReplyPayload } from './types';
import type { AeroMessage } from '../../types';
import { DARK_COLORS, TYPOGRAPHY } from '../../tokens';

export function AeroThreadView({
  thread,
  onBack,
  onReply,
  onForward,
  onArchive,
  onDelete,
  onLabel,
  onMarkUnread,
  availableLabels,
  className,
}: AeroThreadViewProps) {
  const lastMessageId = thread.messages[thread.messages.length - 1]?.id;
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(lastMessageId ? [lastMessageId] : []));
  const [replyingTo, setReplyingTo] = useState<AeroMessage | null>(null);
  const [replyBody, setReplyBody] = useState('');
  const replyRef = useRef<HTMLDivElement>(null);

  const handleExpand = (messageId: string, expanded: boolean) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (expanded) {
        next.add(messageId);
      } else {
        next.delete(messageId);
      }
      return next;
    });
  };

  const handleReply = (message: AeroMessage) => {
    setReplyingTo(message);
    setTimeout(() => {
      replyRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleForward = (message: AeroMessage) => {
    onForward({ message, to: [], body: '' });
  };

  const handleSendReply = () => {
    if (!replyingTo || !replyBody.trim()) return;
    const payload: ReplyPayload = {
      inReplyTo: replyingTo,
      to: [replyingTo.from.address],
      body: replyBody,
    };
    onReply(payload);
    setReplyingTo(null);
    setReplyBody('');
  };

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflowY: 'auto',
        backgroundColor: DARK_COLORS.BG_MAIN,
      }}
    >
      {/* Thread header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          px: 2,
          py: 1.5,
          flexShrink: 0,
        }}
      >
        <IconButton onClick={onBack} sx={{ color: DARK_COLORS.TEXT_PRIMARY, mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>

        <Typography
          sx={{
            fontSize: '22px',
            color: DARK_COLORS.TEXT_PRIMARY,
            fontFamily: TYPOGRAPHY.fontUi,
            fontWeight: TYPOGRAPHY.weightRegular,
            flex: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {thread.subject}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton
            size="small"
            onClick={() => onArchive(thread.id)}
            sx={{ color: DARK_COLORS.ICON_COLOR }}
            title="Archive"
          >
            <ArchiveOutlinedIcon />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => onDelete(thread.id)}
            sx={{ color: DARK_COLORS.ICON_COLOR }}
            title="Delete"
          >
            <DeleteOutlineIcon />
          </IconButton>
          {availableLabels && availableLabels.length > 0 && (
            <IconButton size="small" sx={{ color: DARK_COLORS.ICON_COLOR }} title="Label">
              <LabelOutlinedIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Messages */}
      <Box sx={{ flex: 1, px: 2, pb: 2, maxWidth: 860, width: '100%', mx: 'auto' }}>
        {thread.messages.map((message) => (
          <AeroMessageCard
            key={message.id}
            message={message}
            expanded={expandedIds.has(message.id)}
            onExpand={handleExpand}
            onReply={handleReply}
            onReplyAll={handleReply}
            onForward={handleForward}
          />
        ))}

        {/* Reply box */}
        <Box ref={replyRef} sx={{ mt: 2 }}>
          {replyingTo ? (
            <Box
              sx={{
                backgroundColor: DARK_COLORS.BG_CARD,
                borderRadius: '8px',
                p: 2,
                boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  color: DARK_COLORS.TEXT_SECONDARY,
                  fontFamily: TYPOGRAPHY.fontUi,
                  mb: 1,
                }}
              >
                Reply to {replyingTo.from.name || replyingTo.from.address}
              </Typography>
              <TextField
                fullWidth
                multiline
                minRows={4}
                autoFocus
                placeholder="Write your reply..."
                value={replyBody}
                onChange={(e) => setReplyBody(e.target.value)}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    color: DARK_COLORS.TEXT_PRIMARY,
                    fontFamily: TYPOGRAPHY.fontBody,
                    fontSize: 14,
                  },
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
                <Button
                  size="small"
                  onClick={() => { setReplyingTo(null); setReplyBody(''); }}
                  sx={{ color: DARK_COLORS.TEXT_SECONDARY, textTransform: 'none', fontSize: 13 }}
                >
                  Discard
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<SendIcon />}
                  onClick={handleSendReply}
                  disabled={!replyBody.trim()}
                  sx={{
                    backgroundColor: DARK_COLORS.BUTTON_BLUE,
                    textTransform: 'none',
                    fontSize: 13,
                    borderRadius: '18px',
                    '&:hover': { backgroundColor: DARK_COLORS.BUTTON_BLUE_HOVER },
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                border: `1px solid ${DARK_COLORS.DIVIDER}`,
                borderRadius: '8px',
                p: 2,
                cursor: 'text',
                '&:hover': { boxShadow: '0 2px 6px rgba(0,0,0,0.3)' },
              }}
              onClick={() => handleReply(thread.lastMessage)}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  color: DARK_COLORS.TEXT_SECONDARY,
                  fontFamily: TYPOGRAPHY.fontUi,
                }}
              >
                Reply
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default AeroThreadView;
