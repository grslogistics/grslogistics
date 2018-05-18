import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import { Container } from 'components/layout'
import colors from 'style/colors'

Preheader.propTypes = {
  children: PropTypes.any
}

function Preheader ({ children }) {
  return (
    <PreheaderWrapper>
      <PreheaderContainer>{children}</PreheaderContainer>
    </PreheaderWrapper>
  )
}

export default Preheader

const PreheaderWrapper = styled.div`
  display: none;
  background: ${colors.lightGray};
  box-shadow: 0 0 1px ${colors.shadow};
  ${breakpoint('m')`
    display: block;
  `};
`

const PreheaderContainer = styled(Container)`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
