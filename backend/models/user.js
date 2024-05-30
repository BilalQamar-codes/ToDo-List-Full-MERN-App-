// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // This option creates createdAt and updatedAt fields automatically
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;