import StyledComponentsGrid from 'styled-components-grid'
import styled from 'styled-components'

const GUTTERS = {
  vertical: 2,
  horizontal: 1
}

const gridMargin = GUTTERS.horizontal * -(GUTTERS.horizontal / 2) + 'rem'
const unitSideBorder = GUTTERS.horizontal * (GUTTERS.horizontal / 2) + 'rem'
const unitBottomBorder = GUTTERS.vertical + 'rem'

const Unit = styled(StyledComponentsGrid.Unit)`
  border-left: ${unitSideBorder} solid transparent;
  border-right: ${unitSideBorder} solid transparent;
  border-bottom: ${unitBottomBorder} solid transparent;
`

const Grid = styled(StyledComponentsGrid)`
  margin: 0 ${gridMargin};
  margin-bottom: -${unitBottomBorder};
`

Grid.Unit = Unit

export default Grid
