import 'styled-components'

interface IButtonType {
  primary: string
}

interface IButtonState {
  Active: string
  Hover: string
  Disabled: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string
      secondary: string
      light: string
      dark: string
      gray: string
      background: string
      button: {
        background: {
          primary: string
          secondary: string
          disabled: string
        }
        text: {
          primary: string
          secondary: string
          disabled: string
        }
        hover: {
          background: {
            primary: string
            secondary: string
            disabled: string
          }
          text: {
            primary: string
            secondary: string
            disabled: string
          }
        }
      }
      textInput: {
        border: {
          default: string
          error: string
          selected: string
        }
      }
    }
  }
}
