import express, { Express } from "express";
import routes from "./src/routes";
import * as dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.set("Content-Type", "application/json");
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT} ...`)
);
