const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    birthYear: {
      type: Number,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
    },

    role: {
      type: String,
      enum: ['user', 'admin', 'superAdmin'],
      default: 'user',
    },

    token: {
      type: String,
    },
  },
  { typestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
