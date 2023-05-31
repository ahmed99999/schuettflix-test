import { z } from "zod";

const CreateTrucksValidator = z.object({
  latitude: z
    .number({
      required_error: "latitude field is required",
      invalid_type_error: "latitude must be a number",
    })
    .lte(90)
    .gte(-90),
  longitude: z
    .number({
      required_error: "longitude field is required",
      invalid_type_error: "longitude must be a number",
    })
    .lte(180)
    .gte(-180),
  model: z.string({
    required_error: "model field is required",
    invalid_type_error: "model must be a string",
  }),

  make: z.string({
    required_error: "make field is required",
    invalid_type_error: "make must be a string",
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

const GetTrucksValidator = z
  .object({
    lat: z.preprocess(
      (str) => parseFloat(str as any as string),
      z.number().lte(90).gte(-90)
    ),
    lon: z.preprocess(
      (str) => parseFloat(str as any as string),
      z.number().lte(180).gte(-180)
    ),
  })
  .partial();

export { CreateTrucksValidator, GetTrucksValidator };
export type CreateTrucksType = z.infer<typeof CreateTrucksValidator>;
export type GetTrucksType = z.infer<typeof GetTrucksValidator>;
