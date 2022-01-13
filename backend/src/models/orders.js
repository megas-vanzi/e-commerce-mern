import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  user: {
    type: String,
  },
  order: [
    {
      type: Schema.ObjectId,
      ref: "cart",
    },
  ],
});

const Order = mongoose.model("order", orderSchema);

export default Order;
