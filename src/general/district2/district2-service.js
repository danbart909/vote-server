const district2Service = {

  district2(knex, district) {
    let z = { district: '', total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
    return knex('data')
      .where('congressionaldistrict', district)
      .then(x => {
        z.district = district
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
        return z
      })
  },
  
  district2Date(knex, district, date) {
    let z = { district: '', date: '', total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
    return knex('data')
      .where({ congressionaldistrict: district, date: date })
      .then(x => {
        z.district = district
        z.date = date
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
        return z
      })
  },
  
  district2FromTo(knex, district, from, to) {
    let z = { district: '', from: '', to: '', total: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0 }
    return knex('data')
      .where('congressionaldistrict', district)
      .whereBetween('date', [from, to])
      .then(x => {
        z.district = district
        z.from = from
        z.to = to
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
        return z
      })
  },
  
  }
  
  module.exports = district2Service