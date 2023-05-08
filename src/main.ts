import * as dotenv from "dotenv";
import cors from "cors";
import express, { Express } from "express";
import mongoose from "mongoose";
import authRouter from "./router/auth.router.js";
import adminRouter from "./router/admin.router.js";

import { ProcessEnv } from "./interfaces/main.js";
import roleRouter from "./router/role.router.js";

dotenv.config();
const { DB_CONNECTION, PORT }: ProcessEnv = process.env;

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/role", roleRouter);

const start = async (): Promise<void> => {
  try {
    mongoose.set("strictQuery", false);
    DB_CONNECTION != null && await mongoose.connect(DB_CONNECTION);
    app.listen(PORT, () => console.log(`Server started. \nPORT: ${PORT}`));
  } catch (error) {
    console.log(`Server error: ${error}`);
    process.exit(1);
  }
};

start();