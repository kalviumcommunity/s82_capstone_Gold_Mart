const products = require('../data/products');

const getProducts = (req, res) => {
  res.json(products);
};

const addProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: 'Product name is required and must be a non-empty string' });
  }

  if (price === undefined || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ message: 'Price is required and must be a positive number' });
  }

  const cleanName = name.trim();

  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    name: cleanName,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

module.exports = { getProducts, addProduct };
