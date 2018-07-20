import React from 'react'
import PropTypes from 'prop-types'

import Contacts from 'components/pages/contacts'

ContactsPage.propTypes = {
  data: PropTypes.object
}

function ContactsPage ({ data }) {
  const {
    companyName,
    address,
    map,
    phoneNumbers,
    email
  } = data.file.childPagesYaml
  return (
    <Contacts
      companyName={companyName}
      address={address}
      map={map}
      phoneNumbers={phoneNumbers}
      email={email}
    />
  )
}

export default ContactsPage

export const query = graphql`
  query ContactsQuery {
    file(name: { eq: "contacts" }, sourceInstanceName: { eq: "pages" }) {
      childPagesYaml {
        companyName
        address
        map {
          lat
          long
          zoom
        }
        phoneNumbers
        email
      }
    }
  }
`
