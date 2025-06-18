const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: String,
  department: String,
  institution: String,
  address: String,
  from: Date,
  to: String,
  remarks: String
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema, 'cv_experience');
