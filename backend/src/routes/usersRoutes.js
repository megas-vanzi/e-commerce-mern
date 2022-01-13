import routerx from "express-promise-router";
import userController from "../controllers/usersController";

const router = routerx();

router.post("/", userController.addUser);

router.post("/register", userController.register);

router.get("/", userController.listUsers);

router.put("/:id", userController.editUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
