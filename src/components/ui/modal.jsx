import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import colors from 'style/colors'
import reset from 'style/reset'

const Modal = styled.div`
  padding: 1.875rem;
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  transition: all 0.3s;
  background-color: #fff;
  overflow: hidden;
  ${breakpoint('m')`
    width: 31.25rem;
    height: auto;
    border-radius: 5px;
  `};
`

Modal.Header = styled.h3`
  ${reset.h};
  position: relative;
  margin: -1.875rem;
  margin-bottom: 1.875rem;
  padding: 1.25rem 1.875rem;
  border-bottom: 1px solid ${colors.lightGray};
`

export default Modal
