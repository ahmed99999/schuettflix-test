import { Router } from "express";
import trucksRouter from "./trucks";

const router = Router({ mergeParams: true });

router.use("/trucks", trucksRouter);

export default router;
