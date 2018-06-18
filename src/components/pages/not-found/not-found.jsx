import React, { Fragment } from 'react'
import styled from 'styled-components'

import reset from 'style/reset'
import { Link } from 'components/ui'
import { Section } from 'components/layout'
import PageTitle from 'components/page-title'

const BREADCRUMBS = [{ label: 'Главная', url: '/' }]

function NotFound () {
  return (
    <Fragment>
      <PageTitle title="Страница не найдена" breadcrumbs={BREADCRUMBS} />
      <Section>
        <Inner>
          <Title>404</Title>
          <Subtitle>Страница не найдена</Subtitle>
          <Message>
            Запрашиваемой страницы не существует. Вы можете вернуться на{' '}
            <Link to="/">главную страницу</Link>.
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
