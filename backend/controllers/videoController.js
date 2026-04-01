const uploadToCloudinary = require('../utils/cloudinaryUpload');
const Video = require('../models/Video');
const fs = require('fs');

exports.uploadVideo = async (req, res) => {
  try {
    const result = await uploadToCloudinary(
      req.file.path,
      "videos",
      "video"
    );

    const newVideo = new Video({
      videoUrl: result.url,
      publicId: result.public_id,
      title: req.body.title
    });

    await newVideo.save();

    fs.unlinkSync(req.file.path);

    res.json({ message: "Video Uploaded ✅", data: newVideo });

 } catch (error) {
  console.error("ERROR:", error);  // 👈 ye add karo
  res.status(500).json({ error: error.message });
}
};