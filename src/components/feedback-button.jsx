import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Dialog from 'components/dialog'
import { Button, Modal } from 'components/ui'
import { stopPropagation } from 'utils'
import FeedbackForm from 'components/feedback-form'

import CloseIcon from 'assets/close.svg'

FeedbackButton.propTypes = {
  children: PropTypes.any
}

function FeedbackButton ({ children, ...props }) {
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
          <FormWrapper>
            <FeedbackForm key={`feedback_${isOpened}`} />
          </FormWrapper>
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
  transform: translateY(${({ open }) => (open ? '0' : '100%')});
  opacity: ${({ open }) => (open ? 1 : 0)};
`

const FormWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`
