// In your routes file (e.g., productRoutes.js)
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');  // Your Product model
const express = require('express');
const routes = express.Routes();
const Product = require('../models/Product'); // Adjust path

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// PUT endpoint with validation
router.put('/products/:id', async (req, res) => {
  const { name, price, description } = req.body;

  // Validation checks
  if (!name || !price) {
    return res.status(400).send('Name and price are required');
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).send('Product not found');
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).send('Error updating product: ' + err.message);
  }
});

module.exports = router;
