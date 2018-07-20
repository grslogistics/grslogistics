import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import LinkComponent from 'gatsby-link'

import colors from 'style/colors'
import reset from 'style/reset'
import DateTime from 'components/date-time'

MediaItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

function MediaItem ({ title, text, url, date }) {
  return (
    <Container href={url}>
      <Image />
      <Content>
        <Title>{title}</Title>
        <PublishedDate>
          <DateTime date={date} format="DD MMMM, YYYY" />
        </PublishedDate>
        <Text>{text}</Text>
      </Content>
    </Container>
  )
}

export default MediaItem

const Image = styled.div`
  flex-shrink: 0;
  height: 8rem;
  width: 100%;
  margin-right: 2rem;
  background: #2a516e;
  border-radius: 5px;
  ${breakpoint('l')`
    width: 10.5rem;
  `};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h4`
  ${reset.h};
  transition: all 0.2s;
  line-height: 1rem;
  margin-top: 1rem;
  ${breakpoint('l')`
    margin: 0;
  `};
`

const PublishedDate = styled.p`
  ${reset.p};
  color: ${colors.textLight};
  margin-top: 1rem;
  line-height: 1rem;
`

const Text = styled.p`
  ${reset.p};
  color: ${colors.textLight};
  margin-top: 1rem;
  flex: 1;
  line-height: 1.3rem;
  max-height: 3.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s;
`

const Container = styled(LinkComponent)`
  ${reset.a};
  position: relative;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: stretch;
  transition: all 0.2s;
  background: transparent;
  &:hover {
    background: ${colors.lightGray};
  }
  &:hover ${Title} {
    color: ${colors.primary};
  }
  ${breakpoint('l')`
    flex-direction: row;
    height: 8rem;
  `};
`
