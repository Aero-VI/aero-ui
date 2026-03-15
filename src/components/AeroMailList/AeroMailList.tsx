import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import InboxIcon from '@mui/icons-material/Inbox';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import { AeroCheckbox } from '../AeroCheckbox/AeroCheckbox';
import { AeroMailRow } from '../AeroMailRow/AeroMailRow';
import type { AeroMailListProps } from './types';
import { DARK_COLORS, TYPOGRAPHY } from '../../tokens';

function SkeletonRow() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '56px',
        px: 2,
        borderBottom: `1px solid ${DARK_COLORS.DIVIDER_ROW}`,
        gap: 1.5,
      }}
    >
      <Skeleton variant="rectangular" width={20} height={20} sx={{ bgcolor: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />
      <Skeleton variant="circular" width={36} height={36} sx={{ bgcolor: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />
      <Skeleton variant="text" width={120} height={16} sx={{ bgcolor: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />
      <Skeleton variant="text" sx={{ bgcolor: 'rgba(255,255,255,0.08)', flex: 1 }} height={16} />
      <Skeleton variant="text" width={60} height={16} sx={{ bgcolor: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />
    </Box>
  );
}

export function AeroMailList({
  messages,
  selectedIds,
  onSelect,
  onSelectAll,
  onStar,
  onClick,
  onBulkAction,
  onArchive,
  onDelete,
  loading = false,
  skeletonCount = 8,
  emptyMessage,
  className,
}: AeroMailListProps) {
  const selectedCount = selectedIds.size;
  const allSelected = messages.length > 0 && selectedCount === messages.length;
  const someSelected = selectedCount > 0 && selectedCount < messages.length;
  const hasSelection = selectedCount > 0;

  const selectedMessageIds = Array.from(selectedIds);

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Header row with select-all or bulk actions */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 48,
          px: 1,
          borderBottom: `1px solid ${DARK_COLORS.DIVIDER}`,
          backgroundColor: DARK_COLORS.BG_MAIN,
          flexShrink: 0,
        }}
      >
        <Box sx={{ width: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AeroCheckbox
            checked={allSelected}
            indeterminate={someSelected}
            onChange={(checked) => onSelectAll(checked)}
            ariaLabel="Select all messages"
          />
        </Box>

        {hasSelection && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
            <Typography
              sx={{
                fontSize: 13,
                color: DARK_COLORS.TEXT_SECONDARY,
                fontFamily: TYPOGRAPHY.fontUi,
                mr: 1,
              }}
            >
              {selectedCount} selected
            </Typography>
            {onBulkAction && (
              <>
                <Button
                  size="small"
                  startIcon={<ArchiveOutlinedIcon fontSize="small" />}
                  onClick={() => onBulkAction('archive', selectedMessageIds)}
                  sx={{ color: DARK_COLORS.TEXT_SECONDARY, fontSize: 12, textTransform: 'none' }}
                >
                  Archive
                </Button>
                <Button
                  size="small"
                  startIcon={<DeleteOutlineIcon fontSize="small" />}
                  onClick={() => onBulkAction('delete', selectedMessageIds)}
                  sx={{ color: DARK_COLORS.TEXT_SECONDARY, fontSize: 12, textTransform: 'none' }}
                >
                  Delete
                </Button>
                <Button
                  size="small"
                  startIcon={<MarkEmailReadOutlinedIcon fontSize="small" />}
                  onClick={() => onBulkAction('markRead', selectedMessageIds)}
                  sx={{ color: DARK_COLORS.TEXT_SECONDARY, fontSize: 12, textTransform: 'none' }}
                >
                  Mark read
                </Button>
              </>
            )}
          </Box>
        )}
      </Box>

      {/* Content area */}
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {loading ? (
          Array.from({ length: skeletonCount }).map((_, i) => <SkeletonRow key={i} />)
        ) : messages.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              minHeight: 300,
              color: DARK_COLORS.TEXT_SECONDARY,
            }}
          >
            <InboxIcon sx={{ fontSize: 64, mb: 2, opacity: 0.4 }} />
            <Typography
              sx={{
                fontSize: 16,
                color: DARK_COLORS.TEXT_SECONDARY,
                fontFamily: TYPOGRAPHY.fontUi,
              }}
            >
              {emptyMessage ?? 'No messages'}
            </Typography>
          </Box>
        ) : (
          messages.map((message) => (
            <AeroMailRow
              key={message.id}
              message={message}
              isSelected={selectedIds.has(message.id)}
              onSelect={onSelect}
              onStar={onStar ?? (() => {})}
              onClick={onClick ?? (() => {})}
              onArchive={onArchive}
              onDelete={onDelete}
            />
          ))
        )}
      </Box>
    </Box>
  );
}

export default AeroMailList;
