const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: [
    {
      type: Boolean,
    },
  ],
});

module.exports = model("Users", UserSchema);
