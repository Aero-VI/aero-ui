import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1f1f1f' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
}

export default preview
