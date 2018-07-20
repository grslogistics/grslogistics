import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Formik, Field } from 'formik'
import styled from 'styled-components'
import Recaptcha from 'react-google-recaptcha'
import * as yup from 'yup'
import api from 'api'

import { preserveLineBreaks } from 'utils'
import colors from 'style/colors'
import { Grid } from 'components/layout'
import { Input, Button } from 'components/ui'

const RECAPTCHA_KEY = process.env.GATSBY_RECAPTCHA_KEY

const initialValues = {
  name: '',
  email: '',
  number: '',
  message: ''
}

const schema = yup.object({
  name: yup.string().required('Введите имя'),
  email: yup
    .string()
    .email('Введите корректный Email')
    .required('Введите email'),
  number: yup
    .string()
    .matches(/^\+?[0-9()\- ]+$/, 'Введите корректный телефон')
    .required('Введите телефон'),
  message: yup.string().required('Введите сообщение'),
  recaptcha: yup.string().required()
})

class FeedbackForm extends Component {
  static propTypes = {
    page: PropTypes.string
  }
  state = {
    success: null,
    error: null
  }
  handleSubmit = data => {
    const { page } = this.props
    api
      .order(page ? { ...data, page } : data)
      .then(() =>
        this.setState({
          success: preserveLineBreaks(
            'Спасибо за заявку!\n Наш менеджер свяжется с Вами в ближайшее время.'
          )
        })
      )
      .catch(error => {
        console.error(error)
        this.setState({ error: 'Произошла ошибка. Попробуйте позже.' })
      })
  }
  render () {
    const { success, error } = this.state

    if (error || success) {
      return <Message error={!!error}>{error || success}</Message>
    }

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        {({ isSubmitting, isValid, touched, errors, setFieldValue }) => (
          <Form>
            <Grid>
              <Grid.Unit size={1}>
                <Field name="name">
                  {({ field }) => (
                    <Input
                      {...field}
                      placeholder="Имя"
                      error={touched.name && errors.name}
                    />
                  )}
                </Field>
              </Grid.Unit>
              <Grid.Unit size={1}>
                <Field name="email">
                  {({ field }) => (
                    <Input
                      {...field}
                      placeholder="Email"
                      error={touched.email && errors.email}
                    />
                  )}
                </Field>
              </Grid.Unit>
              <Grid.Unit size={1}>
                <Field name="number">
                  {({ field }) => (
                    <Input
                      {...field}
                      placeholder="Телефон"
                      error={touched.number && errors.number}
                    />
                  )}
                </Field>
              </Grid.Unit>
              <Grid.Unit size={1}>
                <Field name="message">
                  {({ field }) => (
                    <Input
                      {...field}
                      placeholder="Детали заказа"
                      type="textarea"
                      rows={5}
                      error={touched.message && errors.message}
                    />
                  )}
                </Field>
              </Grid.Unit>
              <Grid.Unit size={1}>
                <Field name="recaptcha">
                  {({ field }) => (
                    <RecaptchaWrapper>
                      <Recaptcha
                        sitekey={RECAPTCHA_KEY}
                        onChange={value => setFieldValue('recaptcha', value)}
                      />
                    </RecaptchaWrapper>
                  )}
                </Field>
              </Grid.Unit>
              <SubmitGridUnit size={1}>
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                  primary
                >
                  Запросить стоимость
                </Button>
              </SubmitGridUnit>
            </Grid>
          </Form>
        )}
      </Formik>
    )
  }
}

export default FeedbackForm

const Message = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: ${({ error }) => (error ? colors.danger : colors.text)};
`

const RecaptchaWrapper = styled.div`
  position: relative;
  min-height: 78px;
  > div > div > div {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) scale(0.86);
  }
`

const SubmitGridUnit = styled(Grid.Unit)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
