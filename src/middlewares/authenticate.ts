import passport from "passport";
import createHttpError from "http-errors";
import { StatusCodes } from "http-status-codes";
import { Handler } from "../types/common";

import dotenv from 'dotenv'
dotenv.config();
const secret_key:any = process.env.ACCESS_TOKEN_SECRET

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


const authenticate: Handler = (req, res, next) =>
  passport.authenticate("jwt", { session: false }, (error: any, user: any) => {
    if (error) {
      return next(error);
    }

    if (!user) {
      return next(createHttpError(StatusCodes.UNAUTHORIZED));
    }

    req.login(user, (err) => {
      if (err) {
        return next(err);
      }

      return next();
    });
  })(req, res, next);

// export default authenticate;
const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token,secret_key);
    req.body.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default authenticateUser;
