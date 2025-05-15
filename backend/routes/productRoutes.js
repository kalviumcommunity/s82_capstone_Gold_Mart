const express = require('express');
const router = express.Router();
const { updateProduct } = require('../controllers/productController');
// Import both functions from productController
const { getProducts, addProduct } = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:id', updateProduct);

module.exports = router;
