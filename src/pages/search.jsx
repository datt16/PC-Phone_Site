import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import ItemCard from '../components/itemCard'
import initialArticles from '../lib/articles'
import search from '../lib/search'
import Modal from '../components/modal'

export default function Home() {
  const [tmpQuery, setTmpQuery] = useState('')
  const [articles, setArticles] = useState(initialArticles)
  const [open, setOpen] = useState(false)

  const handlerModalOepn = () => {
    document.body.style.overflow = 'hidden'
    setOpen(true)
  }

  const handlerModalClose = () => {
    document.body.style.overflow = ''
    setOpen(false)
  }

  const filterList = (e) => {
    const tag = e
    const data = search(tag, '')
    setArticles(data)
    setTmpQuery(tag)
  }

  let arr = []
  initialArticles.forEach((item) => {
    item.tags.forEach((b) => {
      arr.push(b)
    })
  })

  const ItemList = Array.from(new Set(arr)).map((i) => (
    <li key={i} value={i} name={i} onClick={filterList.bind(this, i)}>
      {i}
    </li>
  ))

  return (
    <div className={styles.container}>
      <Head>
        <title>Search | PC Phone Site</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.form}>
          <label>検索:&nbsp;{tmpQuery}</label>
          <button onClick={handlerModalOepn}>選択</button>
          <Modal open={open} handleClose={handlerModalClose} key={open}>
            <div>
              <h2>タグを選択してください</h2>
              <p onClick={handlerModalClose}>X</p>
            </div>
            <ul>
              <li value="" name="none" onClick={filterList.bind(this, '')}>
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
