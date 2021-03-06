const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import models from "../models/models";
const { User } = models;
import sendEmail from "../middlewares/sendEmail";

export default {
  register: async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPass = bcrypt.hashSync(password, 10);
    try {
      const reg = await User.create({
        username,
        email,
        password: hashedPass,
      });
      console.log(reg);
      res
        .status(200)
        .json({ status: true, msg: `User ${username} created successfully` });
    } catch (error) {
      res.json({
        status: false,
        username: error.keyValue.username,
        email: error.keyValue.email,
        msg: `Already registered`,
      });
    }
  },
  listUsers: async (req, res, next) => {
    try {
      const users = await User.find();
      console.log(users);
      res.status(200).json(users);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar listar usuarios",
      });
      next(e);
    }
  },
  editSelf: async (req, res, next) => {
    const { username, email } = req.body;
    try {
      const userEdit = await User.findByIdAndUpdate(
        { _id: req.session._id },
        {
          username,
          email,
        }
      );
      console.log(userEdit);
      res.status(200).json(userEdit);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar editar usuario",
      });
      next(e);
    }
  },
  editUser: async (req, res, next) => {
    const { username, email } = req.body;
    try {
      const userEdit = await User.findByIdAndUpdate(
        { _id: req.params.id },
        {
          username,
          email,
        }
      );
      console.log(userEdit);
      res.status(200).json(userEdit);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar editar usuario",
      });
      next(e);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const userDelete = await User.findByIdAndDelete({ _id: req.params.id });
      console.log(userDelete);
      res.status(200).json(userDelete);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar eliminar usuario",
      });
      next(e);
    }
  },
  editPassword: async (req, res, next) => {
    const { oldPassword, newPassword } = req.body;
    const { _id } = req.params;
    const hashedNewPass = bcrypt.hashSync(newPassword, 10);
    try {
      const user = await User.findOne({ _id });
      if (user) {
        bcrypt.compare(oldPassword, user.password, async (err, result) => {
          if (result) {
            const userEdit = await User.findByIdAndUpdate(
              { _id },
              {
                password: hashedNewPass,
              }
            );
            console.log(userEdit);
            res.status(200).send({
              message: "Contrase??a modificada correctamente",
            });
          } else {
            res.status(500).send({
              message:
                "Error al modificar contrase??a, ingrese su contrase??a actual",
            });
          }
        });
      }
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar editar contrase??a",
      });
      next(e);
    }
  },
  resetUserPassword: async (req, res, next) => {
    try {
      const { _id } = req.params;
      // Random String
      let newRandomPass = Math.random().toString(36).slice(2);
      // Random Case
      newRandomPass = Array.from(newRandomPass)
        .map((x) => (Math.random() > 0.5 ? x.toUpperCase() : x.toLowerCase()))
        .join("");
      console.log(newRandomPass);
      const hashedResetPass = bcrypt.hashSync(newRandomPass, 10);
      const userEdit = await User.findByIdAndUpdate(
        { _id },
        {
          password: hashedResetPass,
        }
      );
      console.log(userEdit);
      // SEND EMAIL with newRandomPass
      const subject = "Password Reset";
      const message = `
Se ha reseteado su contrase??a,
favor de ingresar con la siguiente: 
            ${newRandomPass}`;
      const userEmail = userResetPass.email;
      sendEmail(userEmail, message, subject);
      res.status(200).send({
        message: "Contrase??a reseteada correctamente",
      });
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar resetear contrase??a",
      });
      next(e);
    }
  },
};
