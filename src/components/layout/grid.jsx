import StyledComponentsGrid from 'styled-components-grid'
import styled from 'styled-components'

const GUTTERS = {
  vertical: 1,
  horizontal: 1
}

const gridMargin = GUTTERS.horizontal * -0.5 + 'rem'
const unitSideBorder = GUTTERS.horizontal * 0.5 + 'rem'
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
