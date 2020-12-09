import Head from "next/head";
import styles from "../styles/Home.module.css";
import ItemCard from "../components/itemCard";
import { useRouter } from 'next/router'
import { searchAllTags, searchAnyTags } from '../lib/search'

export default function Home() {
  const router = useRouter()
  let { type, tags, mode } = router.query
  tags = tags ? tags.split(',') : []
  type = type ? type : ''
  const list = !mode ? []
            : (mode === 'and') ? searchAllTags(tags, type)
            : searchAnyTags(tags, type)
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
