module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost/chizetteart'
    },
    test: {},
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  }