import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import { AppError } from './utils/AppError';
import { globalErrorHandler } from './utils/globalError';
// import cors from "cors";

const app = express();

// CORS
// app.use(cors<Request>({ credentials: true, origin: true }));
app.set('trust proxy', true);

// Body parser, reading data from body into req.body
app.use(json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// // Routes
const firstRouter = require('./routes/firstRoutes');

// First Routes
app.use('/api', firstRouter);

// Handle Not Found
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Global Handler
app.use(globalErrorHandler);

export { app };
