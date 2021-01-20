import React from 'react'
import { FiCpu, FiMinus, FiCamera, FiCircle, FiX } from 'react-icons/fi'
import { FaMemory, FaBatteryThreeQuarters } from 'react-icons/fa'
import { BiFace, BiFingerprint } from 'react-icons/bi'
import { MdSdStorage } from 'react-icons/md'
import styles from '../styles/DeviceSpec.module.scss'

const DeviceSpecCard = function DeviceSpecCard({ name, type, value }) {
  let icon = <FiMinus size={30} />
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
    case 'biometrics':
      iconText = value
      switch (value) {
        case '顔':
          value = <BiFace size={50} />
          break
        case '指紋':
          value = <BiFingerprint size={50} />
          break
        default:
          break
      }
      break
    case 'ipCode':
      iconText = '防水防塵'
      break
    case 'earphone':
      iconText = 'イヤホン\nジャック'
      value = value ? <FiCircle size={50} /> : <FiX size={50} />
      break
    case 'charge':
      iconText = '接続端子'
      break
    default:
      break
  }

  return (
    <div className={[styles.box, styles[type]].join(' ')}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          {icon}
        </div>
        <p>{iconText}</p>
      </div>
      <div className={styles.detail}>
        <p>{Array.isArray(value) ? value.join('\n') : value}</p>
      </div>
    </div>
  )
}

export default DeviceSpecCard
