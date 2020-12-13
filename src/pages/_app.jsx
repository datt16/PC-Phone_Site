import React from 'react'
import '../styles/globals.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
