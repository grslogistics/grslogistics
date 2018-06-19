import React from 'react'
import PropTypes from 'prop-types'

import Main from 'components/pages/main'

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

function IndexPage ({ data, ...props }) {
  const { hero, about, services, pros, cta, posts } = data.file.childStaticYaml
  return (
    <Main
      hero={hero}
      about={about}
      services={services}
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
    file(name: { eq: "main" }, sourceInstanceName: { eq: "static" }) {
      childStaticYaml {
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
    }
  }
`
