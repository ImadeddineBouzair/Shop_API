const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  },
  { timestamps: true }
);

const Order = new mongoose.model('Order', orderSchema);

module.exports = Order;
