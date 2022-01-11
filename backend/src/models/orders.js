const { Schema, model } = require("mongoose");
const Cart = require("./cart");

const orderSchema = new Schema({
  user: {
    type: String,
  },
  order: [Cart],
});

module.exports = model("Order", orderSchema);
