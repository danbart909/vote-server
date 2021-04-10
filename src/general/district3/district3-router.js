const express = require('express')
const logger = require('logger')
const district3Service = require('./district3-service')
const district3Router = express.Router()
const bodyParser = express.json()

district3Router
  .route('/:district')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district } = req.params
      district3Service.district3(db, district)
        .then(x => { res.json(x) }).catch(next)
    })

district3Router
  .route('/:district/:date')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district, date } = req.params
      district3Service.district3Date(db, district, date)
        .then(x => { res.json(x) }).catch(next)
    })

district3Router
  .route('/:district/:from/:to')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { district, from, to } = req.params
      district3Service.district3FromTo(db, district, from, to)
        .then(x => { res.json(x) }).catch(next)
    })

module.exports = district3Router