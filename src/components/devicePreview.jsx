import React, { Component } from 'react'
import styles from '../styles/DevicePreview.module.css'

let settings = {
  width: 70.9,
  height: 143.6,
  depth: 7.7,
  inch: 6.8,
  weight: 111,
  isMobile: true,
}

class DevicePreview extends Component {
  constructor(props) {
    super(props)
    this.initialize(props)
    this.state = {
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
    }
  }

  componentDidMount() {
    const ZOOM = this.decideZoomLevel(settings.isMobile)
    let v_width = settings.width * ZOOM,
      v_height = settings.height * ZOOM,
      v_depth = settings.depth * ZOOM
    let windowScale = settings.isMobile ? 'scale(.95, .97)' : 'scale(.97, .97)'
    this.setState({
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
  }

  initialize(props) {
    settings.width = props.width
    settings.height = props.height
    settings.depth = props.depth
    settings.inch = props.inch
    settings.weight = props.weight
    settings.isMobile = props.isMobile
  }

  decideZoomLevel(isMobile) {
    let window_width = window.outerWidth
    let ZOOM = 0
    ZOOM = window_width < 1024 ? window_width / 180 : 3.33

    if (!isMobile) {
      ZOOM /= window_width < 1024 ? 3.6 : 1.55
    }
    return ZOOM
  }

  render() {
    return (
      <div className={styles.root} style={this.state.rootSize}>
        <div className={styles.wrapper}>
          <div style={this.state.side_view_size} className={styles.side}>
            <p className={`${styles.text} ${styles.text_depth}`}>
              <span className={styles.caption}>厚さ</span>
              <br />
              {settings.depth + 'mm'}
            </p>
          </div>
          <div style={this.state.size} className={styles.device_body}>
            <p className={`${styles.text} ${styles.text_width}`}>
              <span className={styles.caption}>横幅</span>
              <br />
              {settings.width + 'mm'}
            </p>
            <div className={styles.device_window} style={this.state.window_size}>
              <span className={styles.window_text}>
                {settings.inch}
                <p>インチ</p>
              </span>
              <div className={styles.device_window_inner} style={this.state.window_border}></div>
            </div>
          </div>
          <p style={this.state.caption_area} className={`${styles.text} ${styles.text_height}`}>
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
      </div>
    )
  }
}

export default DevicePreview
