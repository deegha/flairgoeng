import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string
      secondary: string
      light: string
      dark: string
      gray: string
      background: string
      text: string
      textAlt: string
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
