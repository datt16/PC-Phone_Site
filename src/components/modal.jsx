import React, { useState } from 'react'
import styles from '../styles/Modal.module.css'

export default function Modal(props) {
  const [isOpen, setOpen] = useState(props.open)
  const hide = () => {
    props.handleClose()
    setOpen(false)
  }

  return (
    <div
      onClick={hide}
      className={`${styles.wrapper} + ${isOpen ? styles.SHOW : styles.HIDE}`}
    >
      <div className={styles.frame}>{props.children}</div>
    </div>
  );
}
