export const capitalize = str => str.replace(/\b\w/g, l => l.toUpperCase())

export const preventDefault = e => e && e.preventDefault()
export const stopPropagation = e => e && e.stopPropagation()
