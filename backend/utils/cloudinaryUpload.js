const cloudinary = require('../config/cloudinary');

// ✅ buffer upload (important)
const uploadToCloudinary = (fileBuffer, folder = "general", resourceType = "auto") => {
  return new Promise((resolve, reject) => {

    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType
      },
      (error, result) => {
        if (error) reject(error);
        else resolve({
          url: result.secure_url,
          public_id: result.public_id
        });
      }
    );

    stream.end(fileBuffer);
  });
};

module.exports = uploadToCloudinary;