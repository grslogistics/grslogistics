import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import reset from 'style/reset'

List.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.any
}

export const Context = createContext('check-circle')

function List ({ icon = 'check-circle', children, ...props }) {
  return (
    <ListContainer {...props}>
      <Context.Provider value={icon}>{children}</Context.Provider>
    </ListContainer>
  )
}

export default List

const ListContainer = styled.ul`
  ${reset.ul};
  font-size: 1.2rem;
`
