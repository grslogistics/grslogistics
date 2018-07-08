import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import reset from 'style/reset'
import { Section } from 'components/layout'

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
}

function PageHeading ({ title, image }) {
  return (
    <Section image={image}>
      <Inner>
        <Title>{title}</Title>
      </Inner>
    </Section>
  )
}

export default PageHeading

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  ${reset.h};
  font-size: 2rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1.5rem;
  text-align: center;
  ${breakpoint('m')`
    font-size: 3rem;
  `};
`
