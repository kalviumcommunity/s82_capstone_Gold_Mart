const Product = require('../models/Product');

exports.getAll = async (req, res) => {
  const query = req.query.q;
  const products = query
    ? await Product.find({ name: new RegExp(query, 'i') })
    : await Product.find();
  res.send(products);
};

exports.create = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
};

exports.update = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
};

exports.delete = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send({ message: 'Product deleted' });
};

exports.rateProduct = async (req, res) => {
  const { stars, user } = req.body;
  const product = await Product.findById(req.params.id);
  product.ratings.push({ user, stars });
  await product.save();
  res.send(product);
};
