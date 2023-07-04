const Order = require('../model/order');

exports.Orders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user_id product_id');

    res.status(200).json({
      status: 'seccuss',
      results: orders.length,
      data: orders,
    });
  } catch (err) {
    req.status(500).send(err.message);
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { user_id, product_id, numberOfOrders } = req.body;

    if (!(user_id, product_id, numberOfOrders))
      return res.status('Require: user_id and Product_id');

    const existingUserOrder = await Order.findOne(
      { user_id },
      { product_id }
    ).populate('user_id product_id');

    console.log(existingUserOrder.product_id);
    if (existingUserOrder)
      return res.status(400).send('The user has already ordered this product');

    const order = new Order({
      user_id,
      product_id,
      numberOfOrders,
    });

    const newOrder = await order.save();

    res.status(201).json({
      status: 'Created with seccuss',
      data: newOrder,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
