import type { Meta, StoryObj } from '@storybook/react'
import AeroComposeModal from './AeroComposeModal'

const meta: Meta<typeof AeroComposeModal> = {
  component: AeroComposeModal,
  title: 'Mail/AeroComposeModal',
}

export default meta
type Story = StoryObj<typeof AeroComposeModal>

const mockSend = async (payload: any) => {
  console.log('send', payload)
}

const mockDraftSave = (payload: any) => {
  console.log('draft save', payload)
}

export const NewCompose: Story = {
  args: {
    open: true,
    onClose: () => console.log('close'),
    onSend: mockSend,
    onDraftSave: mockDraftSave,
    mode: 'new',
  },
}

export const WithPrefilledRecipient: Story = {
  args: {
    open: true,
    onClose: () => console.log('close'),
    onSend: mockSend,
    onDraftSave: mockDraftSave,
    mode: 'new',
    initialTo: ['alice@example.com'],
    initialSubject: 'Hello!',
  },
}

export const ReplyMode: Story = {
  args: {
    open: true,
    onClose: () => console.log('close'),
    onSend: mockSend,
    onDraftSave: mockDraftSave,
    mode: 'reply',
    replyTo: {
      id: 'msg-001',
      from: { name: 'Alice Johnson', address: 'alice@example.com' },
      to: [{ address: 'me@example.com' }],
      cc: [],
      bcc: [],
      subject: 'Project Update',
      bodyHtml: '<p>Hey, just wanted to check in on the project.</p>',
      bodyText: 'Hey, just wanted to check in on the project.',
      snippet: 'Hey, just wanted to check in...',
      timestamp: Date.now() - 1000 * 60 * 30,
      isRead: true,
      isStarred: false,
      hasAttachment: false,
      labels: [],
      attachments: [],
    } as any,
  },
}

export const Minimized: Story = {
  args: {
    open: true,
    onClose: () => console.log('close'),
    onSend: mockSend,
    mode: 'new',
    windowState: 'minimized',
  },
}
