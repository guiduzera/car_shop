import { z } from 'zod';

const CarZodSchema = z.object({
  model: z.string(),
  year: z.number(),
  color: z.string(),
  status: z.boolean(),
  buyValue: z.number(),
  doorsQty: z.number().min(2).max(5),
  seatsQty: z.number().min(2).max(5),
}).partial({
  status: true,
});

export default CarZodSchema;