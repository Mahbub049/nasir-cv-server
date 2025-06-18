const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', async (req, res) => {
  const data = await Project.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;