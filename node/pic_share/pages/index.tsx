import type { NextPage } from 'next'
import Link from 'next/link'

import BasicButtons from '../components/atoms/BasicButtons'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        PIC SHARE
      </h1>
      <BasicButtons link={"/accounts/login"}>ログイン画面</BasicButtons>
    </div >
  )
}

export default Home
