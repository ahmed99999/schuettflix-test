import { Request, Response, NextFunction } from "express";
import Trucks from "../models/trucks";
import {
  CreateTrucksValidator,
  CreateTrucksType,
  GetTrucksValidator,
  GetTrucksType,
} from "../validator";
import { ZodError } from "zod";
import { getZodErrorMessage } from "../utils";

const getTrucks = async (
  request: Request<any, any, any, GetTrucksType>,
  response: Response,
  next: NextFunction
) => {
  try {
    const params = GetTrucksValidator.parse(request.query);
    const trucks = await Trucks.getTrucks(params);

    response.json(trucks);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      response.status(400);
      response.send(getZodErrorMessage(error));
    }

    next(error);
  }
};

interface GetTruckByIdParams {
  truckId: string;
}

const getTruckById = async (
  request: Request<GetTruckByIdParams>,
  response: Response,
  next: NextFunction
) => {
  try {
    const truckId = parseInt(request.params.truckId, 10);

    if (!truckId) {
      response.status(400);
      return response.send("truck id must be a number");
    }

    const truck = await Trucks.getTruckById(truckId);

    if (!truck) {
      response.status(404);
      return response.send("truck was not found");
    }

    response.json(truck);
    next();
  } catch (error) {
    next(error);
  }
};

const createTruck = async (
  request: Request<any, any, CreateTrucksType>,
  response: Response,
  next: NextFunction
) => {
  try {
    const newTruck = CreateTrucksValidator.parse(request.body);
    const truck = await Trucks.createTruck(newTruck);

    response.json(truck);
    next();
  } catch (error: any) {
    if (error instanceof ZodError) {
      response.status(400);
      response.send(getZodErrorMessage(error));
    }

    next(error);
  }
};

export { getTrucks, getTruckById, createTruck };
