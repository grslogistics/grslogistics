import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/image'

const styles = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}

Background.propTypes = {
  image: PropTypes.shape({
    sizes: PropTypes.object.isRequired
  }).isRequired
}

function Background ({ image }) {
  return <Image image={image} style={styles} />
}

export default Background
