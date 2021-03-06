// module.exports = {
//   PORT: process.env.PORT || 8000,
//   NODE_ENV: process.env.NODE_ENV || 'development',
//   DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/votingbooth',
//   JWT_SECRET: process.env.JWT_SECRET || 'secret',
//   JWT_EXPIRY: process.env.JWT_EXPIRY || '7d'
// }

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY
}