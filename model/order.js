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

    numberOfOrders: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = new mongoose.model('Order', orderSchema);

module.exports = Order;
