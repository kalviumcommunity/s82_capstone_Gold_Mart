const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
