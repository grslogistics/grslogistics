import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from 'style/colors'
import reset from 'style/reset'
import { Section } from 'components/layout'

Steps.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
}

function Steps ({ list }) {
  if (!list || !list.length) return null

  return (
    <Section title="Схема работы" background={colors.lightGray}>
      <StepsList>
        {list.map((step, i) => (
          <StepItem key={i}>
            <Inner>
              <StepCount>{i + 1}</StepCount>
              <StepDescription>{step}</StepDescription>
            </Inner>
          </StepItem>
        ))}
      </StepsList>
    </Section>
  )
}

export default Steps

const StepsList = styled.ul`
  ${reset.ul};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4em;
  font-size: 1.2rem;
`

const StepDescription = styled.p`
  position: absolute;
  font-size: 1rem;
  width: 10em;
  text-align: center;
  transform: translateX(-50%);
  left: 50%;
  top: 100%;
`

const Inner = styled.div`
  position: relative;
`

const StepItem = styled.li`
  ${reset.li};
  position: relative;
  display: flex;
  align-items: center;
  &:after {
    display: block;
    content: '';
    border-top: 2px solid ${colors.gray};
    width: 5em;
    margin: 0 0.5em;
  }
  &:last-child:after {
    display: none;
  }
`

const StepCount = styled.div`
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 2.5em;
  font-weight: bold;
`
