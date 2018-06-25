import React from 'react'
import PropTypes from 'prop-types'

import Service from 'components/pages/service'

ServiceTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

function ServiceTemplate ({ data }) {
  const { title, description, steps, additional, fields, cta } = data.service
  return (
    <Service
      title={title}
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
      title
      description
      steps
      additional {
        title
        text
      }
      fields {
        slug
      }
      cta {
        button
        text
      }
    }
  }
`
