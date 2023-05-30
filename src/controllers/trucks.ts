import { Request, Response, NextFunction } from "express";
import Trucks from "../models/trucks";
import { TrucksValidator, TrucksType } from "../validator";

const getTrucks = async (
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  const trucks = await Trucks.getTrucks();

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
  request: Request<any, any, TrucksType>,
  response: Response,
  next: NextFunction
) => {
  const newTruck = TrucksValidator.parse(request.body);
  const truck = await Trucks.createTruck(newTruck);

  response.json(truck);
  next();
};

export { getTrucks, getTruckById, createTruck };
