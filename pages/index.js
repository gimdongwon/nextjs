import Head from 'next/head'
import Link from "next/link"

// import styles from '../styles/Home.module.css'
import styles from '../styles/index.module.css'
import Layout from './components/Layout';

export default function Home() {
  return (
    <>
      <Layout home>
        <Head><title>Main Page</title></Head>
        <h1 className={styles.title}>
          Learn{" "}
          <Link href="https://nextjs.org/">
            <a>Next.js</a>
          </Link>
        </h1>
        <h2>
          <Link href="/posts/first-post">
            <a>My First Post!</a>
          </Link>
        </h2>
        <img src="/vercel.svg" alt="logo"/>
      </Layout>
    </>
  )
}
