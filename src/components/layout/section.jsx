import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import { responsiveProp } from 'style/helpers'
import reset from 'style/reset'

import Container from './container'

Section.propTypes = {
  children: PropTypes.any,
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string
}

function Section ({ children, title, background, ...props }) {
  return (
    <SectionComponent background={background} {...props}>
      <Container>
        {title && <Title>{title}</Title>}
        {children}
      </Container>
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
    padding: 5rem 0;
  `};
`

const Title = styled.h2`
  ${reset.h};
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3.5rem;
`
