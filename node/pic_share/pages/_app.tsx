import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ModalContext } from '../providers/ModalProvider'

type Props = {
  children: React.ReactNode,
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [modalState, setModalState] = useState<boolean | null>(false);
  const [scrollability, setScrollability] = useState<string | null>(null);

  return (
    <ModalContext.Provider value={{ modalState, setModalState, scrollability, setScrollability }}>
      <Component {...pageProps} />
    </ModalContext.Provider>
  )
}


