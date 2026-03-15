import type { Meta, StoryObj } from '@storybook/react'
import AeroMailRow from './AeroMailRow'

const meta: Meta<typeof AeroMailRow> = {
  component: AeroMailRow,
  title: 'Mail/AeroMailRow',
}

export default meta
type Story = StoryObj<typeof AeroMailRow>

const mockMessage = {
  id: 'msg-001',
  from: { name: 'Alice Johnson', address: 'alice@example.com' },
  subject: 'Project Update',
  snippet: 'Hey, just wanted to let you know the project is on track...',
  timestamp: Date.now() - 1000 * 60 * 30, // 30 min ago
  isRead: false,
  isStarred: false,
  hasAttachment: false,
}

const mockMessageRead = {
  ...mockMessage,
  id: 'msg-002',
  isRead: true,
  from: { name: 'Bob Smith', address: 'bob@example.com' },
  subject: 'Meeting tomorrow',
  snippet: 'Can we move the standup to 10am instead?',
  timestamp: Date.now() - 1000 * 60 * 60 * 3, // 3h ago
}

const mockMessageStarred = {
  ...mockMessage,
  id: 'msg-003',
  isStarred: true,
  isRead: true,
  from: { name: 'Carol White', address: 'carol@example.com' },
  subject: 'Important: Contract review',
  snippet: 'Please review the attached contract by end of day...',
  timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 days ago
  hasAttachment: true,
}

export const Unread: Story = {
  args: {
    message: mockMessage,
    isSelected: false,
    unread: true,
    onSelect: (id: string, checked: boolean) => console.log('select', id, checked),
    onStar: (id: string, starred: boolean) => console.log('star', id, starred),
    onClick: (id: string) => console.log('click', id),
  },
}

export const Read: Story = {
  args: {
    message: mockMessageRead,
    isSelected: false,
    unread: false,
    onSelect: (id: string, checked: boolean) => console.log('select', id, checked),
    onStar: (id: string, starred: boolean) => console.log('star', id, starred),
    onClick: (id: string) => console.log('click', id),
  },
}

export const Selected: Story = {
  args: {
    message: mockMessage,
    isSelected: true,
    unread: true,
    onSelect: (id: string, checked: boolean) => console.log('select', id, checked),
    onStar: (id: string, starred: boolean) => console.log('star', id, starred),
    onClick: (id: string) => console.log('click', id),
  },
}

export const Starred: Story = {
  args: {
    message: mockMessageStarred,
    isSelected: false,
    unread: false,
    onSelect: (id: string, checked: boolean) => console.log('select', id, checked),
    onStar: (id: string, starred: boolean) => console.log('star', id, starred),
    onClick: (id: string) => console.log('click', id),
  },
}
