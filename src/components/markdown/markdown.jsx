import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import * as markdownRenderers from './renderers'

const { DISALLOWED_TYPES, ...renderers } = markdownRenderers

Markdown.propTypes = {
  source: PropTypes.string.isRequired
}

function Markdown ({ source }) {
  return (
    <ReactMarkdown
      disallowedTypes={DISALLOWED_TYPES}
      renderers={renderers}
      source={source}
    />
  )
}

export default Markdown
