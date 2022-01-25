import routerx from "express-promise-router";
import authController from "../controllers/authController";
import { validateJWT } from "../middlewares/validateJWT";

const router = routerx();

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.get("/me", validateJWT, authController.loggedUser);

router.post(
  "/promote/:id",
  authController.adminAuth,
  authController.promoteUser
);

module.exports = router;
