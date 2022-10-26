import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleControllers';
import Motorcycle from '../models/Motorcycle';
import MotorcycleService from '../services/MotorcycleServices';

const motorcycleRoute = Router();

const mModel = new Motorcycle();

const mService = new MotorcycleService(mModel);

const mController = new MotorcycleController(mService);

motorcycleRoute.post('/', mController.create);

motorcycleRoute.get('/', mController.read);

motorcycleRoute.get('/:id', mController.readOne);

motorcycleRoute.put('/:id', mController.update);

motorcycleRoute.delete('/:id', mController.delete);

export default motorcycleRoute;