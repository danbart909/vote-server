const express = require('express')
const issuesRouter = express.Router()
const issuesService = require('./issues-service')
const bodyParser = express.json()

issuesRouter
  .route('/latest')

  .get((req, res, next) => {
    let db = req.app.get('db')
    issuesService.getQuestions(db)
      .then(x => { res.json(x) }).catch(next)
  })

  issuesRouter
  .route('/:id')

  .post(bodyParser, (req, res, next) => {
    let db = req.app.get('db')
    let { id } = req.params
    let { answer } = req.body
    issuesService.plusOne(db, id, answer)
      .then(x => { res.json(x) }).catch(next)
  })

  // .get((req, res, next) => {
  //   let db = req.app.get('db')
  //   let { id } = req.params
  //   let { answer } = req.body
  //   issuesService.getResults(db, id, answer)
  //     .then(x => { res.json(x) }).catch(next)
  // })

  module.exports = issuesRouter