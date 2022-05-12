import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContext } from 'context/themeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext>
      <Component {...pageProps} />
    </ThemeContext>
  )
}

export default MyApp
