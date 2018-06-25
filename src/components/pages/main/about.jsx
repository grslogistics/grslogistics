import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import reset from 'style/reset'
import colors from 'style/colors'
import { Section } from 'components/layout'

About.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

function About ({ title, text }) {
  return (
    <Section background={colors.lightGray}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Section>
  )
}

export default About

const Title = styled.h2`
  ${reset.h} font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`
const Text = styled.p`
  ${reset.p}
  color: ${colors.textLight};
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`
