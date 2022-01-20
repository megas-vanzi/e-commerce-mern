import routerx from "express-promise-router";
import orderController from "../controllers/ordersController";
import authController from "../controllers/authController";

const router = routerx();

router.post("/", authController.userAuth, orderController.addOrder);

router.get("/", authController.userAuth, orderController.getOrders);

router.get(
  "/user/:userId",
  authController.userAuth,
  orderController.getUserOrders
);

router.get("/:id", authController.userAuth, orderController.getOrder);

router.put("/:id", authController.userAuth, orderController.changeOrder);

router.post(
  "/promote/:id",
  authController.userAuth,
  orderController.promoteOrder
);

router.delete("/:id", authController.userAuth, orderController.deleteOrder);

export default router;
