import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Title } from 'components/meta'

import About from './about'
import Hero from './hero'
import Services from './services'
import Pros from './pros'
import CallToAction from './call-to-action'
import RecentPosts from './recent-posts'

Main.propTypes = {
  postsEnabled: PropTypes.bool.isRequired,
  hero: PropTypes.object,
  services: PropTypes.object,
  about: PropTypes.object,
  cta: PropTypes.object,
  pros: PropTypes.object,
  posts: PropTypes.object
}

function Main ({ hero, services, about, pros, cta, posts, postsEnabled }) {
  return (
    <Fragment>
      <Title title="Главная" />
      <Hero {...hero} />
      <About {...about} />
      <Services {...services} />
      <Pros {...pros} />
      <CallToAction {...cta} />
      {postsEnabled && <RecentPosts {...posts} />}
    </Fragment>
  )
}

export default Main
