import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link as LinkComponent } from 'components/ui'
import colors from 'style/colors'
import Icon from 'components/icon'
import reset from 'style/reset'

PreheaderItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string
}

function PreheaderItem ({ label, icon, url }) {
  const ContainerComponent = url ? Link : Span

  return (
    <ContainerComponent href={url}>
      <Icon icon={icon} />
      <Label>{label}</Label>
    </ContainerComponent>
  )
}

export default PreheaderItem

const Link = styled(LinkComponent)`
  ${reset.a};
  display: inline-flex;
  align-items: center;
  transition: all 0.2s;
  color: ${colors.textLight};
  font-size: 0.75rem;
  border: none;
  margin-right: 2.25rem;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
    color: ${colors.primary};
    border: none;
  }
`

const Span = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${colors.textLight};
  font-size: 0.75rem;
  margin-right: 2.25rem;
  &:last-child {
    margin-right: 0;
  }
`

const Label = styled.span`
  margin-left: 0.5rem;
`
