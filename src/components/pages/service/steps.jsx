import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

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
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 1.2rem;
  max-width: 500px;
  margin: 0 auto;
  ${breakpoint('l')`
    padding: 4em 0;
    max-width: initial;
    margin: 0;
    align-items: center;
    flex-direction: row;
  `};
`

const StepDescription = styled.p`
  ${reset.p};
  font-size: 0.8rem;
  max-height: 2.5em;
  margin-left: 0.5em;
  ${breakpoint('l')`
    max-height: unset;
    text-align: center;
    margin: 1rem 0;
    width: 15em;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 100%;
  `};
`

const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${breakpoint('l')`
    flex-direction: column;
  `};
`

const StepItem = styled.li`
  ${reset.li};
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1em;
  ${breakpoint('l')`
    margin-bottom: 0;
    flex-direction: row;
    &:after {
      display: block;
      content: '';
      border: none;
      border-top: 2px solid ${colors.gray};
      height: auto;
      width: 4em;
      margin: 0 0.5em;
    }
    &:last-child:after {
      display: none;
    }
    
    &:nth-child(even) ${StepDescription} {
      top: auto;
      bottom: 100%;
    }
  `};
`

const StepCount = styled.div`
  box-sizing: border-box;
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 2.5em;
  font-weight: bold;
  flex-shrink: 0;
`
