import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Section } from 'components/layout'
import MediaItem from 'components/media-item'

RecentPosts.propTypes = {
  title: PropTypes.string.isRequired
}

const GRID_SIZES = {
  s: 1,
  m: 1 / 2
}

function RecentPosts ({ title }) {
  return (
    <Section title={title}>
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

const posts = []

// const posts = R.repeat(
//   {
//     title: 'Lorem ipsum dolor sit amet',
//     text:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     date: new Date().toISOString(),
//     url: '#'
//   },
//   4
// )
