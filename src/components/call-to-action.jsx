import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import reset from 'style/reset'
import colors from 'style/colors'
import { Section } from 'components/layout'
import FeedbackButton from 'components/feedback-button'

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
}

function CallToAction ({ text, title, button }) {
  return (
    <Container background={colors.primary}>
      <Inner>
        <div>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </div>
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
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  ${breakpoint('m')`
    flex-direction: row;
  `};
`

const Title = styled.h2`
  ${reset.h};
  font-size: 2rem;
  color: #fff;
  text-align: center;
  ${breakpoint('m')`
    text-align: left;
  `};
`

const Text = styled.p`
  ${reset.p};
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
  ${breakpoint('m')`
    text-align: left;
    margin-bottom: 0;
  `};
`
