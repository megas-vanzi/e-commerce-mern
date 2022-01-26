import routerx from "express-promise-router";
import usersController from "../controllers/usersController";
import { validateJWT } from "../middlewares/validateJWT";
import { validateAdmin } from "../middlewares/validateAdmin";
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

router.post("/", register);

router.get("/", validateJWT, validateAdmin, listUsers);

router.put("/", validateJWT, editSelf);

router.put("/:id", validateJWT, validateAdmin, editUser);

router.delete("/:id", validateJWT, validateAdmin, deleteUser);

router.put("/passwordEdit/:id", validateJWT, editPassword);

router.post("/passwordReset/:id", resetUserPassword);

module.exports = router;
