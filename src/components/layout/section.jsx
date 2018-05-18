import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import { responsiveProp } from 'style/helpers'

import Container from './container'

Section.propTypes = {
  children: PropTypes.any,
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

function Section ({ children, background, ...props }) {
  return (
    <SectionComponent background={background} {...props}>
      <Container>{children}</Container>
    </SectionComponent>
  )
}

export default Section

const SectionComponent = styled.section`
  width: 100%;
  padding: 5rem 0;
  ${responsiveProp('background')};
  ${breakpoint('m')`
    padding: 6.25rem 0;
  `};
`
