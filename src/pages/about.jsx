import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import base from '../styles/Home.module.css'
import styles from '../styles/About.module.css'
import { FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <div className={base.container}>
      <Head>
        <title>Search | PC Phone Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={base.main}>
        <div className={base.form}>
          <label>ABOUT</label>
        </div>
        <div className={styles.container}>
          <h2>Who makes this site?</h2>
          <p>2021年度 情報工学基礎実習II 6グループ</p>

          <h2>Repository</h2>
          <Link href="https://github.com/datt16/PC-Phone_Site">
            <div className={styles.githubLinkArea}>
              <FaGithub size="3em" />
              <a className={styles.githubLink}>GitHub</a>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
