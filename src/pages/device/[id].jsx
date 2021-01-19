import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Device.module.css'
import articles from '../../lib/articles'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

import DeviceSpec from '../../components/deviceSpec'
import DevicePreview from '../../components/devicePreview'

export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const article = articles.find((a) => a.id == id)

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

            <DeviceSpec
              cpu={article.cpu}
              ram={article.ram}
              storage={article.storage}
              battery={article.battery}
              camera={article.camera}
              biometrics={article.biometrics}
              ipCode={article.ipCode}
              earphone={article.hasEarphone}
              charge={article.charge}
            />
            <div className={`${styles.imgbox} ${styles.preview}`}>
              <DevicePreview
                width={article.width}
                height={article.height}
                depth={article.thickness}
                inch={article.screen}
                weight={article.weight}
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
