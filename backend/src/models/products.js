import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  description: {
    type: String,
    maxlength: 255,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
  },
  stock: {
    type: Number,
    trim: true,
  },
  state: {
    type: Number,
    default: 1,
  },
  images: [
    {
      type: String,
      trim: true,
    },
  ],
  categories: [
    {
      type: Schema.ObjectId,
      ref: "categories",
    },
  ],
  reviews: [
    {
      type: Schema.ObjectId,
      ref: "reviews",
    },
  ],
});

const Product = mongoose.model("products", productSchema);

export default Product;
