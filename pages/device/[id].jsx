import Head from "next/head";
import styles from "../../styles/Device.module.css";
import articles from "../../lib/articles";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const article = articles.find(a => a.id == id)
  return (
    <div className={styles.container}>
      <Head>
        <title>Search | PC Phone Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {article ? (
          <>
            <h1>{ article.name }</h1>
            <p>Type: { article.type }</p>
            <p>Tags: { article.tags.join(', ') }</p>
            <img className={styles.img} src={article.image} />
          </>
        ) : (
          <>
            <h1>404 Not Found.</h1>
          </>
        )
        }
      </main>
    </div>
  );
}
