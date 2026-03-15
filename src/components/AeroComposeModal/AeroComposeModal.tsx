import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import SendIcon from '@mui/icons-material/Send';
import type { AeroComposeModalProps, ComposeSendPayload } from './types';
import { DARK_COLORS, TYPOGRAPHY, DIMENSIONS } from '../../tokens';

export function AeroComposeModal({
  open,
  onClose,
  onSend,
  onDraftSave,
  mode = 'new',
  replyTo,
  initialTo,
  initialSubject,
  initialBody,
  attachments,
  onAttachFile,
  onRemoveAttachment,
  windowState: externalWindowState,
  onWindowStateChange,
  className,
}: AeroComposeModalProps) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [windowState, setWindowState] = useState<'default' | 'minimized' | 'maximized'>(
    externalWindowState ?? 'default'
  );
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [sending, setSending] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const draftTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync external window state
  useEffect(() => {
    if (externalWindowState) setWindowState(externalWindowState);
  }, [externalWindowState]);

  // Pre-fill from props
  useEffect(() => {
    if (!open) return;
    setTo(initialTo?.join(', ') ?? (replyTo ? replyTo.from.address : ''));
    setSubject(
      initialSubject ??
        (replyTo
          ? mode === 'forward'
            ? `Fwd: ${replyTo.subject.replace(/^(Fwd:\s*)+/i, '')}`
            : `Re: ${replyTo.subject.replace(/^(Re:\s*)+/i, '')}`
          : '')
    );
    setBody(initialBody ?? '');
  }, [open, mode, replyTo]);

  // Auto-save draft
  useEffect(() => {
    if (!onDraftSave) return;
    if (draftTimer.current) clearTimeout(draftTimer.current);
    draftTimer.current = setTimeout(() => {
      onDraftSave({ to: to.split(',').map((s) => s.trim()).filter(Boolean), subject, body });
    }, 30000);
    return () => { if (draftTimer.current) clearTimeout(draftTimer.current); };
  }, [to, subject, body]);

  const changeWindowState = (state: 'default' | 'minimized' | 'maximized') => {
    setWindowState(state);
    onWindowStateChange?.(state);
  };

  const handleSend = async () => {
    if (sending) return;
    setSending(true);
    const payload: ComposeSendPayload = {
      to: to.split(',').map((s) => s.trim()).filter(Boolean),
      cc: [],
      bcc: [],
      subject,
      body,
      attachmentIds: attachments?.map((a) => a.id) ?? [],
      inReplyTo: replyTo?.messageId,
      references: replyTo?.references,
    };
    try {
      await onSend(payload);
      onClose();
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  const isMinimized = windowState === 'minimized';
  const isMaximized = windowState === 'maximized';

  const modalStyles = isMobile
    ? {
        position: 'fixed' as const,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: DIMENSIONS.composeZIndex,
      }
    : isMaximized
    ? {
        position: 'fixed' as const,
        bottom: 0,
        right: 16,
        width: 'calc(100% - 32px)',
        maxWidth: 860,
        height: '90vh',
        zIndex: DIMENSIONS.composeZIndex,
      }
    : isMinimized
    ? {
        position: 'fixed' as const,
        bottom: 0,
        right: 16,
        width: 560,
        zIndex: DIMENSIONS.composeZIndex,
      }
    : {
        position: 'fixed' as const,
        bottom: 0,
        right: 16,
        width: 560,
        zIndex: DIMENSIONS.composeZIndex,
      };

  return (
    <Box
      className={className}
      sx={{
        ...modalStyles,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: DARK_COLORS.BG_COMPOSE,
        borderRadius: DIMENSIONS.composeBorderRadius,
        boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
        overflow: 'hidden',
      }}
    >
      {/* Header bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: DARK_COLORS.BG_COMPOSE_HEADER,
          px: 2,
          height: DIMENSIONS.composeHeaderHeight,
          flexShrink: 0,
          cursor: isMinimized ? 'pointer' : 'default',
        }}
        onClick={isMinimized ? () => changeWindowState('default') : undefined}
      >
        <Typography
          sx={{
            fontSize: TYPOGRAPHY.sizeComposeHeader,
            fontWeight: TYPOGRAPHY.weightMedium,
            color: DARK_COLORS.TEXT_COMPOSE_HEADER,
            fontFamily: TYPOGRAPHY.fontUi,
          }}
        >
          {mode === 'reply' || mode === 'replyAll' ? 'Reply' : mode === 'forward' ? 'Forward' : 'New Message'}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="small"
            onClick={(e) => { e.stopPropagation(); changeWindowState(isMinimized ? 'default' : 'minimized'); }}
            sx={{ color: DARK_COLORS.TEXT_COMPOSE_HEADER }}
          >
            <MinimizeIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={(e) => { e.stopPropagation(); changeWindowState(isMaximized ? 'default' : 'maximized'); }}
            sx={{ color: DARK_COLORS.TEXT_COMPOSE_HEADER }}
          >
            {isMaximized ? <CloseFullscreenIcon fontSize="small" /> : <OpenInFullIcon fontSize="small" />}
          </IconButton>
          <IconButton
            size="small"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            sx={{ color: DARK_COLORS.TEXT_COMPOSE_HEADER }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Compose body (hidden when minimized) */}
      {!isMinimized && (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
          {/* Fields */}
          <Box sx={{ px: 2, pt: 1, flexShrink: 0 }}>
            <TextField
              fullWidth
              variant="standard"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              InputProps={{
                disableUnderline: false,
                sx: { color: DARK_COLORS.TEXT_PRIMARY, fontFamily: TYPOGRAPHY.fontUi, fontSize: 14, pb: 0.5 },
              }}
              sx={{ mb: 0.5, '& .MuiInput-underline:before': { borderBottomColor: DARK_COLORS.DIVIDER } }}
            />
            <TextField
              fullWidth
              variant="standard"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              InputProps={{
                disableUnderline: false,
                sx: { color: DARK_COLORS.TEXT_PRIMARY, fontFamily: TYPOGRAPHY.fontUi, fontSize: 14, pb: 0.5 },
              }}
              sx={{ mb: 0.5, '& .MuiInput-underline:before': { borderBottomColor: DARK_COLORS.DIVIDER } }}
            />
          </Box>

          {/* Body */}
          <Box sx={{ flex: 1, px: 2, overflow: 'auto', minHeight: 200 }}>
            <TextField
              fullWidth
              multiline
              variant="standard"
              placeholder="Write your message..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              InputProps={{
                disableUnderline: true,
                sx: {
                  color: DARK_COLORS.TEXT_PRIMARY,
                  fontFamily: TYPOGRAPHY.fontBody,
                  fontSize: 14,
                  alignItems: 'flex-start',
                },
              }}
              sx={{ height: '100%' }}
            />
          </Box>

          <Divider sx={{ borderColor: DARK_COLORS.DIVIDER }} />

          {/* Footer toolbar */}
          <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1, gap: 0.5, flexShrink: 0 }}>
            <Button
              variant="contained"
              size="small"
              endIcon={<SendIcon />}
              onClick={handleSend}
              disabled={sending || !to.trim()}
              sx={{
                backgroundColor: DARK_COLORS.BUTTON_BLUE,
                textTransform: 'none',
                fontSize: 14,
                fontFamily: TYPOGRAPHY.fontUi,
                borderRadius: '18px',
                height: 36,
                px: 2,
                mr: 1,
                '&:hover': { backgroundColor: DARK_COLORS.BUTTON_BLUE_HOVER },
              }}
            >
              {sending ? 'Sending...' : 'Send'}
            </Button>
            <IconButton size="small" sx={{ color: DARK_COLORS.ICON_COLOR }} title="Bold">
              <FormatBoldIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: DARK_COLORS.ICON_COLOR }} title="Italic">
              <FormatItalicIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: DARK_COLORS.ICON_COLOR }} title="Underline">
              <FormatUnderlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: DARK_COLORS.ICON_COLOR }}
              title="Attach file"
              onClick={() => fileInputRef.current?.click()}
            >
              <AttachFileIcon fontSize="small" />
            </IconButton>
            <input
              ref={fileInputRef}
              type="file"
              hidden
              multiple
              onChange={(e) => {
                const files = e.target.files;
                if (files && onAttachFile) {
                  Array.from(files).forEach((f) => onAttachFile(f));
                }
                e.target.value = '';
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default AeroComposeModal;
