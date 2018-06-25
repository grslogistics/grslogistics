import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import reset from 'style/reset'
import FeedbackForm from 'components/feedback-form'
import { Section, Grid } from 'components/layout'

import ContactsItem from './contacts-item'

ContactsSection.propTypes = {
  companyName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phoneNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired
}

function ContactsSection ({ companyName, address, phoneNumbers, email }) {
  return (
    <Section title="Свяжитесь с нами">
      <Grid>
        <Grid.Unit size={1 / 2}>
          <FeedbackForm />
        </Grid.Unit>
        <Grid.Unit size={1 / 2}>
          <CompanyName>{companyName}</CompanyName>
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

const CompanyName = styled.h4`
  ${reset.h};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 2.5rem;
`
