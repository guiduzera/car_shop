import { IVehicle } from './IVehicle';

// enum MotorcycleCategory {
//   Street,
//   Custom,
//   Trail,
// }

// pq n passa com enum???

export interface IMotorcycle extends IVehicle{
  category: 'Street' | 'Custom' | 'Trail';
  engineCapacity: number;
}