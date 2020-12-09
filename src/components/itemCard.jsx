import React from 'react'
import styles from '../styles/ItemCard.module.css'
import Link from 'next/link'

import { AiOutlineTags } from 'react-icons/ai'

const itemCard = (props) => {
  return (
    <Link href={`/device/${props.data.id}`}>
      <a className={styles.card}>
        {props && props.data &&
        <>
          <div className={styles.image}>
            <img src={props.data.image ? props.data.image : '/000000-0.png'} />
          </div>
          <span className={styles.name}>{ props.data.name }</span>
          <span className={styles.tags}>
            <AiOutlineTags size={21} />
            { props.data.tags
              ? props.data.tags.map((t) => {
                return <span key={t} className={styles.tag}>#{ t }</span>
              })
              : '' }
          </span>
        </>}
      </a>
    </Link>
  )
}

export default itemCard
