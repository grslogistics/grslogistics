import React, { Fragment } from 'react'
import Main from 'components/pages/main'

import * as R from 'ramda'
import { pic } from 'utils/dev'

const IndexPage = () => (
  <Fragment>
    <Main {...MainPageMock} />
  </Fragment>
)

export default IndexPage

const MainPageMock = {
  recentPosts: {
    posts: R.repeat(
      {
        title: 'Lorem ipsum dolor sit amet',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: new Date().toISOString(),
        url: '#'
      },
      4
    )
  },
  cta: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
  },
  pros: {
    title: 'Почему мы',
    pros: R.repeat('Lorem ipsum dolor sit amet, consectetur adipisicing', 6)
  },
  about: {
    title: 'Добро пожаловать',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  hero: {
    title: 'GRS logistics',
    subtitle: 'Доставка грузов из Европы, Азии и Америки',
    buttonLabel: 'Оставить заявку'
  },
  services: {
    services: [
      {
        title: 'Контейнерные перевозки',
        icon: 'cus-container',
        url: '#'
      },
      {
        title: 'Сборные грузы',
        icon: 'cus-boxes',
        url: '#'
      },
      {
        title: 'Консолидация и складирование в Европе и Азии',
        icon: 'cus-warehouse',
        url: '#'
      },
      {
        title: 'Срочная доставка грузов',
        icon: 'cus-plane',
        url: '#'
      },
      {
        title: 'Таможенное оформление',
        icon: 'cus-clipboard',
        url: '#'
      }
    ]
    // services: R.repeat(
    //   {
    //     title: 'Морские контейнерные перевозки',
    //     icon: ['cus', 'ship'],
    //     url: '#'
    //   },
    //   4
    // )
  }
}
