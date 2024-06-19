const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  expiry_date: { type: Date, required: true }
});

module.exports = mongoose.model('User', userSchema);
