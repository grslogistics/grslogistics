import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'

import Icon from 'components/icon'
import colors from 'style/colors'
import reset from 'style/reset'

ServicesItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

function ServicesItem ({ title, url, description, icon }) {
  return (
    <Link to={url}>
      <IconContainer>
        <Icon size="3x" color={colors.primary} icon={icon} />
      </IconContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Link>
  )
}

export default ServicesItem

const IconContainer = styled.div`
  border: 2px solid ${colors.primary};
  border-radius: 100%;
  padding: 1rem;
`

const Title = styled.span`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.2s;
`

const Description = styled.p`
  color: ${colors.textLight};
  font-size: 0.8rem;
`

const Link = styled(GatsbyLink)`
  ${reset.a};
  color: ${colors.text};
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s;
  text-align: center;
  margin-bottom: 1rem;
  background: transparent;
  padding: 1rem;

  &:hover {
    background: ${colors.lightGray};
    color: ${colors.primary};
    transform: scale(1.1);
  }
`
