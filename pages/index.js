import Head from 'next/head'
import Link from "next/link"

import utilStyles from "../styles/utils.module.css"
import Layout from '../components/Layout';
import { getSortedPostsData } from "../lib/posts"
import Date from "../components/date"

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
           Front-end z.zone이 되고 싶습니다.
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
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
                </Link>
              ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}
