import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import colors from 'style/colors'
import reset from 'style/reset'
import { Link } from 'components/ui'
import { Container as ContainerComponent } from 'components/layout'

class Breadcrumbs extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          url: PropTypes.string
        })
      ])
    ).isRequired
  }
  renderBreadcrumb = (breadcrumb, i) => {
    const { label, url } = transformBreadcrumb(breadcrumb)
    const key = `${label}@${url}@${i}`
    return (
      <BreadcrumbsItem key={key}>
        {url ? <Link href={url}>{label}</Link> : label}
      </BreadcrumbsItem>
    )
  }
  render () {
    const { list } = this.props
    return (
      <Wrapper>
        <Container>
          <BreadcrumbsList>
            <BreadcrumbsItem className="breadcrumbs-main">
              <Link href="/">Главная</Link>
            </BreadcrumbsItem>
            {list.map(this.renderBreadcrumb)}
          </BreadcrumbsList>
        </Container>
      </Wrapper>
    )
  }
}

export default Breadcrumbs

function transformBreadcrumb (breadcrumb) {
  return typeof breadcrumb === 'string' ? { label: breadcrumb } : breadcrumb
}

const Wrapper = styled.div`
  background: ${colors.lightGray};
  box-shadow: 0 0 1px ${colors.shadow};
  position: relative;
  z-index: 1;
`

const Container = styled(ContainerComponent)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
`

const BreadcrumbsList = styled.ul`
  ${reset.ul};
  font-size: 0.75rem;
`

const BreadcrumbsItem = styled.li`
  ${reset.li};
  display: inline-block;
  &:after {
    display: inline-block;
    content: '>';
    width: 2em;
    text-align: center;
  }
  &:last-child:after {
    display: none;
  }
  &.breadcrumbs-main {
    display: none;
    ${breakpoint('m')`
      display: inline-block;
    `};
  }
`
