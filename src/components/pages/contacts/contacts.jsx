import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Breadcrumbs from 'components/breadcrumbs'
import { Title } from 'components/meta'
import Map from 'components/map'

import ContactsSection from './contacts-section'

Contacts.propTypes = {
  companyName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  map: PropTypes.object.isRequired,
  phoneNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired
}

function Contacts ({ map, companyName, address, phoneNumbers, email }) {
  return (
    <Fragment>
      <Title title="Контакты" />
      <Breadcrumbs list={['Контакты']} />
      <Map {...map} title="GRS Logistics" />
      <ContactsSection
        companyName={companyName}
        address={address}
        phoneNumbers={phoneNumbers}
        email={email}
      />
    </Fragment>
  )
}

export default Contacts
