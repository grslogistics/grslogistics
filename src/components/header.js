import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as Layout from 'components/layout'
import Menu from './menu'

Header.propTypes = {
  children: PropTypes.func
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
    label: 'Услуги',
    url: '/services',
    children: [
      { label: 'Перевозки морем', url: '/test' },
      { label: 'Мультимодальные перевозки', url: '/test2' }
    ]
  },
  {
    label: 'Полезная информация',
    url: '/news',
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

function Header ({ children }) {
  return (
    <Container>
      <Inner>
        <Logo>Logo</Logo>
        <Menu items={menu} />
      </Inner>
    </Container>
  )
}

export default Header

const Logo = styled.div``

const Container = styled(Layout.Container)`
  box-shadow: 0 1px 3px rgba(151, 156, 162, 0.5);
  align-items: center;
`

const Inner = styled(Layout.Inner)`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
