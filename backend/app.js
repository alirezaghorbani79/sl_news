const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const xss = require('xss-clean')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.use('/assets', express.static('assets'))

app.use(helmet())
app.use(express.json({ limit: '10kb' }))

const options = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
}
app.use(cors(options))
app.options('*', cors())

// if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
// }

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
})

// app.use('/api', limiter)
app.use(cookieParser())
app.use(xss())


module.exports = app
