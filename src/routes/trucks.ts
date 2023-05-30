import { Router } from "express";
import { getTrucks, getTruckById } from "../controllers/trucks";

const truckRouter = Router({ mergeParams: true });

truckRouter.get("/:truckId", getTruckById);

truckRouter.get("/", getTrucks);

export default truckRouter;
