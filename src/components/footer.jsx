import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.caption}>
        <h1>
          <Link href='/'>
            <a>PC-Phone Site</a>
          </Link>
        </h1>
        <br></br>
        <span className={styles.caption}>created by 6-Group</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/type/[id]' as='/type/pc'>
              <a>PC</a>
            </Link>
          </li>
          <li>
            <Link href='/type/[id]' as='/type/mobile'>
              <a>Phone</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
