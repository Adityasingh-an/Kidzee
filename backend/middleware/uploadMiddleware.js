const multer = require('multer');

// ✅ memory storage (Render compatible)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB limit (video ke liye)
  }
});

module.exports = upload;