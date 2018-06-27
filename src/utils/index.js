import * as R from 'ramda'

export const capitalize = str => str.replace(/\b\w/g, l => l.toUpperCase())

export const preventDefault = e => e && e.preventDefault()
export const stopPropagation = e => e && e.stopPropagation()

export const coerceArray = value =>
  Array.isArray(value) ? value : value === undefined ? [] : [value]

export const getImageSharp = (path, fields) => {
  const sharpFieldName = [...path.split('.'), 'relative'].join('_')
  return R.path([sharpFieldName, 'childImageSharp'], fields)
}
