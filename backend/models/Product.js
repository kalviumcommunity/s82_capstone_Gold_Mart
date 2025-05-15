const express = require('express');
const router = express.Router();
const Product = require('./Product'); // Ensure this model exists

router.post('/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});

module.exports = router;
