const express = require('express')
const logger = require('logger')
const generalService = require('./general-service')
const nameService = require('./name/name-service')
const officeService = require('./office/office-service')
const stateService = require('./state/state-service')
const generalRouter = express.Router()
const bodyParser = express.json()

generalRouter
  .route('/post')

    .post(bodyParser, (req, res, next) => {
      let { name, office, state, rating, congressional_district, state_senate_district, lower_house_district, city, county } = req.body
      let db = req.app.get('db')

      console.log('/post', req.body, req)

      let newRating = { name, office, state, rating, congressional_district, state_senate_district, lower_house_district, city, county }

      generalService.insertRating(db, newRating)
      .catch(next)
        res
          .status(201)
          .json(newRating)
    })


//////////////////// President


generalRouter
  .route('/President')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'President'
    officeService.office(db, office)
      .then(x => { res.json(x) }).catch(next)
  })

generalRouter
  .route('/President/:StateOrDate')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'President'
    let StateOrDate = req.params.StateOrDate
     if (StateOrDate.length === 2) {
      officeService.officeState(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeDate(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/President/:StateOrDate/:DateOrTo')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'President'
    let { StateOrDate, DateOrTo } = req.params
    if (StateOrDate.length === 2) {
      officeService.officeStateDate(db, office, StateOrDate, DateOrTo)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeFromTo(db, office, StateOrDate, DateOrTo)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/President/:state/:from/:to')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'President'
    let { state, from, to } = req.params
    officeService.officeStateFromTo(db, office, state, from, to)
      .then(x => { res.json(x) }).catch(next)
  })


//////////////////// USSenator


generalRouter
  .route('/USSenator')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'USSenator'
    officeService.office(db, office)
      .then(x => { res.json(x) }).catch(next)
  })

generalRouter
  .route('/USSenator/:StateOrDate')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'USSenator'
    let StateOrDate = req.params.StateOrDate
     if (StateOrDate.length === 2) {
      officeService.officeState(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeDate(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/USSenator/:StateOrDate/:DateOrTo')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'USSenator'
    let { StateOrDate, DateOrTo } = req.params
    if (StateOrDate.length === 2) {
      officeService.officeStateDate(db, office, StateOrDate, DateOrTo)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeFromTo(db, office, StateOrDate, DateOrTo)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/USSenator/:State/:from/:to')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'USSenator'
    let { State, from, to } = req.params
    officeService.officeStateFromTo(db, office, State, from, to)
      .then(x => { res.json(x) }).catch(next)
  })


//////////////////// USRepresentative


generalRouter
  .route('/USRepresentative')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'USRepresentative'
    officeService.office(db, office)
      .then(x => { res.json(x) }).catch(next)
  })

generalRouter
  .route('/USRepresentative/:StateOrDate')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'USRepresentative'
    let StateOrDate = req.params.StateOrDate
     if (StateOrDate.length === 2) {
      officeService.officeState(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeDate(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/USRepresentative/:StateOrDate/:DateOrTo')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'USRepresentative'
    let { StateOrDate, DateOrTo } = req.params
    let from = StateOrDate, to = DateOrTo
    if (StateOrDate.length === 2) {
      officeService.officeStateDate(db, office, StateOrDate, DateOrTo)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeFromTo(db, office, from, to)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/USRepresentative/:State/:from/:to')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let office = 'USRepresentative'
    let { State, from, to } = req.params
    officeService.officeStateFromTo(db, office, State, from, to)
      .then(x => { res.json(x) }).catch(next)
  })


//////////////////// Governor


generalRouter
  .route('/Governor')

  .get((req, res, next) => {
    console.log('/Governor')
    let db = req.app.get('db')
    let office = 'Governor'
    officeService.office(db, office)
      .then(x => { res.json(x) }).catch(next)
  })

generalRouter
  .route('/Governor/:StateOrDate')

  .get((req, res, next) => {
    console.log('/Governor/:StateOrDate')
    let db = req.app.get('db')
    let office = 'Governor'
    let StateOrDate = req.params.StateOrDate
     if (StateOrDate.length === 2) {
      officeService.officeState(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeDate(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/Governor/:StateOrDate/:DateOrTo')

  .get((req, res, next) => {
    console.log('/Governor/:StateOrDate/:DateOrTo')
    let db = req.app.get('db')
    let office = 'Governor'
    let { StateOrDate, DateOrTo } = req.params
    if (StateOrDate.length === 2) {
      officeService.officeStateDate(db, office, StateOrDate, DateOrTo)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeFromTo(db, office, StateOrDate, DateOrTo)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/Governor/:State/:from/:to')

  .get((req, res, next) => {
    console.log('/Governor/:State/:from/:to')
    let db = req.app.get('db')
    let office = 'Governor'
    let { State, from, to } = req.params
    officeService.officeStateFromTo(db, office, State, from, to)
      .then(x => { res.json(x) }).catch(next)
  })


//////////////////// StateSenator


generalRouter
  .route('/StateSenator')

  .get((req, res, next) => {
    console.log('/StateSenator')
    let db = req.app.get('db')
    let office = 'StateSenator'
    officeService.office(db, office)
      .then(x => { res.json(x) }).catch(next)
  })

generalRouter
  .route('/StateSenator/:StateOrDate')

  .get((req, res, next) => {
    console.log('/StateSenator/:StateOrDate')
    let db = req.app.get('db')
    let office = 'StateSenator'
    let StateOrDate = req.params.StateOrDate
     if (StateOrDate.length === 2) {
      officeService.officeState(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeDate(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/StateSenator/:StateOrDate/:DateOrTo')

  .get((req, res, next) => {
    console.log('/StateSenator/:StateOrDate/:DateOrTo')
    let db = req.app.get('db')
    let office = 'StateSenator'
    let { StateOrDate, DateOrTo } = req.params
    if (StateOrDate.length === 2) {
      officeService.officeStateDate(db, office, StateOrDate, DateOrTo)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeFromTo(db, office, StateOrDate, DateOrTo)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/StateSenator/:State/:from/:to')

  .get((req, res, next) => {
    console.log('/StateSenator/:State/:from/:to')
    let db = req.app.get('db')
    let office = 'StateSenator'
    let { State, from, to } = req.params
    officeService.officeStateFromTo(db, office, State, from, to)
      .then(x => { res.json(x) }).catch(next)
  })


//////////////////// StateRepresentative


generalRouter
  .route('/StateRepresentative')

  .get((req, res, next) => {
    console.log('/StateRepresentative/:State/:from/:to')
    let db = req.app.get('db')
    let office = 'StateRepresentative'
    officeService.office(db, office)
      .then(x => { res.json(x) }).catch(next)
  })

generalRouter
  .route('/StateRepresentative/:StateOrDate')

  .get((req, res, next) => {
    console.log('/StateRepresentative/:State/:from/:to')
    let db = req.app.get('db')
    let office = 'StateRepresentative'
    let StateOrDate = req.params.StateOrDate
     if (StateOrDate.length === 2) {
      officeService.officeState(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeDate(db, office, StateOrDate)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/StateRepresentative/:StateOrDate/:DateOrTo')

  .get((req, res, next) => {
    console.log('/StateRepresentative/:State/:from/:to')
    let db = req.app.get('db')
    let office = 'StateRepresentative'
    let { StateOrDate, DateOrTo } = req.params
    if (StateOrDate.length === 2) {
      officeService.officeStateDate(db, office. StateOrDate, DateOrTo)
        .then(x => { res.json(x) }).catch(next)
    } else {
      officeService.officeFromTo(db, office, StateOrDate, DateOrTo)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/StateRepresentative/:State/:from/:to')

  .get((req, res, next) => {
    console.log('/StateRepresentative/:State/:from/:to')
    let db = req.app.get('db')
    let office = 'StateRepresentative'
    let { State, from, to } = req.params
    officeService.officeStateFromTo(db, office, State, from, to)
      .then(x => { res.json(x) }).catch(next)
  })


//////////////////// NoS


generalRouter
  .route('/:NoS')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let { NoS } = req.params
    if (NoS.length === 2) {
      stateService.state(db, NoS)
        .then(x => { res.json(x) }).catch(next)
    // } else if (NoS === 'President' || NoS === 'USSenator' || NoS === 'USRepresentative' || NoS === 'Governor' || NoS === 'StateSenator' || NoS === 'StateRepresentative') {
    //   officeService.office(db, NoS)
    //     .then(x => { res.json(x) }).catch(next)
    } else {
      nameService.name(db, NoS)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/:NoS/:date')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let { NoS, date } = req.params
    if (NoS.length === 2) {
      stateService.stateDate(db, NoS, date)
        .then(x => { res.json(x) }).catch(next)
    // } else if (NoS === 'President' || NoS === 'USSenator' || NoS === 'USRepresentative' || NoS === 'Governor' || NoS === 'StateSenator' || NoS === 'StateRepresentative') {
    //   officeService.officeDate(db, NoS, date)
    //     .then(x => { res.json(x) }).catch(next)
    } else {
      nameService.nameDate(db, NoS, date)
        .then(x => { res.json(x) }).catch(next)
    }
  })

generalRouter
  .route('/:NoS/:from/:to')

  .get((req, res, next) => {
    let db = req.app.get('db')
    let { NoS, from, to } = req.params
    if (NoS.length === 2) {
      stateService.stateFromTo(db, NoS, from, to)
        .then(x => { res.json(x) }).catch(next)
    // } else if (NoS === 'President' || NoS === 'USSenator' || NoS === 'USRepresentative' || NoS === 'Governor' || NoS === 'StateSenator' || NoS === 'StateRepresentative') {
    //   officeService.officeFromTo(db, NoS, from, to)
    //     .then(x => { res.json(x) }).catch(next)
    } else {
      nameService.nameFromTo(db, NoS, from, to)
        .then(x => { res.json(x) }).catch(next)
    }
  })

module.exports = generalRouter