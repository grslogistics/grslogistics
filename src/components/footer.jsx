import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import colors from 'style/colors'
import reset from 'style/reset'
import MenuComponent from 'components/menu'
import { Container as ContainerComponent } from 'components/layout'

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired
}

function Footer ({ copyright, menu }) {
  return (
    <Outer>
      <Container>
        <Copyright>{copyright}</Copyright>
        <BackOnTop onClick={scrollOnTop}>Вернуться наверх</BackOnTop>
        <Menu dropdownOnTop items={menu} />
      </Container>
    </Outer>
  )
}

export default Footer

const Container = styled(ContainerComponent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

const Outer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.black};
  color: #fff;
`

const Copyright = styled.p`
  ${reset.p};
`

const Menu = styled(MenuComponent)`
  display: none;
  ${breakpoint('l')`
    display: flex;
  `};
`

const BackOnTop = styled.span`
  display: inline;
  cursor: pointer;
  ${breakpoint('l')`
    display: none;
  `};
`

function scrollOnTop () {
  window.scrollTo(0, 0)
}
