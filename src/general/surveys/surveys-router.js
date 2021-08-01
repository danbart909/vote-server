const express = require('express')
const surveysRouter = express.Router()
const surveysService = require('./surveys-service')
const bodyParser = express.json()

surveysRouter
  .route('/latest')

  .get((req, res, next) => {
    let db = req.app.get('db')
    surveysService.getQuestions(db)
      .then(x => { res.json(x) }).catch(next)
  })

  surveysRouter
  .route('/:id')

  .post(bodyParser, (req, res, next) => {
    let db = req.app.get('db')
    let { id } = req.params
    let { answer } = req.body
    surveysService.plusOne(db, id, answer)
      .then(x => { res.json(x) }).catch(next)
  })

  // .get((req, res, next) => {
  //   let db = req.app.get('db')
  //   let { id } = req.params
  //   let { answer } = req.body
  //   surveysService.getResults(db, id, answer)
  //     .then(x => { res.json(x) }).catch(next)
  // })

  module.exports = surveysRouter