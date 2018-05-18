import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Flag extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    default: PropTypes.bool
  }
  state = {
    isOn: this.props.default || false
  }
  setOn = () => {
    this.setState({ isOn: true })
  }
  setOff = () => {
    this.setState({ isOn: false })
  }
  toggle = () => {
    this.setState(({ isOn }) => ({ isOn: !isOn }))
  }
  render () {
    const { children } = this.props
    const { isOn } = this.state
    const { setOn, setOff, toggle } = this
    return children({ isOn, setOn, setOff, toggle })
  }
}
