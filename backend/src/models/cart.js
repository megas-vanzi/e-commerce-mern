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

const cartSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  items: [itemSchema],
});

const Cart = mongoose.model("cart", cartSchema);

export default Cart;
