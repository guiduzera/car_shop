import express from 'express';
import errorMiddleware from './middlewares/Error.middleware';
import carRoute from './routes/CarRoute';

const app = express();
app.use(express.json());

app.use('/cars', carRoute);
app.use(errorMiddleware);

export default app;
