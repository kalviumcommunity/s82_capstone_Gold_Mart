// backend/controllers/productController.js
const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a new product
const addProduct = async (req, res) => {
  const { name, price } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: 'Product name is required and must be a non-empty string' });
  }

  if (price === undefined || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ message: 'Price is required and must be a positive number' });
  }

  try {
    const newProduct = new Product({ name: name.trim(), price });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update product by ID
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (name && typeof name === 'string' && name.trim() !== '') {
      product.name = name.trim();
    }

    if (price && typeof price === 'number' && price > 0) {
      product.price = price;
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getProducts, addProduct, updateProduct };
