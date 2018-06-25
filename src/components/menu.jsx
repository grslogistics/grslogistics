import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Link from 'gatsby-link'

import reset from 'style/reset'
import colors from 'style/colors'
import Icon from 'components/icon'

class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
        children: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
          })
        )
      })
    ),
    dropdownOnTop: PropTypes.bool
  }
  renderDropdownItem = ({ label, url }, i) => {
    const key = `${i}:${url}:${label}`
    return (
      <DropdownItem key={key}>
        <DropdownLink to={url}>{label}</DropdownLink>
      </DropdownItem>
    )
  }
  renderItem = ({ label, url = '#', children }, i) => {
    const key = `${i}:${url}:${label}`
    const { dropdownOnTop } = this.props
    return (
      <MenuItem key={key} dropdownOnTop={dropdownOnTop}>
        <MenuLink to={url}>
          {label}
          {children && <Icon style={iconStyle} icon="chevron-down" size="xs" />}
        </MenuLink>
        {children && (
          <DropdownList>{children.map(this.renderDropdownItem)}</DropdownList>
        )}
      </MenuItem>
    )
  }
  render () {
    const { items, ...props } = this.props
    return <MenuList {...props}>{items.map(this.renderItem)}</MenuList>
  }
}

export default Menu

const iconStyle = { marginLeft: '0.5rem' }

const DropdownList = styled.ul`
  ${reset.ul};
  z-index: 2;
  position: absolute;
  left: 0;
  background: ${colors.background};
  opacity: 0;
  transition: all 0.2s;
  box-shadow: 0 1px 3px ${colors.shadow};
  pointer-events: none;
  color: ${colors.text};
`

const DropdownItem = styled.li`
  ${reset.li};
  display: block;
`

const DropdownLink = styled(Link)`
  ${reset.a};
  display: block;
  padding: 0.5em 1rem;
  white-space: nowrap;
  transition: all 0.2s;
  &:hover {
    color: ${colors.primary};
  }
`

const MenuList = styled.ul`
  ${reset.ul};
  display: none;
  font-size: 1rem;
  ${breakpoint('l')`
    display: flex;
  `};
`

const MenuItem = styled.li`
  ${reset.li};
  position: relative;
  margin-left: 1.5em;
  ${DropdownList} {
    opacity: 0;
    ${getPosition(200, 200)};
  }
  &:hover ${DropdownList} {
    pointer-events: initial;
    ${getPosition(95, 95)};
    opacity: 1;
  }
`

const MenuLink = styled(Link)`
  ${reset.a};
  display: flex;
  align-items: center;
  padding: 0.5em 0;
  transition: all 0.2s;
  &:hover {
    color: ${colors.primary};
  }
`

function getPosition (bottom, top) {
  return ({ dropdownOnTop }) =>
    dropdownOnTop ? `bottom: ${bottom}%;` : `top: ${top}%;`
}
