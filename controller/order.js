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
    const { user_id, product_id } = req.body;

    if (!(user_id && product_id))
      return res.status('Require: user_id and Product_id');

    const order = new Order({
      user_id,
      product_id,
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

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id });

    console.log(order);

    if (!order) return res.status(400).send('Order not found');

    await Order.findOneAndDelete({ _id: req.params.id });

    res.status(200).json({
      status: 'Deleted with seccuss',
      data: order,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteAllUserOrders = async (req, res) => {
  try {
    const userId = req.params.user_id;

    const user = await Order.find({ user_id: userId });
    console.log(user);
    if (user.length === 0) return res.status(400).send('Not found');

    await Order.deleteMany({ user_id: userId });

    res.status(200).json({
      status: 'Delete with seccuss',
      results: user.length,
      data: user,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};
