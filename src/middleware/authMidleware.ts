import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token;
  let check = process.env.CODE;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else {
    token = req.headers.authorization;
  }
  if (!token) {
    return next(new AppError('You are not authorized', 401));
  }

  // 4) Set Refresh Token
  if (token === 'codecodean') {
    next();
  } else {
    return next(new AppError('You are not authorized', 401));
  }
};
