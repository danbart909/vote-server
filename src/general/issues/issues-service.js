const issuesService = {

  getQuestions(knex) {
    return knex('issues')
      .orderBy('date')
      .limit(2)
      .then(rows => {
        return rows
      })
  },

  getResults(knex, id) {
    return knex('issues')
      .where('id', id)
      .then(rows => {
        return rows
      })
  },

  plusOne(knex, id, option) {
    return knex('issues')
      .where('id', id)
      .increment(option, 1)
      .then(rows => {
        return rows
      })
      // .insert(newRating)
      // .returning('*')
      // .then(rows => {
      //   return rows[0]
      // })
  },

}

module.exports = issuesService