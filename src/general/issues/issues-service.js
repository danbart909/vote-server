const issuesService = {

  getQuestions(knex) {
    return knex('issues')
      .orderBy('date', 'desc')
      .limit(2)
      .then(rows => {
        return rows
      })
  },

  getByTitle(knex, title) {
    return knex('issues')
      .where('title', title)
      .then(rows => {
        return rows
      })
  },

  plusOne(knex, id, answer) {
    let option = ''
    answer === 1 ? option = 'option1' :
    answer === 2 ? option = 'option2' :
    answer === 3 ? option = 'option3' :
    answer === 4 ? option = 'option4' :
    answer === 5 ? option = 'option5' : null
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