import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'components/ui'
import colors from 'style/colors'
import reset from 'style/reset'

ServicesItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

function ServicesItem ({ title, url, icon }) {
  return (
    <Link href={url}>
      <Icon size="5x" icon={icon} />
      <Title>{title}</Title>
    </Link>
  )
}

export default ServicesItem

const Link = styled.a`
  ${reset.a};
  color: ${colors.text};
  position: relative;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s;
  text-align: center;
  margin-bottom: 1rem;

  &:hover {
    color: ${colors.primary};
    transform: scale(1.15);
  }
`

const Title = styled.span`
  margin-top: 1rem;
  font-size: 1.2rem;
`
