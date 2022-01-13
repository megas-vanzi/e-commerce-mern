import routerx from "express-promise-router";
import usersRouter from "./usersRoutes";
import cartRouter from "./cartRoutes";
import ordersRouter from "./ordersRoutes";

const router = routerx();

router.use("/users", usersRouter);

router.use("/cart", cartRouter);

router.use("/orders", ordersRouter);

export default router;
