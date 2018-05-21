import React from 'react'

import { Section } from 'components/layout'
import ServicesList from 'components/services-list'

function Services (props) {
  return (
    <Section title="Услуги">
      <ServicesList {...props} />
    </Section>
  )
}

export default Services
