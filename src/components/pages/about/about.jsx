import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Section, Grid } from 'components/layout'
import { Title } from 'components/meta'
import Breadcrumbs from 'components/breadcrumbs'
import Markdown from 'components/markdown'
import LogoComponent from 'components/logo'

About.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object
}

const GRID_SIZES = {
  xs: 1,
  m: 1 / 2
}

function About ({ title, text, image }) {
  return (
    <Fragment>
      <Title title={title} />
      <Breadcrumbs list={[title]} />
      <Section title={title}>
        <Grid reverse={{ xs: true, m: false }}>
          <Grid.Unit size={GRID_SIZES}>
            <Markdown source={text} />
          </Grid.Unit>
          <Grid.Unit size={GRID_SIZES}>
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </Grid.Unit>
        </Grid>
      </Section>
    </Fragment>
  )
}

export default About

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled(LogoComponent)`
  max-width: 400px;
  width: 80%;
  height: auto;
`
