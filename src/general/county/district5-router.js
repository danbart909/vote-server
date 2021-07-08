const express = require('express')
const logger = require('logger')
const district5Service = require('./district5-service')
const district5Router = express.Router()
const bodyParser = express.json()

district5Router
  .route('/:district')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district } = req.params
      district5Service.district5(db, district)
        .then(x => { res.json(x) }).catch(next)
    })

district5Router
  .route('/:district/:date')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district, date } = req.params
      district5Service.district5Date(db, district, date)
        .then(x => { res.json(x) }).catch(next)
    })

district5Router
  .route('/:district/:from/:to')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district, from, to } = req.params
      district5Service.district5FromTo(db, district, from, to)
        .then(x => { res.json(x) }).catch(next)
    })

module.exports = district5Router