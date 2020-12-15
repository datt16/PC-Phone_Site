import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ItemCard from '../../components/itemCard'
import { useRouter } from 'next/router'
import initialArticles from '../../lib/articles'
import search from '../../lib/search'

export default function Home() {
  const router = useRouter()
  let { type } = router.query
  const [tmpQuery, setTmpQuery] = useState('')
  const [articles, setArticles] = useState(initialArticles.filter(a => a.type == type))
  type = type ? type : ''
  const filterList = (e) => {
    const tag = e.target.value
    const data = search(tag, type)
    setArticles(data)
    setTmpQuery(tag)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Search | PC Phone Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="form">
          <label>検索</label>
          <input
            type="text"
            name="todo"
            onChange={filterList}
            value={tmpQuery}
          />
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

export async function getStaticProps({ params }) {
  return {
    props: {
      articles: initialArticles.filter(a => a.type == params.type),
    },
  }
}
