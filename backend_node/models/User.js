const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['Normal', 'Seller'], default: 'Normal' }
});

module.exports = mongoose.model('User', userSchema);

