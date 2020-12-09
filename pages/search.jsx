import Head from "next/head";
import styles from "../styles/Home.module.css";
import ItemCard from "../components/itemCard";
import data from "../lib/articles";
import { useRouter } from 'next/router'
import { searchAllTags, searchAnyTags } from '../lib/search'

export default function Home() {
  const router = useRouter()
  const { type, tags, mode } = router.query
  const list = !mode ? []
            : (mode === 'and') ? searchAllTags(tags ? tags.split(',') : [], type ? type : '')
            : searchAnyTags(tags ? tags.split(',') : [], type ? type : '')
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
