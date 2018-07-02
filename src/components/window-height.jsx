import { Component } from 'react'
import PropTypes from 'prop-types'

class WindowHeight extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  }
  state = {
    height: null
  }
  onResize = () => {
    this.setState({ height: window.innerHeight })
  }
  attachListener () {
    window.addEventListener('resize', this.onResize)
  }
  detachListener () {
    window.removeEventListener('resize', this.onResize)
  }
  componentDidMount () {
    this.attachListener()
    this.setState({ height: window.innerHeight })
  }
  componentWillUnmount () {
    this.detachListener()
  }
  render () {
    const { children: renderChildren } = this.props
    return this.state.height === null ? null : renderChildren(this.state.height)
  }
}

export default WindowHeight
