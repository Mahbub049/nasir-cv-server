const express = require('express');
const router = express.Router();
const AdminRole = require('../models/AdminRole');

router.get('/', async (req, res) => {
  const data = await AdminRole.find().sort({ from: -1 });
  res.json(data);
});

module.exports = router;