const uploadToCloudinary = require('../utils/cloudinaryUpload');
const Video = require('../models/Video');

exports.uploadVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No video uploaded ❌" });
    }

    const result = await uploadToCloudinary(
      req.file.buffer,
      "videos",
      "video"
    );

    const newVideo = new Video({
      videoUrl: result.url,
      publicId: result.public_id,
      title: req.body.title
    });

    await newVideo.save();

    res.json({
      message: "Video uploaded ✅",
      data: newVideo
    });

  } catch (error) {
    console.error("VIDEO ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};