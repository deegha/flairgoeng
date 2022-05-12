import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string
      secondary: string
      light: string
      dark: string
      button: {
        background: {
          primary: string
        }
        text: {
          primary: string
        }
      }
    }
  }
}
