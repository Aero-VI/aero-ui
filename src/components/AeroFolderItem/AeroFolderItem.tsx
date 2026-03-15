/**
 * AeroFolderItem — Single folder row in the sidebar navigation.
 * @package @aero-vi/aero-ui
 */

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';

import type { AeroFolderItemProps } from './types';
import type { AeroFolderType } from '../../types';
import { DARK_COLORS } from '../../tokens';

const FOLDER_ICON_MAP: Record<AeroFolderType, React.ReactElement> = {
  inbox: <InboxIcon sx={{ fontSize: 20, color: DARK_COLORS.ICON_COLOR }} />,
  starred: <StarIcon sx={{ fontSize: 20, color: DARK_COLORS.ICON_COLOR }} />,
  snoozed: <WatchLaterIcon sx={{ fontSize: 20, color: DARK_COLORS.ICON_COLOR }} />,
  important: <LabelImportantIcon sx={{ fontSize: 20, color: DARK_COLORS.ICON_COLOR }} />,
  sent: <SendIcon sx={{ fontSize: 20, color: DARK_COLORS.ICON_COLOR }} />,
  drafts: <DraftsIcon sx={{ fontSize: 20, color: DARK_COLORS.ICON_COLOR }} />,
  allMail: <AllInboxIcon sx={{ fontSize: 20, color: DARK_COLORS.ICON_COLOR }} />,
  spam: <ReportIcon sx={{ fontSize: 20, color: DARK_COLORS.ICON_COLOR }} />,
  trash: <DeleteIcon sx={{ fontSize: 20, color: DARK_COLORS.ICON_COLOR }} />,
  custom: <FolderIcon sx={{ fontSize: 20, color: DARK_COLORS.ICON_COLOR }} />,
};

export const AeroFolderItem: React.FC<AeroFolderItemProps> = ({
  folder,
  active = false,
  onClick,
  icon,
  count,
  showZeroCount = false,
  className,
}) => {
  const displayIcon = icon ?? FOLDER_ICON_MAP[folder.type];
  const displayCount = count !== undefined ? count : folder.unreadCount;
  const showCount = displayCount !== undefined && (displayCount > 0 || showZeroCount);

  return (
    <Box
      component="button"
      className={className}
      onClick={() => onClick(folder)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '40px',
        px: '16px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '0 24px 24px 0',
        backgroundColor: active ? DARK_COLORS.ACTIVE_PILL : 'transparent',
        color: DARK_COLORS.TEXT_PRIMARY,
        '&:hover': {
          backgroundColor: active
            ? DARK_COLORS.ACTIVE_PILL_HOVER
            : DARK_COLORS.HOVER_BG,
        },
        transition: 'background-color 150ms ease',
        textAlign: 'left',
        outline: 'none',
        pr: '16px',
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mr: '16px',
          flexShrink: 0,
          '& svg': {
            fontSize: '20px',
            color: active ? DARK_COLORS.ICON_ACTIVE : DARK_COLORS.ICON_COLOR,
          },
        }}
      >
        {displayIcon}
      </Box>

      {/* Folder name */}
      <Typography
        component="span"
        sx={{
          flex: 1,
          fontSize: '14px',
          fontWeight: active ? 600 : 400,
          color: DARK_COLORS.TEXT_PRIMARY,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontFamily: "'Google Sans', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {folder.name}
      </Typography>

      {/* Count badge */}
      {showCount && (
        <Typography
          component="span"
          sx={{
            fontSize: '12px',
            color: DARK_COLORS.BADGE_TEXT,
            ml: '4px',
            flexShrink: 0,
            fontFamily: "'Google Sans', Roboto, 'Helvetica Neue', Arial, sans-serif",
          }}
        >
          {displayCount}
        </Typography>
      )}
    </Box>
  );
};

export default AeroFolderItem;
