import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import SearchBox from './searchbox'

const Header = function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          <a>PC-Phone Site</a>
        </Link>
      </h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/type/[id]" as="/type/pc">
              <a>PC</a>
            </Link>
          </li>
          <li>
            <Link href="/type/[id]" as="/type/mobile">
              <a>Phone</a>
            </Link>
          </li>
          <li>
            <SearchBox />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
