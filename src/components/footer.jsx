import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = function Footer() {
  return (
    <footer className={styles.footer}>
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
        </ul>
      </nav>
    </footer>
  )
}

export default Footer