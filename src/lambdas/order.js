const nodemailer = require('nodemailer')
const yup = require('yup')
const Recaptcha = require('recaptcha2')

const recaptcha = new Recaptcha({
  siteKey: process.env.RECAPTCHA_SITE_KEY,
  secretKey: process.env.RECAPTCHA_SECRET_KEY
})

const transporter = nodemailer.createTransport({
  service: 'Yandex',
  auth: {
    user: process.env.YANDEX_USER,
    pass: process.env.YANDEX_PASSWORD
  }
})

const schema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  number: yup
    .string()
    .matches(/^\+?[0-9()\- ]+$/, 'Incorrect phone')
    .required(),
  message: yup.string().required(),
  recaptcha: yup.string().required()
})

exports.handler = async function (event, context) {
  const data = JSON.parse(event.body)

  await schema.validate(data)

  const { recaptcha: code, ...orderdata } = data

  await validateCaptcha(code)

  await sendMail({
    from: `"GRS Logistics" <${process.env.YANDEX_USER}>`,
    to: 'orders@grslogistics.ru',
    subject: `Новая заявка: ${orderdata.name}`,
    ...createMail(orderdata)
  })

  return { statusCode: 200, body: 'Email sent' }
}

function sendMail (config) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(config, error => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

async function validateCaptcha (code) {
  try {
    await recaptcha.validate(code)
  } catch (error) {
    throw recaptcha.translateErrors(error)
  }
}

function createMail ({ name, number, email, message }) {
  const text =
    `Имя: ${name}\n` +
    `Телефон: ${number}\n` +
    `Email: ${email}\n` +
    `Сообщение: ${message}`
  const html =
    `<div><strong>Имя: </strong>${name}</div>` +
    `<div><strong>Телефон: </strong>${number}</div>` +
    `<div><strong>Email: </strong>${email}</div>` +
    `<div><strong>Сообщение: </strong>${message}</div>`

  return { text, html }
}
