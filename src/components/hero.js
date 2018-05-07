import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default function Hero ({ image, children }) {
  return (
    <Outer image={image}>
      <Inner>{children}</Inner>
    </Outer>
  )
}

const Outer = styled.div`
  height: 520px;
  background-image: url(${R.prop('image')});
  display: flex;
`

const Inner = styled.div`
  margin: auto;
`
