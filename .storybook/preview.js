import React from 'react'
import { ThemeProvider } from '../src/ThemeProvider'

export const globalTypes = {
  themeName: {
    title: 'Theme',
    description: 'Select a theme',
    defaultValue: 'myTheme',
    toolbar: {
      icon: 'paintbrush',
      items: [{ value: 'myTheme', title: 'myTheme' }],
    },
  },
}

const withThemeProvider = (Story, context) => (
  <ThemeProvider themeName={context.globals.themeName}>
    <Story />
  </ThemeProvider>
)

export const decorators = [withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    hideNoControlsWarning: true,
    expanded: true,
  },
}
