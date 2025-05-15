const products = require('../data/products');

// Controller function for GET products
const getProducts = (req, res) => {
  res.json(products);
};

module.exports = { getProducts };
