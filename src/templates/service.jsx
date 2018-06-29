import React from 'react'
import PropTypes from 'prop-types'

import { getImageSharp } from 'utils'
import Service from 'components/pages/service'

ServiceTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

function ServiceTemplate ({ data }) {
  const { title, description, steps, fields, cta } = data.service
  const image = getImageSharp('image', fields)
  const additional = {
    ...data.service.additional,
    image: getImageSharp('additional.image', fields)
  }
  return (
    <Service
      title={title}
      image={image}
      slug={fields.slug}
      description={description}
      steps={steps}
      additional={additional}
      cta={cta}
    />
  )
}

export default ServiceTemplate

export const query = graphql`
  query ServiceQuery($slug: String!) {
    service: servicesYaml(fields: { slug: { eq: $slug } }) {
      title: heading
      description
      steps
      additional {
        title
        text
      }
      fields {
        slug
        image_relative {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
        additional_image_relative {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      cta {
        button
        text
        title
      }
    }
  }
`
