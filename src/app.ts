import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index";

dotenv.config();

const app = express();

createConnection()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Database connection failed");
    console.error(error);
  });

app.use(cors());
app.use(express.json());

app.use("/api", router);

export default app;
