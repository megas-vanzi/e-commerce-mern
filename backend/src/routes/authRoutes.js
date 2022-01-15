import routerx from "express-promise-router";
import authController from "../controllers/authController";

const router = routerx();

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.get("/me", authController.loggedUser);

router.post("/promote/:id", authController.promoteUser);

module.exports = router;
