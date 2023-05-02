import { Router } from "express";
import forecastRouter from "./trucks";

const router = Router({ mergeParams: true });

router.use("/trucks", forecastRouter);

export default router;
