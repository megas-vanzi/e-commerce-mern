import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
  precio: {
    type: Number,
    trim: true,
  },
  productId: {
    type: String,
  },
  cantidad: {
    type: Number,
    trim: true,
  },
});

const orderSchema = new Schema({
  user: {
    type: String,
  },
  order: [itemSchema],
  total: {
    type: Number,
  },
  envio: {
    type: Boolean,
  },
  domicilio: {
    type: String,
  },
  estado: {
    type: String,
    default: "creada",
  },
  creada: {
    type: Boolean,
    default: true,
  },
  pagada: {
    type: Boolean,
  },
  enviada: {
    type: Boolean,
  },
  recibida: {
    type: Boolean,
  },
});

const Order = mongoose.model("order", orderSchema);

export default Order;
