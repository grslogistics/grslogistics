import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from 'style/colors'
import reset from 'style/reset'
import Icon from 'components/icon'
import { Grid, Section } from 'components/layout'

const GRID_SIZES = {
  xs: 1,
  m: 1 / 2
}

Pros.propTypes = {
  title: PropTypes.string.isRequired,
  pros: PropTypes.array.isRequired
}

function Pros ({ pros, title }) {
  return (
    <Section background={colors.lightGray} title={title}>
      <Inner>
        <Grid>
          {pros.map((pro, i) => (
            <Grid.Unit key={`${pro}${i}`} size={GRID_SIZES}>
              <Container>
                <Icon icon="check-circle" color={colors.primary} />
                <Pro>{pro}</Pro>
              </Container>
            </Grid.Unit>
          ))}
        </Grid>
      </Inner>
    </Section>
  )
}

export default Pros

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`

const Inner = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`

const Pro = styled.p`
  ${reset.p};
  display: inline-block;
  font-size: 1.2rem;
  margin-left: 0.5rem;
`
