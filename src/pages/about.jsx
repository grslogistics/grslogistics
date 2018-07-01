import React from 'react'
import PropTypes from 'prop-types'

import { getImageSharp } from 'utils'
import About from 'components/pages/about'

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

function AboutPage ({ data }) {
  const { title, text, fields } = data.about

  return (
    <About title={title} text={text} image={getImageSharp('image', fields)} />
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    about: pagesYaml(fields: { filename: { eq: "about" } }) {
      title
      text
      fields {
        image_relative {
          childImageSharp {
            sizes(quality: 80) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
