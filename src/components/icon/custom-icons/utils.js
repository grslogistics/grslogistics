export const rect = (x, y, width, height) =>
  `M${x},${y} L${x + width},${y} L${x + width},${y + height} L${x},${y +
    height} L${x},${y}`
