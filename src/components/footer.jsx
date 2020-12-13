import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.caption}>
        <h1>
          <a href="/">PC-Phone Site</a>
        </h1>
        <br></br>
        <span className={styles.caption}>created by 6-Group</span>
      </div>
      <nav className={styles.nav}>
        <ul>
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
