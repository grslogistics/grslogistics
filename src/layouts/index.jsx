import 'init'
import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider, injectGlobal } from 'styled-components'
import colors from 'style/colors'

// import Header from 'components/header'
// import { Container, Inner } from 'components/layout'
import 'typeface-open-sans'
import 'style/global.css'

// import CurrentBreakpoint from 'components/dev/current-breakpoint'

// import breakpoints from 'style/breakpoints'

injectGlobal`
  html, body {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    color: ${colors.text};
    margin: 0;
    padding: 0;
  }
`

// const theme = {
//   breakpoints
// }

const Layout = ({ data, children }) => (
  <React.Fragment>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    {children()}
  </React.Fragment>
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
