import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from 'style/colors'
import reset from 'style/reset'
import Icon from 'components/icon'

ContactsItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string
}

function ContactsItem ({ label, icon, url }) {
  const ContainerComponent = url ? Link : Span

  return (
    <ContainerComponent href={url}>
      <IconContainer>
        <Icon icon={icon} />
      </IconContainer>
      <span>{label}</span>
    </ContainerComponent>
  )
}

export default ContactsItem

const IconContainer = styled.span`
  display: inline-flex;
  justify-content: space-around;
  width: 2.5rem;
`

const Link = styled.a`
  ${reset.a};
  display: flex;
  align-items: center;
  transition: all 0.2s;
  color: ${colors.textLight};
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    color: ${colors.primary};
  }
  margin-bottom: 1rem;
`

const Span = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.textLight};
  font-size: 1.2rem;
  margin-bottom: 1rem;
`
