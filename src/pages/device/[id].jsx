import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Device.module.css'
import articles from '../../lib/articles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { AiOutlineTags } from 'react-icons/ai'

import DeviceSpec from '../../components/deviceSpec'
import DevicePreview from '../../components/devicePreview'

export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const article = articles.find((a) => a.id == id)

  const tags = []
  article.tags.forEach((t, idx) => {
    tags.push(
      <span key={idx} className={styles.tag}>
        #{t}
      </span>
    )
  })

  const linkBlock = ({ href, children }) => {
    if (href.startsWith('/')) {
      return (
        <Link href={href}>
          <a>
            { children }
          </a>
        </Link>
      )
    }
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
  }

  return (
    <div className={styles.container}>
      {article ? (
        <>
          <Head>
            <title>{article.name} | PC Phone Site</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            {article.image &&
              <img className={styles.img} src={article.image} />
            }
            <article className={styles.article}>
              <h1>{article.name}</h1>
              <p className={styles.tags}>
                <AiOutlineTags size={23} />
                {tags}
              </p>

              <DeviceSpec
                cpu={article.cpu}
                ram={article.ram}
                storage={article.storage}
                battery={article.battery}
                gpu={article.gpu}
                camera={article.camera}
                biometrics={article.biometrics}
                ipCode={article.ipCode}
                earphone={article.hasEarphone}
                charge={article.charge}
                isMobile={!(article.type == 'pc')}
              />

              <div className={`${styles.imgbox} ${styles.preview}`}>
                <DevicePreview
                  width={article.width}
                  height={article.height}
                  depth={article.thickness}
                  inch={article.screen}
                  weight={article.weight}
                  isMobile={!(article.type == 'pc')}
                />
              </div>
              <ReactMarkdown
                source={article.content}
                className={styles.markdown}
                renderers={{
                  link: linkBlock,
                }}
              />
            </article>
          </main>
        </>
      ) : (
        <>
          <h1>404 Not Found.</h1>
        </>
      )}
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
