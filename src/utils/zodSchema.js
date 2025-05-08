import { z } from "zod";

export const searchSchema = z.object({
  location: z.string().min(1, { message: "Location is required" }),
});

export const bookingSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email("Invalid email address")
    .max(50, { message: "Invalid email address" }),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
});
