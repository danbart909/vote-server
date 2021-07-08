const express = require('express')
const logger = require('logger')
const district2Service = require('./district2-service')
const district2Router = express.Router()
const bodyParser = express.json()

district2Router
  .route('/:district')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district } = req.params
      district2Service.district2(db, district)
        .then(x => { res.json(x) }).catch(next)
    })

district2Router
  .route('/:district/:date')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district, date } = req.params
      district2Service.district2Date(db, district, date)
        .then(x => { res.json(x) }).catch(next)
    })

district2Router
  .route('/:district/:from/:to')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district, from, to } = req.params
      district2Service.district2FromTo(db, district, from, to)
        .then(x => { res.json(x) }).catch(next)
    })

module.exports = district2Router