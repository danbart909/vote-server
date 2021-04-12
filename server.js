const knex = require('knex')
const app = require('./app')
const { PORT, DATABASE_URL } = require('./config')

const DATABASE = knex({
  client: 'pg',
  connection: DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

app.set('db', DATABASE)

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`)
})