import LinkComponent from 'gatsby-link'
import styled from 'styled-components'

import colors from 'style/colors'
import reset from 'style/reset'

const Link = styled(LinkComponent)`
  ${reset.a};
  color: ${colors.primary};
  cursor: pointer;
  transition: all 0.2s;
  display: inline-block;
  border-bottom: 1px dashed transparent;
  &:hover {
    border-bottom: 1px dashed ${colors.primary};
  }
`

export default Link
