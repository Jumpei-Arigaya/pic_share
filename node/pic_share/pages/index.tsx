import type { NextPage } from 'next'

import BasicButtons from '../components/atoms/BasicButtons'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>test</p>
      <BasicButtons />
    </div>
  )
}

export default Home
