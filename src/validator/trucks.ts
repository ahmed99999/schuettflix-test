import { z } from "zod";

const TrucksValidator = z.object({
  latitude: z.number({
    required_error: "latitude field is required",
    invalid_type_error: "latitude must be a number",
  }),
  longitude: z.number({
    required_error: "longitude field is required",
    invalid_type_error: "longitude must be a number",
  }),
  model: z.string({
    required_error: "model field is required",
    invalid_type_error: "model must be a number",
  }),

  make: z.string({
    required_error: "make field is required",
    invalid_type_error: "make must be a number",
  }),
  year: z
    .number({
      required_error: "year field is required",
      invalid_type_error: "year must be a number",
    })
    .lte(new Date().getFullYear()),
  capacity: z.number({
    required_error: "capacity field is required",
    invalid_type_error: "capacity must be a number",
  }),
  status: z.enum(["Available", "In Use"]),
});

export { TrucksValidator };
export type TrucksType = z.infer<typeof TrucksValidator>;
