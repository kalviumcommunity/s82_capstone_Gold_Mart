const express = require('express');
const router = express.Router();

// Import both functions from productController
const { getProducts, addProduct } = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', addProduct);

module.exports = router;
