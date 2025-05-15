const products = require('../data/products');

// Get all products
const getProducts = (req, res) => {
  res.json(products);
};

// Add a new product
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

// Update product by ID (using array)
const updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price } = req.body;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  if (name && typeof name === 'string' && name.trim() !== '') {
    product.name = name.trim();
  }

  if (price && typeof price === 'number' && price > 0) {
    product.price = price;
  }

  res.json(product);
};

module.exports = { getProducts, addProduct, updateProduct };
