const router = require("express").Router();
const users = require("./usersRoutes");

// require
// controllers

router.post("/");
router.get("/");
router.put("/:id");
router.delete("/:id");

router.use(users);

module.exports = router;
