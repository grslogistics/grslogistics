import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from 'components/header'
import Footer from 'components/footer'
import 'typeface-pt-sans'
import 'style/global.css'

import RootProvider from 'components/root-provider'

Layout.propTypes = {
  children: PropTypes.any,
  data: PropTypes.object.isRequired
}

function Layout ({ children, data }) {
  const { title, copyright } = data.site.siteMetadata
  const { phoneNumbers, address, email } = data.contacts
  const services = data.services.edges.map(({ node }) => ({
    label: node.title,
    url: node.fields.slug
  }))
  const menu = getMenu(services, false)
  return (
    <RootProvider titlePrefix={title}>
      <AppContainer>
        <Header
          menu={menu}
          phoneNumber={phoneNumbers[0]}
          email={email}
          address={address}
        />
        {children()}
        <Footer copyright={copyright} menu={menu} />
      </AppContainer>
    </RootProvider>
  )
}

export default Layout

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        copyright
      }
    }
    contacts: pagesYaml(fields: { filename: { eq: "contacts" } }) {
      phoneNumbers
      address
      email
    }
    services: allServicesYaml(sort: { fields: [sort] }) {
      edges {
        node {
          title: heading
          fields {
            slug
          }
        }
      }
    }
  }
`

const AppContainer = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  padding-bottom: 80px;
`

const getMenu = (services, postsEnabled) =>
  [
    {
      label: 'Главная',
      url: '/'
    },
    {
      label: 'О компании',
      url: '/about'
    },
    {
      label: 'Услуги',
      children: services
    },
    {
      label: 'Полезная информация',
      children: [
        {
          label: 'Типы контейнеров',
          url: '/helpful-information/container-types'
        }
      ]
    },
    postsEnabled && {
      label: 'Новости',
      url: '/news'
    },
    {
      label: 'Контакты',
      url: '/contacts'
    }
  ].filter(Boolean)
