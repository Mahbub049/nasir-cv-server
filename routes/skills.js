const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

router.get('/', async (req, res) => {
  const data = await Skill.find();
  res.json(data);
});

module.exports = router;
