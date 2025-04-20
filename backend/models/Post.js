const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: String,
  location: String,
  imageUrl: String,
});

module.exports = mongoose.model('Post', postSchema);
