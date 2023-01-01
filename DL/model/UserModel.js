const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
