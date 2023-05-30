// import module
process.env.NODE_ENV === 'development' && require('dotenv/config');

import { sequelize } from '../storage';
import { app } from './app';
// import { sequelize } from '../storage';

// server port setting
const PORT = Number(process.env.PORT_SERVER) || 3003;

// Error Exception
process.on('uncaughtException', (err: Error) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// database connection
async function assertDatabaseConnection() {
  await sequelize
    .authenticate()
    .then(async () => {
      console.log('Connection has been established successfully.');
      await sequelize.sync();
      console.log('successfully sync database');
    })
    .catch((err: Error) => {
      console.error('Unable to connect to the database:', err);
    });
}
assertDatabaseConnection();

// server running
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`App running on port ${PORT}...`);
});

// Handle rejection error
process.on('unhandledRejection', (err: Error) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
