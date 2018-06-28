import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import reset from 'style/reset'
import FeedbackButton from 'components/feedback-button'
import { Section } from 'components/layout'

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  image: PropTypes.object
}

function HeroSection ({ title, subtitle, button, image }) {
  return (
    <Section background="#2a516e" image={image}>
      <Inner>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <FeedbackButton>{button}</FeedbackButton>
      </Inner>
    </Section>
  )
}

export default HeroSection

const Title = styled.h1`
  ${reset.h};
  font-size: 3rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1.5rem;
  margin-bottom: 0.5rem;
`

const Subtitle = styled.h3`
  ${reset.h};
  font-size: 1.5rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1.5rem;
  margin-bottom: 2rem;
`

const Inner = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoint('m')`
    align-items: flex-end;
  `};
`
