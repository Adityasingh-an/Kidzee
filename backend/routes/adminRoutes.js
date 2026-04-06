const express = require('express');
const router = express.Router();

// 🔐 Middleware
function isAuthenticated(req, res, next) {
  if (req.session && req.session.admin) {
    return next();
  }
  return res.redirect('/admin/login');
}

// 🔑 Login Page
router.get('/login', (req, res) => {
  res.render('login');
});

// 🔑 Login POST
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 👉 change kar sakta hai apne hisaab se
  if (username === "admin" && password === "1234") {
    req.session.admin = true;
    return res.redirect('/admin');
  } else {
    return res.send("Invalid credentials ❌");
  }
});

// 🚪 Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/admin/login');
  });
});

// 🧑‍💻 Dashboard
router.get('/', isAuthenticated, (req, res) => {
  res.render('dashboard');
});

// Gallery
router.get('/gallery', isAuthenticated, (req, res) => {
  res.render('upload-gallery');
});

// Video
router.get('/video', isAuthenticated, (req, res) => {
  res.render('upload-video');
});

// Notice
router.get('/notice', isAuthenticated, (req, res) => {
  res.render('upload-notice');
});

module.exports = router;