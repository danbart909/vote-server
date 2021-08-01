require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const generalRouter = require('./src/general/general-router')
const surveysRouter = require('./src/general/surveys/surveys-router')
const cngRouter = require('./src/general/congressional/district1-router')
const senRouter = require('./src/general/senate/district2-router')
const lowRouter = require('./src/general/lowerHouse/district3-router')
const cityRouter = require('./src/general/city/district4-router')
const countyRouter = require('./src/general/county/district5-router')

const app = express()

app
  .use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
    skip: () => NODE_ENV === 'test'
  }))
  .use(helmet())
  .use(cors())
  .use(express.json())
  .use('/congressional', cngRouter)
  .use('/senate', senRouter)
  .use('/lowerHouse', lowRouter)
  .use('/city', cityRouter)
  .use('/county', countyRouter)
  .use('/surveys', surveysRouter)
  .use('/', generalRouter)

module.exports = app