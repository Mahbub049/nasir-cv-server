const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/', async (req, res) => {
  const data = await Course.find().sort({ name: 1 });
  res.json(data);
});

module.exports = router;
