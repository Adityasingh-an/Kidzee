const express = require('express');
const router = express.Router();

const upload = require('../middleware/uploadMiddleware');
const { uploadVideo } = require('../controllers/videoController');
const Video = require('../models/Video');

// 📤 Upload Video
router.post('/upload', upload.single('video'), uploadVideo);

// 📄 Get All Videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📄 Get Single Video
router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found ❌' });
    }

    res.json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ❌ Delete Video
router.delete('/:id', async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found ❌' });
    }

    res.json({ message: 'Video deleted successfully ✅' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;