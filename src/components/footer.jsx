import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import colors from 'style/colors'
import reset from 'style/reset'
import MenuComponent from 'components/menu'
import { Container as ContainerComponent, Grid } from 'components/layout'

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired
}

function Footer ({ copyright, menu }) {
  return (
    <Outer>
      <Container>
        <Copyright>{copyright}</Copyright>
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
`

const Outer = styled.div`
  background: ${colors.black};
  color: #fff;
  padding: 1rem 0;
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
