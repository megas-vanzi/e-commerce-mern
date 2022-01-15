const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import models from "../models/models";
const { User } = models;

export default {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            req.session._id = user._id;
            req.session.name = user.username;
            const token = jwt.sign({ user: user }, "secret", {
              expiresIn: "1h",
            });
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
  },
  logout: (req, res) => {
    try {
      // TO DO
    } catch (error) {
      res.json("Error logout");
    }
  },
  loggedUser: async (req, res, next) => {
    try {
      // TO DO
    } catch (e) {
      res.status(500).send({
        message: "Error",
      });
      next(e);
    }
  },
  promoteUser: async (req, res, next) => {
    try {
      // TO DO
    } catch (e) {
      res.status(500).send({
        message: "Error",
      });
      next(e);
    }
  },
};
