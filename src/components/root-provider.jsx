import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { TitleProvider } from 'components/meta'

import breakpoints from 'style/breakpoints'

const theme = {
  breakpoints
}

RootProvider.propTypes = {
  children: PropTypes.any.isRequired,
  titlePrefix: PropTypes.string.isRequired
}

function RootProvider ({ children, titlePrefix }) {
  return (
    <ThemeProvider theme={theme}>
      <TitleProvider prefix={titlePrefix}>{children}</TitleProvider>
    </ThemeProvider>
  )
}

export default RootProvider
