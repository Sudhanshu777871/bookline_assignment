const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const { user_id, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);

    const user = new User({
      user_id,
      password: hashedPassword,
      expiry_date: expiryDate
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
