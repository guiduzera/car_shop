import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/Car';
import { Model } from 'mongoose';
import { createRequest, createResult } from '../mocks/carMocks';
const { expect } = chai;

describe('testando a camada model de Car', () => {

    const car = new Car();

  before(async () => {
    sinon.stub(Model, 'create').resolves(createResult);
  });

  after(()=>{
    sinon.restore();
  })

  describe('quando o método create é chamado', () => {
    it('corretamente criado!', async () => {
      const result = await car.create(createRequest);
      expect(result).to.be.deep.equal(createResult);
    });
  });
});