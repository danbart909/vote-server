const express = require('express')
const logger = require('logger')
const district1Service = require('./district1-service')
const district1Router = express.Router()
const bodyParser = express.json()

district1Router
  .route('/:district')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district } = req.params
      district1Service.district1(db, district)
        .then(x => { res.json(x) }).catch(next)
    })

district1Router
  .route('/:district/:date')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district, date } = req.params
      district1Service.district1Date(db, district, date)
        .then(x => { res.json(x) }).catch(next)
    })

district1Router
  .route('/:district/:from/:to')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district, from, to } = req.params
      district1Service.district1FromTo(db, district, from, to)
        .then(x => { res.json(x) }).catch(next)
    })

module.exports = district1Router