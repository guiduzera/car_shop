import { z } from 'zod';

const MotorcycleZodSchema = z.object({
  model: z.string(),
  year: z.number(),
  color: z.string(),
  status: z.boolean(),
  buyValue: z.number(),
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().min(1).max(2500),
}).partial({
  status: true,
});

export default MotorcycleZodSchema;