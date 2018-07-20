import React from 'react'
import { path } from 'ramda'

export const capitalize = str => str.replace(/\b\w/g, l => l.toUpperCase())

export const preventDefault = e => e && e.preventDefault()
export const stopPropagation = e => e && e.stopPropagation()

export const coerceArray = value =>
  Array.isArray(value) ? value : value === undefined ? [] : [value]

export const getImageSharp = (pathname, fields) => {
  const sharpFieldName = [...pathname.split('.'), 'relative'].join('_')
  return path([sharpFieldName, 'childImageSharp'], fields)
}

const intersperse = (fn, list) => {
  if (!list.length) return []
  const separatorsCount = list.length - 1
  let res = [list[0]]
  for (let i = 0; i < separatorsCount; i++) {
    res = [...res, fn(i * 2 + 1, list), list[i + 1]]
  }
  return res
}

export const preserveLineBreaks = text =>
  intersperse(i => <br key={i} />, text.split('\n'))
