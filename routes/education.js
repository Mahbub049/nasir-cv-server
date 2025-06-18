const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

router.get('/', async (req, res) => {
  const data = await Education.find().sort({ yearOfPassing: -1 });
  res.json(data);
});

module.exports = router;