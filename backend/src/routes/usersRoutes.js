import routerx from "express-promise-router";
import userController from "../controllers/usersController";

const router = routerx();

router.post("/", userController.register);

router.get("/", userController.listUsers);

router.put("/:id", userController.editUser);

router.delete("/:id", userController.deleteUser);

router.put("/passwordEdit/:id", userController.editPassword);

router.post("/passwordReset/:id", userController.resetUserPassword);

module.exports = router;
