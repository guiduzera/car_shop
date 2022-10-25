import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/Car';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarControllers';
import { Request, Response } from 'express';
import { createRequest, createResult, readResult } from '../mocks/carMocks';
const { expect } = chai;

describe('Sua descrição', () => {
    const car = new Car();
    const carService = new CarService(car);
    const carController = new CarController(carService);

    const req = {} as Request;
    const res = {} as Response;

    before(() => {
        sinon.stub(carService, 'create').resolves(createRequest);
        sinon.stub(carService, 'read').resolves(readResult);
        sinon.stub(carService, 'readOne').resolves(createResult);
    
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

    describe('quando o método read é chamado', () => {
        it('corretamente lido!', async () => {
            await carController.read(req, res);
            expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
            expect((res.json as sinon.SinonStub).calledWith(readResult)).to.be.true
        });
    });

    describe('quando o método readOne é chamado', () => {
        it('corretamente lido!', async () => {
            req.params = { id: '6356cba5b3136ac5c994172e' };
            await carController.readOne(req, res);
            expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
            expect((res.json as sinon.SinonStub).calledWith(createResult)).to.be.true
        });
    });
});