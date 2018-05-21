import React from 'react'
import { Form, Formik, Field } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'

import { Grid } from 'components/layout'
import { Input, Button } from 'components/ui'

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
  number: yup.string().required('Введите телефон'),
  message: yup.string().required('Введите сообщение')
})

function FeedbackForm () {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={data => console.log(data)}
    >
      {({ isSubmitting, isValid, touched, errors }) => (
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
                    placeholder="Сообщение"
                    type="textarea"
                    rows={5}
                    error={touched.message && errors.message}
                  />
                )}
              </Field>
            </Grid.Unit>
            <SubmitGridUnit size={1}>
              <Button type="submit" disabled={isSubmitting} primary>
                Оставить заявку
              </Button>
            </SubmitGridUnit>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default FeedbackForm

const SubmitGridUnit = styled(Grid.Unit)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
