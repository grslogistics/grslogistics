import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Breadcrumbs from 'components/breadcrumbs'
import { Title } from 'components/meta'
import Cta from 'components/call-to-action'
import PageHeading from 'components/page-heading'

import Description from './description'
import Steps from './steps'
import Additional from './additional'

Service.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.object.isRequired,
  additional: PropTypes.shape({
    image: PropTypes.object.isRequired,
    title: PropTypes.string,
    text: PropTypes.string
  }),
  cta: PropTypes.shape({
    text: PropTypes.string,
    button: PropTypes.string
  })
}

function Service ({ title, slug, description, image, steps, additional, cta }) {
  return (
    <Fragment>
      <Title title={title} />
      <Breadcrumbs list={['Услуги', title]} />
      <PageHeading title={title} image={image} />
      <Description text={description} />
      <Steps list={steps} />
      <Additional {...additional} />
      <Cta page={`Услуги > ${title}`} {...cta} />
    </Fragment>
  )
}

export default Service
