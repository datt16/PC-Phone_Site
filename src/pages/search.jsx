import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import ItemCard from '../components/itemCard'
import initialArticles from '../lib/articles'
import search from '../lib/search'

export default function Home() {
  const [tmpQuery, setTmpQuery] = useState('')
  const [articles, setArticles] = useState(initialArticles)
  const filterList = (e) => {
    const tag = e.target.value
    const data = search(tag, '')
    setArticles(data)
    setTmpQuery(tag)
  }

  let arr = []
  initialArticles.forEach(item => {
    item.tags.forEach(b => {
      arr.push(b)
    })
  })
  const tagList = Array.from(new Set(arr)).map((i) =>
    <option key={i} value={i} label={i}>{i}</option>
  )

  return (
    <div className={styles.container}>
      <Head>
        <title>Search | PC Phone Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.form}>
          <label>検索</label>
          <select name="todo" value={tmpQuery} onChange={filterList}>
            <div className="">
              <p>テキスト</p>
              <div className="">説明文</div>
            </div>
            <option label="選択なし" value="">選択なし</option>
            <optgroup label="tags">
              {tagList}
            </optgroup>
          </select>
        </div>

        <div className={styles.grid}>
          {articles.map((l) => {
            return <ItemCard key={l.name} data={l} />
          })}
        </div>
      </main>
    </div>
  )
}
