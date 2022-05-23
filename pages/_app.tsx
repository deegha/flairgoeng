import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContext, AppContextProvider } from 'context/'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ThemeContext>
  )
}

export default MyApp
