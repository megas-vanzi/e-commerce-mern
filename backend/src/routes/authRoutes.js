import routerx from "express-promise-router";
import authController from "../controllers/authController";
import { validateJWT } from "../middlewares/validateJWT";
import { validateAdmin } from "../middlewares/validateAdmin";
const router = routerx();
const { login, logout, loggedUser, promoteUser } = authController;

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", validateJWT, loggedUser);

router.put("/promote/:id", validateJWT, validateAdmin, promoteUser);

module.exports = router;
