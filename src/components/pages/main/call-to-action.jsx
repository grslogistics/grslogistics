import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import reset from 'style/reset'
import colors from 'style/colors'
import { Section } from 'components/layout'
import FeedbackButton from 'components/feedback-button'

CallToAction.propTypes = {
  title: PropTypes.string.isRequired
}

function CallToAction ({ title }) {
  return (
    <Container background={colors.text}>
      <Inner>
        <Title>{title}</Title>
        <FeedbackButton white>Оставить заявку</FeedbackButton>
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
  align-items: center;
`

const Title = styled.h2`
  ${reset.h};
  font-size: 2rem;
  color: #fff;
`
