const { Schema, model } = require("mongoose");

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

module.exports = model("order", orderSchema);
