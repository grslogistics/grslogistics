import styled from 'styled-components'

import colors from 'style/colors'

export const DISALLOWED_TYPES = []

export const blockquote = styled.blockquote`
  margin-left: 0;
  border-left: 0.5em solid ${colors.primary};
  overflow: hidden;
  padding-left: 0.5em;
  font-size: 1.2em;
`

export {
  Link as link,
  Link as linkReference,
  Table as table
} from 'components/ui'

export const root = styled.div`
  font-size: 1.2rem;
  margin-top: -1em;
  margin-bottom: -1em;
`
