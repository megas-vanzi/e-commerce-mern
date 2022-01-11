import routerx from "express-promise-router";
import {
  getOrders,
  getUserOrders,
  getOrder,
  changeOrder,
} from "../controllers/ordersController";

const router = routerx();

router.post("/orders", getOrders);

router.get("/users/:id/orders", getUserOrders);

router.put("/orders/:id", getOrder);

router.delete("/orders/:id", changeOrder);

export default router;
