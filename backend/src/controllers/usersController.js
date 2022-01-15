const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import models from "../models/models";
const { User } = models;

export default {
  register: async (req, res) => {
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
  },
  addUser: async (req, res, next) => {
    try {
      const reg = await User.create(req.body);
      console.log(reg);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar crear usuario",
      });
      next(e);
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
  editUser: async (req, res, next) => {
    const { _id, username, email } = req.body;
    try {
      const userEdit = await User.findByIdAndUpdate(
        { _id },
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
      const userDelete = await User.findByIdAndDelete({ _id: req.body._id });
      console.log(userDelete);
      res.status(200).json(userDelete);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar eliminar usuario",
      });
      next(e);
    }
  },
  resetUserPassword: async (req, res, next) => {
    try {
      // TO DO
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar eliminar usuario",
      });
      next(e);
    }
  },
};
