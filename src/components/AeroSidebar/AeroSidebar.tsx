/**
 * AeroSidebar — Left navigation panel with folder list, labels, and compose FAB.
 * @package @aero-vi/aero-ui
 */

import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import type { AeroSidebarProps } from './types';
import type { AeroFolderType } from '../../types';
import { AeroFolderItem } from '../AeroFolderItem/AeroFolderItem';
import { DARK_COLORS, TYPOGRAPHY } from '../../tokens';

/** Canonical Gmail sidebar folder order */
const FOLDER_TYPE_ORDER: AeroFolderType[] = [
  'inbox',
  'starred',
  'snoozed',
  'important',
  'sent',
  'drafts',
  'allMail',
  'spam',
  'trash',
];

export const AeroSidebar: React.FC<AeroSidebarProps> = ({
  folders,
  labels,
  activeFolder,
  activeLabel,
  onFolderSelect,
  onLabelSelect,
  onCompose,
  onCreateLabel,
  width = 256,
  collapsed = false,
  className,
}) => {
  const sortedFolders = [...folders].sort((a, b) => {
    const ai = FOLDER_TYPE_ORDER.indexOf(a.type);
    const bi = FOLDER_TYPE_ORDER.indexOf(b.type);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  return (
    <Box
      className={className}
      sx={{
        width: collapsed ? 72 : width,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: DARK_COLORS.BG_SIDEBAR,
        overflowY: 'auto',
        overflowX: 'hidden',
        pb: '16px',
        '&::-webkit-scrollbar': { width: '4px' },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: DARK_COLORS.SCROLL_THUMB,
          borderRadius: '2px',
        },
      }}
    >
      {/* Compose FAB */}
      <Box sx={{ px: '16px', pt: '8px', pb: '8px' }}>
        <Button
          onClick={onCompose}
          startIcon={!collapsed ? <EditIcon sx={{ fontSize: '18px' }} /> : undefined}
          sx={{
            width: '100%',
            borderRadius: '24px',
            bgcolor: DARK_COLORS.FAB_TEAL,
            color: '#fff',
            fontFamily: TYPOGRAPHY.fontUi,
            fontSize: TYPOGRAPHY.sizeFabText,
            fontWeight: TYPOGRAPHY.weightMedium,
            textTransform: 'none',
            py: '12px',
            px: collapsed ? 0 : '20px',
            minWidth: collapsed ? '48px' : 'auto',
            justifyContent: collapsed ? 'center' : 'flex-start',
            '&:hover': { bgcolor: '#00ACC1' },
            boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
          }}
          aria-label="Compose new email"
        >
          {collapsed ? <EditIcon sx={{ fontSize: '20px' }} /> : 'Compose'}
        </Button>
      </Box>

      {/* Folder list */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {sortedFolders.map((folder) => (
          <AeroFolderItem
            key={folder.id}
            folder={folder}
            active={folder.id === activeFolder}
            onClick={onFolderSelect}
          />
        ))}
      </Box>

      {/* Labels section */}
      {labels && labels.length > 0 && (
        <>
          <Divider sx={{ my: '8px', borderColor: DARK_COLORS.DIVIDER }} />

          {!collapsed && (
            <Typography
              sx={{
                px: '16px',
                py: '4px',
                fontSize: '11px',
                fontWeight: TYPOGRAPHY.weightSemiBold,
                color: DARK_COLORS.TEXT_SECONDARY,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                fontFamily: TYPOGRAPHY.fontUi,
              }}
            >
              Labels
            </Typography>
          )}

          {labels.map((label) => (
            <Box
              key={label.id}
              component="button"
              onClick={() => onLabelSelect(label)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '40px',
                px: '16px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '0 24px 24px 0',
                backgroundColor:
                  label.id === activeLabel ? DARK_COLORS.ACTIVE_PILL : 'transparent',
                color: DARK_COLORS.TEXT_PRIMARY,
                '&:hover': {
                  backgroundColor:
                    label.id === activeLabel
                      ? DARK_COLORS.ACTIVE_PILL_HOVER
                      : DARK_COLORS.HOVER_BG,
                },
                transition: 'background-color 150ms ease',
                textAlign: 'left',
                outline: 'none',
              }}
            >
              <Box
                sx={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  bgcolor: label.color,
                  mr: collapsed ? 0 : '16px',
                  flexShrink: 0,
                }}
              />
              {!collapsed && (
                <>
                  <Typography
                    component="span"
                    sx={{
                      flex: 1,
                      fontSize: '14px',
                      fontWeight: 400,
                      color: DARK_COLORS.TEXT_PRIMARY,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      fontFamily: TYPOGRAPHY.fontUi,
                    }}
                  >
                    {label.name}
                  </Typography>
                  {label.count > 0 && (
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '12px',
                        color: DARK_COLORS.BADGE_TEXT,
                        ml: '4px',
                        flexShrink: 0,
                        fontFamily: TYPOGRAPHY.fontUi,
                      }}
                    >
                      {label.count}
                    </Typography>
                  )}
                </>
              )}
            </Box>
          ))}

          {!collapsed && onCreateLabel && (
            <Box
              component="button"
              onClick={onCreateLabel}
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '40px',
                px: '16px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '0 24px 24px 0',
                backgroundColor: 'transparent',
                color: DARK_COLORS.TEXT_SECONDARY,
                '&:hover': { backgroundColor: DARK_COLORS.HOVER_BG },
                transition: 'background-color 150ms ease',
                textAlign: 'left',
                outline: 'none',
              }}
            >
              <AddIcon
                sx={{ fontSize: '20px', mr: '16px', color: DARK_COLORS.ICON_COLOR }}
              />
              <Typography
                component="span"
                sx={{
                  fontSize: '14px',
                  color: DARK_COLORS.TEXT_SECONDARY,
                  fontFamily: TYPOGRAPHY.fontUi,
                }}
              >
                Create new label
              </Typography>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default AeroSidebar;
