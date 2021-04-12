const knex = require('knex')
const app = require('./app')
const { PORT, DATABASE_URL } = require('./config')

DATABASE_URL.ssl = { rejectUnauthorized: false }

const DATABASE = knex({
  client: 'pg',
  connection: DATABASE_URL
})

app.set('db', DATABASE)

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`)
})