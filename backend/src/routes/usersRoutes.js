import routerx from "express-promise-router";
import usersController from "../controllers/usersController";
import { validateJWT } from "../middlewares/validateJWT";
import { validateAdmin } from "../middlewares/validateAdmin";
import { validateForm } from "../middlewares/validateForm";
const { check } = require("express-validator");
const router = routerx();
const {
  register,
  listUsers,
  editSelf,
  editUser,
  deleteUser,
  editPassword,
  resetUserPassword,
} = usersController;

router.post(
  "/",
  [
    check("username", "Username required").not().isEmpty(),
    check("email", "Email required").isEmail(),
    check("password", "Password must have at least 6 characters").isLength({
      min: 6,
    }),
    validateForm,
  ],
  register
);

router.get("/", validateJWT, validateAdmin, listUsers);

router.put(
  "/",
  validateJWT,
  [
    check("username", "Username required").not().isEmpty(),
    check("email", "Email required").isEmail(),
    validateForm,
  ],
  editSelf
);

router.put(
  "/query/:id",
  validateJWT,
  validateAdmin,
  [
    check("username", "Username required").not().isEmpty(),
    check("email", "Email required").isEmail(),
    validateForm,
  ],
  editUser
);

router.delete("/:id", validateJWT, validateAdmin, deleteUser);

router.put(
  "/passwordEdit/:id",
  validateJWT,
  [
    check("newPassword", "Password must have at least 6 characters").isLength({
      min: 6,
    }),
    validateForm,
  ],
  editPassword
);

router.post("/passwordReset/:id", resetUserPassword);

module.exports = router;
