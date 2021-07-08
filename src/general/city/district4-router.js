const express = require('express')
const logger = require('logger')
const district4Service = require('./district4-service')
const district4Router = express.Router()
const bodyParser = express.json()

district4Router
  .route('/:district')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district } = req.params
      district4Service.district4(db, district)
        .then(x => { res.json(x) }).catch(next)
    })

district4Router
  .route('/:district/:date')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district, date } = req.params
      district4Service.district4Date(db, district, date)
        .then(x => { res.json(x) }).catch(next)
    })

district4Router
  .route('/:district/:from/:to')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district, from, to } = req.params
      district4Service.district4FromTo(db, district, from, to)
        .then(x => { res.json(x) }).catch(next)
    })

module.exports = district4Router