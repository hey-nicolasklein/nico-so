import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nico.so</title>
        <meta name="Nico.so" content="Developer by heart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.description}>Hey I&apos;m</span> Nico
        </h1>
        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/heynicolas" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
          </a> 
          <a href="https://github.com/hey-nicolasklein" className={styles.card}>
            <h2>Github &rarr;</h2>
          </a> 
        </div>
      </main>
    </div>
  )
}
