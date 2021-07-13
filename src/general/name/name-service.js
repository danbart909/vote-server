const nameService = {

  name(knex, name) {
    let z = { name: name, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
      .where('name', name)
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

  nameDate(knex, name, date) {
    let z = { name: name, date: date, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
      .where({ name: name, date: date })
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

  nameFromTo(knex, name, from, to) {
    let z = { name: name, from: from, to: to, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
      .where('name', name)
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
  
module.exports = nameService