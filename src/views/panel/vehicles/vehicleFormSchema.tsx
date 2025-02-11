import { z } from "zod";

export const vehicleFormSchema = z.object({
  title: z.string(),
});

export type VehicleFormSchema = z.infer<typeof vehicleFormSchema>;
