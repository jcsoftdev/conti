  
module.exports = {
  PORT: process.env.PORT || 4000,
  MONGODB_HOST: process.env.MONGODB_HOST || 'localhost',
  MONGODB_DATABASE: process.env.MONGODB_DB || 'contact',
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || '',
}