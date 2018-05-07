import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fa from '@fortawesome/react-fontawesome'
import { Portal } from 'react-portal'
import breakpoint from 'styled-components-breakpoint'

import Flag from 'components/flag'
import reset from 'utils/style-reset'
import { stopPropagation } from 'utils'

export default class MobileMenu extends Component {
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
  renderSubmenuItem = ({ label, url }, i) => {
    const key = `${i}:${url}:${label}`
    return (
      <SubmenuItem key={key}>
        <SubmenuLink href={url}>{label}</SubmenuLink>
      </SubmenuItem>
    )
  }
  renderItem = ({ label, url, children }, i) => {
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
              <Fa icon="bars" size="lg" />
            </Button>
            <Portal>
              <Backdrop onClick={setOff} open={isOn}>
                <MenuList onClick={stopPropagation} open={isOn}>
                  {items.map(this.renderItem)}
                </MenuList>
              </Backdrop>
            </Portal>
          </Fragment>
        )}
      </Flag>
    )
  }
}

const Icon = styled(Fa)`
  marginleft: 1rem;
  transition: all 0.2s;
  transform: rotateZ(${({ open }) => (open ? '90deg' : '0')});
`

const Button = styled.button`
  ${reset.button};
  outline: none;
  ${breakpoint('m')`
    display: none;
  `};
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.2s;
  pointer-events: ${({ open }) => (open ? 'initial' : 'none')};
  background: ${({ open }) => (open ? 'rgba(0,0,0,0.5)' : 'transparent')};

  ${breakpoint('m')`
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
`

const SubmenuItem = styled.li`
  ${reset.li};
`

const SubmenuLink = styled.a`
  ${reset.a};
  display: block;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #000;
`

const MenuList = styled.ul`
  ${reset.ul};
  transition: all 0.2s;
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? 0 : '-100%')};
  width: 80vw;
  height: 100vh;
  background-color: #888;
  ${breakpoint('s')`
    width: 50vw;
  `};
`

const MenuItem = styled.li`
  ${reset.li};
`

const MenuLink = styled.a`
  ${reset.a};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #000;
  transition: all 0.2s;
  background-color: ${({ open }) => (open ? '#555' : '#777')};
`
