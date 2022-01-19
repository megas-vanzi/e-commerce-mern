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
            res
              .status(200)
              .json({ token, id: req.session._id, name: req.session.name });
          } else {
            res.status(500).send({
              message:
                "Error al intentar autenticar Usuario, verifique su contraseña",
            });
          }
        });
      } else {
        res.status(500).send({
          message: "Usuario no encontrado, verifique sus credenciales",
        });
      }
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar loguear Usuario",
      });
      next(e);
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
      const user = await User.findById(req.session._id);
      console.log(user);
      res.status(200).json(user);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar ver Usuario",
      });
      next(e);
    }
  },
  promoteUser: async (req, res, next) => {
    try {
      const promote = await Order.findByIdAndUpdate(
        { _id: req.params.id },
        {
          isAdmin: true,
        }
      );
      console.log(promote);
      res.status(200).json(promote);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar promocionar Usuario",
      });
      next(e);
    }
  },
};
