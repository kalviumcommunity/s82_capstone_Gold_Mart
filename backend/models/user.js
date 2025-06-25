const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Not needed if only using Google OAuth
  googleId: { type: String }, // For OAuth
  name: { type: String },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date }
});

module.exports = mongoose.model('User', userSchema);
