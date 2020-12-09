import Head from "next/head";
import styles from "../styles/Home.module.css";
import ItemCard from "../components/itemCard";
import data from "../lib/articles";
import { useRouter } from 'next/router'
import { searchAllTags, searchAnyTags } from '../lib/search'

export default function Home() {
  const router = useRouter()
  const { type, tags } = router.query
  return (
    <div className={styles.container}>
      <Head>
        <title>Search | PC Phone Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {(type || tags) && (
          <>
            <div className={styles.grid}>
              {searchAnyTags(tags.split(','), type).map((d) => {
                return <ItemCard key={d.name} data={d} />
              })}
              {/* {searchAllTags(tags.split(','), type).map((d) => {
                return <ItemCard key={d.name} data={d} />
              })} */}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
