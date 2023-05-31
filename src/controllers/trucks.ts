import { Request, Response, NextFunction } from "express";
import Trucks from "../models/trucks";
import {
  CreateTrucksValidator,
  CreateTrucksType,
  GetTrucksValidator,
  GetTrucksType,
} from "../validator";

const getTrucks = async (
  request: Request<any, any, any, GetTrucksType>,
  response: Response,
  next: NextFunction
) => {
  const params = GetTrucksValidator.parse(request.query);
  const trucks = await Trucks.getTrucks(params);

  response.json(trucks);
  next();
};

interface GetTruckByIdParams {
  truckId: string;
}

const getTruckById = async (
  request: Request<GetTruckByIdParams>,
  response: Response,
  next: NextFunction
) => {
  const truckId = parseInt(request.params.truckId, 10);
  const truck = await Trucks.getTruckById(truckId);

  response.json(truck);
  next();
};

const createTruck = async (
  request: Request<any, any, CreateTrucksType>,
  response: Response,
  next: NextFunction
) => {
  const newTruck = CreateTrucksValidator.parse(request.body);
  const truck = await Trucks.createTruck(newTruck);

  response.json(truck);
  next();
};

export { getTrucks, getTruckById, createTruck };
