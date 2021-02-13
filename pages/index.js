import Head from 'next/head'
import Link from "next/link"

import utilStyles from '../styles/utils.module.css'
import Layout from './components/Layout';
import { getSortedPostsData } from "./lib/posts"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}


export default function Home({allPostsData}) { 
  return (
    <>
      <Layout home>
        <Head><title>Main Page</title></Head>
        <section className={utilStyles.headingMd}>
           Front-end 지존이 되고 싶습니다.
           </section>
        <section 
          className={`
          ${utilStyles.headingMd} ${utilStyles.padding1px}
          `}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData && allPostsData.map(({ id, date, title }) => (
              <Link href={`posts/${id}`} key={id}>
               <li className={utilStyles.listItem}> 
                 {title}
                  <br />
                   {id}
                  <br />
                  {date}
                </li>
                </Link>
              ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}
