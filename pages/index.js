import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>
        Learn
        <Link href="https://nextjs.org/">
          <a>Next.js</a>
        </Link>
      </h1>
      <h2>
        <Link href="/posts/first-post">
          <a>My First Post!</a>
        </Link>
      </h2>
    </>
  )
}
