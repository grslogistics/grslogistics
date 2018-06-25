import React from 'react'
import PropTypes from 'prop-types'

import { Section } from 'components/layout'
import ServicesList from 'components/services-list'

Services.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

// TODO
function Services ({ title, list }) {
  return (
    <Section title={title}>
      <ServicesList list={list} />
    </Section>
  )
}

export default Services
