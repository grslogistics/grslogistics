import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`
export const Inner = styled.div`
  flex: 1;
  margin: 0 25px;
  min-width: 270px;

  ${breakpoint('m')`
    margin: 0 22px;
  `} ${breakpoint('l')`
    margin: 0 55px;
    max-width: 1170px;
  `};
`

export const Row = ({ children, ...props }) => (
  <Container>
    <Inner>{children}</Inner>
  </Container>
)

Row.propTypes = {
  children: PropTypes.any
}
