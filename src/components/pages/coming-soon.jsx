import React from 'react'
import styled from 'styled-components'

import Logo from 'assets/logo-rgb-big.svg'

function ComingSoonPage () {
  return (
    <Container>
      <Logo />
      <Message>Сайт в разработке...</Message>
    </Container>
  )
}

export default ComingSoonPage

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Message = styled.p`
  color: #000;
  font-size: 1.5rem;
`
