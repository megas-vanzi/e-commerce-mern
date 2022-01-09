const { Router } = require("express");
const router = Router();
const { register, login, logout } = require("../controllers/usersController");

router.post("/register", register);

router.post("/login", login);

router.delete("/logout", logout);

module.exports = router;
