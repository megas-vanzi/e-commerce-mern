import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  product: {
    type: Schema.ObjectId,
    ref: "products",
    required: true,
  },
  qualification: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 255,
  },
  user: {
    type: Schema.ObjectId,
    ref: "users",
    required: true,
  },
  state: {
    type: Number,
    default: 1,
  },
});

const Review = mongoose.model("reviews", reviewSchema);

export default Review;
