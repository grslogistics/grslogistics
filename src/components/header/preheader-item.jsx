import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from 'style/colors'

import { Icon } from 'components/ui'
import reset from 'style/reset'

PreheaderItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string,
  right: PropTypes.bool
}

function PreheaderItem ({ label, icon, url, right }) {
  const ContainerComponent = url ? Link : Span

  return (
    <ContainerComponent href={url} right={right}>
      <Icon icon={icon} />
      <Label>{label}</Label>
    </ContainerComponent>
  )
}

export default PreheaderItem

const Link = styled.a`
  ${reset.a};
  display: inline-flex;
  align-items: center;
  margin-left: ${({ right }) => (right ? 'auto' : 0)};
  margin-right: ${({ right }) => (right ? 0 : '2.25rem')};
  transition: all 0.2s;
  color: ${colors.textLight};
  font-size: 0.75rem;
  &:hover {
    cursor: pointer;
    color: ${colors.primary};
  }
`

const Span = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${colors.textLight};
  font-size: 0.75rem;
  margin-left: ${({ right }) => (right ? 'auto' : 0)};
  margin-right: ${({ right }) => (right ? 0 : '2.25rem')};
`

const Label = styled.span`
  margin-left: 0.5rem;
`
