import models from "../models/models";

const { Review, Product } = models;

export default {
  add: async (req, res, next) => {
    try {
      const review = await Review.create(req.body);
      const addReviewToProduct = await Product.findOne(
        { _id: req.body.product },
        (err, result) => {
          console.log("product", result);
          try {
            result.reviews.push(review._id);
            result.save();
          } catch (e) {
            console.log(e);
            next(e);
          }
        }
      )
        .clone()
        .catch((err) => {
          console.log(err);
        });
      res.status(200).json(review);
    } catch (e) {
      res.status(500).send({
        message: "error al intentar agregar review",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const reviews = await Review.find()
        .populate("product", { name: 1 })
        .populate("user", { username: 1 });
      res.status(200).json(reviews);
    } catch (e) {
      res.status(500).send({
        message: "error al intentar listar reviews",
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    try {
      const review = await Review.findById({ _id: req.params._id });
      if (!review) {
        res.status(404).send({
          message: "Review no encontrado",
        });
      }
      res.status(200).json(review);
    } catch (e) {
      res.status(500).send({
        message: "error al intentar encontrar review",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    const { _id, qualification, description } = req.body;
    try {
      const review = await Review.findByIdAndUpdate(
        { _id },
        {
          qualification,
          description,
        }
      );
      res.status(200).json(review);
    } catch (e) {
      res.status(500).send({
        message: "error al intentar actualizar review",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const review = await Review.findByIdAndUpdate(
        { _id: req.body._id },
        {
          state: 1,
        }
      );
      res.status(200).json(review);
    } catch (e) {
      res.status(500).send({
        message: "error al intentar activar review",
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const review = await Review.findByIdAndUpdate(
        { _id: req.body._id },
        {
          state: 0,
        }
      );
      res.status(200).json(review);
    } catch (e) {
      res.status(500).send({
        message: "error al intentar desactivar review",
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      const review = await Review.findByIdAndDelete({ _id: req.body._id });
      res.status(200).json(review);
    } catch (e) {
      res.status(500).send({
        message: "error al intentar eliminar",
      });
      next(e);
    }
  },
};
