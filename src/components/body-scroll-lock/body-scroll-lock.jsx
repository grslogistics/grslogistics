import { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class BodyScrollLock extends Component {
  static propTypes = {
    locked: PropTypes.bool
  }
  setLocked = locked => {
    if (!this.$body) return

    if (locked) {
      this.$body.classList.add('body-scroll-lock')
    } else {
      this.$body.classList.remove('body-scroll-lock')
    }
  }
  componentDidUpdate ({ locked }) {
    if (locked !== this.props.locked) {
      this.setLocked(this.props.locked)
    }
  }
  componentDidMount () {
    const { locked } = this.props
    this.$body = document.querySelector('body')
    this.setLocked(locked)
  }
  render () {
    return null
  }
}

export default BodyScrollLock
