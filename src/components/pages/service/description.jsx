import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Section } from 'components/layout'
import Markdown from 'components/markdown'

Description.propTypes = {
  text: PropTypes.string.isRequired
}

function Description ({ text }) {
  return (
    <Section>
      <Inner>
        <Markdown source={text} />
      </Inner>
    </Section>
  )
}

export default Description

const Inner = styled.div`
  margin-top: -1em;
  margin-bottom: -1em;
`
