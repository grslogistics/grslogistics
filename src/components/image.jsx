import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

Image.propTypes = {
  image: PropTypes.shape({
    sizes: PropTypes.object.isRequired
  }).isRequired
}

function Image ({ image, ...props }) {
  if (!image) return null

  return <Img {...props} sizes={image.sizes} />
}

export default Image
