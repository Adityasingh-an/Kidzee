const express = require('express');
const router = express.Router();

const upload = require('../middleware/uploadMiddleware');
const { uploadImage } = require('../controllers/galleryController');
const Gallery = require('../models/Gallery');

// 📤 Upload Image
router.post('/upload', upload.single('image'), uploadImage);

// 📄 Get All Images
router.get('/', async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ❌ Delete Image
router.delete('/:id', async (req, res) => {
  try {
    const img = await Gallery.findByIdAndDelete(req.params.id);

    if (!img) {
      return res.status(404).json({ message: 'Image not found ❌' });
    }

    res.json({ message: 'Image deleted successfully ✅' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;