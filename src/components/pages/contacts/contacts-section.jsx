import React from 'react'
import PropTypes from 'prop-types'

import FeedbackForm from 'components/feedback-form'
import { Section, Grid } from 'components/layout'

import ContactsItem from './contacts-item'

ContactsSection.propTypes = {
  companyName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phoneNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired
}

const GRID_SIZES = {
  xs: 1,
  m: 1 / 2
}

function ContactsSection ({ companyName, address, phoneNumbers, email }) {
  return (
    <Section title="Свяжитесь с нами">
      <Grid reverse={{ xs: true, m: false }}>
        <Grid.Unit size={GRID_SIZES}>
          <FeedbackForm />
        </Grid.Unit>
        <Grid.Unit size={GRID_SIZES}>
          <ContactsItem icon="cus-grs" label={companyName} />
          <ContactsItem icon="map-marker-alt" label={address} />
          {phoneNumbers.map((number, i) => {
            const key = i + '@' + number
            return (
              <ContactsItem
                key={key}
                icon="phone"
                label={number}
                url={getNumberUrl(number)}
              />
            )
          })}
          <ContactsItem icon="envelope" label={email} url={`mailto:${email}`} />
        </Grid.Unit>
      </Grid>
    </Section>
  )
}

export default ContactsSection

const getNumberUrl = number => 'tel:' + number.replace(/[()\- ]/g, '')
