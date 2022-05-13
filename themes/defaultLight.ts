import { DefaultTheme } from 'styled-components'

const defaultColors = {
  primary: '#7158e2',
  secondary: '#6C757D',
  light: '#FFFFFF',
  dark: '#343A40',
  info: '#17A2B8',
  black: '#000000',
  gray1: '#C4C4C4',
  danger: '#F44336',
}

export const defaultLight: DefaultTheme = {
  color: {
    primary: defaultColors.primary,
    secondary: defaultColors.secondary,
    light: defaultColors.light,
    dark: defaultColors.dark,
    gray: defaultColors.gray1,
    button: {
      background: {
        primary: defaultColors.primary,
      },
      text: {
        primary: defaultColors.light,
      },
    },
    textInput: {
      border: {
        default: defaultColors.gray1,
        error: defaultColors.danger,
        selected: defaultColors.primary,
      },
    },
  },
}
