import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import PageTitle from 'components/page-title'
import Map from 'components/map'

import ContactsSection from './contacts-section'

const BREADCRUMBS = [{ label: 'Главная', url: '/' }]

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
      <PageTitle title="Контакты" breadcrumbs={BREADCRUMBS} />
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
