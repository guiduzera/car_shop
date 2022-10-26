import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleControllers';
import Motorcycle from '../models/Motorcycle';
import MotorcycleService from '../services/MotorcycleServices';

const motorcycleRoute = Router();

const mModel = new Motorcycle();

const mService = new MotorcycleService(mModel);

const mController = new MotorcycleController(mService);

motorcycleRoute.post('/', mController.create);

export default motorcycleRoute;