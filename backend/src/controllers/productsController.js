import cloudinary from "cloudinary";
import dotenv from "dotenv";
import models from "../models/models";
const { Product, Category } = models;

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default {
  add: async (req, res, next) => {
    try {
      console.log(req.body);
      req.body.name = req.body.name.toLowerCase();
      const reg = await Product.create(req.body);
      const addedProduct = await Category.findOne(
        { _id: req.body.categories[0] },
        (err, result) => {
          console.log("prdct", result);
          try {
            result.products.push(reg._id);
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
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar crear producto",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const products = await Product.find({ stock: { $gt: 0 } })
        .populate("categories", { name: 1 })
        .populate("reviews");
      res.status(200).json(products);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar listar productos",
      });
      next(e);
    }
  },
  queryById: async (req, res, next) => {
    try {
      const product = await Product.findById({ _id: req.params.id })
        .populate("categories", { name: 1 })
        .populate("reviews");
      if (!product) {
        res.status(404).send({
          message: "Producto no encontrado",
        });
      }
      res.status(200).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar buscar producto",
      });
      next(e);
    }
  },
  queryByName: async (req, res, next) => {
    try {
      let query = req.params.name;
      query = query.toLowerCase();
      const product = await Product.find({ name: query })
        .populate("categories", { name: 1 })
        .populate("reviews");
      if (!product) {
        res.status(404).send({
          message: "Producto no encontrado",
        });
      }
      res.status(200).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar buscar producto",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    req.body.name = req.body.name.toLowerCase();
    const { _id, name, description, price, stock } = req.body;
    try {
      const product = await Product.findByIdAndUpdate(
        { _id },
        {
          name,
          description,
          price,
          stock,
        }
      );
      if (!product) {
        res.status(404).send({
          message: "Producto no actualizado",
        });
      }
      res.send(product).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar buscar producto",
      });
      next(e);
    }
  },
  addCategory: async (req, res, next) => {
    try {
      const addCategory = await Product.findOne(
        { _id: req.body._id },
        (err, result) => {
          try {
            result.categories.push(req.body.id_category);
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
      const addedProduct = await Category.findOne(
        { _id: req.body.id_category },
        (err, result) => {
          try {
            result.products.push(req.body._id);
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

      res.status(200).json(addedProduct);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar agregar categoria",
      });
      next(e);
    }
  },
  removeCategory: async (req, res, next) => {
    try {
      const removedCategory = await Product.findOne(
        { _id: req.body._id },
        (err, result) => {
          try {
            result.categories.pull(req.body.id_category);
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
      const removedProduct = await Category.findOne(
        { _id: req.body.id_category },
        (err, result) => {
          try {
            result.products.pull(req.body._id);
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

      res.status(200).json(removedCategory);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar quitar categoria",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const product = await Product.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 1 }
      );
      res.status(200).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar activar",
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const product = await Product.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 0 }
      );
      res.status(200).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar activar",
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      console.log(req.body);
      const product = await Product.findOneAndDelete({ _id: req.params.id });
      res.status(200).json(product);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error al intentar activar",
      });
      next(e);
    }
  },
  upload: async (req, res, next) => {
    try {
      console.log(req.files.image);
      const data = {
        image: req.file.image,
      };
      await cloudinary.uploader
        .upload(data.image)
        .then((result) => {
          res.status(200).send({
            message: "success",
            result,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "failure",
            error,
          });
        });
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar subir imagen",
      });
      next(e);
    }
  },
};
