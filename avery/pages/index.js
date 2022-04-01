import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../componets/navbar'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avery's Portfolio</title>
      </Head>
      
      <main className={styles.main}>
        {/* navbar */}
        <Navbar />
      </main>
    </div>
  )
}



