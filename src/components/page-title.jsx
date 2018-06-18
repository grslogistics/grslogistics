import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from 'style/colors'
import reset from 'style/reset'
import { Link } from 'components/ui'
import { Container as ContainerComponent } from 'components/layout'
import { Title } from 'components/meta'

class PageTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired
  }
  renderBreadcrumb = ({ label, url }, i) => {
    const key = `${label}@${url}@${i}`
    return (
      <BreadcrumbsItem key={key}>
        <Link to={url}>{label}</Link>
      </BreadcrumbsItem>
    )
  }
  render () {
    const { title, breadcrumbs } = this.props
    return (
      <Wrapper>
        <Container>
          <Title title={title} />
          <Heading>{title}</Heading>
          <BreadcrumbsList>
            {breadcrumbs.map(this.renderBreadcrumb)}
            <BreadcrumbsItem>{title}</BreadcrumbsItem>
          </BreadcrumbsList>
        </Container>
      </Wrapper>
    )
  }
}

export default PageTitle

const Wrapper = styled.div`
  background: ${colors.lightGray};
`

const Container = styled(ContainerComponent)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`

const BreadcrumbsList = styled.ul`
  ${reset.ul};
`

const BreadcrumbsItem = styled.li`
  ${reset.li};
  display: inline-block;
  &:after {
    display: inline-block;
    content: '>';
    width: 2rem;
    text-align: center;
  }
  &:last-child:after {
    display: none;
  }
`

const Heading = styled.h2`
  ${reset.h};
  font-size: 1.5rem;
`
