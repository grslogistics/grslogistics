import React from 'react'
import PropTypes from 'prop-types'
import LinkComponent from 'gatsby-link'
import styled from 'styled-components'

import colors from 'style/colors'
import reset from 'style/reset'

Link.propTypes = {
  href: PropTypes.string
}

function Link ({ href, ...props }) {
  return isSiteUrl(href) ? (
    <RouteLink to={href} {...props} />
  ) : (
    <BrowserLink href={href} {...props} />
  )
}

const BrowserLink = styled.a`
  ${reset.a};
  color: ${colors.primary};
  cursor: pointer;
  transition: all 0.2s;
  display: inline-block;
  border-bottom: 1px dashed transparent;
  &:hover {
    border-bottom: 1px dashed ${colors.primary};
  }
`

const RouteLink = BrowserLink.withComponent(LinkComponent)

export default Link

function isSiteUrl (url) {
  const isMailOrTel = /^(mailto|tel):/.test(url)
  return !isMailOrTel && !/^(?:[a-z]+:)?\/\//.test(url)
}
