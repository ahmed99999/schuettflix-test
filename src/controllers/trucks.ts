import { Request, Response, NextFunction } from "express";
import { getTrucks } from "../models/trucks";

export const getTrucksController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const trucks = await getTrucks();

  response.json(trucks);
  next();
};
