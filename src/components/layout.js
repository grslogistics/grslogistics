import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const Inner = styled.div`
  flex: 1;
  margin: 0 25px;
  min-width: 270px;

  ${breakpoint('m')`
    margin: 0 22px;
  `} ${breakpoint('l')`
    margin: 0 55px;
  `};
`
