const express = require('express');
const router = express.Router();
const Membership = require('../models/Membership');

router.get('/', async (req, res) => {
  const data = await Membership.find().sort({ organization: 1 });
  res.json(data);
});

module.exports = router;