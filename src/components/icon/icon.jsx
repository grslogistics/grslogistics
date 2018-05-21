import React from 'react'
import PropTypes from 'prop-types'
import Fa from '@fortawesome/react-fontawesome'

import './custom-icons'

Icon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
}

function Icon ({ icon, ...props }) {
  return <Fa icon={transformIconName(icon)} {...props} />
}

export default Icon

const transformIconName = icon => {
  if (typeof icon === 'string' && /^cus-/.test(icon)) {
    return ['cus', icon.slice(4)]
  }
  return icon
}
