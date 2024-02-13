const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Other profile fields
});

module.exports = mongoose.model('Profile', profileSchema);

