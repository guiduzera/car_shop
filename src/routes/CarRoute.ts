import { Router } from 'express';
import CarController from '../controllers/CarControllers';
import Car from '../models/Car';
import CarService from '../services/CarService';

const carRoute = Router();

const car = new Car();

const carServices = new CarService(car);

const carControllers = new CarController(carServices);

carRoute.post('/', carControllers.create);

carRoute.get('/', carControllers.read);

carRoute.get('/:id', carControllers.readOne);

carRoute.put('/:id', carControllers.update);

carRoute.delete('/:id', carControllers.delete);

export default carRoute;