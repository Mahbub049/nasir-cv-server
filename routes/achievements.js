const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

router.get('/', async (req, res) => {
  const data = await Achievement.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;
