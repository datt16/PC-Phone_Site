import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ItemCard from '../../components/itemCard'
import { useRouter } from 'next/router'
import initialArticles, { articleType } from '../../lib/articles'
import search from '../../lib/search'
import Modal from '../../components/modal'

let key = 0

export default function Home() {
  const router = useRouter()
  let { type }: { type?: string } = router.query
  const [tmpQuery, setTmpQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [articles, setArticles] = useState(
    initialArticles.filter((a) => a.type == type)
  )
  type = type ? type : ''

  const filterList = (e: string) => {
    const tag = e
    const data = search(tag, type)
    setArticles(data)
    setTmpQuery(tag)
  }

  const handlerModalOepn = () => {
    key++
    document.body.style.overflow = 'hidden'
    setOpen(true)
  }

  const handlerModalClose = () => {
    document.body.style.overflow = ''
    setOpen(false)
  }

  let arr: Array<string> = []
  initialArticles
    .filter((a) => a.type == type)
    .forEach((item) => {
      item.tags.forEach((b) => {
        arr.push(b)
      })
    })

  const ItemList = Array.from(new Set(arr))
    .sort()
    .map((i) => (
      <li key={i} value={i} onClick={() => filterList(i)}>
        {i}
      </li>
    ))
  const LabelText = type == 'pc' ? 'PC' : 'スマホ'

  useEffect(() => {
    setArticles(initialArticles.filter((a) => a.type == type))
  }, [type])

  return (
    <div className={styles.container}>
      <Head>
        <title>Search | PC Phone Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.form}>
          <label>
            {LabelText}を探す:&nbsp;{tmpQuery}
          </label>
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

export async function getStaticProps({ params }: { params: articleType }) {
  return {
    props: {
      articles: initialArticles.filter((a) => a.type == params.type),
    },
  }
}
