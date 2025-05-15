const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI || 'your-mongodb-uri';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));
