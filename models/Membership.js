const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  organization: String,
  type: String,
  membershipId: String
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema, 'cv_membership');
