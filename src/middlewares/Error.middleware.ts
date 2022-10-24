import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import CustomError from '../helpers/CustomError';

const errorHandler: ErrorRequestHandler = ( 
  err: CustomError | ZodError, 
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) { 
    return res.status(400).json({ message: err.issues });
  }
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  return res.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;