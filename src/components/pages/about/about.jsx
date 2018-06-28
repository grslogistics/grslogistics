import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Section, Grid } from 'components/layout'
import { Title } from 'components/meta'
import Image from 'components/image'
import Breadcrumbs from 'components/breadcrumbs'
import Markdown from 'components/markdown'

About.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object
}

const GRID_SIZES = {
  xs: 1,
  m: 1 / 2
}

function About ({ title, text, image }) {
  return (
    <Fragment>
      <Title title={title} />
      <Breadcrumbs list={[title]} />
      <Section title={title}>
        <Grid>
          <Grid.Unit size={GRID_SIZES}>
            <Markdown source={text} />
          </Grid.Unit>
          <Grid.Unit size={GRID_SIZES}>
            <Image image={image} />
          </Grid.Unit>
        </Grid>
      </Section>
    </Fragment>
  )
}

export default About
