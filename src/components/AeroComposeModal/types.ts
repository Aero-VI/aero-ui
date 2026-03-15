import type { AeroMessage, AeroAttachment } from '../../types';

/**
 * AeroComposeModal — Floating compose window.
 *
 * Desktop:  Fixed bottom-right, 560px wide × ~480px tall.
 *           border-radius: 16px 16px 0 0, box-shadow: 0 6px 24px rgba(0,0,0,0.4)
 *           z-index: 1300
 *
 * Mobile:   Full-screen modal (100vw × 100vh)
 *
 * Modes:
 * - 'new':      Empty compose triggered by Compose FAB
 * - 'reply':    Pre-filled To, Subject "Re: ...", quoted body
 * - 'replyAll': Pre-filled To + CC, Subject "Re: ...", quoted body
 * - 'forward':  Empty To, Subject "Fwd: ...", original body quoted
 * - 'draft':    Resume editing an existing draft message
 *
 * Subject normalization: "Re:" stripped and added exactly once.
 * Draft auto-save: every 30s while composing.
 */
export type ComposeMode = 'new' | 'reply' | 'replyAll' | 'forward' | 'draft';

export interface ComposeSendPayload {
  /** Recipient email addresses */
  to: string[];
  /** CC addresses */
  cc: string[];
  /** BCC addresses */
  bcc: string[];
  /** Subject line */
  subject: string;
  /** HTML body content */
  body: string;
  /** IDs of pre-uploaded attachments */
  attachmentIds: string[];
  /** For reply/forward: the original message being replied to */
  inReplyTo?: string;
  /** References header chain */
  references?: string;
}

export interface AeroComposeModalProps {
  /** Whether the modal is visible */
  open: boolean;
  /** Called when the modal should close (X button or discard) */
  onClose: () => void;
  /** Called when Send is clicked with the message payload */
  onSend: (payload: ComposeSendPayload) => Promise<void>;
  /** Called periodically to auto-save the draft */
  onDraftSave?: (payload: Partial<ComposeSendPayload>) => void;
  /** Compose mode — determines pre-fill behavior */
  mode?: ComposeMode;
  /** For reply/replyAll/forward: the original message */
  replyTo?: AeroMessage;
  /** Pre-fill the To field */
  initialTo?: string[];
  /** Pre-fill the Subject field */
  initialSubject?: string;
  /** Pre-fill the body */
  initialBody?: string;
  /** Existing draft message (for 'draft' mode) */
  draftMessage?: AeroMessage;
  /** Currently uploading/uploaded attachments */
  attachments?: AeroAttachment[];
  /** Called when a file is selected for attachment */
  onAttachFile?: (file: File) => void;
  /** Called when an attachment is removed */
  onRemoveAttachment?: (attachmentId: string) => void;
  /** Current window state */
  windowState?: 'default' | 'minimized' | 'maximized';
  /** Called when window state changes */
  onWindowStateChange?: (state: 'default' | 'minimized' | 'maximized') => void;
  /** Additional CSS class name */
  className?: string;
}
