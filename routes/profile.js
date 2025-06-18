const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne(); // should return one document
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch profile data." });
  }
});

module.exports = router;
