import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from 'style/colors'
import { Grid, Section } from 'components/layout'
import { List } from 'components/ui'

const GRID_SIZES = {
  xs: 1,
  m: 1 / 2
}

Pros.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

function Pros ({ list, title }) {
  return (
    <Section background={colors.lightGray} title={title}>
      <Grid>
        <Grid.Unit size={GRID_SIZES}>
          <List>
            {list.map((pro, i) => (
              <List.Item key={`${pro}@${i}`}>{pro}</List.Item>
            ))}
          </List>
        </Grid.Unit>
        <Grid.Unit size={GRID_SIZES}>
          <ImgMock />
        </Grid.Unit>
      </Grid>
    </Section>
  )
}

export default Pros

const ImgMock = styled.div`
  background-color: ${colors.primary};
  height: 100%;
`
