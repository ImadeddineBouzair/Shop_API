const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
    },

    category: {
      type: String,
      value: [
        'mother board',
        'Graphic Card',
        'cpu',
        'cpu fan',
        'ssd/hdd',
        'ram',
        'case',
        'mouse',
        'key board',
        'headset',
      ],
    },

    price: {
      type: Number,
    },

    quantity: {
      type: Number,
    },

    image: {
      type: String,
      default: '',
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;
