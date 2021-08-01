const surveysService = {

  getQuestions(knex) {
    return knex('surveys')
      .orderBy('id', 'desc')
      .limit(3)
      .then(rows => {
        return rows
      })
  },

  getByTitle(knex, title) {
    return knex('surveys')
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
    return knex('surveys')
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

module.exports = surveysService