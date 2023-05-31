import { ZodError } from "zod";

const getZodErrorMessage = (error: ZodError) => {
  return error.issues.map((issue) => issue.message).join(", ");
};

export { getZodErrorMessage };
