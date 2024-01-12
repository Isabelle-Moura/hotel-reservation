import { connection, connect, disconnect } from "mongoose";
import { env } from "../configs/env";
import dotenv from "dotenv";
dotenv.config();

export class MongoConnection {
   static initialize() {
      try {
         connection.on("error", (error: any) => console.log(`Failed to connect to MongoDB. Error: ${error}`));
         connection.on("open", () => console.log("MongoDB is connected. Hello there! 🌸✅💖🚀"));
         connection.on("close", () => console.log("MongoDB is disconnected. Bye Bye! ❌🌠👉😊"));

         connect(env.DATABASE_URL);
      } catch (error: any) {
         console.log(`Failed to connect to MongoDB. Error: ${error}`);
      }
   }

   static finish() {
      connection.close();
   }
}
