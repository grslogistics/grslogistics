import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from 'style/colors'
import reset from 'style/reset'

class InputComponent extends Component {
  static propTypes = {
    error: PropTypes.string,
    type: PropTypes.string
  }
  render () {
    const { error, type, ...props } = this.props
    if (type === 'textarea') {
      return (
        <InputWrapper>
          <Textarea error={!!error} {...props} />
          {error && <Error>{error}</Error>}
        </InputWrapper>
      )
    }
    return (
      <InputWrapper>
        <Input error={!!error} type={type} {...props} />
        {error && <Error>{error}</Error>}
      </InputWrapper>
    )
  }
}

const Error = styled.div`
  position: absolute;
  top: 1px;
  bottom: 1px;
  left: 1px;
  right: 1px;
  background: #fafafa;
  border-radius: 5px;
  padding: 0.8125rem 1rem;
  color: ${colors.danger};
  opacity: 1;
  line-height: 1rem;
  pointer-events: none;
  transition: background 0.2s;
`

const InputWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  position: relative;
`

const Input = styled.input`
  ${reset.input};
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  color: ${({ error }) => (error ? colors.danger : colors.text)};
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.8125rem 1rem;
  background: #fafafa;
  border: 1px solid ${({ error }) => (error ? colors.danger : colors.textLight)};
  border-radius: 5px;
  transition: all 0.2s;
  opacity: 1;
  text-overflow: ellipsis;
  resize: none;
  &:focus {
    border-color: ${colors.primary};
    background-color: #fff;
  }
  &:focus + ${Error} {
    background-color: #fff;
    opacity: 0;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`

const Textarea = Input.withComponent('textarea')

export default InputComponent
