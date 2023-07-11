const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    phoneNumber: {
      type: Number,
    },

    birthYear: {
      type: Number,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
    },

    role: {
      type: String,
      default: 'user',
    },

    ban: {
      type: String,
      default: 'false',
    },

    token: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
