import models from "../models/models";
const { Order } = models;

export default {
  addOrder: async (req, res, next) => {
    try {
      const createOrder = await Order.create(req.body);
      console.log(createOrder);
      res.status(200).json(createOrder);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar agregar Orden",
      });
      next(e);
    }
  },
  getOrders: async (req, res, next) => {
    try {
      const findOrders = await Order.find();
      console.log(findOrders);
      res.status(200).json(findOrders);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar buscar órdenes",
      });
      next(e);
    }
  },
  getUserOrders: async (req, res, next) => {
    try {
      const findUserOrders = await Order.find({ user: req.params.userId });
      console.log(findUserOrders);
      res.status(200).json(findUserOrders);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar buscar órdenes de usuario",
      });
      next(e);
    }
  },
  getOrder: async (req, res, next) => {
    try {
      const findOrderById = await Order.findById(req.params.id);
      console.log(findOrderById);
      res.status(200).json(findOrderById);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar buscar Orden",
      });
      next(e);
    }
  },
  changeOrder: async (req, res, next) => {
    const { order } = req.body;
    try {
      const orderEdit = await Order.findByIdAndUpdate(
        { _id: req.params.id },
        {
          order,
        }
      );
      console.log(orderEdit);
      res.status(200).json(orderEdit);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar editar Orden",
      });
      next(e);
    }
  },
  deleteOrder: async (req, res, next) => {
    try {
      const orderDelete = await Order.findByIdAndDelete({ _id: req.body._id });
      console.log(orderDelete);
      res.status(200).json(orderDelete);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar eliminar Orden",
      });
      next(e);
    }
  },
};
