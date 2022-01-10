const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  precio: {
    type: String,
  },
  productId: {
    type: String,
  },
  cantidad: {
    type: String,
  },
});

module.exports = model("Cart", CartSchema);
