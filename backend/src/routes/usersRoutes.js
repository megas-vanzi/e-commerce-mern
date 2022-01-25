import routerx from "express-promise-router";
import userController from "../controllers/usersController";
import authController from "../controllers/authController";

const router = routerx();

router.post("/", userController.register);

router.get("/", authController.adminAuth, userController.listUsers);

router.put("/:id", authController.userAuth, userController.editUser);

router.delete("/:id", authController.adminAuth, userController.deleteUser);

router.put(
  "/passwordEdit/:id",
  authController.userAuth,
  userController.editPassword
);

router.post("/passwordReset/:id", userController.resetUserPassword);

module.exports = router;
