import express, { json, urlencoded } from "express";
import router from "./routes/routes";
import enableCors from "./middlewares/cors";
const app = express();

//middlewares
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(`${__dirname}./../public`));
enableCors(app);

//rutas
app.use("/api", router);

export default app;
