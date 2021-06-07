import React from 'react'
import { articleType } from '../lib/articles'
import styles from '../styles/DeviceSpec.module.scss'

import DeviceSpecCard from './deviceSpecCard'

type PropType = {
  cpu: Array<string>
  ram: Array<string>
  storage: Array<string>
  battery: string
  camera: Array<string>
  biometrics: Array<string>
  ipCode: Array<string>
  gpu: Array<string>
  earphone: boolean
  charge: string
  isMobile: boolean
}

const DeviceSpec = function DeviceSpec({
  cpu,
  ram,
  storage,
  battery,
  gpu,
  camera,
  biometrics,
  ipCode,
  earphone,
  charge,
  isMobile,
}: PropType) {
  const bio: Array<JSX.Element> = []
  biometrics.forEach((b) => {
    bio.push(
      <DeviceSpecCard key={b} name="biometrics" type="vertical" value={b} />
    )
  })

  const card = isMobile ? (
    <DeviceSpecCard name="battery" type="side" value={battery} />
  ) : (
    <DeviceSpecCard name="gpu" type="side" value={gpu} />
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <DeviceSpecCard name="cpu" type="side" value={cpu} />
        <DeviceSpecCard name="ram" type="side" value={ram} />
        <DeviceSpecCard name="storage" type="side" value={storage} />
        <DeviceSpecCard name="camera" type="side" value={camera} />
        {card}
      </div>
      <div className={styles.group}>
        {bio}
        <DeviceSpecCard name="ipCode" type="vertical" value={ipCode} />
        <DeviceSpecCard name="earphone" type="vertical" value={earphone} />
        <DeviceSpecCard name="charge" type="vertical" value={charge} />
      </div>
    </div>
  )
}

export default DeviceSpec
