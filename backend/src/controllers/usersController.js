const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPass = bcrypt.hashSync(password, 10);
  console.log(hashedPass);
  const user = new Users({
    username,
    email,
    password: bcrypt.hashSync(password, 10),
  });
  try {
    await user.save();
    res.json({ status: true, msg: "User created successfully" });
  } catch (error) {
    res.json({ status: false, msg: "Username or email already registered" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          req.session._id = user._id;
          req.session.name = user.username;
          const token = jwt.sign({ user: user }, "secret", { expiresIn: "1h" });
          res.json({ token, id: req.session._id, name: req.session.name });
        } else {
          res.json({ error: "Invalid data" });
        }
      });
    } else {
      res.json({ error: "Invalid data" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const logout = (req, res) => {
  try {
    //TODO
  } catch (error) {
    res.json("Error logout");
  }
};
module.exports = { register, login, logout };
