import routerx from "express-promise-router";
import userController from "../controllers/user.controller";

const router = routerx();

router.post("/", userController.addUser);

router.get("/", userController.listUsers);

router.put("/:id", userController.editUser);

router.delete("/:id", userController.deleteUser);

router.post("/:idUser/cart", userController.addCart);

router.get("/:idUser/cart", userController.listCart);

router.put("/:idUser/cart", userController.editCart);

router.delete("/:idUser/cart", userController.deleteCart);

export default router;
