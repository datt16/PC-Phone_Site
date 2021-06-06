import React, { useState, useEffect } from 'react'
import styles from '../styles/DevicePreview.module.css'

let settings = {
  width: 70.9,
  height: 143.6,
  depth: 7.7,
  inch: 6.8,
  weight: 111,
  isMobile: true,
}

const DevicePreview = (props) => {
  initialize(props)
  const [state, setState] = useState({
    rootSize: {
      height: '0',
    },
    size: {
      width: '0',
      height: '0',
    },
    caption_area: {
      height: '0',
    },
    window_size: {
      width: '0',
      height: '0',
      transform: '',
    },
    side_view_size: {
      width: '0',
      height: '0',
    },
    window_border: {
      borderWidth: '',
    },
  })

  const decideZoomLevel = (isMobile) => {
    let window_width = window.outerWidth
    let ZOOM = 0
    ZOOM = window_width < 1024 ? window_width / 180 : 3.0

    if (!isMobile) {
      ZOOM /= window_width < 1024 ? 3.4 : 1.55
    }
    return ZOOM
  }

  const initialize = (props) => {
    settings.width = props.width
    settings.height = props.height
    settings.depth = props.depth
    settings.inch = props.inch
    settings.weight = props.weight
    settings.isMobile = props.isMobile
  }

  useEffect(() => {
    const ZOOM = decideZoomLevel(settings.isMobile)
    let v_width = settings.width * ZOOM,
      v_height = settings.height * ZOOM,
      v_depth = settings.depth * ZOOM
    let windowScale = settings.isMobile ? 'scale(.95, .97)' : 'scale(.97, .97)'
    setState({
      rootSize: { height: String(v_height + 60) + 'pt' },
      size: {
        width: String(v_width) + 'pt',
        height: String(v_height) + 'pt',
      },
      window_size: {
        width: String(v_width) + 'pt',
        height: String(v_height) + 'pt',
        transform: windowScale,
      },
      side_view_size: {
        height: String(v_height) + 'pt',
        width: String(v_depth) + 'pt',
      },
      window_border: {
        borderWidth: `${v_height}pt ${v_width}pt 0 0`,
      },
      caption_area: {
        height: String(v_height) + 'pt',
      },
    })
  }, [props])

  return (
    <div className={styles.root} style={state.rootSize}>
      <div className={styles.wrapper}>
        <div style={state.side_view_size} className={styles.side}>
          <p className={`${styles.text} ${styles.text_depth}`}>
            <span className={styles.caption}>厚さ</span>
            <br />
            {settings.depth + 'mm'}
          </p>
        </div>
        <div style={state.size} className={styles.device_body}>
          <p className={`${styles.text} ${styles.text_width}`}>
            <span className={styles.caption}>横幅</span>
            <br />
            {settings.width + 'mm'}
          </p>
          <div className={styles.device_window} style={state.window_size}>
            <span className={styles.window_text}>
              {settings.inch}
              <p>インチ</p>
            </span>
            <div
              className={styles.device_window_inner}
              style={state.window_border}
            ></div>
          </div>
        </div>
        <p
          style={state.caption_area}
          className={`${styles.text} ${styles.text_height}`}
        >
          <span>
            <span className={styles.caption}>高さ</span>
            <br />
            {settings.height + 'mm'}
          </span>
          <span className={`${styles.text} ${styles.text_weight}`}>
            <span className={styles.caption}>重さ</span>
            <br />
            {settings.weight + 'g'}
          </span>
        </p>
      </div>
      <p className={styles.notifyText}>
        実際のサイズや形状とは異なることがあります。
      </p>
    </div>
  )
}

export default DevicePreview