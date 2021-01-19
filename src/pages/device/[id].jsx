import React, { useCallback, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/Device.module.css'
import articles from '../../lib/articles'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

import DevicePreview from '../../components/devicePreview'

export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const article = articles.find((a) => a.id == id)
  const ref = useRef()
  const isRunning = useRef(false)

  const [, setIsDisplay] = useState(false)

  const isScrollToggle = useCallback(() => {
    if (isRunning.current) return
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    isRunning.current = true

    if (!ref) return
    const previewPos = ref.current.device.current.offsetHeight


    requestAnimationFrame(() => {
      if (scrollTop > previewPos - 300) {
        // プレビューの表示
        setIsDisplay(true)
      } else {
        // 何もしない
        setIsDisplay(false)
      }
      isRunning.current = false
    })
  })

  useEffect(() => {
    document.addEventListener('scroll', isScrollToggle, { passive: true })
    return () => {
      document.removeEventListener('scroll', isScrollToggle, { passive: true })
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Search | PC Phone Site</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {article ? (
          <>
            <h1>{article.name}</h1>
            <p>Type: {article.type}</p>
            <p>Tags: {article.tags.join(', ')}</p>
            <div className={styles.imgbox}>
              <img className={styles.img} src={article.image} />
            </div>

            <div className={`${styles.imgbox} ${styles.preview}`}>
              <DevicePreview
                ref={ref}
                width={70.0}
                height={160.8}
                depth={6}
                inch={6.8}
                weight={111}
                zoom={3.0}
              />
            </div>

            <ReactMarkdown>{article.content}</ReactMarkdown>
          </>
        ) : (
          <>
            <h1>404 Not Found.</h1>
          </>
        )}
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: articles.map((article) => {
      return {
        params: {
          id: `${article.id}`,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: articles.find((a) => a.id == params.id),
  }
}
