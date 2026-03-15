/**
 * AeroMail UI — Component Barrel Export
 * @package @aero-vi/aero-ui
 *
 * Exports all component prop interfaces and implementations.
 */

// Primitives — implementations
export { AeroButton, default as AeroButtonDefault } from './AeroButton/AeroButton';
export { AeroAvatar, default as AeroAvatarDefault } from './AeroAvatar/AeroAvatar';
export { AeroBadge, default as AeroBadgeDefault } from './AeroBadge/AeroBadge';
export { AeroChip, default as AeroChipDefault } from './AeroChip/AeroChip';
export { AeroCheckbox, default as AeroCheckboxDefault } from './AeroCheckbox/AeroCheckbox';
export { AeroIconButton, default as AeroIconButtonDefault } from './AeroIconButton/AeroIconButton';
export { AeroTooltip, default as AeroTooltipDefault } from './AeroTooltip/AeroTooltip';

// Primitives — types
export type { AeroButtonProps } from './AeroButton/types';
export type { AeroAvatarProps, AeroAvatarSize } from './AeroAvatar/types';
export type { AeroBadgeProps } from './AeroBadge/types';
export type { AeroChipProps } from './AeroChip/types';
export type { AeroCheckboxProps } from './AeroCheckbox/types';
export type { AeroTooltipProps, TooltipPlacement } from './AeroTooltip/types';
export type { AeroIconButtonProps } from './AeroIconButton/types';

// Layout — implementations
export { AeroAppBar, default as AeroAppBarDefault } from './AeroAppBar/AeroAppBar';
export { AeroSidebar, default as AeroSidebarDefault } from './AeroSidebar/AeroSidebar';
export { AeroFolderItem, default as AeroFolderItemDefault } from './AeroFolderItem/AeroFolderItem';
export { AeroDrawer, default as AeroDrawerDefault } from './AeroDrawer/AeroDrawer';
export { AeroSplitView, default as AeroSplitViewDefault } from './AeroSplitView/AeroSplitView';

// Layout — types
export type { AeroAppBarProps } from './AeroAppBar/types';
export type { AeroSidebarProps } from './AeroSidebar/types';
export type { AeroDrawerProps, DrawerAnchor, DrawerVariant } from './AeroDrawer/types';
export type { AeroSplitViewProps } from './AeroSplitView/types';

// Mail Domain
export type { AeroMailRowProps } from './AeroMailRow/types';
export type { AeroMailListProps, BulkAction } from './AeroMailList/types';
export type { AeroThreadViewProps, ReplyPayload, ForwardPayload } from './AeroThreadView/types';
export type { AeroMessageCardProps, MessageMoreAction } from './AeroMessageCard/types';
export type { AeroComposeModalProps, ComposeSendPayload, ComposeMode } from './AeroComposeModal/types';
export type { AeroSearchBarProps, SearchSuggestion } from './AeroSearchBar/types';
export type { AeroFolderItemProps } from './AeroFolderItem/types';
export type { AeroLabelChipProps } from './AeroLabelChip/types';
