import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Collapse } from 'react-collapse'

import colors from 'style/colors'
import reset from 'style/reset'
import Flag from 'components/flag'
import Icon from 'components/icon'

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

function AccordionItem ({ title, children }) {
  return (
    <Flag>
      {({ isOn, toggle }) => (
        <ListItem>
          <Title open={isOn} onClick={toggle}>
            {title}
            <Icon icon={isOn ? 'minus-circle' : 'plus-circle'} />
          </Title>
          <Collapse
            isOpened={isOn}
            springConfig={{ stiffness: 300, damping: 20 }}
          >
            <Body>{children}</Body>
          </Collapse>
        </ListItem>
      )}
    </Flag>
  )
}

export default AccordionItem

const ListItem = styled.li`
  ${reset.li};
  border-radius: 5px;
  border: 1px solid ${colors.gray};
  display: block;
  margin-bottom: 0.5rem;
  overflow: hidden;
  &:last-item {
    margin-bottom: 0;
  }
`

const Title = styled.h5`
  ${reset.h};
  font-size: 1rem;
  color: ${({ open }) => (open ? colors.primary : colors.textLight)};
  border-bottom: 1px solid ${colors.gray};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s;
  cursor: pointer;
  margin-bottom: -1px;
  &,
  & * {
    user-select: none;
  }
`

const Body = styled.div`
  padding: 1rem;
`
