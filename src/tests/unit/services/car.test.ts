import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/Car';
import CarService from '../../../services/CarService';
import { createRequest, createResult } from '../mocks/carMocks';
const { expect } = chai;

describe('testando camada service de car', () => {
    const car = new Car();
    const carService = new CarService(car);

  before(async () => {
    sinon.stub(car, 'create').resolves(createResult);
  });

  after(()=>{
    sinon.restore();
  })

  describe('quando o método create é chamado', () => {
    it('corretamente criado!', async () => {
      const result = await carService.create(createRequest);
      expect(result).to.be.deep.equal(createResult);
    });
  });
});