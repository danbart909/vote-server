const officeService = {

  office(knex, office) {
    let z = { office: office, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
    return knex('data')
      .where('office', office)
      .then(x => {
        x.map(y => {
          y.rating === 1 ? (z.one += 1, z.total += 1) :
          y.rating === 2 ? (z.two += 1, z.total += 1) :
          y.rating === 3 ? (z.three += 1, z.total += 1) :
          y.rating === 4 ? (z.four += 1, z.total += 1) :
          y.rating === 5 ? (z.five += 1, z.total += 1) :
          y.rating === 6 ? (z.six += 1, z.total += 1) :
          y.rating === 7 ? (z.seven += 1, z.total += 1) :
          y.rating === 8 ? (z.eight += 1, z.total += 1) :
          y.rating === 9 ? (z.nine += 1, z.total += 1) :
          y.rating === 10 ? (z.ten += 1, z.total += 1) :
          console.log('something other than 1-10 found in rating column')
        })
        console.log(z)
        return z
      })
  },

  officeDate(knex, office, date) {
    let z = { office: office, date: date, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
    return knex('data')
      .where({ office: office, date: date })
      .then(x => {
        x.map(y => {
          y.rating === 1 ? (z.one += 1, z.total += 1) :
          y.rating === 2 ? (z.two += 1, z.total += 1) :
          y.rating === 3 ? (z.three += 1, z.total += 1) :
          y.rating === 4 ? (z.four += 1, z.total += 1) :
          y.rating === 5 ? (z.five += 1, z.total += 1) :
          y.rating === 6 ? (z.six += 1, z.total += 1) :
          y.rating === 7 ? (z.seven += 1, z.total += 1) :
          y.rating === 8 ? (z.eight += 1, z.total += 1) :
          y.rating === 9 ? (z.nine += 1, z.total += 1) :
          y.rating === 10 ? (z.ten += 1, z.total += 1) :
          console.log('something other than 1-10 found in rating column')
        })
        console.log(z)
        return z
      })
  },

  officeState(knex, office, state) {
    let z = { office: office, state: state, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
    return knex('data')
      .where({ office: office, state: state })
      .then(x => {
        x.map(y => {
          y.rating === 1 ? (z.one += 1, z.total += 1) :
          y.rating === 2 ? (z.two += 1, z.total += 1) :
          y.rating === 3 ? (z.three += 1, z.total += 1) :
          y.rating === 4 ? (z.four += 1, z.total += 1) :
          y.rating === 5 ? (z.five += 1, z.total += 1) :
          y.rating === 6 ? (z.six += 1, z.total += 1) :
          y.rating === 7 ? (z.seven += 1, z.total += 1) :
          y.rating === 8 ? (z.eight += 1, z.total += 1) :
          y.rating === 9 ? (z.nine += 1, z.total += 1) :
          y.rating === 10 ? (z.ten += 1, z.total += 1) :
          console.log('something other than 1-10 found in rating column')
        })
        console.log(z)
        return z
      })
  },

  officeFromTo(knex, office, from, to) {
    let z = { office: office, from: from, to: to, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
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
          y.rating === 6 ? (z.six += 1, z.total += 1) :
          y.rating === 7 ? (z.seven += 1, z.total += 1) :
          y.rating === 8 ? (z.eight += 1, z.total += 1) :
          y.rating === 9 ? (z.nine += 1, z.total += 1) :
          y.rating === 10 ? (z.ten += 1, z.total += 1) :
          console.log('something other than 1-10 found in rating column')
        })
        console.log(z)
        return z
      })
  },

  officeStateDate(knex, office, StateOrDate, DateOrTo) {
    let z = { office: office, state: StateOrDate, date: DateOrTo, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
    return knex('data')
      .where({ office: office, state: StateOrDate, date: DateOrTo })
      .then(x => {
        x.map(y => {
          y.rating === 1 ? (z.one += 1, z.total += 1) :
          y.rating === 2 ? (z.two += 1, z.total += 1) :
          y.rating === 3 ? (z.three += 1, z.total += 1) :
          y.rating === 4 ? (z.four += 1, z.total += 1) :
          y.rating === 5 ? (z.five += 1, z.total += 1) :
          y.rating === 6 ? (z.six += 1, z.total += 1) :
          y.rating === 7 ? (z.seven += 1, z.total += 1) :
          y.rating === 8 ? (z.eight += 1, z.total += 1) :
          y.rating === 9 ? (z.nine += 1, z.total += 1) :
          y.rating === 10 ? (z.ten += 1, z.total += 1) :
          console.log('something other than 1-10 found in rating column')
        })
        console.log(z)
        return z
      })
  },

  officeStateFromTo(knex, office, state, from, to) {
    let z = { office: office, state: state, from: from, to: to, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
    return knex('data')
    .where({ office: office, state: state })
    .whereBetween('date', [z.from, z.to])
      .then(x => {
        x.map(y => {
          y.rating === 1 ? (z.one += 1, z.total += 1) :
          y.rating === 2 ? (z.two += 1, z.total += 1) :
          y.rating === 3 ? (z.three += 1, z.total += 1) :
          y.rating === 4 ? (z.four += 1, z.total += 1) :
          y.rating === 5 ? (z.five += 1, z.total += 1) :
          y.rating === 6 ? (z.six += 1, z.total += 1) :
          y.rating === 7 ? (z.seven += 1, z.total += 1) :
          y.rating === 8 ? (z.eight += 1, z.total += 1) :
          y.rating === 9 ? (z.nine += 1, z.total += 1) :
          y.rating === 10 ? (z.ten += 1, z.total += 1) :
          console.log('something other than 1-10 found in rating column')
        })
        console.log(z)
        return z
      })
  },

}
  
module.exports = officeService