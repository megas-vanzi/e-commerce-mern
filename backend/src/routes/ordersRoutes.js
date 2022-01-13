import routerx from "express-promise-router";
import {
  addOrder,
  getOrders,
  getUserOrders,
  getOrder,
  changeOrder,
  deleteOrder,
} from "../controllers/ordersController";

const router = routerx();

router.post("/orders", addOrder);

router.get("/orders", getOrders);

router.get("/orders/user/:id", getUserOrders);

router.get("/orders/:id", getOrder);

router.put("/orders/:id", changeOrder);

router.delete("/orders/:id", deleteOrder);

export default router;
