const uploadToCloudinary = require('../utils/cloudinaryUpload');
const Gallery = require('../models/Gallery');
const fs = require('fs');

exports.uploadImage = async (req, res) => {
  try {
    const result = await uploadToCloudinary(req.file.path, "gallery");

    const newImage = new Gallery({
      imageUrl: result.url,
      publicId: result.public_id,
      title: req.body.title
    });

    await newImage.save();

    fs.unlinkSync(req.file.path);

    res.json({ message: "Image Uploaded ✅", data: newImage });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};