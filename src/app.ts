import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/Error.middleware';
import carRoute from './routes/CarRoute';
import motorcycleRoute from './routes/MotorcycleRoutes';

const app = express();
app.use(express.json());

app.use('/cars', carRoute);
app.use('/motorcycles', motorcycleRoute);
app.use(errorMiddleware);

export default app;
