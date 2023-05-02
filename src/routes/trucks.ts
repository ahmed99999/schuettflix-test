import { Router } from "express";
import { getTrucksController } from "../controllers/trucks";

const truckRouter = Router({ mergeParams: true });
truckRouter.get("/", getTrucksController);

export default truckRouter;
