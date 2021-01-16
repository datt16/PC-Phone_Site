import React, { Component } from 'react'
import styles from '../styles/DevicePreview.module.css'

const settings = {
  width: 100,
  height: 100,
  inch: 6.8,
}

const staticStyles = {
  base: {
    background: '#323232',
    width: '100px',
    height: '100px',
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
    settings.width = props.width
    settings.height = props.height
  }

  setSize() {
    staticStyles.base.width = settings.width
    staticStyles.base.height = settings.height
  }

  render() {
    return (
      <div
        ref={this.device}
        className={styles.outline}
        style={staticStyles.base}
      ></div>
    )
  }
}

export default DevicePreview
