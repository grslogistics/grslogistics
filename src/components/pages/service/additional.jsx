import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/image'
import { Section, Grid } from 'components/layout'
import Markdown from 'components/markdown'

Additional.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object
}

const GRID_SIZES = 1 / 2

function Additional ({ title, text, image }) {
  if (!text) return null

  return (
    <Section title={title}>
      <Grid>
        <Grid.Unit size={GRID_SIZES}>
          <Markdown source={text} />
        </Grid.Unit>
        <Grid.Unit size={GRID_SIZES}>
          <Image image={image} style={{ minHeight: 300 }} />
        </Grid.Unit>
      </Grid>
    </Section>
  )
}

export default Additional
