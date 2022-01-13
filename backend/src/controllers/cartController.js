import models from "../models/models";
const { Cart } = models;

export default {
  addCart: async (req, res, next) => {
    try {
      const createCart = await Cart.create(req.body);
      console.log(createCart);
      res.status(200).json(createCart);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar crear Carrito",
      });
      next(e);
    }
  },
  listCart: async (req, res, next) => {
    try {
      const userCart = await Cart.find({
        user: req.params.userId,
      });
      console.log(userCart);
      res.status(200).json(userCart);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar listar Carrito",
      });
      next(e);
    }
  },
  editCart: async (req, res, next) => {
    try {
      const { items } = req.body;
      const userCartEdit = await Cart.findAndUpdate(
        { user: req.params.userId },
        {
          items,
        }
      );
      console.log(userCartEdit);
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
      const userCartDelete = await Cart.findAndDelete({
        user: req.params.userId,
      });
      console.log(userCartDelete);
      res.status(200).json(userCartDelete);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar eliminar Carrito",
      });
      next(e);
    }
  },
};
