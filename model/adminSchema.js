const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
  {
    adminName: {
      type: String,
    },

    phoneNumber: {
      type: Number,
    },

    birthday: {
      type: String,
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
      default: 'admin',
    },

    ban: {
      type: Boolean,
      default: false,
    },

    token: {
      type: String,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
