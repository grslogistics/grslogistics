import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import About from './about'
import Hero from './hero'
import Services from './services'
import Pros from './pros'
import CallToAction from './call-to-action'
import RecentPosts from './recent-posts'

Main.propTypes = {
  hero: PropTypes.object,
  services: PropTypes.object,
  about: PropTypes.object,
  cta: PropTypes.object,
  pros: PropTypes.object,
  recentPosts: PropTypes.object
}

function Main ({ hero, services, about, pros, cta, recentPosts }) {
  return (
    <Fragment>
      <Hero {...hero} />
      <About {...about} />
      <Services {...services} />
      <Pros {...pros} />
      <CallToAction {...cta} />
      <RecentPosts {...recentPosts} />
    </Fragment>
  )
}

export default Main
