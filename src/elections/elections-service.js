const electionsService = {

  insertRating(knex, newVote) {
    return knex('elections')
      .insert(newVote)
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  getCurrent(knex) {
    return knex('electionpool')
      .select('*')
      .then(x => {
        return x
      })
  },

  getAll(knex) {
    return knex('elections')
      .select('*')
      .then(x => {
        return x
      })
  },

  getDistrictSingleDay(knex, state, office, district, date) {
    return knex('elections')
      .where({
        state: state,
        office: office,
        district: district,
        date: date
      })
      .distinct('name')
      .count('name')
      .groupBy('name')
      .then(x => {
        return x
      })
  },

  getDistrictDates(knex, state, office, district, date1, date2) {
    return knex('elections')
      .where({
        state: state,
        office: office,
        district: district
      })
      .whereBetween('date', [date1, date2])
      .distinct('name')
      .count('name')
      .groupBy('name')
      .then(x => {
        return x
      })
  },

  // Name

  getAllByName(knex) {
    return knex('elections')
      .distinct('name')
      .count('name')
      .groupBy('name')
      .then(x => {
        return x
      })
  },

  // getCountsByName(knex, name) {
  //   return knex('elections')
  //     .where({name: name})
  //     .count('name', name)
  //     .then(x => {
  //       return x
  //     })
  // },

  // Party

  // getAllByParty(knex) {
  //   return knex('elections')
  //     .distinct('party')
  //     .count('party')
  //     .groupBy('party')
  //     .then(x => {
  //       return x
  //     })
  // },

  // getCountsByParty(knex, party) {
  //   return knex('elections')
  //     .where({party: party})
  //     .count('party', party)
  //     .then(x => {
  //       return x
  //     })
  // },

  // State

  // getAllByState(knex) {
  //   return knex('elections')
  //     .distinct('state')
  //     .count('state')
  //     .groupBy('state')
  //     .then(x => {
  //       return x
  //     })
  // },

  // getCountsByState(knex, state) {
  //   return knex('elections')
  //     .where({state: state})
  //     .count('state', state)
  //     .then(x => {
  //       return x
  //     })
  // },

  // Office

  // getAllByOffice(knex) {
  //   return knex('elections')
  //     .distinct('office')
  //     .count('office')
  //     .groupBy('office')
  //     .then(x => {
  //       return x
  //     })
  // },

  // getCountsByOffice(knex, office) {
  //   return knex('elections')
  //     .where({office: office})
  //     .count('office', office)
  //     .then(x => {
  //       return x
  //     })
  // },

  // District

  // getAllByDistrict(knex) {
  //   return knex('elections')
  //    .distinct('district')
  //    .count('district')
  //    .groupBy('district')
  //    .then(x => {
  //      return x
  //    })
  // },

  // getCountsByDistrict(knex, district) {
  //   return knex('elections')
  //    .where({district: district})
  //    .count('district', district)
  //    .then(x => {
  //      return x
  //    })
  // },

}

module.exports = electionsService