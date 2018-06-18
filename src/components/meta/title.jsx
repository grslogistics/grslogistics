import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { context } from './title-provider'

class Title extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
  }
  componentDidMount () {
    const { title } = this.props
    this.setTitle(title)
  }
  render () {
    return (
      <context.Consumer>
        {setTitle => {
          this.setTitle = setTitle
          return null
        }}
      </context.Consumer>
    )
  }
}

export default Title
