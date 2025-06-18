const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  category: String, // Journal, Conference, Book
  authors: String,
  title: String,
  journalOrBookTitle: String,
  year: String,
  doi: String,
  conferenceLocation: String,
  chapterTitle: String,
  publisher: String,
  isbn: String
}, { timestamps: true });

module.exports = mongoose.model('Publication', publicationSchema, 'cv_publication');