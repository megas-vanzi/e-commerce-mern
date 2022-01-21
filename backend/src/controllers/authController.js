const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import models from "../models/models";
const { User } = models;
const passport = require("passport");

export default {
  authGithub: passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/register",
  }),
  authGoogle: passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/register",
  }),
  userAuth: (req, res, next) => {
    // if auth, ok
    if (req.isAuthenticated()) {
      return next();
    }
    // if not, redirect
    return res.redirect("/login");
  },
  login: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            req.session._id = user._id;
            req.session.name = user.username;
            const token = jwt.sign(
              { user: user },
              process.env.SECRETORPRIVATEKEY,
              {
                expiresIn: "3h",
              }
            );
            res.status(200).json({ token, id: user._id, name: user.username });
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
  logout: (req, res, next) => {
    try {
      req.session.destroy();
      res.status(200).send({
        message: "Logout exitoso",
      });
    } catch (e) {
      res.status(500).send({
        message: "Error de logout",
      });
      next(e);
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
