import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import Hero from 'components/hero'
import { Row } from 'components/layout'

const IndexPage = () => (
  <Fragment>
    <Row>
      <Hero image="http://fillmurray.com/1170/520">TEST</Hero>
    </Row>
    <Row>
      <h1>Hi people</h1>
    </Row>
    <Row>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Row>
    <Row>
      <Link to="/page-2/">Go to page 2</Link>
    </Row>
  </Fragment>
)

export default IndexPage
