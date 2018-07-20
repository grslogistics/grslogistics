import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Portal } from 'react-portal'
import styled from 'styled-components'

import Flag from 'components/flag'
import WindowHeight from 'components/window-height'
import BodyScrollLock from 'components/body-scroll-lock'

Dialog.propTypes = {
  renderTrigger: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  backdropOpacity: PropTypes.number
}

function Dialog ({
  renderTrigger,
  backdropOpacity = 0.7,
  children: renderBody
}) {
  return (
    <Flag>
      {({ isOn, setOn, setOff }) => (
        <Fragment>
          {renderTrigger({ open: setOn })}
          <Portal>
            <Backdrop opacity={backdropOpacity} open={isOn} onClick={setOff}>
              <BodyScrollLock locked={isOn} />
              <WindowHeight>
                {height => (
                  <Inner height={height}>
                    {renderBody({ close: setOff, isOpened: isOn })}
                  </Inner>
                )}
              </WindowHeight>
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
  background: rgba(0, 0, 0, ${({ opacity }) => opacity});
  z-index: 2;
  transition: all 0.4s;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};
`

const Inner = styled.div`
  height: 100%;
  max-height: ${({ height }) => height}px;
  overflow-y: auto;
  transform: translate3d(0, 0, 0);
  -webkit-overflow-scrolling: touch;
  display: flex;
  align-items: center;
  justify-content: center;
`
