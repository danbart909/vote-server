const generalService = {

  insertRating(knex, newRating) {
    return knex('data')
      .insert(newRating)
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

}

module.exports = generalService



// returnObj(x) {
//   let z = { one: 0, two: 0, three: 0, four: 0, five: 0 }
//   x.map(y => {
//     y.rating === 1 ? (z.one += 1, z.total += 1) :
//     y.rating === 2 ? (z.two += 1, z.total += 1) :
//     y.rating === 3 ? (z.three += 1, z.total += 1) :
//     y.rating === 4 ? (z.four += 1, z.total += 1) :
//     y.rating === 5 ? (z.five += 1, z.total += 1) :
//     console.log('something other than 1-5 found in rating column')
//   })
//   return z
// },