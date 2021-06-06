import React from 'react'
import '../styles/globals.css'
import styles from '../styles/_app.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
