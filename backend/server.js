const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/goldmart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));
// Middleware (optional)
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Server running
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`GoldMart backend running on http://localhost:${PORT}`);
});
