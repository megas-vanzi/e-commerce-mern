const { response, request } = require("express");
const jwt = require("jsonwebtoken");
import models from "../models/models";
const { User } = models;

const validateJWT = async (req = request, res = response, next) => {
  const token = req.session.token;

  if (!token) {
    return res.status(401).json({
      msg: "Error: petición sin token",
    });
  }

  try {
    const { user } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    // buscar usuario que corresponde al id
    const usuario = await User.findById(user._id);

    if (!usuario) {
      return res.status(401).json({
        msg: "Error: usuario no encontrado en la BB.DD.",
      });
    }

    req.usuario = usuario;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).json({
      msg: "Error: El token no es válido",
    });
  }
};

module.exports = { validateJWT };
