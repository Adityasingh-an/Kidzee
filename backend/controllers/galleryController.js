const uploadToCloudinary = require('../utils/cloudinaryUpload');
const Gallery = require('../models/Gallery');

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded ❌" });
    }

    const result = await uploadToCloudinary(
      req.file.buffer,
      "gallery",
      "image"
    );

    const newImage = new Gallery({
      imageUrl: result.url,
      publicId: result.public_id,
      title: req.body.title
    });

    await newImage.save();

    res.json({
      message: "Image uploaded ✅",
      data: newImage
    });

  } catch (error) {
    console.error("IMAGE ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};