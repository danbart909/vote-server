require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const generalRouter = require('./src/general/general-router')
const district1Router = require('./src/general/district1/district1-router')
const district2Router = require('./src/general/district2/district2-router')
const district3Router = require('./src/general/district3/district3-router')

const app = express()

app
  .use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
    skip: () => NODE_ENV === 'test'
  }))
  .use(helmet())
  .use(cors())
  .use(express.json())
  .use('/district1', district1Router)
  .use('/district2', district2Router)
  .use('/district3', district3Router)
  .use('/', generalRouter)

module.exports = app