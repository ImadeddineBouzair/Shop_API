const mongoose = require('mongoose');

const superAdminSchema = new mongoose.Schema(
  {
    superAdminName: {
      type: String,
    },

    phoneNumber: {
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
      default: 'superAdmin',
    },

    token: {
      type: String,
    },
  },
  { timestamps: true }
);

const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);
module.exports = SuperAdmin;
