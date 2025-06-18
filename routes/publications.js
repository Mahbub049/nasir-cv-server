const express = require('express');
const router = express.Router();
const Publication = require('../models/Publication');

router.get('/', async (req, res) => {
  const data = await Publication.find().sort({ year: -1 });
  res.json(data);
});

module.exports = router;