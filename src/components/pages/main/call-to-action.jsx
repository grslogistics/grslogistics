import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import reset from 'style/reset'
import colors from 'style/colors'
import { Section } from 'components/layout'
import FeedbackButton from 'components/feedback-button'

CallToAction.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
}

function CallToAction ({ text, button }) {
  return (
    <Container background={colors.primary}>
      <Inner>
        <Title>{text}</Title>
        <FeedbackButton white>{button}</FeedbackButton>
      </Inner>
    </Container>
  )
}

export default CallToAction

const Container = styled(Section)`
  padding: 3.5rem 0;
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${breakpoint('l')`
    flex-direction: row;
    text-aling: left;
  `};
`

const Title = styled.h2`
  ${reset.h};
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;
  ${breakpoint('l')`
    margin-bottom: 0;
  `};
`
