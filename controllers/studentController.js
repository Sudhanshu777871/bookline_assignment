const Student = require('../models/Student');

exports.addStudent = async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.status(201).json({ message: "Student added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
