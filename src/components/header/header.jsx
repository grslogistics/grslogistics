import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import colors from 'style/colors'
import { Container } from 'components/layout'
import Logo from 'components/logo'

import Preheader from './preheader'
import PreheaderItem from './preheader-item'
import Menu from 'components/menu'
import MobileMenu from './mobile-menu'

Header.propTypes = {
  children: PropTypes.func,
  menu: PropTypes.array,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

function Header ({ children, menu, phoneNumber, email, address }) {
  return (
    <Fragment>
      <Preheader>
        <PreheaderItem
          label={phoneNumber}
          icon="phone-square"
          url={getNumberUrl(phoneNumber)}
        />
        <PreheaderItem
          label="test@test.com"
          icon="envelope"
          url={`mailto:${email}`}
        />
        <PreheaderItem
          label={address}
          icon="map-marker"
          url="/contacts"
          right
        />
      </Preheader>
      <HeaderWrapper>
        <HeaderContainer>
          <Link to="/">
            <Logo />
          </Link>
          <Menu items={menu} />
          <MobileMenu items={menu} />
        </HeaderContainer>
      </HeaderWrapper>
    </Fragment>
  )
}

export default Header

const HeaderWrapper = styled.div`
  position: relative;
  box-shadow: 0 1px 3px ${colors.shadow};
`

const HeaderContainer = styled(Container)`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const getNumberUrl = number => 'tel:' + number.replace(/[+()\- ]/g, '')
