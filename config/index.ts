// Initial database config
module.exports = {
  development: {
    // if you using docker this will be your local host
    // HOST: 'docker.for.mac.host.internal',
    HOST: 'localhost',
    USER: 'ariobaskoro',
    PASSWORD: 'AB1234cd',
    DB: 'ariobaskoro',
    PORT: 5432,
    dialect: 'postgres',
    timezone: '+07:00',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    PORT: process.env.DB_PORT,
    dialect: 'postgres',
    timezone: '+07:00',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
