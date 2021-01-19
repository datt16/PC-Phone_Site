import React from 'react'
import { FiCpu, FiMinus, FiCamera } from 'react-icons/fi'
import { FaMemory, FaBatteryThreeQuarters } from 'react-icons/fa'
import { MdSdStorage } from 'react-icons/md'
import styles from '../styles/DeviceSpec.module.css'

const DeviceSpecCard = function DeviceSpecCard({ name, type, value }) {
  let icon = <FiMinus />
  let iconText = 'Unknown'
  switch (name) {
    case 'cpu':
      icon = <FiCpu size={30} />
      iconText = 'CPU'
      break
    case 'ram':
      icon = <FaMemory size={30} />
      iconText = 'RAM'
      break
    case 'battery':
      icon = <FaBatteryThreeQuarters size={30} />
      iconText = 'バッテリー'
      break
    case 'storage':
      icon = <MdSdStorage size={30} />
      iconText = 'ストレージ'
      break
    case 'camera':
      icon = <FiCamera size={30} />
      iconText = 'カメラ'
      break
    default:
      break
  }

  return (
    <div className={[styles.box, styles[type]].join(' ')}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          {icon}
          <p>{iconText}</p>
        </div>
      </div>
      <div className={styles.detail}>
        <p>{Array.isArray(value) ? value.join('\n') : value}</p>
      </div>
    </div>
  )
}

export default DeviceSpecCard
