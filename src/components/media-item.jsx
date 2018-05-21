import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  width: 10.5rem;
  margin-right: 2rem;
  background: #2a516e;
  border-radius: 5px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h4`
  ${reset.h};
  transition: all 0.2s;
  line-height: 1rem;
`

const PublishedDate = styled.p`
  ${reset.p};
  color: ${colors.textLight};
  margin: 1rem 0;
  line-height: 1rem;
`

const Text = styled.p`
  ${reset.p};
  color: ${colors.textLight};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s;
`

const Container = styled.a`
  ${reset.a};
  position: relative;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 8rem;
  transition: all 0.2s;
  background: transparent;
  &:hover {
    background: ${colors.lightGray};
  }
  &:hover ${Title} {
    color: ${colors.primary};
  }
`
