const stateService = {

  state(knex, state) {
    let z = { state: state, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
    return knex('data')
      .where('state', state)
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

  stateDate(knex, state, date) {
    let z = { state: state, date: date, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
    return knex('data')
      .where({ state: state, date: date })
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

  stateFromTo(knex, state, from, to) {
    let z = { state: state, from: from, to: to, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
    return knex('data')
      .where('state', state)
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

}
  
module.exports = stateService