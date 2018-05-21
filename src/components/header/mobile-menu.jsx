import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Portal } from 'react-portal'
import breakpoint from 'styled-components-breakpoint'

import Flag from 'components/flag'
import FaIcon from 'components/icon'
import reset from 'style/reset'
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
  renderSubmenuItem = ({ label, url }, i) => {
    const key = `${i}:${url}:${label}`
    return (
      <SubmenuItem key={key}>
        <SubmenuLink href={url}>{label}</SubmenuLink>
      </SubmenuItem>
    )
  }
  renderItem = ({ label, groupLabel, url, children }, i) => {
    const key = `${i}:${url}:${label}`
    return children ? (
      <Flag key={key}>
        {({ isOn, toggle }) => (
          <MenuItem>
            <MenuLink href="#" open={isOn} onClick={toggle}>
              {label}
              <Icon icon="angle-right" open={isOn} />
            </MenuLink>
            <SubmenuOuter>
              <SubmenuList open={isOn}>
                <SubmenuItem>
                  <SubmenuLink href={url}>{groupLabel}</SubmenuLink>
                </SubmenuItem>
                {children.map(this.renderSubmenuItem)}
              </SubmenuList>
            </SubmenuOuter>
          </MenuItem>
        )}
      </Flag>
    ) : (
      <MenuItem key={key}>
        <MenuLink href={url}>{label}</MenuLink>
      </MenuItem>
    )
  }
  render () {
    const { items } = this.props
    return (
      <Flag>
        {({ isOn, setOn, setOff }) => (
          <Fragment>
            <Button onClick={setOn}>
              <Icon icon="bars" size="lg" />
            </Button>
            <Portal>
              <Backdrop onClick={setOff} open={isOn}>
                <MenuWrapper open={isOn}>
                  <MenuList onClick={stopPropagation}>
                    {items.map(this.renderItem)}
                  </MenuList>
                </MenuWrapper>
              </Backdrop>
            </Portal>
          </Fragment>
        )}
      </Flag>
    )
  }
}

const Icon = styled(FaIcon)`
  transition: all 0.2s;
  transform: rotateZ(${({ open }) => (open ? '90deg' : '0')});
`

const Button = styled.button`
  ${reset.button};
  outline: none;
  ${breakpoint('l')`
    display: none;
  `};
`

const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.2s;
  pointer-events: ${({ open }) => (open ? 'initial' : 'none')};

  ${breakpoint('l')`
    display: none;
  `};
`

const SubmenuOuter = styled.div`
  overflow: hidden;
`

const SubmenuList = styled.ul`
  ${reset.ul};
  position: relative;
  margin-top: ${({ open }) => (open ? '0' : '-100%')};
  transition: all 0.3s;
  background-color: #121314;
`

const SubmenuItem = styled.li`
  ${reset.li};
`

const SubmenuLink = styled.a`
  ${reset.a};
  display: block;
  color: #9fa4af;
  padding: 1.125rem 1.5rem 1.125rem 2.8rem;
  border-bottom: 1px solid #25262a;
`

const MenuWrapper = styled.div`
  transition: all 0.2s;
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? 0 : '-100%')};
  width: 80vw;
  height: 100vh;
  overflow-y: auto;
  ${breakpoint('m')`
    width: 50vw;
  `};
`

const MenuList = styled.ul`
  ${reset.ul};
  min-height: 100%;
  background-color: #191a1e;
`

const MenuItem = styled.li`
  ${reset.li};
`

const MenuLink = styled.a`
  ${reset.a};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ open }) => (open ? '#f5f6f8' : '#848994')};
  padding: 1.125rem 1.5rem;
  border-bottom: 1px solid #25262a;
  transition: all 0.2s;
  background-color: ${({ open }) => (open ? '#121314' : 'transparent')};
`
