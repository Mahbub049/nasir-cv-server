// models/Membership.js
const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  name: String,          // ✅ Matches "name" in DB
  type: String,          // ✅ Matches "type" in DB
  memberId: String       // ✅ Matches "memberId" in DB
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema, 'cv_membership');
