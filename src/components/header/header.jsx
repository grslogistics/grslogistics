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
  menu: PropTypes.array
}

function Header ({ children, menu }) {
  return (
    <Fragment>
      <Preheader>
        <PreheaderItem
          label="+38 (123) 456-78-90"
          icon="phone-square"
          url="tel:+3812345678900"
        />
        <PreheaderItem
          label="test@test.com"
          icon="envelope"
          url="mailto:test@test.com"
        />
        <PreheaderItem
          label={'ООО "БлаБлаБла", Тольятти, ул. Строителей 87, оф. 78'}
          icon="map-marker"
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
