const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: String,
  skillName: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema, 'cv_skills');