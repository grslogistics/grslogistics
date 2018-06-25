import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from 'style/colors'
import { Section, Grid } from 'components/layout'
import Markdown from 'components/markdown'

Additional.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

const GRID_SIZES = 1 / 2

function Additional ({ title, text }) {
  if (!text) return null

  return (
    <Section title={title}>
      <Grid>
        <Grid.Unit size={GRID_SIZES}>
          <Markdown source={text} />
        </Grid.Unit>
        <Grid.Unit size={GRID_SIZES}>
          <ImageMock />
        </Grid.Unit>
      </Grid>
    </Section>
  )
}

export default Additional

const ImageMock = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  background-color: ${colors.primary};
`
