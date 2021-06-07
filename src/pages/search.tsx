import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import ItemCard from '../components/itemCard'
import initialArticles, { articleType } from '../lib/articles'
import search from '../lib/search'
import Modal from '../components/modal'

let key = 0

export default function Home() {
  const [tmpQuery, setTmpQuery] = useState('')
  const [articles, setArticles] = useState(initialArticles)
  const [open, setOpen] = useState(false)

  const handlerModalOepn = () => {
    key++
    document.body.style.overflow = 'hidden'
    setOpen(true)
  }

  const handlerModalClose = () => {
    document.body.style.overflow = ''
    setOpen(false)
  }

  const filterList = (e: string) => {
    const tag = e
    const data = search(tag, '')
    setArticles(data)
    setTmpQuery(tag)
  }

  let arr: Array<string> = []
  initialArticles.forEach((item: articleType) => {
    item.tags.forEach((b) => {
      arr.push(b)
    })
  })

  const ItemList = Array.from(new Set(arr)).map((i) => (
    <li key={i} value={i} onClick={() => filterList(i)}>
      {i}
    </li>
  ))

  return (
    <div className={styles.container}>
      <Head>
        <title>Search | PC Phone Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.form}>
          <label>検索:&nbsp;{tmpQuery}</label>
          <button onClick={handlerModalOepn}>選択</button>
          <Modal open={open} handleClose={handlerModalClose} key={key}>
            <div>
              <h2>タグを選択してください</h2>
              <p onClick={handlerModalClose}>X</p>
            </div>
            <ul>
              <li value="" onClick={() => filterList('')}>
                選択解除
              </li>
              {ItemList}
            </ul>
          </Modal>
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
