import { z } from "zod";

export const searchSchema = z.object({
  location: z.string().min(1, { message: "Location is required" }),
});
