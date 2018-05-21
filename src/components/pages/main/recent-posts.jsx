import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Section } from 'components/layout'
import MediaItem from 'components/media-item'

RecentPosts.propTypes = {
  posts: PropTypes.array.isRequired
}

function RecentPosts ({ posts }) {
  return (
    <Section title="Последние новости">
      <Grid>
        {posts.map((post, i) => (
          <Grid.Unit key={i} size={1 / 2}>
            <MediaItem {...post} />
          </Grid.Unit>
        ))}
      </Grid>
    </Section>
  )
}

export default RecentPosts
