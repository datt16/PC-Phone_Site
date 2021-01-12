import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ItemCard from '../components/itemCard'
import articles from '../lib/articles'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PC-Phone Site</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.form}>
          <label>すべての記事</label>
        </div>
        <div className={styles.grid}>
          {articles.map((a) => {
            return <ItemCard key={a.name} data={a} />;
          })}
        </div>
      </main>
    </div>
  );
}
