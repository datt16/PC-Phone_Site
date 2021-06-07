import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import base from '../styles/Home.module.css'
import styles from '../styles/About.module.css'
import { FaGithub } from 'react-icons/fa'
import { RiUnsplashFill } from 'react-icons/ri'
import { IoLogoVercel } from 'react-icons/io5'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | PC Phone Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Made by</h2>
        <p>2021年度 情報工学基礎実習II 6グループ</p>

        <h2>Code Hosted by</h2>
        <Link href="https://github.com/datt16/PC-Phone_Site">
          <div className={styles.siteArea}>
            <FaGithub size="2.5em" />
            <a className={styles.githubLink}>GitHub</a>
          </div>
        </Link>

        <h2>Image by</h2>
        <Link href="https://unsplash.com">
          <div className={styles.siteArea}>
            <RiUnsplashFill size="2.5em" />
            <a>Unsplash</a>
          </div>
        </Link>

        <h2>Code Hosted by</h2>
        <Link href="https://github.com/datt16/PC-Phone_Site">
          <div className={styles.siteArea}>
            <IoLogoVercel size="2.5em" />
            <a>Vercel</a>
          </div>
        </Link>
      </main>
    </div>
  )
}
