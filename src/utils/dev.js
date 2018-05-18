/**
 * Get placeholder picture url
 * @param {number} width
 * @param {number} height
 * @param {object} options
 * @param {string} options.background
 * @param {string} options.color
 * @param {number} options.fontSize
 * @param {string} options.fontFamily
 * @param {string|null} options.text
 */
export const pic = (width, height, options = {}) => {
  let {
    background = '#ccc',
    color = '#757575',
    fontSize,
    fontFamily,
    text
  } = options

  background =
    background === 'transparent' ? 'transparent' : background.slice(1)

  color = color.slice(1)

  const url =
    `https://imgplaceholder.com` +
    `/${width}x${height}` +
    `/${background}` +
    `/${color}`

  let qs = ''

  fontSize && (qs += `&font-size=${fontSize}`)
  fontFamily && (qs += `&font-family=${fontFamily}`)
  text && (qs += `&text=${text}`)

  qs = qs && '?' + qs.slice(1)

  return url + qs
}
