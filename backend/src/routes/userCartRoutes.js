import routerx from "express-promise-router";
import userController from "../controllers/userCartController";

const router = routerx();

router.post("/", userController.addUser);

router.get("/", userController.listUsers);

router.put("/:id", userController.editUser);

router.delete("/:id", userController.deleteUser);

router.post("/cart/:idUser", userController.addCart);

router.get("/cart/:idUser", userController.listCart);

router.put("/cart/:idUser", userController.editCart);

router.delete("/cart/:idUser", userController.deleteCart);

export default router;
