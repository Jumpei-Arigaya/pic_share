import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ModalContext } from '../providers/ModalProvider'
import { LoadingContext } from '../providers/LoadingProviders'
import { Session } from 'next-auth'
import { LoginUserContext } from '../providers/LoginUserProviders'

type Props = {
  children: React.ReactNode,
}



export default function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  const [modalState, setModalState] = useState<boolean | null>(false);
  const [scrollability, setScrollability] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(false);
  const [id, setId] = useState<number | null>(null);
  console.log(id)

  return (
    <LoginUserContext.Provider value={{ id, setId }}>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <ModalContext.Provider value={{ modalState, setModalState, scrollability, setScrollability }}>
          <Component {...pageProps} />
        </ModalContext.Provider>
      </LoadingContext.Provider>
    </LoginUserContext.Provider>
  )
}


