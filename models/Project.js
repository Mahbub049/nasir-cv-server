const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  status: String,
  fundingSource: String,
  grantingBody: String,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema, 'cv_project');