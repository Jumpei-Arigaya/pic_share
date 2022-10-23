import type { NextPage } from 'next'
import Link from 'next/link'

import BasicButtons from '../components/atoms/BasicButtons'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <p>test</p>
      <BasicButtons />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Link href='/accounts/login'>
        ログイン
      </Link>
    </div>
  )
}

export default Home
