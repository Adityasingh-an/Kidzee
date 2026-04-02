const express = require('express');
const router = express.Router();

const Notice = require('../models/Notice');


// ➕ CREATE NOTICE
router.post('/create', async (req, res) => {
  try {
    const { title, description } = req.body;

    const notice = new Notice({
      title,
      description
    });

    await notice.save();

    res.json({ message: "Notice Created ✅", data: notice });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 📄 GET ALL NOTICES
router.get('/', async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });

    res.json(notices);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ❌ DELETE NOTICE
router.delete('/:id', async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);

    res.json({ message: "Notice Deleted 🗑️" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;