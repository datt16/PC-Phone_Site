import React from 'react'
import styles from '../styles/ItemCard.module.css'
import Link from 'next/link'

import { AiOutlineTags } from 'react-icons/ai'
import { articleType } from '../lib/articles'

type PropType = {
  data: articleType
}

const itemCard = (props:PropType) => {
  return (
    <Link href={`/device/${props.data.id}`}>
      <a className={styles.card}>
        {props && props.data &&
        <>
          <div className={styles.image}>
            <img src={props.data.image ? props.data.image : '/no-image.svg'} />
          </div>
          <span className={styles.name}>{ props.data.name }</span>
          <span className={styles.tags}>
            <AiOutlineTags size={21} />
            { props.data.tags
              ? props.data.tags.map((t, idx) => {
                return <span key={idx} className={styles.tag}>#{ t }</span>
              })
              : '' }
          </span>
        </>}
      </a>
    </Link>
  )
}

export default itemCard
