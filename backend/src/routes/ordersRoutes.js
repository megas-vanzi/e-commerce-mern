import routerx from "express-promise-router";
import {
  getOrders,
  getUserOrders,
  getOrder,
  deleteOrder,
} from "../controllers/ordersController";

const router = routerx();

router.post("/orders", getOrders);

router.get("/users/:id/orders", getUserOrders);

router.put("/orders/:id", getOrder);

router.delete("/orders/:id", deleteOrder);

export default router;
