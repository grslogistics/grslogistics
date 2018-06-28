// import 'init'
import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Header from 'components/header'
import Footer from 'components/footer'
import { TitleProvider } from 'components/meta'
// import { Container, Inner } from 'components/layout'
import 'typeface-pt-sans'
import 'style/global.css'

import CurrentBreakpoint from 'components/dev/current-breakpoint'

import breakpoints from 'style/breakpoints'

const theme = {
  breakpoints
}

Layout.propTypes = {
  children: PropTypes.any,
  data: PropTypes.object.isRequired
}

function Layout ({ children, data }) {
  const { title, copyright, postsEnabled } = data.site.siteMetadata
  const { phoneNumbers, address, email } = data.contacts
  const services = data.services.edges.map(({ node }) => ({
    label: node.title,
    url: node.fields.slug
  }))
  const menu = getMenu(services, postsEnabled)
  return (
    <ThemeProvider theme={theme}>
      <TitleProvider prefix={title}>
        <AppContainer>
          <CurrentBreakpoint />
          <Header
            menu={menu}
            phoneNumber={phoneNumbers[0]}
            email={email}
            address={address}
          />
          {children()}
          <Footer copyright={copyright} menu={menu} />
        </AppContainer>
      </TitleProvider>
    </ThemeProvider>
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
    services: allServicesYaml {
      edges {
        node {
          title
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
