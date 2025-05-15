const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware (optional)
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Server running
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`GoldMart backend running on http://localhost:${PORT}`);
});
