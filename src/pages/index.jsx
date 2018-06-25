import React from 'react'
import PropTypes from 'prop-types'

import Main from 'components/pages/main'

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

function IndexPage ({ data, ...props }) {
  const { hero, about, services, pros, cta, posts } = data.main
  const servicesData = {
    ...services,
    list: data.services.edges.map(({ node }) => ({
      title: node.title,
      url: node.fields.slug,
      icon: node.icon,
      description: node.shortDescription
    }))
  }
  return (
    <Main
      hero={hero}
      about={about}
      services={servicesData}
      pros={pros}
      cta={cta}
      posts={posts}
      postsEnabled={false}
    />
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    main: staticYaml(fields: { filename: { eq: "main" } }) {
      hero {
        title
        subtitle
        button
        image
      }
      about {
        title
        text
      }
      services {
        title
      }
      pros {
        title
        list
      }
      cta {
        text
        button
      }
      posts {
        title
      }
    }
    services: allServicesYaml {
      edges {
        node {
          title
          icon
          shortDescription
          fields {
            slug
          }
        }
      }
    }
  }
`
