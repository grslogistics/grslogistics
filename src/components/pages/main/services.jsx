import React from 'react'
import PropTypes from 'prop-types'

import { Section } from 'components/layout'
import ServicesList from 'components/services-list'

Services.propTypes = {
  title: PropTypes.string.isRequired
}

// TODO
function Services ({ title }) {
  return (
    <Section title={title}>
      <ServicesList services={services} />
    </Section>
  )
}

export default Services

const services = [
  {
    title: 'Контейнерные перевозки',
    icon: 'cus-container',
    url: '#'
  },
  {
    title: 'Сборные грузы',
    icon: 'cus-boxes',
    url: '#'
  },
  {
    title: 'Консолидация и складирование в Европе и Азии',
    icon: 'cus-warehouse',
    url: '#'
  },
  {
    title: 'Срочная доставка грузов',
    icon: 'cus-plane',
    url: '#'
  },
  {
    title: 'Таможенное оформление',
    icon: 'cus-clipboard',
    url: '#'
  }
]
