const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  date_of_birth: { type: Date, required: true }
});

module.exports = mongoose.model('Student', studentSchema);
