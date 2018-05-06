import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { colors } from 'styles'

import Header from '../components/header'
import 'typeface-open-sans'

injectGlobal`
  html {
    font-family: 'Open Sans', sans-serif;
    color: ${colors.text};
  }
  html, body {
    margin: 0;
    padding: 0;
  }
`

const theme = {
  breakpoints: {
    xs: 320,
    s: 728,
    m: 1024,
    l: 1200
  }
}

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Header>{data.site.siteMetadata.title}</Header>
      { children }
    </div>
  </ThemeProvider>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
