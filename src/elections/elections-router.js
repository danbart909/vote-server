const express = require('express')
const logger = require('logger')
const electionsService = require('./elections-service')
const electionsRouter = express.Router()
const bodyParser = express.json()

electionsRouter
  .route('/vote')

    .post(bodyParser, (req, res, next) => {
      let { name, party, state, office, district } = req.body
      let newVote = { name, party, state, office, district }
      let db = req.app.get('db')

      electionsService.insertRating(db, newVote)
      .catch(next)
        res
          .status(201)
          .json(newVote)
    })

electionsRouter
  .route('/current')

    .get((req, res, next) => {
      let db = req.app.get('db')

      electionsService.getCurrent(db)
        .then(x => { res.json(x) }).catch(next)
    })

electionsRouter
  .route('/all')

    .get((req, res, next) => {
      let db = req.app.get('db')

      electionsService.getAll(db)
        .then(x => { res.json(x) }).catch(next)
    })

electionsRouter
  .route('/get/:state/:office/:district/:date')

    .get((req, res, next) => {
      let db = req.app.get('db')
      let { state, office, district, date } = req.params

      electionsService.getDistrictSingleDay(db, state, office, district, date)
        .then(x => { res.json(x) }).catch(next)
    })

electionsRouter
    .route('/get/:state/:office/:district/:date1/:date2')
  
      .get((req, res, next) => {
        let db = req.app.get('db')
        let { state, office, district, date1, date2 } = req.params
  
        electionsService.getDistrictDates(db, state, office, district, date1, date2)
          .then(x => { res.json(x) }).catch(next)
      })


// Name


electionsRouter
  .route('/name/all')

    .get((req, res, next) => {
      let db = req.app.get('db')

      electionsService.getAllByName(db)
        .then(x => { res.json(x) }).catch(next)
    })

// electionsRouter
//   .route('/name/:name')

//     .get((req, res, next) => {
//       let db = req.app.get('db')
//       let { name } = req.params

//       electionsService.getCountsByName(db, name)
//         .then(x => { res.json(x) }).catch(next)
//     })


// Party


// electionsRouter
//   .route('/party/all')

//     .get((req, res, next) => {
//       let db = req.app.get('db')

//       electionsService.getAllByParty(db)
//         .then(x => { res.json(x) }).catch(next)
//     })

// electionsRouter
//   .route('/party/:party')

//     .get((req, res, next) => {
//       let db = req.app.get('db')
//       let { party } = req.params

//       electionsService.getCountsByParty(db, party)
//         .then(x => { res.json(x) }).catch(next)
//     })


// State


// electionsRouter
//   .route('/state/all')

//     .get((req, res, next) => {
//       let db = req.app.get('db')

//       electionsService.getAllByState(db)
//         .then(x => { res.json(x) }).catch(next)
//     })
  
// electionsRouter
//   .route('/state/:state')

//     .get((req, res, next) => {
//       let db = req.app.get('db')
//       let { state } = req.params

//       electionsService.getCountsByState(db, state)
//         .then(x => { res.json(x) }).catch(next)
//     })


// Office


// electionsRouter
//   .route('/office/all')

//     .get((req, res, next) => {
//       let db = req.app.get('db')

//       electionsService.getAllByOffice(db)
//         .then(x => { res.json(x) }).catch(next)
//     })

// electionsRouter
//   .route('/office/:office')

//     .get((req, res, next) => {
//       let db = req.app.get('db')
//       let { office } = req.params

//       electionsService.getCountsByOffice(db, office)
//         .then(x => { res.json(x) }).catch(next)
//     })


// District


// electionsRouter
//   .route('/state/district/all')

//     .get((req, res, next) => {
//       let db = req.app.get('db')
//       let { } = req.params


//     })

// electionsRouter
//   .route('/state/district/:district')

//     .get((req, res, next) => {
//       let db = req.app.get('db')
//       let { } = req.params


//     })

module.exports = electionsRouter