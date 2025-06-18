const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

router.get('/', async (req, res) => {
  const data = await Experience.find().sort({ from: -1 });
  res.json(data);
});

module.exports = router;