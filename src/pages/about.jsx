import React from 'react'
import PropTypes from 'prop-types'

import About from 'components/pages/about'

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

function AboutPage ({ data }) {
  const { title, text } = data.about

  return <About title={title} text={text} />
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    about: pagesYaml(fields: { filename: { eq: "about" } }) {
      title
      text
    }
  }
`
