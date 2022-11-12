import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ModalContext } from '../providers/ModalProvider'
import { LoadingContext } from '../providers/LoadingProviders'

type Props = {
  children: React.ReactNode,
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [modalState, setModalState] = useState<boolean | null>(false);
  const [scrollability, setScrollability] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <ModalContext.Provider value={{ modalState, setModalState, scrollability, setScrollability }}>
        <Component {...pageProps} />
      </ModalContext.Provider>
    </LoadingContext.Provider>
  )
}


