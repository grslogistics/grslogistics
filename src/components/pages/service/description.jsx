import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Section as SectionComponent } from 'components/layout'
import FeedbackButton from 'components/feedback-button'
import Markdown from 'components/markdown'

Description.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.object
}

function Description ({ text, image }) {
  return (
    <Section image={image}>
      <Inner>
        <Markdown source={text} />
        <Button primary>Оставить заявку</Button>
      </Inner>
    </Section>
  )
}

export default Description

const Section = styled(SectionComponent)`
  position: relative;
`

const Inner = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem 2rem;
`

const Button = styled(FeedbackButton)`
  margin: 0.83rem 0;
`
