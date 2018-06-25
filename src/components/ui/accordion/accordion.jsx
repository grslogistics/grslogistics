import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import reset from 'style/reset'
import AccordionItem from './accordion-item'

Accordion.propTypes = {
  children: PropTypes.any
}

function Accordion ({ children }) {
  return <AccordionList>{children}</AccordionList>
}

Accordion.Item = AccordionItem

export default Accordion

const AccordionList = styled.ul`
  ${reset.ul};
`
