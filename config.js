// module.exports = {
//   PORT: process.env.PORT || 8000,
//   NODE_ENV: process.env.NODE_ENV || 'development',
//   DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/votingbooth',
//   JWT_SECRET: process.env.JWT_SECRET || 'secret',
//   JWT_EXPIRY: process.env.JWT_EXPIRY || '7d'
// }

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://eejredfqabpwhr:f6ba0c7b478b7da22aaee1eba718da41a3641a2de9ccd27d13e72cdf2e1435c5@ec2-52-1-115-6.compute-1.amazonaws.com:5432/dcli93gmf0vhq7',
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY
}