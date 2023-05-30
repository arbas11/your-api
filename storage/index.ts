import { Sequelize } from 'sequelize';
import AuthIt from './models/firstModel';
const env = process.env.NODE_ENV || 'development';
const dbConfig = require(__dirname + '/../config')[env];

// import module
let sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: 5432,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const modelDefiners = [AuthIt.modelDefiner];
for (const modelDefiner of modelDefiners) {
  modelDefiner();
}

export { sequelize };
