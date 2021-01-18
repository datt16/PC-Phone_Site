import React, { Component } from 'react'
import styles from '../styles/DevicePreview.module.css'

const settings = {
  width: 70.9,
  height: 143.6,
  depth: 7.7,
  inch: 6.8,
  weight: 111,
}

const staticStyles = {
  rootSize: {
    height: '0',
  },
  size: {
    width: '0',
    height: '0',
  },
  window_size: {
    width: '0',
    height: '0',
    transform: 'scale(0.96, 0.95)',
  },
  side_view_size: {
    width: '0',
    height: '0',
  },
  window_border: {
    borderWidth: '',
  },
}

class DevicePreview extends Component {
  constructor(props) {
    super(props)
    this.device = React.createRef()
    this.initialize(props)
    this.setSize()
  }

  initialize(props) {
    if (props.width == null) {
      console.warn('[DEBUG](devicePreview) use default')
      return
    } else {
      settings.width = props.width
      settings.height = props.height
      settings.depth = props.depth
      settings.inch = props.inch
      settings.weight = props.weight
    }
  }

  show() {
    console.warn('Hellollllllllllll')
  }

  setSize() {
    let v_width = (settings.width * 100) / 30,
      v_height = (settings.height * 100) / 30,
      v_depth = (settings.depth * 100) / 30
    staticStyles.rootSize.height = String(v_height + 60) + 'pt'
    staticStyles.size.width = String(v_width) + 'pt'
    staticStyles.size.height = String(v_height) + 'pt'
    staticStyles.window_size.width = String(v_width) + 'pt'
    staticStyles.window_size.height = String(v_height) + 'pt'
    staticStyles.side_view_size.height = String(v_height) + 'pt'
    staticStyles.side_view_size.width = String(v_depth) + 'pt'
    staticStyles.window_border.borderWidth = `${v_height}pt ${v_width}pt 0 0`
  }

  render() {
    return (
      <div className={styles.root} style={staticStyles.rootSize}>
        <div className={styles.wrapper}>
          <div style={staticStyles.side_view_size} className={styles.side}>
            <p className={`${styles.text} ${styles.text_depth}`}>
              <span className={styles.caption}>厚さ</span>
              <br />
              {settings.depth + 'mm'}
            </p>
          </div>
          <div
            ref={this.device}
            style={staticStyles.size}
            className={styles.device_body}
          >
            <p className={`${styles.text} ${styles.text_width}`}>
              <span className={styles.caption}>横幅</span>
              <br />
              {settings.width + 'mm'}
            </p>

            <p className={`${styles.text} ${styles.text_height}`}>
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

            <div
              className={styles.device_window}
              style={staticStyles.window_size}
            >
              <span className={styles.window_text}>
                {settings.inch}
                <p>インチ</p>
              </span>
              <div
                className={styles.device_window_inner}
                style={staticStyles.window_border}
              ></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DevicePreview
