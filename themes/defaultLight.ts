import { DefaultTheme } from 'styled-components'

const defaultColors = {
  primary: '#AA14F0',
  secondary: '#6C757D',
  light: '#FFFFFF',
  dark: '#343A40',
  info: '#17A2B8',
  black: '#000000',
}

export const defaultLight: DefaultTheme = {
  color: {
    primary: defaultColors.primary,
    secondary: defaultColors.secondary,
    light: defaultColors.light,
    dark: defaultColors.dark,
    button: {
      background: {
        primary: defaultColors.primary,
      },
      text: {
        primary: defaultColors.light,
      },
    },
  },
}
