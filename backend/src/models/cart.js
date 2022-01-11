const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
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

const cartSchema = new Schema({
  items: [itemSchema],
});

module.exports = model("Cart", cartSchema);

const childSchema = new Schema({ name: "string" });

const parentSchema = new Schema({
  // Array of subdocuments
  children: [childSchema],
  // Single nested subdocuments. Caveat: single nested subdocs only work
  // in mongoose >= 4.2.0
  child: childSchema,
});
