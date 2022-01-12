const { Schema, model } = require("mongoose");

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

const cartSchema = new Schema({
  items: [itemSchema],
});

module.exports = model("cart", cartSchema);
