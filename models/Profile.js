const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  designation: String,
  university: String,
  image: String,
  phoneNumbers: [String],
  emails: [String],
  googleScholar: String,
  researchGate: String,
  interests: [String]
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema, 'profiles'); // 👈 important
