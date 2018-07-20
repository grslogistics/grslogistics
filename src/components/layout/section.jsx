import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import reset from 'style/reset'
import Background from 'components/background'

import Container from './container'

Section.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string
}

function Section ({ children, title, background, image, ...props }) {
  return (
    <SectionComponent background={background} {...props}>
      {image && <Background image={image} />}
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
  position: relative;
  ${getSectionBackground};
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

function getSectionBackground ({ background = '#fff', image }) {
  const color = `
    background-color: ${background};
  `
  const backgroundImage = image
    ? `
      background-image: url(${image});
      background-size: cover;
      background-position: center;
    `
    : ''
  return color + backgroundImage
}
