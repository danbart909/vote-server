const nameService = {

  name(knex, name) {
    let nameWithSpace = name.replace(/([A-Z])/g, ' $1').trim()
    let z = { name: nameWithSpace, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
      .where('name', nameWithSpace)
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
    let nameWithSpace = name.replace(/([A-Z])/g, ' $1').trim()
    let z = { name: nameWithSpace, date: date, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
      .where({ name: nameWithSpace, date: date })
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
    let nameWithSpace = name.replace(/([A-Z])/g, ' $1').trim()
    let z = { name: nameWithSpace, from: from, to: to, total: 0, one: 0, two: 0, three: 0, four: 0, five: 0 }
    return knex('data')
      .where('name', nameWithSpace)
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