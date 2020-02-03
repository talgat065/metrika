
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:     '127.0.0.1',
      database: 'metrika',
      user:     'root',
      password: ''
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host:     process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
