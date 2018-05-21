// import 'init'
import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { ThemeProvider, injectGlobal } from 'styled-components'
import colors from 'style/colors'

import Header from 'components/header'
import Footer from 'components/footer'
// import { Container, Inner } from 'components/layout'
import 'typeface-pt-sans'
import 'style/global.css'

import CurrentBreakpoint from 'components/dev/current-breakpoint'

import breakpoints from 'style/breakpoints'

const theme = {
  breakpoints
}

const menu = [
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

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <CurrentBreakpoint />
      <Header menu={menu} />
      {children()}
      <Footer copyright="© 2014 Creative PSD design" menu={menu} />
    </div>
  </ThemeProvider>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
