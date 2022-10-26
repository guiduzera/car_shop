import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/Car';
import CarService from '../../../services/CarService';
import { 
    createRequest,
    createResult,
    readResult, 
    carMockUpdateWithId,
    carMockUpdate
    } from '../mocks/carMocks';
const { expect } = chai;

describe('testando camada service de car', () => {
    const car = new Car();
    const carService = new CarService(car);

  before(async () => {
    sinon.stub(car, 'create').resolves(createResult);
    sinon.stub(car, 'read').resolves(readResult);
    sinon.stub(car, 'readOne').resolves(createResult);
    sinon.stub(car, 'update').resolves(carMockUpdateWithId);
    sinon.stub(car, 'delete').resolves(carMockUpdateWithId);
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

  describe('quando o método read é chamado', () => {
    it('corretamente lido!', async () => {
      const result = await carService.read();
      expect(result).to.be.deep.equal(readResult);
    });
  });

  describe('quando o método readOne é chamado', () => {
    it('corretamente lido!', async () => {
      const result = await carService.readOne('6356cba5b3136ac5c994172e');
      expect(result).to.be.deep.equal(createResult);
    });
  });

  describe('quando o método update é chamado', () => {
    it('corretamente atualizado!', async () => {
      const result = await carService.update('4edd40c86762e0fb12000003', carMockUpdate);
      expect(result).to.be.deep.equal(carMockUpdateWithId);
    });
  });

  describe('quando o método delete é chamado', () => {
    it('corretamente deletado!', async () => {
      const result = await carService.delete('4edd40c86762e0fb12000003');
      expect(result).to.be.deep.equal(carMockUpdateWithId);
    });
  });
});