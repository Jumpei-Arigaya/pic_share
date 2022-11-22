import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { LoginUserProvider } from '../providers/LoginUserProviders'
import { ModalProvider } from '../providers/ModalProvider'
import { LoadingProvider } from '../providers/LoadingProviders'

export default function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {

  return (
    <LoginUserProvider>
      <LoadingProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </LoadingProvider>
    </LoginUserProvider>
  )

}


