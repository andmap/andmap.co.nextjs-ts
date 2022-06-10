import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DropdownContextProvider } from '../stores/DropdownContext'

config.autoAddCss = false
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DropdownContextProvider>
      <Component {...pageProps} />
    </DropdownContextProvider>
  )
}

export default MyApp
