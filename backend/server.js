const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/ItemRoutes');
const userRoutes = require('./routes/userRoutes'); // If needed
const productRoutes = require('./routes/productRoutes'); // If needed

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
