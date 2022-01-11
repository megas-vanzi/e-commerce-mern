import routerx from "express-promise-router";
import userController from "../controllers/user.controller";

const router = routerx();

router.post("/", userController.add);

router.get("/", userController.list);

router.put("/:id", userController.editById);

router.delete("/:id", userController.deleteByName);

router.post("/:idUser/cart", userController.addCart);

router.get("/:idUser/cart", userController.listCart);

router.put("/:idUser/cart", userController.editCart);

router.delete("/:idUser/cart", userController.deleteCart);

export default router;
