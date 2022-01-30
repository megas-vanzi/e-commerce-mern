import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    maxlength: 255,
    trim: true,
  },
  state: {
    type: Number,
    default: 1,
  },
  products: [
    {
      type: Schema.ObjectId,
      ref: "products",
    },
  ],
});

const Category = mongoose.model("categories", categorySchema);

export default Category;
