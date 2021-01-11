import React, { useState } from 'react'
import styles from '../styles/Modal.module.css'

export default function Modal(props) {
  const [isOpen, setOpen] = useState(props.isOpen)
  const hide = () => {
    setOpen(false)
  }
  return (
    <div
      onClick={hide}
      className={`${isOpen ? styles.SHOW : styles.HIDE} + ${styles.wrapper}`}
    >
      <div className={styles.frame}>{props.children}</div>
    </div>
  )
}
