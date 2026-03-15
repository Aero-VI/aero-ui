/**
 * AeroMail UI — Core Data Model Types
 * @package @aero-vi/aero-ui
 * @version 2.0.0
 *
 * These interfaces define the domain model shared between the API layer,
 * state management (Zustand stores), and all UI components.
 */
export interface AeroAttachment {
    /** Unique attachment identifier (UUID) */
    id: string;
    /** Original filename as provided by the sender */
    filename: string;
    /** MIME type, e.g. "application/pdf", "image/png" */
    mimeType: string;
    /** Size in bytes */
    size: number;
    /** URL to download or preview the attachment via the API */
    url: string;
}
export interface AeroAccount {
    /** Unique account identifier (UUID) */
    id: string;
    /** Human-readable display name for this account */
    name: string;
    /** Full email address (e.g. user@example.com) */
    email: string;
    /** IMAP server hostname (e.g. imap.gmail.com) */
    imapHost: string;
    /** IMAP server port (default: 993) */
    imapPort: number;
    /** SSL mode for IMAP: TLS | STARTTLS | None */
    imapSsl: 'TLS' | 'STARTTLS' | 'None';
    /** SMTP server hostname (e.g. smtp.gmail.com) */
    smtpHost?: string;
    /** SMTP server port (default: 587) */
    smtpPort?: number;
    /** SSL mode for SMTP: STARTTLS | TLS | None */
    smtpSsl?: 'STARTTLS' | 'TLS' | 'None';
    /**
     * Avatar / accent color for this account.
     * Used in the account switcher and account avatar chip.
     * One of the 12 AVATAR_COLORS values.
     */
    color: string;
}
export interface AeroLabel {
    /** Unique label identifier (UUID) */
    id: string;
    /** Human-readable label name (e.g. "Work", "Newsletters") */
    name: string;
    /**
     * Hex color string for the label dot and chip.
     * Must be one of the 12 label colors defined in LABEL_COLORS.
     * e.g. "#F44336", "#00BCD4"
     */
    color: string;
    /** Number of messages that have this label applied */
    count: number;
    /** Whether this is a system-managed label (Inbox, Sent, Drafts, etc.) */
    isSystem?: boolean;
}
/** Standard IMAP special-use folder types */
export type AeroFolderType = 'inbox' | 'starred' | 'snoozed' | 'important' | 'sent' | 'drafts' | 'allMail' | 'spam' | 'trash' | 'custom';
export interface AeroFolder {
    /** Unique folder identifier (UUID or IMAP path string) */
    id: string;
    /** Human-readable folder name shown in the sidebar */
    name: string;
    /** IMAP path (e.g. "INBOX", "[Gmail]/Sent Mail") */
    path?: string;
    /** Special-use type for icon/behavior mapping */
    type: AeroFolderType;
    /** Total number of messages in the folder */
    count: number;
    /** Number of unread messages (shown as badge) */
    unreadCount?: number;
    /**
     * MUI icon name for the folder (e.g. "Inbox", "Star", "Send").
     * Consumers should map this to the appropriate MUI SvgIcon.
     */
    icon?: string;
}
export interface AeroEmailAddress {
    /** Display name (e.g. "Sarah Chen") — may be empty */
    name: string;
    /** Email address (e.g. "sarah@example.com") */
    address: string;
}
export interface AeroMessage {
    /** Unique message identifier (UUID from DB or IMAP UID string) */
    id: string;
    /** Thread/conversation group identifier */
    threadId: string;
    /** The sender of the message */
    from: AeroEmailAddress;
    /** Primary recipients */
    to: AeroEmailAddress[];
    /** CC recipients */
    cc?: AeroEmailAddress[];
    /** BCC recipients — only present on sent messages */
    bcc?: AeroEmailAddress[];
    /** Email subject line */
    subject: string;
    /**
     * Short preview text extracted from the beginning of the body.
     * Shown in inbox rows without opening the message.
     * Max ~200 characters.
     */
    snippet: string;
    /**
     * Full message body.
     * May be HTML (sanitized via DOMPurify before render) or plain text.
     * Only populated when the message is fully fetched (on-demand).
     */
    body?: string;
    /** Content-Type of body: "html" or "text" */
    bodyType?: 'html' | 'text';
    /** Message sent/received timestamp (ISO 8601 string or Unix ms) */
    timestamp: string | number;
    /** Whether the message has been read */
    isRead: boolean;
    /** Whether the message is starred / flagged */
    isStarred: boolean;
    /** Whether the message is marked as important */
    isImportant: boolean;
    /** Labels applied to this message */
    labels: AeroLabel[];
    /** The folder this message is in (e.g. "INBOX", "Sent") */
    folder: string;
    /** File attachments; only populated when message body is fetched */
    attachments?: AeroAttachment[];
    /** Whether the message has attachments (for icon display without full fetch) */
    hasAttachment?: boolean;
    /** IMAP UID for this message within its folder */
    uid?: number;
    /** RFC 2822 Message-ID header value */
    messageId?: string;
    /** In-Reply-To header — references the parent message-id */
    inReplyTo?: string;
    /** References header — space-separated chain of message-ids */
    references?: string;
}
export interface AeroThread {
    /** Unique thread identifier */
    id: string;
    /** Normalized subject (Re:/Fwd: stripped) */
    subject: string;
    /** All messages in this thread, ordered oldest to newest */
    messages: AeroMessage[];
    /** Deduplicated list of participants across all messages */
    participants: AeroEmailAddress[];
    /** Convenience reference to the most recent message */
    lastMessage: AeroMessage;
    /** Whether any message in the thread is unread */
    isRead: boolean;
    /** Union of labels from all messages in the thread */
    labels: AeroLabel[];
    /** Total number of messages in thread */
    messageCount: number;
}
