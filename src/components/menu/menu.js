import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Fa from '@fortawesome/react-fontawesome'
import breakpoint from 'styled-components-breakpoint'

import MobileMenu from './mobile-menu'
import reset from 'utils/style-reset'
import colors from 'styles/colors'

class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        children: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
          })
        )
      })
    )
  }
  renderDropdownItem = ({ label, url }, i) => {
    const key = `${i}:${url}:${label}`
    return (
      <DropdownItem key={key}>
        <DropdownLink href={url}>{label}</DropdownLink>
      </DropdownItem>
    )
  }
  renderItem = ({ label, url, children }, i) => {
    const key = `${i}:${url}:${label}`
    return (
      <MenuItem key={key}>
        <MenuLink href={url}>
          {label}
          {children && <Fa style={iconStyle} icon="chevron-down" size="xs" />}
        </MenuLink>
        {children && (
          <DropdownList>{children.map(this.renderDropdownItem)}</DropdownList>
        )}
      </MenuItem>
    )
  }
  render () {
    const { items } = this.props
    return (
      <Fragment>
        <MenuList>{items.map(this.renderItem)}</MenuList>
        <MobileMenu items={items} />
      </Fragment>
    )
  }
}

export default Menu

const iconStyle = { marginLeft: '0.5rem' }

const DropdownList = styled.ul`
  ${reset.ul};
  position: absolute;
  top: 200%;
  left: 0;
  background: ${colors.background};
  opacity: 0;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(151, 156, 162, 0.5);
  pointer-events: none;
`

const DropdownItem = styled.li`
  ${reset.li};
  display: block;
`

const DropdownLink = styled.a`
  ${reset.a};
  display: block;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  transition: all 0.2s;
  &:hover {
    color: ${colors.primary};
  }
`

const MenuList = styled.ul`
  ${reset.ul};
  display: none;
  ${breakpoint('m')`
    display: flex;
  `};
`

const MenuItem = styled.li`
  ${reset.li};
  position: relative;
  margin-left: 1.5rem;
  &:hover ${DropdownList} {
    pointer-events: initial;
    top: 100%;
    opacity: 1;
  }
`

const MenuLink = styled.a`
  ${reset.a};
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  transition: all 0.2s;
  &:hover {
    color: ${colors.primary};
  }
`
