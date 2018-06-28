import * as R from 'ramda'

export const rect = (x, y, width, height) =>
  `M${x},${y} L${x + width},${y} L${x + width},${y + height} L${x},${y +
    height} L${x},${y}`

export const polygon = (...points) =>
  R.splitEvery(2, points).reduce((path, [x, y]) => path + `M${x},${y} `, '')
