import React from 'react'
import PropTypes from 'prop-types'

import { Section } from 'components/layout'
import Markdown from 'components/markdown'

Description.propTypes = {
  text: PropTypes.string.isRequired
}

function Description ({ text }) {
  return (
    <Section>
      <Markdown source={text} />
    </Section>
  )
}

export default Description
