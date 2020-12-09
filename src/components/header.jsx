import React from 'react'
import styles from '../styles/Header.module.css'
import SearchBox from "./searchbox";

const Header = function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <a href="/">title</a>
      </h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">PC</a>
          </li>
          <li>
            <a href="#">Phone</a>
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
