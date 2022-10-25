import { ICar } from "../../../interfaces/ICar";

interface ICarMock extends ICar {
	_id: string;
}

const createResult:ICarMock = {
	_id: "6356cba5b3136ac5c994172e",
	model: "Ferrari Maranello",
	year: 1963,
	color: "red",
	buyValue: 3500000,
	doorsQty: 2,
	seatsQty: 2,
}

const createRequest:ICar = {
	model: "Ferrari Maranello",
	year: 1963,
	color: "red",
	buyValue: 3500000,
	seatsQty: 2,
	doorsQty: 2
}

const readResult:ICarMock[] = [
	{
		_id: "635829ff7c71d24ef627abd6",
		model: "Ferrari Maranello",
		year: 1963,
		color: "red",
		buyValue: 3500000,
		doorsQty: 2,
		seatsQty: 2
	}
]

const carMockUpdate:ICar = {
	model: "Fiat Uno",
	year: 1963,
	color: "blue",
	buyValue: 3500,
	seatsQty: 4,
	doorsQty: 4
  };
  
  const carMockUpdateWithId:ICarMock = {
	_id: "4edd40c86762e0fb12000003",
	model: "Fiat Uno",
	year: 1963,
	color: "blue",
	buyValue: 3500,
	seatsQty: 4,
	doorsQty: 4
  };

export { createResult, createRequest, readResult, carMockUpdate, carMockUpdateWithId };