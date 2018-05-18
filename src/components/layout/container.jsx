import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Container = styled.div`
  margin: 0 1.5rem;
  min-width: 272px;
  ${breakpoint('l')`
    margin: 0 3.4375rem;
  `};
  ${breakpoint('xl')`
    margin: 0 auto;
    width: 1170px;
  `};
`

export default Container
