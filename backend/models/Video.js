const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoUrl: String,
  publicId: String,
  title: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Video', videoSchema);