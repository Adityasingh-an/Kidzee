const express = require('express');
const router = express.Router();

// Dashboard
router.get('/', (req, res) => {
  res.render('dashboard');
});

// Gallery Page
router.get('/gallery', (req, res) => {
  res.render('upload-gallery');
});

// Video Page
router.get('/video', (req, res) => {
  res.render('upload-video');
});

// Notice Page
router.get('/notice', (req, res) => {
  res.render('upload-notice');
});

module.exports = router;