import React from 'react'
import Grid from 'styled-components-grid'

import { context } from './grid'

function GridUnit (props) {
  return (
    <context.Consumer>
      {gutters => {
        const { horizontal, vertical } = gutters
        const unitSideBorder = horizontal * (horizontal / 2) + 'rem'
        const unitBottomBorder = vertical + 'rem'
        const style = {
          borderLeft: `${unitSideBorder} solid transparent`,
          borderRight: `${unitSideBorder} solid transparent`,
          borderBottom: `${unitBottomBorder} solid transparent`
        }
        return <Grid.Unit {...props} style={style} />
      }}
    </context.Consumer>
  )
}

export default GridUnit
