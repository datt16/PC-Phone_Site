import React, { Component } from 'react'
import styles from '../styles/DevicePreview.module.css'

const settings = {
  width: 70.9,
  height: 143.6,
  depth: 7.7,
  inch: 6.8,
}

const staticStyles = {
  size: {
    width: '0',
    height: '0',
  },
  window_size: {
    width: '0',
    height: '0',
    transform: 'scale(0.9)',
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
      console.log('use default')
      return
    } else {
      settings.width = props.width
      settings.height = props.height
    }
  }

  setSize() {
    let v_width = (settings.width * 100) / 30,
      v_height = (settings.height * 100) / 30
    staticStyles.size.width = String(v_width) + 'pt'
    staticStyles.size.height = String(v_height) + 'pt'
    staticStyles.window_size.width = String(v_width) + 'pt'
    staticStyles.window_size.height = String(v_height) + 'pt'
  }

  render() {
    return (
      <div
        ref={this.device}
        style={staticStyles.size}
        className={styles.outline}
      >
        <div
          className={styles.device_window}
          style={staticStyles.window_size}
        ></div>
      </div>
    )
  }
}

export default DevicePreview
