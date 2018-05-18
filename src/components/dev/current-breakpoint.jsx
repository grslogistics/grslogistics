import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import breakpoints from 'style/breakpoints'

const CurrentBreakpoint = styled.div`
  position: fixed;
  z-index: 666;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  font-size: 0.6rem;
  background-color: #fff;
  border: 1px solid black;
  padding: 0 0.5rem;
  &:after {
    display: inline;
    content: "${`less than ${breakpoints.s}px`}";
    ${breakpoint('s')`
      content: "s ${breakpoints.s}px";
    `}
    ${breakpoint('m')`
      content: "m ${breakpoints.m}px";
    `}
    ${breakpoint('l')`
      content: "l ${breakpoints.l}px";
    `}
    ${breakpoint('xl')`
      content: "xl ${breakpoints.xl}px";
    `}
  }
`

export default CurrentBreakpoint
