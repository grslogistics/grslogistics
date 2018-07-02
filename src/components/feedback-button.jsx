import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Dialog from 'components/dialog'
import { Button, Modal } from 'components/ui'
import { stopPropagation } from 'utils'
import FeedbackForm from 'components/feedback-form'

import CloseIcon from 'assets/close.svg'

FeedbackButton.propTypes = {
  children: PropTypes.any,
  page: PropTypes.string
}

function FeedbackButton ({ children, page, ...props }) {
  return (
    <Dialog
      renderTrigger={({ open }) => (
        <Button {...props} type="button" onClick={open}>
          {children}
        </Button>
      )}
    >
      {({ isOpened, close }) => (
        <Inner open={isOpened} onClick={stopPropagation}>
          <Modal.Header>
            Обратная связь
            <Close onClick={close} />
          </Modal.Header>
          <FeedbackForm page={page} key={`feedback_${isOpened}`} />
        </Inner>
      )}
    </Dialog>
  )
}

export default FeedbackButton

const Close = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 1.875rem;
  width: 1rem;
  height: 1rem;
  transform: translateY(-50%);
`

const Inner = styled(Modal)`
  margin: auto;
  transform: translateY(${({ open }) => (open ? '0' : '100%')});
  opacity: ${({ open }) => (open ? 1 : 0)};
`
