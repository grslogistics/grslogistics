import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Collapse } from 'react-collapse'
import breakpoint from 'styled-components-breakpoint'
import Link from 'gatsby-link'

import Flag from 'components/flag'
import FaIcon from 'components/icon'
import reset from 'style/reset'
import Dialog from 'components/dialog'
import { stopPropagation } from 'utils'

export default class MobileMenu extends Component {
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
    )
  }
  renderSubmenuItem = closeMenu => ({ label, url }, i) => {
    const key = `${i}:${url}:${label}`
    return (
      <SubmenuItem key={key}>
        <SubmenuLink to={url} onClick={closeMenu}>
          {label}
        </SubmenuLink>
      </SubmenuItem>
    )
  }
  renderItem = closeMenu => ({ label, url, children }, i) => {
    const key = `${i}:${url}:${label}`
    return children ? (
      <Flag key={key}>
        {({ isOn, toggle }) => (
          <MenuItem>
            <MenuBrowserLink href="#" open={isOn} onClick={toggle}>
              {label}
              <Icon icon="angle-right" open={isOn} />
            </MenuBrowserLink>
            <Collapse
              isOpened={isOn}
              springConfig={{ stiffness: 300, damping: 30 }}
            >
              <SubmenuList>
                {children.map(this.renderSubmenuItem(closeMenu))}
              </SubmenuList>
            </Collapse>
          </MenuItem>
        )}
      </Flag>
    ) : (
      <MenuItem key={key}>
        <MenuLink to={url} onClick={closeMenu}>
          {label}
        </MenuLink>
      </MenuItem>
    )
  }
  render () {
    const { items } = this.props
    return (
      <Dialog
        backdropOpacity={0.3}
        renderTrigger={({ open }) => (
          <Button onClick={open}>
            <Icon icon="bars" size="lg" />
          </Button>
        )}
      >
        {({ isOpened, close }) => (
          <MenuWrapper open={isOpened}>
            <MenuList onClick={stopPropagation}>
              {items.map(this.renderItem(close))}
            </MenuList>
          </MenuWrapper>
        )}
      </Dialog>
    )
  }
}

const Icon = styled(FaIcon)`
  transition: all 0.1s;
  transform: rotateZ(${({ open }) => (open ? '90deg' : '0')});
`

const Button = styled.button`
  ${reset.button};
  outline: none;
  ${breakpoint('l')`
    display: none;
  `};
`

const SubmenuList = styled.ul`
  ${reset.ul};
  position: relative;
  transition: all 0.2s;
  background-color: #121314;
`

const SubmenuItem = styled.li`
  ${reset.li};
`

const SubmenuLink = styled(Link)`
  ${reset.a};
  display: block;
  color: #9fa4af;
  padding: 1.125rem 1.5rem 1.125rem 2.8rem;
  border-bottom: 1px solid #25262a;
  border-top: 1px solid #25262a;
  margin-bottom: -1px;
  cursor: pointer;
  &:hover {
    color: #f5f6f8;
  }
`

const MenuWrapper = styled.div`
  transition: all 0.2s;
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? 0 : '-100%')};
  width: 80vw;
  height: 100vh;
  overflow-y: auto;
  background-color: #191a1e;
  ${breakpoint('m')`
    width: 50vw;
  `};
`

const MenuList = styled.ul`
  ${reset.ul};
  padding-bottom: 4rem;
`

const MenuItem = styled.li`
  ${reset.li};
`

const MenuLink = styled(Link)`
  ${reset.a};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ open }) => (open ? '#f5f6f8' : '#848994')};
  padding: 1.125rem 1.5rem;
  border-bottom: 1px solid #25262a;
  border-top: 1px solid #25262a;
  margin-bottom: -1px;
  transition: all 0.2s;
  background-color: ${({ open }) => (open ? '#121314' : 'transparent')};
  cursor: pointer;
  &:hover {
    color: #f5f6f8;
  }
`

const MenuBrowserLink = MenuLink.withComponent('a')
