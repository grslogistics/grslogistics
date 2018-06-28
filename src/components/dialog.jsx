import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Portal } from 'react-portal'
import styled from 'styled-components'

import Flag from 'components/flag'

Dialog.propTypes = {
  renderTrigger: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
}

function Dialog ({ renderTrigger, children: renderBody }) {
  return (
    <Flag>
      {({ isOn, setOn, setOff }) => (
        <Fragment>
          {renderTrigger({ open: setOn })}
          <Portal>
            <Backdrop open={isOn} onClick={setOff}>
              {renderBody({ close: setOff, isOpened: isOn })}
            </Backdrop>
          </Portal>
        </Fragment>
      )}
    </Flag>
  )
}

export default Dialog

const Backdrop = styled.div`
  transform: translate3d(0, 0, 0);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
  transition: all 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};
`
