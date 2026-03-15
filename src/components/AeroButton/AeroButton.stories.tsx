import type { Meta, StoryObj } from '@storybook/react'
import AeroButton from './AeroButton'

const meta: Meta<typeof AeroButton> = {
  component: AeroButton,
  title: 'Primitives/AeroButton',
}

export default meta
type Story = StoryObj<typeof AeroButton>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Send' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Cancel' },
}

export const Text: Story = {
  args: { variant: 'text', children: 'Learn more' },
}

export const Loading: Story = {
  args: { variant: 'primary', loading: true, children: 'Sending...' },
}

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, children: 'Disabled' },
}

export const FullWidth: Story = {
  args: { variant: 'primary', fullWidth: true, children: 'Full Width Button' },
}
