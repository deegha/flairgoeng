import { DefaultTheme } from 'styled-components'

const defaultColors = {
  primary: '#3A36FF',
  secondary: '#8337FF',
  back: '#04080F',
  white: '#FFFFFF',
  n800: '#02010D',
  n700: '#151526',
  n600: '#4B4B69',
  n500: '#737297',
  n400: '#A2A1C1',
  n300: '#C3C2DE',
  n200: '#D9D8EC',
  n100: '#E5E5F4',
  n50: '#ECECF6',
  n10: '#F8F8FD',
}

export const defaultLight: DefaultTheme = {
  color: {
    primary: defaultColors.primary,
    secondary: defaultColors.secondary,
    light: defaultColors.n10,
    dark: defaultColors.n800,
    gray: defaultColors.n600,
    button: {
      background: {
        primary: defaultColors.primary,
      },
      text: {
        primary: defaultColors.n10,
      },
    },
    textInput: {
      border: {
        default: defaultColors.n600,
        error: defaultColors.n400,
        selected: defaultColors.primary,
      },
    },
  },
}
