import React from 'react'
import PropTypes from 'prop-types'

import { getImageSharp } from 'utils'
import Main from 'components/pages/main'

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

function IndexPage ({ data, ...props }) {
  const { about, services, cta, posts } = data.main
  const hero = {
    ...data.main.hero,
    image: getImageSharp('hero.image', data.main.fields)
  }
  const pros = {
    ...data.main.pros,
    image: getImageSharp('pros.image', data.main.fields)
  }
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
    main: pagesYaml(fields: { filename: { eq: "main" } }) {
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
        image
      }
      cta {
        title
        text
        button
      }
      posts {
        title
      }
      fields {
        hero_image_relative {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
        pros_image_relative {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    services: allServicesYaml {
      edges {
        node {
          title: heading
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
