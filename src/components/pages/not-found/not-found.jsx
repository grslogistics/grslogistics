import React, { Fragment } from 'react'
import styled from 'styled-components'

import reset from 'style/reset'
import { Link } from 'components/ui'
import { Section } from 'components/layout'
import Breadcrumbs from 'components/breadcrumbs'
import { Title as PageTitle } from 'components/meta'

function NotFound () {
  return (
    <Fragment>
      <PageTitle title="Страница не найдена" />
      <Breadcrumbs list={['Страница не найдена']} />
      <Section>
        <Inner>
          <Title>404</Title>
          <Subtitle>Страница не найдена</Subtitle>
          <Message>
            Запрашиваемой страницы не существует. Вы можете вернуться на{' '}
            <Link href="/">главную страницу</Link>.
          </Message>
        </Inner>
      </Section>
    </Fragment>
  )
}

export default NotFound

const Inner = styled.div`
  max-width: 500px;
  text-align: center;
  margin: 0 auto;
`

const Title = styled.h3`
  ${reset.h};
  font-size: 12rem;
`

const Subtitle = styled.h4`
  ${reset.h};
  font-size: 1.75rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
`

const Message = styled.p`
  ${reset.p};
`
