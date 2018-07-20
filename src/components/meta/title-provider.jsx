import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { coerceArray } from 'utils'

export const context = createContext()

class TitleProvider extends Component {
  static propTypes = {
    prefix: PropTypes.string.isRequired,
    children: PropTypes.any
  }
  state = {
    title: []
  }

  get prefixedTitle () {
    const { prefix } = this.props
    const { title } = this.state
    return [prefix, ...coerceArray(title)].join(' | ')
  }

  setTitle = title => {
    this.setState({ title })
  }

  render () {
    const { children } = this.props
    return (
      <context.Provider value={this.setTitle}>
        <Helmet>
          <title>{this.prefixedTitle}</title>
        </Helmet>
        {children}
      </context.Provider>
    )
  }
}

export default TitleProvider
