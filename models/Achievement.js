const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: String,
  type: String,
  remarks: String
}, { timestamps: true });

module.exports = mongoose.model('Achievement', achievementSchema, 'cv_achievement');