import { DefaultTheme } from 'styled-components'

const defaultColors = {
  primary: '#3A36FF',
  primaryAux: '#4B47FF',
  secondary: '#8337FF',
  background: '#090A18',
  black: '#04080F',
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
    background: defaultColors.background,
    button: {
      background: {
        primary: defaultColors.primary,
        secondary: defaultColors.primary,
        disabled: defaultColors.n50,
      },
      text: {
        primary: defaultColors.n10,
        secondary: defaultColors.n10,
        disabled: defaultColors.n400,
      },
      hover: {
        background: {
          primary: defaultColors.primaryAux,
          secondary: defaultColors.primaryAux,
          disabled: defaultColors.n50,
        },
        text: {
          primary: defaultColors.n10,
          secondary: defaultColors.n10,
          disabled: defaultColors.n400,
        },
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
