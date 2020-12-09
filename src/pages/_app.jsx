import React from 'react'
import '../styles/globals.css'
import Header from '../components/header.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp