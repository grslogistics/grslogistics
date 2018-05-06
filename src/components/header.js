import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as Layout from 'components/layout'

Header.propTypes = {
  children: PropTypes.func
}

function Header ({ children }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  )
}

export default Header

const Container = styled(Layout.Container)`
  box-shadow: 0 1px 3px rgba(151, 156, 162, 0.5);
  align-items: center;
`

const Inner = styled(Layout.Inner)`
  height: 80px;
  display: flex;
  align-items: center;
`
