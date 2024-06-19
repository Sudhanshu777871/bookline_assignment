const Class = require('../models/Class');

exports.addOrUpdateClass = async (req, res) => {
  const { class_name } = req.body;
  try {
    let classDetails = await Class.findOne({ class_name });
    if (classDetails) {
      Object.assign(classDetails, req.body);
    } else {
      classDetails = new Class(req.body);
    }
    await classDetails.save();
    res.status(201).json({ message: "Class details added/updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentScores = async (req, res) => {
  const { subject, class_name } = req.query;
  try {
    const classDetails = await Class.findOne({ class_name });
    if (!classDetails) {
      return res.status(404).json({ error: "Class not found" });
    }

    const scores = classDetails.students.map(student => ({
      roll_number: student.roll_number,
      student_id: student.student_id,
      mark: student.marks.get(subject) || "N/A"
    }));

    res.status(200).json(scores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
