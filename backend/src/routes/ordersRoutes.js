import routerx from "express-promise-router";
import orderController from "../controllers/ordersController";

const router = routerx();

router.post("/", orderController.addOrder);

router.get("/", orderController.getOrders);

router.get("/user/:userId", orderController.getUserOrders);

router.get("/:id", orderController.getOrder);

router.put("/:id", orderController.changeOrder);

router.post("/promote/:id", orderController.promoteOrder);

router.delete("/:id", orderController.deleteOrder);

export default router;
