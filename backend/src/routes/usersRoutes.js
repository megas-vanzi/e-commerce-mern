import routerx from "express-promise-router";
const { register, login, logout } = require("../controllers/usersController");

const router = routerx();

router.post("/register", register);

router.post("/login", login);

router.delete("/logout", logout);

module.exports = router;
