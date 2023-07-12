const Product = require('../model/productSchema');

exports.createProduct = async (req, res) => {
  try {
    const { productName, price, quantity, image, category, description } =
      req.body;

    if (
      !(productName && price && quantity && image && category && description)
    ) {
      return res.status(400).send('All the fields are required');
    }

    const oldProduct = await Product.findOne({ productName });
    if (oldProduct) return res.status(400).send('Product allready exist');

    const product = new Product({
      productName,
      price,
      quantity,
      image,
      category,
      description,
    });

    const newProduct = await product.save();

    res.status(201).json({
      status: 'Created with seccuss',
      data: newProduct,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) return res.status(400).send('No products found');

    res.status(200).json({
      status: 'Seccuss',
      results: products.length,
      data: products,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) return res.status(400).send('Not found');

    const data = req.body;

    if (Object.keys(data).length === 0)
      return res.status(400).send('No data to update');

    const updateProduct = await Product.findOneAndUpdate(
      { _id: req.params.id },
      data,
      { new: true }
    );

    res.status(200).json({
      status: 'Updated with seccuss',
      data: updateProduct,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.find({ _id: req.params.id });
    if (!product) return res.status(400).send('Not found');

    await Product.findOneAndDelete({ _id: req.params.id });

    res.status(200).send('Deleted with seccuss');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
