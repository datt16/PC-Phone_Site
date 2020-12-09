import Head from "next/head";
import styles from "../../styles/Home.module.css";
import ItemCard from "../../components/itemCard";
import articles from "../../lib/articles"
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  let { type } = router.query
  type = type ? type : ''
  const list = articles.filter(a => a.type == type)
  return (
    <div className={styles.container}>
      <Head>
        <title>Search | PC Phone Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {list.map((l) => {
            return <ItemCard key={l.name} data={l} />
          })}
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          type: 'pc',
        },
      },
      {
        params: {
          type: 'mobile',
        },
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      list: articles.filter(a => a.type == params.type),
    },
  }
}
