import models from "../models/models";
const { Cart } = models;

export default {
  addCart: async (req, res, next) => {
    try {
      const reg = await Cart.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar crear Carrito",
      });
      next(e);
    }
  },
  listCart: async (req, res, next) => {
    try {
    } catch (e) {}
  },
  editCart: async (req, res, next) => {
    try {
      const { user, items } = req.body;
      const userCartEdit = await Cart.user.findAndUpdate(
        { user },
        {
          items,
        }
      );
      res.status(200).json(userCartEdit);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar editar Carrito",
      });
      next(e);
    }
  },
  deleteCart: async (req, res, next) => {
    try {
    } catch (e) {}
  },
};
