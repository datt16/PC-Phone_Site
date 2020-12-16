import React from 'react'
import '../styles/globals.css'
import styles from '../styles/_app.module.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
