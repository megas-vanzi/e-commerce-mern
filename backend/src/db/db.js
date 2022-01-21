import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_URL = process.env.DB_URL;

export const connect = async () => {
  await mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((mongoose) =>
      console.log(`conectado a la BD, puerto:`, mongoose.connections[0].port)
    )
    .catch(console.log);
};
