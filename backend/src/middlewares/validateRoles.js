const { response } = require("express");

const isAdmin = (req, res = response, next) => {
  if (!req.usuario) {
    return res.status(500).json({
      msg: "Debe validar usuario con token",
    });
  }

  const { isAdmin, username } = req.usuario;

  if (isAdmin === false) {
    return res.status(401).json({
      msg: `${username} no es Admin - No puede hacer esto`,
    });
  }

  next();
};

module.exports = { isAdmin };
