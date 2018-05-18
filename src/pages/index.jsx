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
