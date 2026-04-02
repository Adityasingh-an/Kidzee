const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  imageUrl: String,
  publicId: String,
  title: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Gallery', gallerySchema);