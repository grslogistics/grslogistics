import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from 'style/colors'
import reset from 'style/reset'
import Icon from 'components/icon'

import { Context } from './list'

ListItem.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.any
}

function ListItem ({ icon, children, ...props }) {
  return (
    <Context.Consumer>
      {contextIcon => (
        <ItemContainer {...props}>
          <IconContainer>
            <Icon icon={icon || contextIcon} size="sm" />
          </IconContainer>
          <div>{children}</div>
        </ItemContainer>
      )}
    </Context.Consumer>
  )
}

export default ListItem

const ItemContainer = styled.li`
  ${reset.li};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1em;
  line-height: 1.2em;
  &:last-child {
    margin-bottom: 0;
  }
`

const IconContainer = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  width: 2em;
  height: 1.2em;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
`
