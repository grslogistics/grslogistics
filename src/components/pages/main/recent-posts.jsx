import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Section } from 'components/layout'
import MediaItem from 'components/media-item'

RecentPosts.propTypes = {
  posts: PropTypes.array.isRequired
}

const GRID_SIZES = {
  s: 1,
  m: 1 / 2
}

function RecentPosts ({ posts }) {
  return (
    <Section title="Последние новости">
      <Grid>
        {posts.map((post, i) => (
          <Grid.Unit key={i} size={GRID_SIZES}>
            <MediaItem {...post} />
          </Grid.Unit>
        ))}
      </Grid>
    </Section>
  )
}

export default RecentPosts
