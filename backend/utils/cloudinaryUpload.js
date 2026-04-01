const cloudinary = require('../config/cloudinary');

const uploadToCloudinary = async (filePath, folder = "general", resourceType = "auto") => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
      resource_type: resourceType
    });

    return {
      url: result.secure_url,
      public_id: result.public_id
    };
  } catch (error) {
    throw new Error("Cloudinary Upload Failed ❌");
  }
};

module.exports = uploadToCloudinary;