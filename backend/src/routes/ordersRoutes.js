import routerx from "express-promise-router";
import orderController from "../controllers/ordersController";
import { validateJWT } from "../middlewares/validateJWT";
import { validateAdmin } from "../middlewares/validateAdmin";
const router = routerx();
const {
  addOrder,
  getOrders,
  getUserOrders,
  getOrder,
  changeOrder,
  promoteOrder,
  deleteOrder,
} = orderController;

router.post("/", validateJWT, addOrder);

router.get("/", validateJWT, validateAdmin, getOrders);

router.get("/user/:userId", validateJWT, validateAdmin, getUserOrders);

router.get("/:id", validateJWT, validateAdmin, getOrder);

router.put("/:id", validateJWT, validateAdmin, changeOrder);

router.post("/promote/:id", validateJWT, validateAdmin, promoteOrder);

router.delete("/:id", validateJWT, validateAdmin, deleteOrder);

export default router;
