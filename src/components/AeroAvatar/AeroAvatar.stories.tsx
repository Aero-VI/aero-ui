import type { Meta, StoryObj } from '@storybook/react'
import AeroAvatar from './AeroAvatar'

const meta: Meta<typeof AeroAvatar> = {
  component: AeroAvatar,
  title: 'Primitives/AeroAvatar',
}

export default meta
type Story = StoryObj<typeof AeroAvatar>

export const Default: Story = {
  args: { name: 'Alice Johnson', size: 40 },
}

export const Large: Story = {
  args: { name: 'Bob Smith', size: 64 },
}

export const Small: Story = {
  args: { name: 'Carol White', size: 24 },
}

export const WithOnlineIndicator: Story = {
  args: {
    name: 'David Lee',
    size: 40,
    showOnlineIndicator: true,
    isOnline: true,
  },
}

export const WithOfflineIndicator: Story = {
  args: {
    name: 'Eve Taylor',
    size: 40,
    showOnlineIndicator: true,
    isOnline: false,
  },
}

export const WithColorOverride: Story = {
  args: {
    name: 'Frank Martinez',
    size: 40,
    colorOverride: '#1a73e8',
  },
}
