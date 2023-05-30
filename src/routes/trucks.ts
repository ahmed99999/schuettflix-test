import { Router } from "express";
import { getTrucks, getTruckById, createTruck } from "../controllers/trucks";

const truckRouter = Router({ mergeParams: true });

truckRouter.post("/", createTruck);

truckRouter.get("/:truckId", getTruckById);

truckRouter.get("/", getTrucks);

export default truckRouter;
