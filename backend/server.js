const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');
const app = express();
const PORT = 5000;
const uploadRoute = require('./routes/uploadRoute');
app.use('/api', uploadRoute);
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/goldmart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));
connectDB();

// Middleware
app.use(express.json());

// Routes
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);
// Middleware to parse JSON bodies
app.use(express.json());

// Product routes
app.use('/api/products', productRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`GoldMart backend running on http://localhost:${PORT}`);
});
