import express from "express";
import { env } from "./configs/env";
import dotenv from "dotenv";
import { MongoConnection } from "./database/connection";

dotenv.config();
MongoConnection.initialize();

const app = express();
app.use(express.json());

app.listen(env.PORT, () => console.log(`Server is running on port ${env.PORT}`));
