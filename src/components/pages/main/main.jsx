import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Section } from 'components/layout'

import Hero from './hero'
import ServicesList from 'components/services-list'

Main.propTypes = {
  hero: PropTypes.shape(Hero.propTypes),
  services: PropTypes.shape(ServicesList.propTypes)
}

function Main ({ hero, services }) {
  return (
    <Fragment>
      <Hero {...hero} />
      <Section>
        <ServicesList {...services} />
      </Section>
    </Fragment>
  )
}

export default Main
