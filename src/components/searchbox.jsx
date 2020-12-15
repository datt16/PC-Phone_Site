import React from 'react'
import styles from '../styles/SearchBox.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link'

export default function SerachBox() {
  return (
    <div>
      <Link href="/search">
        <a className={styles.link}>
          <AiOutlineSearch />
        </a>
      </Link>
    </div>
  )
}
