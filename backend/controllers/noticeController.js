const Notice = require('../models/Notice');
const { createNoticeHelper } = require('../utils/noticeHelper');

// ➕ Create Notice
exports.createNotice = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNotice = await createNoticeHelper(title, description);

    res.json({ message: "Notice Created ✅", data: newNotice });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📄 Get Notices
exports.getNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ❌ Delete Notice
exports.deleteNotice = async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: "Notice Deleted 🗑️" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};