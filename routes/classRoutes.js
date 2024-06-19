const express = require('express');
const { addOrUpdateClass, getStudentScores } = require('../controllers/classController');
const router = express.Router();

router.post('/', addOrUpdateClass);
router.get('/scores', getStudentScores);

module.exports = router;
