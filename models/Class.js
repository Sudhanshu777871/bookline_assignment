const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  class_name: { type: String, required: true },
  year: { type: Number, required: true },
  class_teacher: { type: String, required: true },
  subject_list: { type: [String], required: true },
  students: [
    {
      roll_number: { type: String, required: true },
      student_id: { type: String, required: true },
      marks: { type: Map, of: Number }
    }
  ]
});

module.exports = mongoose.model('Class', classSchema);
