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

function About ({ title, text, image }) {
  return (
    <Fragment>
      <Title title={title} />
      <Breadcrumbs list={[title]} />
      <Section>
        <Grid>
          <Grid.Unit size={GRID_SIZES}>
            <h2>{title}</h2>
            <Markdown source={text} />
          </Grid.Unit>
          <Grid.Unit size={GRID_SIZES}>
            <Image style={{ minHeight: 300 }} image={image} />
          </Grid.Unit>
        </Grid>
      </Section>
    </Fragment>
  )
}

const GRID_SIZES = 1 / 2

export default About
