import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Ink from 'react-ink'

import Icon from './icon'
import colors from 'style/colors'
import reset from 'style/reset'

Button.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  black: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool
}

const themes = {
  regular: {
    background: '#fff',
    border: '#e9eaec',
    color: colors.primary,
    ripple: '#bbb'
  },
  disabled: {
    background: '#ccc',
    border: '#ccc',
    color: colors.textLight
  },
  primary: {
    background: colors.primary,
    border: colors.primary,
    color: '#fff',
    ripple: '#fff'
  },
  success: {
    background: colors.success,
    border: colors.success,
    color: '#fff',
    ripple: '#fff'
  },
  warning: {
    background: colors.warning,
    border: colors.warning,
    color: '#fff',
    ripple: '#fff'
  },
  danger: {
    background: colors.danger,
    border: colors.danger,
    color: '#fff',
    ripple: '#fff'
  },
  black: {
    background: colors.text,
    border: colors.text,
    color: '#fff',
    ripple: '#fff'
  }
}

const sizes = {
  regular: {
    fontSize: '1rem',
    padding: '0.75rem 2rem'
  },
  small: {
    fontSize: '0.875rem',
    padding: '0.6rem 1.25rem'
  }
}

function Button ({ children, disabled, fullWidth, loading, href, ...props }) {
  const ButtonComponent = href ? BtnLink : Btn
  const theme = themes[getButtonTheme(props)]
  const size = sizes[getButtonSize(props)]
  return (
    <ButtonComponent
      fullWidth={fullWidth}
      size={size}
      theme={theme}
      href={href}
      disabled={disabled}
      {...props}
    >
      {loading && <Loader icon="spinner" pulse />}
      {children}
      {!disabled && <Ink style={{ color: theme.ripple }} />}
    </ButtonComponent>
  )
}

export default Button

const theme = prop => props => props.theme[prop]
const size = prop => props => props.size[prop]

const Btn = styled.button`
  ${reset.a};
  ${reset.button};
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  border-radius: 5px;
  font-size: ${size('fontSize')};
  padding: ${size('padding')};
  font-weight: 700;
  text-transform: uppercase;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${theme('color')};
  border: 1px solid ${theme('border')};
  background-color: ${theme('background')};
  text-align: center;
  transition: all 0.2s;
  ${({ fullWidth }) => (fullWidth ? `width: 100%;` : '')};
`
const BtnLink = Btn.withComponent('a')

const Loader = styled(Icon)`
  margin-right: 0.5rem;
`

const boolPropsToString = (propNames, defaultString) => props =>
  propNames.find(name => props[name]) || defaultString

const getButtonTheme = boolPropsToString(
  ['disabled', 'primary', 'success', 'warning', 'danger', 'black'],
  'regular'
)

const getButtonSize = boolPropsToString(['small'], 'regular')
