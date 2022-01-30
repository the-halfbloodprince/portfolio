import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>I&apos;m Manish Kumar Das</title>
        <meta name="description" content="I'm Manish Kumar Das" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
    </div>
  )
}

export default Home
