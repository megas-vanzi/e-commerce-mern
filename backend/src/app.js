import express, { json, urlencoded } from "express";
import router from "./routes/routes";
import enableCors from "./middlewares/cors";
import session from "express-session";
const app = express();

//middlewares
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(`${__dirname}./../public`));
enableCors(app);
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

//rutas
app.use("/api", router);

export default app;
