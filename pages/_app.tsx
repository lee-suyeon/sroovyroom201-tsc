import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import theme from 'styles/theme' 
import GlobalStyle from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
