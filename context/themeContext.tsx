import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultLight } from 'themes/defaultLight'

export type ThemeType = 'defaultLight'

interface IProps {
  children: React.ReactNode
}

export const ThemeContext: FC<IProps> = ({ children }) => {
  return <ThemeProvider theme={defaultLight}>{children}</ThemeProvider>
}
