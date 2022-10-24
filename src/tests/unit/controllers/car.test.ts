import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/Car';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarControllers';
import { Request, Response } from 'express';
import { createRequest } from '../mocks/carMocks';
const { expect } = chai;

describe('Sua descrição', () => {
    const car = new Car();
    const carService = new CarService(car);
    const carController = new CarController(carService);

    const req = {} as Request;
    const res = {} as Response;

    before(() => {
        sinon.stub(carService, 'create').resolves(createRequest);
    
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });
    
    after(() => {
        sinon.restore()
    });

    describe('quando o método create é chamado', () => {
        it('corretamente criado!', async () => {
            req.body = createRequest;
            await carController.create(req, res);
            expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
            expect((res.json as sinon.SinonStub).calledWith(createRequest)).to.be.true
        });
    });
});