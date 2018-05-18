import breakpoint from 'styled-components-breakpoint'
import { css } from 'styled-components'

export const responsiveProp = prop => props => {
  const value = props[prop]
  if (!value) {
    return ''
  } else if (typeof value === 'string' || typeof value === 'number') {
    return `${prop}: ${value};`
  } else if (typeof value === 'object') {
    return css`
      ${value.xs ? `${prop}: ${value.xs}` : ''};
      ${breakpoint('s')`
        ${value.s ? `${prop}: ${value.s}` : ''};
      `};
      ${breakpoint('m')`
        ${value.m ? `${prop}: ${value.m}` : ''};
      `};
      ${breakpoint('l')`
        ${value.l ? `${prop}: ${value.l}` : ''};
      `};
      ${breakpoint('xl')`
        ${value.xl ? `${prop}: ${value.xl}` : ''};
      `};
    `
  }
}
