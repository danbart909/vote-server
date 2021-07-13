const officeService = {

  office(knex, office) {
    office = office.replace(/([A-Z])/g, ' $1').trim()
    let z = { office: office, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
      .where('office', office)
      .then(x => {
        x.map(y => {
          y.rating === 1 ? (z.one += 1, z.total += 1) :
          y.rating === 2 ? (z.two += 1, z.total += 1) :
          y.rating === 3 ? (z.three += 1, z.total += 1) :
          y.rating === 4 ? (z.four += 1, z.total += 1) :
          y.rating === 5 ? (z.five += 1, z.total += 1) :
          console.log('something other than 1-5 found in rating column')
        })
        console.log(z)
        return z
      })
  },

  officeDate(knex, office, date) {
    office = office.replace(/([A-Z])/g, ' $1').trim()
    let z = { office: office, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
      .where({ office: office, date: date })
      .then(x => {
        x.map(y => {
          y.rating === 1 ? (z.one += 1, z.total += 1) :
          y.rating === 2 ? (z.two += 1, z.total += 1) :
          y.rating === 3 ? (z.three += 1, z.total += 1) :
          y.rating === 4 ? (z.four += 1, z.total += 1) :
          y.rating === 5 ? (z.five += 1, z.total += 1) :
          console.log('something other than 1-5 found in rating column')
        })
        console.log(z)
        return z
      })
  },

  officeState(knex, office, state) {
    office = office.replace(/([A-Z])/g, ' $1').trim()
    let z = { office: office, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
      .where({ office: office, state: state })
      .then(x => {
        x.map(y => {
          y.rating === 1 ? (z.one += 1, z.total += 1) :
          y.rating === 2 ? (z.two += 1, z.total += 1) :
          y.rating === 3 ? (z.three += 1, z.total += 1) :
          y.rating === 4 ? (z.four += 1, z.total += 1) :
          y.rating === 5 ? (z.five += 1, z.total += 1) :
          console.log('something other than 1-5 found in rating column')
        })
        console.log(z)
        return z
      })
  },

  officeFromTo(knex, office, from, to) {
    office = office.replace(/([A-Z])/g, ' $1').trim()
    let z = { office: office, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
      .where('office', office)
      .whereBetween('date', [from, to])
      .then(x => {
        x.map(y => {
          y.rating === 1 ? (z.one += 1, z.total += 1) :
          y.rating === 2 ? (z.two += 1, z.total += 1) :
          y.rating === 3 ? (z.three += 1, z.total += 1) :
          y.rating === 4 ? (z.four += 1, z.total += 1) :
          y.rating === 5 ? (z.five += 1, z.total += 1) :
          console.log('something other than 1-5 found in rating column')
        })
        console.log(z)
        return z
      })
  },

  officeStateDate(knex, office, stateOrDate, dateOrTo) {
    office = office.replace(/([A-Z])/g, ' $1').trim()
    let z = { office: office, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
      .where({ office: office, state: stateOrDate, date: dateOrTo })
      .then(x => {
        x.map(y => {
          y.rating === 1 ? (z.one += 1, z.total += 1) :
          y.rating === 2 ? (z.two += 1, z.total += 1) :
          y.rating === 3 ? (z.three += 1, z.total += 1) :
          y.rating === 4 ? (z.four += 1, z.total += 1) :
          y.rating === 5 ? (z.five += 1, z.total += 1) :
          console.log('something other than 1-5 found in rating column')
        })
        console.log(z)
        return z
      })
  },

  officeStateFromTo(knex, office, state, from, to) {
    office = office.replace(/([A-Z])/g, ' $1').trim()
    let z = { office: office, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
    .where({ office: office, state: state })
    .whereBetween('date', [from, to])
      .then(x => {
        x.map(y => {
          y.rating === 1 ? (z.one += 1, z.total += 1) :
          y.rating === 2 ? (z.two += 1, z.total += 1) :
          y.rating === 3 ? (z.three += 1, z.total += 1) :
          y.rating === 4 ? (z.four += 1, z.total += 1) :
          y.rating === 5 ? (z.five += 1, z.total += 1) :
          console.log('something other than 1-5 found in rating column')
        })
        console.log(z)
        return z
      })
  },

}
  
module.exports = officeService