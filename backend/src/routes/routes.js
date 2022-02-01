import routerx from "express-promise-router";
import authRouter from "./authRoutes";
import usersRouter from "./usersRoutes";
import cartRouter from "./cartRoutes";
import ordersRouter from "./ordersRoutes";
import categoriesRouter from "./categoriesRoutes";
import productsRouter from "./productsRoutes";
import reviewsRouter from "./reviewsRoutes";

const router = routerx();

router.use("/auth", authRouter);

router.use("/users", usersRouter);

router.use("/cart", cartRouter);

router.use("/orders", ordersRouter);

router.use("/categories", categoriesRouter);

router.use("/products", productsRouter);

router.use("/reviews", reviewsRouter);

export default router;
