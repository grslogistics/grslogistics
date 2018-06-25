import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import StyledComponentsGrid from 'styled-components-grid'

const DEFAULT_GUTTERS = {
  vertical: 1,
  horizontal: 1
}

export const context = createContext(getGutters(DEFAULT_GUTTERS))

Grid.propTypes = {
  gutters: PropTypes.shape({
    vertical: PropTypes.number,
    horizontal: PropTypes.number
  }),
  children: PropTypes.any
}

function Grid ({ gutters: guttersProp, children, ...props }) {
  const gutters = getGutters(guttersProp)
  const gridMargin = gutters.horizontal * -(gutters.horizontal / 2) + 'rem'
  const style = {
    margin: `0 ${gridMargin}`,
    marginBottom: `-${gutters.vertical} rem`
  }
  return (
    <StyledComponentsGrid style={style} {...props}>
      <context.Provider value={gutters}>{children}</context.Provider>
    </StyledComponentsGrid>
  )
}

export default Grid

function getGutters (gutters = {}) {
  const vertical =
    gutters.vertical === undefined ? DEFAULT_GUTTERS.vertical : gutters.vertical
  const horizontal =
    gutters.horizontal === undefined
      ? DEFAULT_GUTTERS.horizontal
      : gutters.horizontal

  return { vertical, horizontal }
}
