import { Request, Response, NextFunction } from "express";
import Trucks from "../models/trucks";

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

export { getTrucks, getTruckById };
