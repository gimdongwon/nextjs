import Head from 'next/head'
import Link from "next/link"

// import styles from '../styles/Home.module.css'
import styles from '../styles/index.module.css'
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
  console.log(allPostsData)
  return (
    <>
      <Layout home>
        <Head><title>Main Page</title></Head>
        <section className={utilStyles.headingMd}>
           정보보안 전문가를 꿈꾸고 있는 학생입니다! 
           </section>
        <section 
          className={`
          ${utilStyles.headingMd} ${utilStyles.padding1px}
          `}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData && allPostsData.map(({ id, date, title }) => (
               <li className={utilStyles.listItem} key={id}> 
                 {title}
                  <br />
                   {id}
                  <br />
                  {date}
                </li>
              ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}
