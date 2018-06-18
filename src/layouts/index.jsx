// import 'init'
import * as R from 'ramda'
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
  const { title, copyright, postsEnabled } = data.file.childStaticYaml
  const menu = postsEnabled ? MENU : R.reject(R.propEq('url', '/news'), MENU)
  return (
    <ThemeProvider theme={theme}>
      <TitleProvider prefix={title}>
        <AppContainer>
          <CurrentBreakpoint />
          <Header menu={menu} />
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
    file(name: { eq: "site" }, sourceInstanceName: { eq: "static" }) {
      childStaticYaml {
        title
        copyright
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

const MENU = [
  {
    label: 'Главная',
    url: '/'
  },
  {
    label: 'О компании',
    url: '/about'
  },
  {
    groupLabel: 'Все услуги',
    label: 'Услуги',
    url: '/services',
    children: [
      { label: 'Перевозки морем', url: '/test' },
      { label: 'Мультимодальные перевозки', url: '/test2' }
    ]
  },
  {
    groupLabel: 'Вся полезная информация',
    label: 'Полезная информация',
    children: [
      { label: 'Перевозки морем', url: '/test' },
      { label: 'Мультимодальные перевозки', url: '/test2' }
    ]
  },
  {
    label: 'Новости',
    url: '/news'
  },
  {
    label: 'Контакты',
    url: '/contacts'
  }
]
